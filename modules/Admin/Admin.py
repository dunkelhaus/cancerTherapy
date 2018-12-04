#!/usr/bin/env python
import os
import sys
#import django
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
#os.environ.setdefault("DJANGO_SETTINGS_MODULE", "RESTAPI.mutationDnnWeb.mutationDnnWeb.settings")
#os.environ['DJANGO_SETTINGS_MODULE'] = 'RESTAPI.mutationDnnWeb.mutationDnnWeb.settings'
from multiprocessing import Process, Queue
#sys.path.insert(0, "/home/skjena/cancerTherapy/modules/RESTAPI")
from RESTAPI.RAPIManager import RAPIManager
#sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
from CrossValidation.CVManager import CVManager
from DataDispatcher.DDManager import DDManager
from IndexedDB.IDBManager import IDBManager
from RawDB.RDBManager import RDBManager
from NeuralNet.management.NNManager import NNManager
from StatManip.SMManager import SMManager
from VectorSpace.mds.mds import MDS
import time
from Status.Status import Status

class Admin:
    def __init__(self):
        self.status = Status("Admin")
        self.numFolds = 10
        self.restApi = RAPIManager()
        while self.restApi.djangostatus == False:
            self.restApi.isRunning()
        if self.restApi.networkstate == False:
            self.restApi.populate()

        self.rawDb = RDBManager("fm_mutations_independent")
        self.statmanip = SMManager()
        self.mds = MDS(self.rawDb.dataframe,self.restApi.network.state.noise)
        self.statmanip.writeToFile(self.statmanip.adjoin(self.mds.scale(2),
            self.statmanip.skewLabels(self.rawDb.dataframe, "0")),
                self.rawDb.scaledpath)
        self.indexedDb = IDBManager(self.rawDb.scaledpath, self.numFolds)
        #self.foldList is a list of 10 nodes where each node holds a path to a fold.csv file.
        self.foldList = self.indexedDb.createFolds()

        #These queues will be used by multiple processes to produce/use different train and test paths
        self.trainPaths = Queue()
        self.testPaths = Queue()
        self.crossValidate = CVManager()
        #Create process to run CrossValidation on all folds in self.foldList
        self.crossValidate = Process(target=self.crossValidate.CrossValidate, args=(self.foldList,self.numFolds,self.testPaths,self.trainPaths))
        self.crossValidate.start()

        self.DD = DDManager()
        #self.dataDispatcherQ will hold data which DDManager deemed ready to be passed to NN (train path first then test path)
        self.dataDispatcherQ = Queue()
        for j in range(0, self.numFolds):
            self.dispatchData = Process(target=self.DD.DispatchData, args=(self.trainPaths,self.testPaths,self.dataDispatcherQ))
            self.dispatchData.start()

        #self.neuralNets Queue will hold all NNManager instances
        self.neuralNets = Queue()
        for i in range(0, self.numFolds):
            while (self.dataDispatcherQ.empty()==True):
                #if DD does not have data ready to send to NN, wait until it does.
                time.sleep(1)
            train = self.dataDispatcherQ.get()
            test = self.dataDispatcherQ.get()
            self.NNProcess = NNManager(train,test,self.restApi.network,self.restApi.network.arguments.problemType)
            self.neuralNets.put(self.NNProcess)

        for j in range(0, self.numFolds):
            NeuralNetInstance = self.neuralNets.get()
            self.NNProcess = Process(target=NeuralNetInstance.modelZero)
            self.NNProcess.start()


    def initialize(self):
        self.status.message(1,"initialize()")

        self.status.message(0,"initialize()")
        return

    def build(self):
        self.status.message(1, "build(self)")


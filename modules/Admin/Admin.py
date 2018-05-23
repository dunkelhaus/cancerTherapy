import os
import sys
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
from multiprocessing import Process, Queue
from RESTAPI.RAPIManager import RAPIManager
from CrossValidation.CVManager import CVManager
from DataDispatcher.DDManager import DDManager
from IndexedDB.IDBManager import IDBManager
from RawDB.RDBManager import RDBManager
from NeuralNet.management.NNManager import NNManager
import time

class Admin:
    def __init__(self):
        self.status = Status("Admin")
        self.numFolds = 10
        self.rawDb = RDBManager()
        self.restApi = RAPIManager()
        self.DD = DDManager()
        while self.restApi.djangostatus == False:
            self.restApi.isRunning()
        if self.restApi.networkState == False:
            self.restApi.populate()
        self.origin = self.rawDb.GETDATASETFILE(self.restApi.network.settings.dataset)
        self.indexedDb = IDBManager(self.origin, self.numFolds)
        self.foldset = self.indexedDb.createFolds()
        self.crossValidate = CVManager(self.foldset)
        self.crossValidate.CrossValidate(self.foldset, self.numFolds, self.trainPaths, self.testPaths)
        self.trainPaths = Queue()
        self.testPaths = Queue()
        self.dataDispatchers = Queue()
        self.neuralNets = Queue()

        for j in range(0, self.numFolds):
            self.dataDispatchers.put(Process(target=DDManager))

        for i in range(0, self.numFolds)
            self.neuralNets.put(NNManager(self.dataDispatcher.trainPaths.get(), self.dataDispatcher.testPaths.get(), self.restApi.network))


    def initialize(self):
        self.status.message(1,"initialize()")
        self.Q = Queue()

        #Initialize CVManager Obj
        self.CV = CVManager("/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_mutations_independent.csv", self.numFolds)
        #Call CVManager's CrossValidate function which returns a list of fold-paths
        self.foldList = self.CV.CrossValidate("/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_mutations_independent.csv",self.numFolds)

        #Start crossValidation process separately
        self.crossValidate = Process(target=self.CV.validation, args=(self.foldList,self.DDQTesting,self.DDQTraining))
        self.crossValidate.start()

        #Pop from testing and training queues until empty and pass paths to NN
        for i in range(1,self.numFolds+1):
            self.dispatchData = Process(target=self.DD.DispatchData, args=(self.Q))
            self.dispatchData.start()
            self.testingFold = self.Q.get()
            self.traingFold = self.Q.get()
            self.NN = NNManager(self.trainingFold, )

        self.status.message(0,"initialize()")
        return

    def build(self):
        self.status.message(1, "build(self)")


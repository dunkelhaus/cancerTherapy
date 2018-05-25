import os
import sys
#sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
sys.path.insert(0, "/home/valeria/ECS193/cnnCancerTherapy/modules")
from multiprocessing import Process, Queue
#from RESTAPI.RAPIManager import RAPIManager
from CrossValidation.CVManager import CVManager
from DataDispatcher.DDManager import DDManager
from IndexedDB.IDBManager import IDBManager
from RawDB.RDBManager import RDBManager
#from NeuralNet.management.NNManager import NNManager
import time

class Admin:
    def __init__(self):
        #self.status = Status("Admin")
        self.numFolds = 10

        #self.rawDb = RDBManager()
        #self.restApi = RAPIManager()
        #while self.restApi.djangostatus == False:
            #self.restApi.isRunning()
        #if self.restApi.networkState == False:
            #self.restApi.populate()
        #self.origin = self.rawDb.GETDATASETFILE(self.restApi.network.settings.dataset)
        #self.indexedDb = IDBManager(self.origin, self.numFolds)

        self.indexedDb = IDBManager('/home/valeria/ECS193/data/test.csv', self.numFolds)
        #self.foldList is a list of 10 nodes where each node holds a path to a fold.csv file.
        self.foldList = self.indexedDb.createFolds()
        print "Folds have been created by IDM."

        """VB: Begin CVManager portion"""
        #These queues will be used by multiple processes to produce/use different train and test paths
        self.trainPaths = Queue()
        self.testPaths = Queue()
        self.crossValidate = CVManager()
        #Create process to run CrossValidation on all folds in self.foldList
        self.crossValidate = Process(target=self.crossValidate.CrossValidate, args=(self.foldList,self.numFolds,self.testPaths,self.trainPaths))
        print "Starting Cross Validation process..."
        self.crossValidate.start()

        """VB: Begin DDManager portion"""
        self.DD = DDManager()
        #self.dataDispatcherQ will hold data which DDManager deemed ready to be passed to NN (train path first then test path)
        self.dataDispatcherQ = Queue()
        for j in range(0, self.numFolds):
            self.dispatchData = Process(target=self.DD.DispatchData, args=(self.trainPaths,self.testPaths,self.dataDispatcherQ))
            print "Starting Data Dispatch process ", j+1
            self.dispatchData.start()

        """VB: Begin NNManager portion"""
"""        #self.neuralNets Queue will hold all NNManager instances
        self.neuralNets = Queue()
        for i in range(0, self.numFolds):
            self.NNProcess NNManager(self.dataDispatcherQ.get(),self.dataDispatcherQ.get(),self.restApi.network)
            self.neuralNets.put(self.NNProcess)
"""
"""
            VB: At this point we have cross validated all folds, DataDispatcher has done its job, and we have created 10
            instances of NNManager each with appropriate train/test paths. These instances are stored in self.nerualNets
            which is a Queue. We are now ready for each NNManager instance to call modelZero(). To retrieve an instance
            of NNManager from the queue do:

                " self.NameOfInstance = self.nerualNets.get() ".

            modelZero() can then be called for that specific instance of NNManager by doing:

                " self.NameOfInstance.modelZero() "
"""

    #def initialize(self):
        #self.status.message(1,"initialize()")

        #self.status.message(0,"initialize()")
        #return

    #def build(self):
        #self.status.message(1, "build(self)")

Admin()

"""
    def __init__(self):
        self.status = Status("Admin")
        self.numFolds = 10
        self.rawDb = RDBManager()
        self.restApi = RAPIManager()
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
"""

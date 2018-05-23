import os
import sys
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
from multiprocessing import Process, Queue
from CrossValidation.CVManager import CrossValidate, validation
from NeuralNet.NNManager import modelZero
import time

class Admin:
    def __init__(self)
        self.status = Status("Admin"):
        self.numFolds = 10


    def initialize():
        self.status.message(1,"initialize()")

        #Initialize CVManager Obj
        self.CV = CVManager("/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_mutations_independent.csv", self.numFolds)
        #Call CVManager's CrossValidate function which returns a list of fold-paths
        self.foldList = self.CV.CrossValidate("/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_mutations_independent.csv",self.numFolds)
        
        #Initialize multiprocessing Queues which will hold testing and training folds to pass to NN
        self.DDQTesting = Queue()
        self.DDQTraining = Queue()
        
        #Start crossValidation process separately
        self.crossValidate = Process(target=self.CV.validation, args=(self.foldList,self.DDQTesting,self.DDQTraining))
        self.crossValidate.start()
        
        #Pop from testing and training queues until empty and pass paths to NN
        for i in range(1,self.numFolds+1):
            while(self.DDQTesting.empty() == True and self.DDQTraining.empty() == True) or self.DDQTestsing.empty() == True or self.DDQTraining.empty() == True:
                time.sleep(1)

            self.testFold = self.DDQTesting.get()
            self.trainFold = self.DDQTraining.get()

        self.NN = NNManager(self.trainFold,self.testFold,network) #TODO: Unsure what network is here
        self.NN.modelZero()


        self.status.message(0,"initialize()")
        return

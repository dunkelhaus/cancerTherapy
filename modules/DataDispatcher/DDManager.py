"""
DDManager.py

 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

"""
from Queue import *
import time
from multiprocessing import Queue

class DDManager():
    def __init__(self):
        self.status = Status("DDManager")

    def DispatchData(self,trainPaths,testPaths,dataDispatcherQ):
        self.status.message(1,"DispatchData(self,trainPaths,testPaths,dataDispatcherQ)")
        while((self.trainPaths.empty()==True and self.testPaths.empty()==True) or self.trainPaths.empty()==True or self.testPaths.empty()==true):
            #entering this loops means that CVManager has not yet added next set of train/test folds to Queues.
            time.sleep(1)

        #reaching this point means that CVManager has both a test and train fold ready for DD in the Queues
        self.trainFold = self.trainPaths.get()
        self.testFold = self.testPaths.get()
        #put the newly generated test and train folds in Admin's data Queue in the order which NNManager wants them
        self.dataDispatcherQ.put(self.trainFold)
        self.dataDispatcherQ.put(self.testFold)

        self.status.message(0,"DispatchData(self,trainPaths,testPaths,dataDispatcherQ)")

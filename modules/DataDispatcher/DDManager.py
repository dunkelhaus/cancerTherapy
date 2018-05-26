#DDManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

"""
import os
from Queue import *
import time
from multiprocessing import Queue
from Status.Status import Status

class DDManager():
    def __init__(self):
        self.status = Status("DDManager")

    def DispatchData(self,trainPaths,testPaths,dataDispatcherQ):
        self.status.message(1,"DispatchData(self,trainPaths,testPaths,dataDispatcherQ)")
        while((trainPaths.empty()==True and testPaths.empty()==True) or trainPaths.empty()==True or testPaths.empty()==True):
            #entering this loops means that CVManager has not yet added next set of train/test folds to Queues.
            time.sleep(1)

        #reaching this point means that CVManager has both a test and train fold ready for DD in the Queues
        self.trainFold = trainPaths.get()
        self.testFold = testPaths.get()
        #put the newly generated test and train folds in Admin's data Queue in the order which NNManager wants them
        dataDispatcherQ.put(self.trainFold)
        dataDispatcherQ.put(self.testFold)
        self.status.message(0,"DispatchData(self,trainPaths,testPaths,dataDispatcherQ)")

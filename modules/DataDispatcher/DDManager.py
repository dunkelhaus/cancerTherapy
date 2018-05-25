#DDManager.py
"""
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
        print "DDManager instance successfully created!"
        #self.status = Status("DDManager")

    def DispatchData(self,trainPaths,testPaths,dataDispatcherQ):
        print "Entered DDManager.DispatchData()"
        #self.status.message(1,"DispatchData(self,trainPaths,testPaths,dataDispatcherQ)")
        while((trainPaths.empty()==True and testPaths.empty()==True) or trainPaths.empty()==True or testPaths.empty()==True):
            #entering this loops means that CVManager has not yet added next set of train/test folds to Queues.
            print "Waiting for CVManager to put out train and test files..."
            time.sleep(1)

        #reaching this point means that CVManager has both a test and train fold ready for DD in the Queues
        self.trainFold = trainPaths.get()
        self.testFold = testPaths.get()
        #put the newly generated test and train folds in Admin's data Queue in the order which NNManager wants them
        dataDispatcherQ.put(self.trainFold)
        dataDispatcherQ.put(self.testFold)
        print "Exiting DDManager.DispatchData()"
        #self.status.message(0,"DispatchData(self,trainPaths,testPaths,dataDispatcherQ)")

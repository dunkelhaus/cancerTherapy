#DDManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

    ** DispatchData() will:
        - be called from CVManager asynchronously
        - take 2 queues as arguments: one for testing and one for training
        - pass folds to network while new folds are being generated
          (no time wasted waiting for all folds to be generated before sending the first one)
        - Send training fold to modelZero, waits for completion, then sends testing fold
          to modelZero and waits for completion before continuing until both queues are empty
"""
from Queue import *
import time


class DDManager():
    def DispatchData(self,TestingQueue, TrainingQueue):
        self.status.message(1,"DispatchData(self,TestingQueue,TrainingQueue)")
        while self.TestingQueue.empty() == True and self.TrainingQueue.empty() == True:
            #wait for data to be added to either queue
            time.sleep(1)
        while self.TestingQueue.empty() == False or self.TrainingQueue.empty() == False:
            #once data is in queue, send paths back to admin
            if self.TrainingQueue.empty() == False and self.TestingQueue.empty() == False:
                TrainFold = TrainingQueue.get() #pop from Training queue until it is empty
                TestFold = TestingQueue.get() #pop from Testing queue until it is empty
        self.status.message(0,"DispatchData(self,TestingQueue,TrainingQueue)")

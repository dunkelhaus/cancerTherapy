#DDManager.py
"""
    ** DispatchData() will:
        - be called from CVManager asynchronously
        - take 2 queues as arguments: one for testing and one for training
        - pass folds to network while new folds are being generated
        s(no time wasted waiting for all folds to be generated before sending the first one)
"""
from Queue import *
import time

def DispatchData(TestingQueue, TrainingQueue):
    while TestingQueue.empty() == True and TrainingQueue.empty() == True:
        #wait for data to be added to either queue
        time.sleep(1)
    while TestingQueue.empty() == False or TrainingQueue.empty() == False:
        #once data is in queue, send it off to network
        print 'Empty Testing Queue?: ', TestingQueue.empty() #just for visualization
        print 'Empty Training Queue?: ', TrainingQueue.empty() #just for visualization
        if TestingQueue.empty() == False:
            TestFold = TestingQueue.get() #pop from Testing queue until it is empty
        if TrainingQueue.empty() == False:
            TrainFold = TrainingQueue.get() #pop from Training queue until it is empty
        #TODO: send fold to network
    print 'Empty Testing Queue?: ', TestingQueue.empty() #just for visualization
    print 'Empty Training Queue?: ', TrainingQueue.empty() #just for visualization

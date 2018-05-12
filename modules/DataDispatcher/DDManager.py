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
from NeuralNet.management.NNManager import modelZero

def DispatchData(TestingQueue, TrainingQueue):
    while TestingQueue.empty() == True and TrainingQueue.empty() == True:
        #wait for data to be added to either queue
        time.sleep(1)
    while TestingQueue.empty() == False or TrainingQueue.empty() == False:
        #once data is in queue, send it off to network
        print "DDManager says: Empty Testing Queue?: ", TestingQueue.empty() #just for visualization
        print "DDManager says: Empty Training Queue?: ", TrainingQueue.empty() #just for visualization
        if TrainingQueue.empty() == False:
            TrainFold = TrainingQueue.get() #pop from Training queue until it is empty
            #send training fold to NN and wait for completion before continuing
            while modelZero(TrainFold, 0) != 1:
                print "DDManager says: Sending Training Fold to modelZero"
                time.sleep(1)
        if TestingQueue.empty() == False:
            TestFold = TestingQueue.get() #pop from Testing queue until it is empty
            #sent testing fold to NN and wait for completion before continuing
            while modelZero(TestFold, 1) != 1:
                print "DDManager says: Sending Testing Fold to modelZero"
                time.sleep(1)

    print "DDManager says: Empty Testing Queue?: ", TestingQueue.empty() #just for visualization
    print "DDManger says: Empty Training Queue?: ", TrainingQueue.empty() #just for visualization

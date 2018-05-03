#DDManager.py
"""
    ** DispatchData() will:
        - be called from CVManager asynchronously
        - take a queue as an argument
        - pass folds to network while new folds are being generated
        s(no time wasted waiting for all folds to be generated before sending the first one)
"""
from Queue import *
import time

def DispatchData(queue):
    while queue.empty() == True:
        #wait for data to be added to queue
        time.sleep(1)
    while queue.empty() == False:
        #once data is in queue, send it off to network
        print 'Empty DataDispatcher Queue?: ', queue.empty() #just for visualization
        fold = queue.get() #pop from queue until it is empty
        #TODO: send fold to network
    print 'Empty DataDispatcher Queue?: ', queue.empty() #just for visualization

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
        self.DDQTesting = Queue()
        self.DDQTraining = Queue()
        self.trainPaths = Queue()
        self.testPaths = Queue()
        self.status.message(1,"DDManager(self,TestingQueue,TrainingQueue)")

        while (self.DDQTesting.empty() == True and self.DDQTraining.empty() == True) or self.DDQTesting.empty() == True or self.DDQTraining.empty() == True:
              #wait for data to be added to either queue
            time.sleep(1)

        self.testFold = self.DDQTesting.get()
        self.trainFold = self.DDQTraining.get()
        self.testPaths.put(self.testFold)
        self.trainPaths.put(self.trainFold)
        self.status.message(0,"DDManager(self,TestingQueue,TrainingQueue)")

#CVManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

"""

import sys
from Status.Status import Status

sys.path.append('../')
sys.dont_write_bytecode = True

class CVManager:
    def __init__(self):
        self.status = Status("CVManager")

    def CrossValidate(self,List,folds,TestingQueue,TrainingQueue):
        self.status.message(1,"CrossValidate(self,path,folds)")
        # List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
        for i in range(1,folds+1):
            self.testingFold = List.head.get_data()
            if(i == 1):
                path = self.testingFold[0:-10]

            self.trainingFoldCSV = path +"trainingFolds_%s.csv" % i
            self.combine=open(self.trainingFoldCSV,"w")

            self.testingFoldCSV = path+"testingFold_%s.csv" % i
            self.testing=open(self.testingFoldCSV,"w")

            self.trainingFold_1 = List.head.get_next().get_data()
            self.currentFold = List.head.get_next()

            for line in open(self.trainingFold_1):
                self.combine.write(line)
            for line in open(self.testingFold):
                self.testing.write(line)
            for num in range(2,folds):
                self.currentFold = self.currentFold.get_next()
                self.currentFoldData = self.currentFold.get_data()
                self.single = open(self.currentFoldData)
                self.header = self.single.next()
                for line in self.single:
                    self.combine.write(line)
                self.single.close()
            self.combine.close()
            TrainingQueue.put(self.trainingFoldCSV)
            TestingQueue.put(self.testingFoldCSV)
            List.updateList()

        self.status.message(0,"CrossValidate(self,path,folds)")

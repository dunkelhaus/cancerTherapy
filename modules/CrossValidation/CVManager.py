#CVManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena
 
"""

import sys
sys.path.append('../')
sys.dont_write_bytecode = True

from DLL import _DLL


class CVManager:
    def __init__(self,path,folds):
        self.status = Status("CVManager")
        self.path = path
        self.folds = folds

    def CrossValidate(self,List,folds,TestingQueue,TrainingQueue):
        self.status.message(1,"CrossValidate(self,path,folds)")
        # List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
        for i in range(1,folds+1):
            self.trainingFoldCSV = "/home/skjena/data/testData/trainingFolds_%s.csv" % i
            self.combine=open(trainingFoldCSV,"w")
            
            self.testingFoldCSV = "/home/skjena/data/testData/testingFold_%s.csv" % i
            self.testing=open(testingFoldCSV,"w")
            
            self.testingFold = List.head.get_data()
            self.trainingFold_1 = List.head.get_next().get_data()
            self.currentFold = List.head.get_next()

            for line in open(trainingFold_1):
                combine.write(line)
            for line in open(testingFold):
                testing.write(line)
            for num in range(2,folds):
                self.currentFold = currentFold.get_next()
                self.currentFoldData = currentFold.get_data()
                single = open(currentFoldData)
                self.header = single.next()
                for line in single:
                    combine.write(line)
                single.close()
            combine.close()
            TrainingQueue.put(trainingFoldCSV)
            TestingQueue.put(testingFoldCSV)
            List.updateList()

        self.status.message(0,"CrossValidate(self,path,folds)")


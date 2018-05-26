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
        print "CVManager instance successfully created!"
        self.status = Status("CVManager")

    def CrossValidate(self,List,folds,TestingQueue,TrainingQueue):
        print "Entered CVManager.CrossValidate()"
        self.status.message(1,"CrossValidate(self,path,folds)")
        # List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
        for i in range(1,folds+1):
            #self.trainingFoldCSV = "/home/skjena/data/testData/trainingFolds_%s.csv" % i
            self.trainingFoldCSV = "/home/valeria/ECS193/data/testing/trainingFolds_%s.csv" % i
            self.combine=open(self.trainingFoldCSV,"w")

            #self.testingFoldCSV = "/home/skjena/data/testData/testingFold_%s.csv" % i
            self.testingFoldCSV = "/home/valeria/ECS193/data/testing/testingFolds_%s.csv" % i
            self.testing=open(self.testingFoldCSV,"w")

            self.testingFold = List.head.get_data()
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

        print "Exiting CVManager.CrossValidate()"
        self.status.message(0,"CrossValidate(self,path,folds)")

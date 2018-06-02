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
        List.printList()
        # List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
        for i in range(1,folds+1):
            testingFold = List.head.get_data()
            if(i == 1):
                path = testingFold[0:-10]
            print "path: ", path
            trainingFoldCSV = path +"trainingFolds_%s.csv" % i
            combine=open(trainingFoldCSV,"w")

            testingFoldCSV = path+"testingFold_%s.csv" % i
            testing=open(testingFoldCSV,"w")

            trainingFold_1 = List.head.get_next().get_data()
            currentFold = List.head.get_next()

            for line in open(trainingFold_1):
                combine.write(line)
            for line in open(testingFold):
                testing.write(line)
            for num in range(2,folds):
                currentFold = currentFold.get_next()
                currentFoldData = currentFold.get_data()
                single = open(currentFoldData)
                #self.header = self.single.next()
                for line in single:
                    combine.write(line)
                single.close()
            combine.close()
            TrainingQueue.put(trainingFoldCSV)
            TestingQueue.put(testingFoldCSV)
            List.updateList()

        self.status.message(0,"CrossValidate(self,path,folds)")

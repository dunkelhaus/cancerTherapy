#Cross Validation Algorithm
""""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

    Given a List and number of folds, validation() will:
        - take the List holding all folds and combines all of the training folds into one csv called trainingFolds.csv
        - stores trainingFolds_X.csv where X = {1,2,3,..} within data directory outside of cancerTherapy
        - stores testingFold_X.csv where X = {1,2,3...} within data directory outside of cancerTherapy
        - adds folds to DataDispatcher's queue to be sent to network as the folds are created
"""
from DLL import _DLL
from multiprocessing import Queue

def validation(self, List, folds, TestingQueue, TrainingQueue)
    self.status.message(1,"validation(self,List,fodls,TestingQueue,TrainingQueue)"):
    for i in range(1,folds+1):
        #Create training file (i of them)
        self.trainingFoldCSV = "/home/skjena/data/testData/trainingFolds_%s.csv" % i
        self.combine=open(trainingFoldCSV,"w")

        #Create testing file (i of them)
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
        # training and testing folds are now ready to be sent to network so queue them
        TrainingQueue.put(trainingFoldCSV)
        TestingQueue.put(testingFoldCSV)
        # update which fold is testing fold and which are training folds
        List.updateList()
    self.status.message(0,"validation(self,List,folds,TestingQueue,TrainingQueue)")

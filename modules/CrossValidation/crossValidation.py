#Cross Validation Algorithm
""""
    Given a List and number of folds, validation() will:
        - take the List holding all folds and combines all of the training folds into one csv called trainingFolds.csv
        - stores trainingFolds_X.csv where X = {1,2,3,..} within data directory outside of cancerTherapy
        - stores testingFold_X.csv where X = {1,2,3...} within data directory outside of cancerTherapy
        - adds folds to DataDispatcher's queue to be sent to network as the folds are created
"""
from DLL import _DLL
from multiprocessing import Queue

def validation(List, folds, TestingQueue, TrainingQueue):
    for i in range(1,folds+1):
        #Create training file (i of them)
        trainingFoldCSV = "../../../data/trainingFolds_%s.csv" % i
        combine=open(trainingFoldCSV,"w")

        #Create testing file (i of them)
        testingFoldCSV = "../../../data/testingFold_%s.csv" % i
        testing=open(testingFoldCSV,"w")

        testingFold = List.head.get_data()
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
            for line in single:
                combine.write(line)
            single.close()
        combine.close()
        # training and testing folds are now ready to be sent to network so queue them
        TrainingQueue.put(trainingFoldCSV)
        TestingQueue.put(testingFoldCSV)
        # update which fold is testing fold and which are training folds
        List.updateList()

#CVManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena
 
    ** Fold the csv at given path into 10 datasets using FoldManager.py
    ** 9 folds: Training
    ** 1 fold: Testing
    ** Each fold is stored into a csv file and also saved into a DLL
    ** Multiprocessing used to asynchronously cross validate and send data via DataDispatcher

    - folds: the number of folds you want to fold csv into
"""
import sys
sys.path.append('../')
sys.dont_write_bytecode = True

from DLL import _DLL
from FoldManager import generateFolds
from crossValidation import validation


class CVManager:
    def __init__(self,path,folds):
        self.status = Status("CVManager")
        self.path = path
        self.folds = folds

    def CrossValidate(self,path,folds):
        self.status.message(1,"CrossValidate(self,path,folds)")
        # List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
        self.List = generateFolds(self.path, self.folds)
        self.status.message(0,"CrossValidate(self,path,folds)")
        return self.List


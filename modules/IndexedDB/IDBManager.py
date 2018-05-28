#IDBManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

"""

import sys
sys.path.append('../')
sys.dont_write_bytecode = True
from Status.Status import Status

from DLL import _DLL
from FoldManager import generateFolds

class IDBManager():
   def __init__(self, path, folds):
       self.status = Status("IDBManager")
       self.path = path
       self.folds = folds

   def createFolds(self):
       self.status.message(1,"createFolds(self)")
       self.newList = _DLL()
       self.List = generateFolds(self.path, self.newList, self.folds)
       self.status.message(0,"createFolds(self)")
       return self.List

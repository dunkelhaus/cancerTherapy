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

from DLL import _DLL
from FoldManager import generateFolds

class IDBManager():

   def __init__(self, path, folds):
       self.path = path
       self.folds = folds

   def createFolds(self):
       self.newList = _DLL()
       self.List = generateFolds(self.path, self.newList, self.folds)
       return self.List

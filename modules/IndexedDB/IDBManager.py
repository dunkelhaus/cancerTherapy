"""i
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

"""

import sys
sys.path.append('../')
sys.dont_write_bytecode = True

from RawDB.RDBManager import GETDATASETFILE
from FoldManager import generateFolds


class IDBManager():

   def __init__(self, path, folds):
       self.path = path
       self.folds = folds

   def createFolds(self):
       self.List = generateFolds(self.path, self.folds)
       return self.List

IDB("fm_mutations_independent.tab")

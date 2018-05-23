"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

"""

import sys
sys.path.append('../')
sys.dont_write_bytecode = True

from RawDB.RDBManager import GETDATASETFILE
from CrossValidation.CVManager import CrossValidate
#from NeuralNet.management.NNManager import modelZero


class IDBManager():
   
   def __init__(self):
       self.RDB = RDBManager()
       self.CV = CVManager()
       self.DD = DDManager()

   def IDB(self, filename):
       self.filepath = self.RDB.GETDATASETFILE(self.filename)
       self.CV.CrossValidate(self.filepath)

IDB("fm_mutations_independent.tab")

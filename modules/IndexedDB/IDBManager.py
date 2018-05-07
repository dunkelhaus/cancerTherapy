import sys
sys.path.append('../')
sys.dont_write_bytecode = True

from RawDB.RDBManager import GETCSV
from CrossValidation.CVManager import CrossValidate
#from NeuralNet.management.NNManager import modelZero

def IDB(path):
    GETCSV("CANCER", "TOKEN", 21, 21, path)
    path = path + "data.csv"
    CrossValidate(path)

IDB("/home/skjena/cancerTherapy/modules/IndexedDB/")

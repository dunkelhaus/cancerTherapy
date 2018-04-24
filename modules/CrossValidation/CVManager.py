#CVManager.py
"""
    ** Retrieve CSV file from RDBManager.
    ** Fold the csv into 10 datasets using FoldManager.py
    ** 9 folds: Training
    ** 1 fold: Testing
    ** Each fold is stored into a csv file and also saved into a DLL
"""
import sys
sys.path.append('../')
sys.dont_write_bytecode = True

from DLL import _DLL
from FoldManager import generateFolds
from RawDB.RDBManager import GETCSV

def CrossValidate():
    path = '/specify/path'
    GETCSV(row=CANCERS, column=TOKENS, rowamount=5, columnamount=all, path)
    # List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
    List = generateFolds(path)

CrossValidate()


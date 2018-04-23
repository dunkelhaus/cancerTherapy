#CVManager.py
"""
    ** Retrieve CSV file from RDBManager.
    ** Fold the csv into 10 datasets using FoldManager.py 
    ** 9 folds: Training
    ** 1 fold: Testing
"""

import DLL
from FoldManager import generateFolds
from RDBManager import GETCSV

#generates a CSV of specified dimensions in specified path and return the csv
GETCSV(row=CANCERS, column=TOKENS, rowamount=5, columnamount=all, path='./RawDB/out/GeneratedCSV.csv')

# List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
List = generateFolds()

# at this point we have our 10 folds of data separated and arranged in linked list
# where the head of the list is our testing fold and the other 9 nodes are training folds

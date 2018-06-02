#!/usr/bin/python

import sys
from mds import MDS
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
from RawDB.RDBManager import RDBManager
import pandas as pd
import numpy as np

def main():
    rawdb = RDBManager("fm_mutations_independent")
    md = MDS(rawdb.dataframe)
    print(md.variances)
    

if __name__ == '__main__':
    main()

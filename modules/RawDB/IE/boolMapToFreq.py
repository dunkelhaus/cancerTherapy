#!/usr/bin/python

import pandas as pd
import numpy as np
import sys

def getBoolFrequencies(boolData):
    df = pd.read_table(boolData, sep="\t")
    frequencies = df.groupby('sample_name', axis = 0).sum()
    return frequencies

def getFrequencies(data):
    df = pd.read_table(data, sep="\t")
    columns = list(df)
    #frequencies = df.apply(pd.to_numeric, errors = 'ignore')
    for i in columns:
        #df[i] = df[i].astype('float64')
        pd.to_numeric(df[i])
    return frequencies

def getCSVFrequencies(data):
    df = pd.read_table(data, sep=",")
    #frequencies = df.apply(pd.to_numeric, errors = 'ignore')
    dft = df.transpose()
    dft.rename(columns=dft.iloc[0])
    frequencies = dft.drop(dft.index[0])
    return frequencies

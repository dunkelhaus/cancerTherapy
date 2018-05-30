#!/usr/bin/python

import pandas as pd
import numpy as np
import sys
import matplotlib.pyplot as plt

def getBoolFrequencies(boolData):
    df = pd.read_table(boolData, sep="\t")
    frequencies = df.groupby('sample_name', axis = 0).sum()
    return frequencies

def getFrequencies(data):
    df = pd.read_table(data, sep="\t")
    return df

def getCSVFrequencies(data):
    df = pd.read_table(data, sep=",")
    return df

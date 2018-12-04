import gensim.models.word2vec as w2v
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import math
import os
import multiprocessing

def word2vec(path):
    df = pd.read_csv(path)
    
    numFeatures = len(df.columns)-1
    numCancers = len(df)
    numpy_matrix = df.as_matrix()

    
word2vec("/home/skjena/data/testData/fold_1.csv")

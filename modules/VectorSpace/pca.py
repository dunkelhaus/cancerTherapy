#import gensim.models.word2vec as w2v
#import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import math
import os
import multiprocessing
#from matplotlib.mlab import PCA
from sklearn.decomposition import PCA
df = []
def Pca(path):
    global df
    print("Reading the Data....")
    df = pd.read_csv(path)    
    numFeatures = len(df.columns)-1
    numCancers = len(df)
    numpy_matrix = df.as_matrix()
    print("Matrix created")
    return PCA(n_components = 2).fit_transform(numpy_matrix)
    
results = Pca("/home/skjena/data/out/fm_sample_independent.csv")
print results.explained_variance_ratio
first = results.explained_variance_ratio[0]
second = results.explained_variance_ratio[1]
#for i, j in  zip(results, df)

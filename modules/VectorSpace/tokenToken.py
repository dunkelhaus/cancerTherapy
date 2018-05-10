import pandas as pd
import scipy as sp
import math
import numpy as np

a = [[]]

df = pd.read_csv("/Users/kravisankaran/code/cs193a/cnnCancerTherapy/modules/RawDB/scripts/tokenCancer.csv")
numOfCols = len(df.columns)
numOfRows = len(df)
b = np.zeros((numOfRows, numOfRows, numOfRows))
df2 = df[df.columns.difference(['CANCERS'])]
a = np.zeros((numOfRows, numOfRows))
def getColumn(i):
    global df2
    return df2.iloc[:,i]
def populateTwo(k) :
    global a, df2
    for i in range (numOfRows) :
        for j in range (numOfRows) :
                if i == j:
                    a[i][j] = 0
                else :
                    d = getColumn(k)
                    #print(d)
                    a[i][j] = d[i]


def main () :
    global a, df2, b
    for k in range (numOfRows) :
        populateTwo(k)
        b[k] = a
    print(b[2])




if __name__ == '__main__':
    main()

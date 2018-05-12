import pandas as pd
import scipy as sp
import math
import numpy as np

def GeneratePPMI(path):
    ppmi = [[]]

    df = pd.read_csv(path)
    numOfCols = len(df.columns)-1
    numOfRows = len(df)
    numWords = numOfCols*numOfRows

    #Context = df[df.columns[0]]
    #df = df.drop('TOKEN', 1)
    #Token = df.head(n=0)
    #print 'Context: ', Context
    #print 'Token: ', Token

    df = df.drop('TOKEN',1)
    numpy_matrix = df.as_matrix()
    
    Pw = float(numOfRows)/float(numWords)
    Pc = float(numOfCols)/float(numWords)

    ppmi = np.zeros((numOfRows, numOfCols))

    for i in range (1,numOfRows) :
        for j in range (1,numOfCols) :
            occurence = numpy_matrix[i][j]
            Pwc = float(occurence)/float(numWords)   
            if Pw == 0 or Pc == 0:
                ppmi[i][j] = 0
            else:
                ppmi[i][j] = max(0, math.log(Pwc/(Pw*Pc),2))

    dataframe = pd.DataFrame(data=ppmi.astype(float))
    dataframe.to_csv('/home/skjena/data/PPMI/ppmi_6.csv', sep=',', header=False, float_format='%.2f', index=False)

def main () :
    GeneratePPMI("/home/skjena/data/testData/fold_6.csv")


if __name__ == '__main__':
    main()


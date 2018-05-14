import pandas as pd
import scipy as sp
import math
import numpy as np

def GeneratePPMI(path):
    ppmi = [[]]
    cancerCol = []

    df = pd.read_csv(path)
    numOfCols = len(df.columns)-1
    numOfRows = len(df)
    numWords = numOfCols

    numpy_matrix = df.as_matrix()
    
    Pw = float(numOfRows)/float(numWords)
    Pc = float(numOfCols)/float(numWords)

    ppmi = np.zeros((numOfRows, numOfCols))

    for k in range (0, numOfRows) :
        cancerCol.append(numpy_matrix[k][0])

    for i in range (1,numOfRows) :
        for j in range (1,numOfCols) :
            occurence = numpy_matrix[i][j]
            Pwc = float(occurence)/float(numWords)   
            if Pw == 0 or Pc == 0:
                ppmi[i][j] = 0
            else:
                ppmi[i][j] = max(0, math.log(Pwc/(Pw*Pc),2))

    dataframe = pd.DataFrame(data=ppmi.astype(float))
    dataframe.insert(loc=0, column='', value=cancerCol)
    dataframe.to_csv('/home/skjena/data/PPMI/ppmi_10.csv', sep=',', header=False, float_format='%.2f', index=False)

def main () :
    GeneratePPMI("/home/skjena/data/testData/fold_10.csv")


if __name__ == '__main__':
    main()


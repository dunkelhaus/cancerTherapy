import sys
sys.dont_write_bytecode = True

import pandas as pd
import math
import numpy as np

def ppmiReduction(inputPath, folds):
    dataframe = pd.read_csv(inputPath+'/ppmi_1.csv')
    Columns = np.zeros(len(dataframe.columns)-1)
    GlobalNumCols = len(dataframe.columns)
    print 'Initial Column Count: ', GlobalNumCols
    #After these loops, any Columns[x] with entry = 0 is garbage
    for current in range (1,folds+1):
        dataframe = pd.read_csv(inputPath + '/ppmi_'+str(current)+'.csv')
        numCols = len(dataframe.columns)
        numRows = len(dataframe)
        Matrix = dataframe.as_matrix()

        for i in range (0,numRows):
            for j in range (1,numCols):
                if Matrix[i][j] != 0:
                    Columns[j-1] = 1
    
    validCols = 0
    for x in range(0,GlobalNumCols):
        if Columns[x] != 0:
            validCols+=1
    
    print 'Column Count After PPMI Reduction: ', validCols
    '''
    #this for loop is just for debugging purposes
    for x in range(0,numCols-1):
        if Columns[x] == 0:
            print 'Can remove Column: ', x
    '''
'''
    for current in range(1,2):#folds+1):
        dataframe = pd.read_csv('/home/skjena/data/reducedData/ppmiFolds/ppmi_fold_'+str(current)+'.csv')
        #dataframe = pd.read_csv(inputPath + '/ppmi_'+str(current)+'.csv')
        CopyDataFrame = dataframe
        numCols = len(dataframe.columns)
        for x in range(1,numCols): 
           if Columns[x-1] == 0:
                #print dataframe.columns[x]
                CopyDataFrame = CopyDataFrame.drop(dataframe.columns[x], axis=1)
        print 'Reduced Column Count: ', len(CopyDataFrame.columns)
        CopyDataFrame.to_csv('/home/skjena/data/reducedData/fold1_'+str(current)+'.csv', sep=',', header=False,float_format='%.2f', index=False)
'''
        #CopyDataFrame.to_csv('/home/skjena/data/reducedData/fold_'+str(current)+'.csv', sep=',', header=False,floa    t_format='%.2f', index=False)
"""
    #this is where columns are dropped from each csv file
    for current in range(1,folds+1):
        dataframe = pd.read_csv(inputPath + '/ppmi_'+str(current)+'.csv')
        numCols = len(dataframe.columns) # 9
        dataframe = dataframe.loc[:, (dataframe != 0).any(axis=0)]
        dataframe.to_csv('/home/skjena/data/reducedData/fold_'+str(current)+'.csv', sep=',', header=False,float_format='%.2f', index=False)
        print 'Reduced Column Count: ', len(dataframe.columns)
"""

ppmiReduction('/home/skjena/data/PPMI', 10)


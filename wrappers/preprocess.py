#!/bin/python

# Convert provided training data to Mutation Feature Vector format
# A sample single run reads data from the .tab file and outputs it in MFV format
# Output is to a csv file, mfv.csv, to be stored under data/

#Precondition : Make sure tab file is in the data folder of your repository
#Postcondition: It generates a txtfile containing the MFV in your current directory

import numpy as np
import pandas as pd


#Reading the given mutation data into a dataFrame
def readTable():
    df= pd.read_table("../data/fm_mutations_independent.tab", sep ="\t")
    cols = df.columns.tolist()
    cols= ['sample_name', 'C>A', 'C>G', 'C>T', 'T>A', 'T>C', 'T>G', '5A', '5C', '5G', '5T', '3A', '3C', '3G', '3T']
    df = df[cols]
    dataFrameRows= df['C>A'].count()
    col1=[]
    for x in range(1,dataFrameRows): col1.append(x)
    df.insert(0, 'serialNumber', range(1, 1+len(df)))
    return df


def symbolTableConversion():
    dataFrame = readTable()
    dataFrameRows= dataFrame['C>A'].count()
    transcriptionColumn =[]
    col1 = []
    col2 = []
    dataFrame['C>A'][dataFrame['C>A']== 1] = 1
    dataFrame['C>G'][dataFrame['C>G']== 1] = 2
    dataFrame['C>T'][dataFrame['C>T']== 1] = 3
    dataFrame['T>A'][dataFrame['T>A']== 1] = 4
    dataFrame['T>C'][dataFrame['T>C']== 1] = 5
    dataFrame['T>G'][dataFrame['T>G']== 1] = 6
    dataFrame['5A'][dataFrame['5A']== 1] = 1
    dataFrame['5C'][dataFrame['5C']== 1] = 2
    dataFrame['5G'][dataFrame['5G']== 1] = 3
    dataFrame['5T'][dataFrame['5T']== 1] = 4
    dataFrame['3A'][dataFrame['3A']== 1] = 1
    dataFrame['3C'][dataFrame['3C']== 1] = 2
    dataFrame['3G'][dataFrame['3G']== 1] = 3
    dataFrame['3T'][dataFrame['3T']== 1] = 4
    df = pd.DataFrame(columns=['serialNumber','Direction'])
    for x in range(1,dataFrameRows):
        col1.append(2)
        col2.append("AA")
    df['Direction']=col1
    df['serialNumber']= dataFrame['serialNumber'].astype(str)
    df['serialNumber'] = df['serialNumber'].str.cat(col2, sep='')
    df.insert(1, 'transcriptionColumn',(dataFrame['C>A']+ dataFrame ['C>G'] + dataFrame['C>T'] + dataFrame['T>A']+ dataFrame['T>C']+ dataFrame['T>G'] ))
    df.insert(2, '5PrimeFlank',(dataFrame['5A']+ dataFrame['5C']+ dataFrame['5G']+ dataFrame ['5T']))
    df.insert(3, '2nd5PrimeFlank',(dataFrame['5A']+dataFrame['5C']+dataFrame['5G']+dataFrame['5T']))
    df.insert(4, '3PrimeFlank',(dataFrame['3A']+dataFrame['3C']+dataFrame['3G']+dataFrame['3T']))
    df.insert(5, '2nd3PrimeFlank',(dataFrame['3A']+dataFrame['3C']+dataFrame['3G']+dataFrame['3T']))
    return df

def writeFile():
    df = symbolTableConversion()
    df.to_csv('./mfv.tab',sep='\t', index=False, header=False, mode='w')

writeFile()

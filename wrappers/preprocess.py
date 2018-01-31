#!/bin/python

# Convert provided training data to Mutation Feature Vector format
# A sample single run reads data from the .tab file and outputs it in MFV format
# Output is to a csv file, mfv.csv, to be stored under data/

#import csv
#with open("fm_mutations_independent.tab") as tsv:
    #for line in csv.reader(tsv, delimiter="\t") :
        #print(line)
import numpy as np
import pandas as pd

#Reading the given mutation data into a dataFrame
df= pd.read_table("./fm_mutations_independent.tab", sep ="\t")
cols = df.columns.tolist()
print(cols)
cols= ['sample_name', 'C>A', 'C>G', 'C>T', 'T>A', 'T>C', 'T>G', '5A', '5C', '5G', '5T', '3A', '3C', '3G', '3T']
print(cols)
df = df[cols]
print(df)
print(type(df))

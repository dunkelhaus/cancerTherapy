# Computes the tf-idf values of the tokenCancer matrix
import pandas as pd
import scipy as sp
import math

def isNumber(s):
    try:
        float(s)
        return True
    except ValueError:
        return False

def calctf_idf():
    df = pd.read_csv("/Users/kravisankaran/code/cs193a/cnnCancerTherapy/modules/RawDB/scripts/tokenCancer.csv")
    termFrequency = df[df.columns.difference(['CANCERS'])]
    lengthOfDocument = len(df.columns)
    termFrequency = (1/float(lengthOfDocument)) * termFrequency
    numberOfDocuments = len(df)
    inverseDocumentFrequency =  df[df.columns.difference(['CANCERS'])]
    for index in range(lengthOfDocument - 1) :
        for ind in range(numberOfDocuments -1):
            inverseDocumentFrequency.at[ind, index] =math.log(numberOfDocuments/1+inverseDocumentFrequency.iloc[ind,index])
    tf_idf = [termFrequency.apply(lambda x: x*y) for _, y in inverseDocumentFrequency.iteritems()]
    return tf_idf

def main():
     tf_idf = calctf_idf()
     print(tf_idf)


if __name__ == '__main__':
    main()

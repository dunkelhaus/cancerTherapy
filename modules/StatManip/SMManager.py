# Computes the tf-idf values of the tokenCancer matrix
import pandas as pd
import scipy as sp
import numpy as np
import math
import sys
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
from Status.Status import Status

class SMManager:
    def __init__(self):
        self.status = Status("SMManager")

    def isNumber(self, s):
        try:
            float(s)
            return True
        except ValueError:
            return False

    def calctf_idf(self):
        df = pd.read_csv("/home/skjena/cancerTherapy/modules/RawDB/scripts/tokenCancer.csv")
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

    def skewLabels(self, dataframe, problemType):
        self.status.message(1, "skewLabels(self, dataframe, problemType)")
        if problemType == "CLASSIFICATION":
            labels = np.array(list(dataframe.index))
            labelsnew = labels.reshape(110,1)
            booleanLabels = np.core.defchararray.startswith(labelsnew, 'l')
            intlabels = booleanLabels.astype(int)
            self.status.message(0, "skewLabels(self, dataframe, problemType)")
            return intlabels

    def adjoin(self, dimensions, labels):
        self.status.message(1, "adjoin(self, dimensions, labels)")
        fullset = np.hstack((dimensions, labels))
        self.status.message(0, "adjoin(self, dimensions, labels)")
        return fullset

    def writeToFile(self, fullset, filename):
        self.status.message(1, "writeToFile(self, fullset)")
        np.savetxt(filename, fullset, delimiter = ',')
        self.status.message(0, "writeToFile(self, fullset)")

        return

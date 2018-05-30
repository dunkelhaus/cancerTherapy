#!/usr/bin/python
import operations
import numpy as np
import pandas as pd
import sys
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
from Status.Status import Status

class MDS:
    def __init__(self, dataframe):
        self.status = Status("MDS")
        self.dataframe = dataframe
        (self.objects, self.features) = self.getObjectAndFeatureAmount()
        self.distances = self.getAggregateDistanceMatrix()
        self.mass = self.getMassMatrix()
        self.centering = self.getCenteringMatrix()
        self.crossProduct = self.getCrossProductMatrix()
        (self.eigenvectors, self.eigenvalues) = self.getEigenVectorsAndValues()
        self.variances = self.getVariances()
        self.scores = self.getScores()

    def getObjectAndFeatureAmount(self):
        self.status.message(1, "getObjectAndFeatureAmount(self)")
        self.status.message(0, "getObjectAndFeatureAmount(self)")
        return (len(self.dataframe.index), len(list(self.dataframe)))

    def getAggregateDistanceMatrix(self):
        self.status.message(1, "getAggregateDistanceMatrix(self)")
        distances = pd.DataFrame()
        for k in range(0, self.features):
            distance = np.zeros((len(self.dataframe), len(self.dataframe)))
            for i in range(len(self.dataframe)):
                for j in range(len(self.dataframe)):
                    if i == j:
                        distance[i][j]= 0
                    else:
                        distance[i][j] = np.sqrt((abs(self.dataframe.iloc[j, 0] - self.dataframe.iloc[i, 0])) ** 2)
            distances.append(pd.DataFrame(distance))
        aggregate = self.getDistanceSum(distances, distances[self.features], self.features)
        weighted = aggregate/float(self.features)

        self.status.message(0, "getAggregateDistanceMatrix(self)")
        return weighted

    def getDistanceSum(self, distances, currentDistance, i):
        self.status.message(1, "getDistanceSum(self, distances, currentDistance, i)")
        nextDistance = distances[i - 1]
        if i <= 1:
            self.status.message(0, "getDistanceSum(self, distances, currentDistance, i)")
            return nextDistance
        i = i - 1

        self.status.message(0, "getDistanceSum(self, distances, currentDistance, i)")
        return nextDistance.add(self.getDistanceSum(distances, distances[i], i), axis = 0)

    def getMassMatrix(self):
        self.status.message(1, "getMassMatrix(self)")
        m = np.zeros((110))
        m.fill(1.0 / 110.0)
        m = m.reshape(110, 1)

        self.status.message(0, "getMassMatrix(self)")
        return m

    def getCenteringMatrix(self):
        self.status.message(1, "getCenteringMatrix(self)")
        mt = m.T
        onem = np.ones((110,1))
        rhs = onem * mt
        lhs = np.eye(110)
        centering = lhs - rhs

        self.status.message(0, "getCenteringMatrix(self)")
        return centering

    def getCrossProductMatrix(self):
        self.status.message(1, "getCrossProductMatrix(self)")
        D = self.distances.as_matrix()
        ct = self.centering.T
        centering = -0.5 * centering
        product = centering.dot(D)
        diff = product.dot(ct)

        self.status.message(0, "getCrossProductMatrix(self)")
        return diff

    def getEigenVectorsAndValues(self):
        self.status.message(1, "getEigenVectorsAndValues(self)")
        eigenvals, eigenvecs = np.linalg.eig(self.crossProduct)
        diagonal = np.diag(eigenvals)

        self.status.message(0, "getEigenVectorsAndValues(self)")
        return (eigenvecs, diagonal)

    def getVariances(self):
        self.status.message(1, "getVariances(self)")
        mask = self.eigenvalues != 0
        dist = self.eigenvalues[mask]
        combined = dist.reshape(1, dist.shape[0])
        total = combined.sum()
        variances = ((1.0) / (float(total))) * combined
        percentages = variances * 100

        self.status.message(0, "getVariances(self)")
        return percentages

    def getScores(self):
        self.status.message(1, "getScores(self)")
        diagm = np.diag(self.mass)
        root = np.sqrt(diagm)
        termM = 1.0 / float(root)
        diagroot = np.sqrt(abs(diagonal))
        termA = termM * self.eigenvectors
        score = termA.dot(diagroot)

        self.status.message(0, "getScores(self)")
        return score

    def getNDimensions(self, n):
        self.status.message(1, "getXYDimensions(self)")
        dimensions = self.scores[:,:n]

        self.status.message(0, "getXYDimensions(self)")
        return dimensions

    def scale(self, n):
        self.status.message(1, "scale(self)")
        xy = self.getNDimensions(n)
        self.status.message(0, "scale(self)")
        return xy

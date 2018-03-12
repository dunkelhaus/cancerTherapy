#!/bin/python
import numpy as np

# A class file that defines each Signature object and it's parameters
# Signatures are the "Params" returned by the pmsignature (or rather, pmwrapper) call
# Would need some additional helper classes, maybe subclasses
class signature():
	def __init__(self, sigNum):
		self.sampleList = []
		self.signatureNum = sigNum
		self.isBackGround = 0
		self.signatureFeatureDistribution = np.zeros((sigNum,6,6))
		self.sampleSignatureDistribution = np.zeros((10,sigNum))
		self.loglikelihood = 0
		self.type = ""
		self.flankingBasesNum = 0
		self.transcriptionDirection = 0
		self.possibleFeatures = np.zeros(6)
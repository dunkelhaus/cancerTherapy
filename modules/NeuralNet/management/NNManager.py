"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

 A custom TensorFlow Estimator for a DNNClassifier for mutation classification.

 This code runs in correlation with ./dataProcessor.py, overseen by ./__main__.py
"""
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from NeuralNet.management import execManager
import sys

#import  sys
#sys.path.append('/home/skjena/cancerTherapy/modules/RESTAPI/mutationDnnWeb/')
#from mutationDnnWeb.models import V1, State, Run, Arguments, Features, Settings
#from mutationDnnWeb.serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
import argparse
import tensorflow as tf
#from django.core.exceptions import ObjectDoesNotExist
#from typings.network import Network

#mode 0: Path leads to training fold
#mode 1: Path leads to testing fold

class NNManager():
	def __init__(self, trainpath, testpath):
		self.iteration = 0
		self.trainpath = trainpath
		self.testpath = testpath
		self.executor = execManager(trainpath, testpath)

	def modelZero():
    	executor.train()
    	executor.test()
    	executor.predict()
# Essentially the main for NeuralNet
import trainingManager as tr
import testingManager as te
import predictManager as pr
import argparse
import tensorflow as tf
import sys
from Status.Status import Status
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor
from NeuralNet.core.classifiers.dnnClassifier import DNNClassifierModel

class execManager():

	def __init__(self, trainpath, testpath):
		(self.train_x, self.train_y) = dataProcessor.load_train_data(trainpath)
		(self.test_x, self.test_y) = dataProcessor.load_test_data(testpath)
		self.classifier = None
		self.predict_x = ""
		self.expected = []
		self.status = Status("execManager")

	def train(self):
		self.status.message(1, "train(self)")
		trainer = tr(self.train_x, self.train_y)
	    self.classifier = trainer.run()

	    self.status.message(0, "train(self)")

	def test(self):
    	self.status.message(1, "test(self)")
    	tester = te(self.test_x, self.test_y)
    	self.result = tester.run(self.classifier)

    	self.status.message(0, "test(self)")

	def predict(self):
    	self.status.message(1, "predict(self)")
    	predictor = pr(self.predict_x, self.expected)
    	predictor.run(self.classifier)

    	self.status.message(0, "predict(self)")

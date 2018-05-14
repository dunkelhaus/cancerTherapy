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

	def __init__(self, path):
		(self.train_x, self.train_y), (self.test_x, self.test_y) = dataProcessor.load_data(path)
		self.classifier = None
		self.status = Status("execManager")

	def train(self, path):
		self.status(1, "train(self, path)")
		trainer = tr(self.train_x, self.train_y)
	    self.classifier = trainer.run()

	    self.status(0, "train(self, path)")

	def test(path):
    	print("Calling the test function in testingManager")
    	te.test()

	def predict(path):
    	#Call Eval
    	print("Calling the predict function in predictManager")
    	pr.predict()

import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
import sys
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')

from NeuralNet.core.classifiers.dnnClassifier import DNNClassifierModel

class testingManager():
	def __init__(self, test_x, test_y):
		self.test_x = test_x
		self.test_y = test_y

	def run():
	    print("Beginning testing/evaluation.")
	    
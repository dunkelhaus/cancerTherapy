import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
import sys
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')

from NeuralNet.core.classifiers.dnnClassifier import DNNClassifierModel

class predictManager():
	def __init__(self, train_x, train_y):
		self.train_x = train_x
		self.train_y = train_y

	def run():
	    print("Beginning prediction.")
	    
import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
import sys
from Status.Status import Status
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')

from NeuralNet.core.classifiers.dnnClassifier import DNNClassifierModel
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor

class testingManager():
    def __init__(self, test_x, test_y):
        self.test_x = test_x
        self.test_y = test_y
        self.status = Status("testingManager")
        
    def run(self, model):
        self.status.message(1, "run(self, model)")
        result = model.evaluate(input_fn=lambda:dataProcessor.test_input_fn(self.test_x, self.test_y))
        self.status.message(4, result)
        self.status.message(0, "run(self, model)")
        return result
	    

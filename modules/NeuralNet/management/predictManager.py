import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
import sys
from Status.Status import Status
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/regressors/dnnRegressor')

from NeuralNet.core.classifiers.dnnClassifier import DNNClassifierModel
#from NeuralNet.core.regressors.dnnRegressor import DNNRegressorModel
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor

class predictManager():
	def __init__(self, predict_x, expected):
		self.predict_x = predict_x
		self.expected = expected

	def run(self, dnnModel, problemType):
	    self.status.message(1, "run(self, model)")
        if(problemType == "0"):
    	    predictions = dnnModel.predict(
	        	input_fn=lambda:dataProcessor.predict_input_fn(self.predict_x,
	        		labels=None, batch_size=DNNClassifierModel.getBatchSize()))
        else:
            predictions = dnnModel.predict(
                input_fn=lambda:dataProcessor.predict_input_fn(self.predict_x,
                    labels=None, batch_size=DNNRegressorModel.getBatchSize()))

	    for pred_dict, expec in zip(predictions, expected):
	    	template = ('\nPrediction is "{}" ({:.1f}%), expected "{}"')
            class_id = pred_dict['class_ids'][0]
            probability = pred_dict['probabilities'][class_id]

            # print the correct answer's label, it's probability scaled into a percentage, and the expected class from the list
            print(template.format(dataProcessor.TUMOR[class_id],
                                  100 * probability, expec))

	    self.status.message(0, "run(self, model)")

	    return

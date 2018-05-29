# Essentially the main for NeuralNet
from trainingManager import trainingManager as tr
from testingManager import testingManager as te
from predictManager import predictManager as pr
import argparse
import tensorflow as tf
import sys
from Status.Status import Status
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/regressors/dnnRegressor')
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor
from NeuralNet.core.classifiers.dnnClassifier import DNNClassifierModel
from NeuralNet.core.regressors.dnnRegressor import DNNRegressorModel

class execManager():

    def __init__(self, trainpath, testpath, network, problem):
        (self.train_x, self.train_y) = dataProcessor.load_train_data(trainpath)
        (self.test_x, self.test_y) = dataProcessor.load_test_data(testpath)
        self.network = network
        self.problemType = problem
        if(self.problemType == "0"):
            self.classifier = DNNClassifierModel(self.network)
            self.classifier.build(self.network.state.networkShape, self.train_x)
        else:
            self.regressor = DNNRegressorModel(self.network)
            #regressor has no build function. Look into this later.
            self.regressor.build(self.network.state.networkShape, self.train_x)
        self.predict_x = ""
        self.expected = []
        self.status = Status("execManager")

    def train(self):
        self.status.message(1, "train(self)")
        if(self.problemType == "0"):
            trainer = tr(self.train_x, self.train_y, self.network, self.classifier)
            self.classifier = trainer.run()
        else:
            trainer = tr(self.train_x, self.train_y, self.network, self.regressor)
            self.regressor = trainer.run()
        self.status.message(0, "train(self)")

    def test(self):
        self.status.message(1, "test(self)")
        if(self.problemType == "0"):
            tester = te(self.test_x, self.test_y, self.network, self.classifier)
            self.result = tester.run(self.classifier)
        else:
           tester = te(self.test_x, self.test_y, self.network, self.regressor) 
           self.result = tester.run(self.regressor)
        self.status.message(0, "test(self)")

    def predict(self):
        self.status.message(1, "predict(self)")
        predictor = pr(self.predict_x, self.expected)
        if(self.problemType == "0"):
            predictor.run(self.classifier)
        else:
            predictor.run(self.regressor)
        self.status.message(0, "predict(self)")

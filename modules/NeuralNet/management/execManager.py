# Essentially the main for NeuralNet
from trainingManager import trainingManager as tr
from testingManager import testingManager as te
from predictManager import predictManager as pr
import argparse
import tensorflow as tf
import sys
from Status.Status import Status
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor
from NeuralNet.core.classifiers.dnnClassifier import DNNClassifierModel

class execManager():

    def __init__(self, trainpath, testpath, network):
        (self.train_x, self.train_y) = dataProcessor.load_train_data(trainpath)
        (self.test_x, self.test_y) = dataProcessor.load_test_data(testpath)
        self.network = network
        self.classifier = DNNClassifierModel(self.network)
        self.classifier.build(self.network.state.networkShape, self.train_x)
        self.predict_x = ""
        self.expected = []
        self.status = Status("execManager")

    def train(self):
        self.status.message(1, "train(self)")
        trainer = tr(self.train_x, self.train_y, self.network, self.classifier)
        self.classifier = trainer.run()
        self.status.message(0, "train(self)")

    def test(self):
        self.status.message(1, "test(self)")
        tester = te(self.test_x, self.test_y, self.network, self.classifier)
        self.result = tester.run(self.classifier)
        self.status.message(0, "test(self)")

    def predict(self):
        self.status.message(1, "predict(self)")
        predictor = pr(self.predict_x, self.expected)
        predictor.run(self.classifier)
        self.status.message(0, "predict(self)")

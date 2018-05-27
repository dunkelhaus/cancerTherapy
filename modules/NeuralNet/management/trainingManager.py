import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
import sys
from Status.Status import Status
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')

from NeuralNet.core.classifiers.dnnClassifier.DNNClassifierModel import DNNClassifierModel
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor


class trainingManager():
  def __init__(self, train_x, train_y, network, classifier):
    self.train_x = train_x
    self.train_y = train_y
    self.network = network
    self.classifier = classifier
    self.status = Status("trainingManager")

  def run(self):
    self.status.message(1, "run()")
    self.classifier.model.train(input_fn=lambda:dataProcessor.train_input_fn(self.train_x, self.train_y, self.network.state.batchSize,steps=self.network.arguments.learningRate))
    self.status.message(3, self.network.state.networkShape)
    self.status.message(0, "run()")
    return True

import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
import sys
from Status.Status import Status
sys.path.append('/home/skjena/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')

from NeuralNet.core.classifiers.dnnClassifier.DNNClassifierModel import DNNClassifierModel
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor


class trainingManager():
  def __init__(self, train_x, train_y):
    self.train_x = train_x
    self.train_y = train_y
    self.status = Status("trainingManager")
    
  def run(self):
    self.status.message(1, "run()")
    classifier = DNNClassifierModel()
    shape = classifier.getNetworkShape()
    network = classifier.build(shape, self.train_x)
    network.train(
    input_fn=lambda:dataProcessor.train_input_fn(self.train_x, self.train_y, 
    classifier.getBatchSize()),
    steps=classifier.getLearningRate())
    self.status.message(3, shape)
    self.status.message(0, "run()")
    return classifier


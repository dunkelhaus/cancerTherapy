# Essentially the main for NeuralNet
import trainingManager as tr
import testingManager as te
import evalManager as ev
import argparse
import tensorflow as tf
import sys
sys.path.append('/Users/kravisankaran/code/cs193a/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')
import dataProcessor




def execTrain(trainPath):
    #Call load_data in DataProcessor to load the appropriate dataset
    (train_x, train_y), (test_x, test_y) = dataProcessor.load_data(trainPath)

def execTest():
    #Call Test
    print("Calling the test function in testingManager")
    te.test()

def execEval():
    #Call Eval
    print("Calling the eval function in evalManager")
    ev.evaluate()

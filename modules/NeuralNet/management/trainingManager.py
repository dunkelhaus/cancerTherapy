import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
import sys
sys.path.append('/Users/kravisankaran/code/cs193a/cnnCancerTherapy/modules/NeuralNet/core/classifiers/dnnClassifier')
import DNNClassifierModel as dnnClassifier

def train (trainData):
    print("Reached the train function in trainingManager")
    dnnClassifier.start()

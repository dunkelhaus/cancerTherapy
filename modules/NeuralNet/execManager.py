# Essentially the main for NeuralNet
import trainingManager as tr
import testingManager as te
import evalManager as ev
import argparse
import tensorflow as tf
import sys

parser = argparse.ArgumentParser()
parser.add_argument('--batch_size', default=100, type=int, help='batch size')
parser.add_argument('--train_steps', default=1000, type=int,
                    help='number of training steps')

def execTrain(trainPath):
    #Call Train
    print("Calling the train function in trainingManager")
    (train_x, train_y), (test_x, test_y) = tr.loadData(trainPath)
    # Feature columns describe how to use the input.
    my_feature_columns = []
    for key in train_x.keys():
        my_feature_columns.append(tf.feature_column.numeric_column(key=key))
    print(my_feature_columns)
    # Build 2 hidden layer DNN with 10, 10 units respectively.
    classifier = tf.estimator.DNNClassifier(
        feature_columns=my_feature_columns,
        # Two hidden layers of 10 nodes each.
        hidden_units=[10, 10],
        # The model must choose between 3 classes.
        n_classes=3)

def execTest():
    #Call Test
    print("Calling the test function in testingManager")
    te.test()

def execEval():
    #Call Eval
    print("Calling the eval function in evalManager")
    ev.evaluate()

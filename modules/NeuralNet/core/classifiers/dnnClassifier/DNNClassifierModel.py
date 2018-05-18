#!/usr/bin/python
"""
Deep Learning for Cancer Therapy

Authors:
Kumud Ravisankaran | Valeria Brewer
Ninad Mehta | Suraj Jena

A custom TensorFlow Estimator for a DNNClassifier for mutation classification.

This code runs in correlation with ./dataProcessor.py, overseen by ./__main__.py
"""
# REVIEW Do Not Run
#=======================================================

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
#from mutationDnnWeb.models import V1, State, Run, Arguments, Features, Settings
#from mutationDnnWeb.serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
import argparse
import tensorflow as tf
#from django.core.exceptions import ObjectDoesNotExist
#from typings.network import Network
#import dataProcessor
from NeuralNet.core.classifiers.dnnClassifier import dataProcessor
# maintains a verbose tensorflow log
tf.logging.set_verbosity(tf.logging.INFO)

#/v1/: ALL
#/v1/arguments: learningRate, activation, regularization, regularizationRate, problemType
#/v1/state: numHiddenLayers, networkShape, noise, batchSize, percTrainData
#/v1/run: reset, play, nextButton, showTestData, discretize
#/v1/settings: dataset, weights
#/v1/features: features

"""
    This function checks whether there has been changes

    To determine whether a change has been made:
        compare value stored in ../v1/ to the value in ../v1/xxxx/

    When a value is changed in the playground, ../v1/xxxx/ is updated.
    However, ../v1/ is not changed at this time and so is the two tables
    do not match, then we know that there has been a change.
"""

class DNNClassifierModel:

    def getLearningRate(self):
        learningRate = Arguments.objects.get(name="learningRate")
        number = float(learningRate)
        return tf.Variable(number, tf.float64)

    def getActivation(self):
        activation = Arguments.objects.get(name="activation")

        if activation == "RELU":
            return tf.nn.relu

        if activation == "TANH":
            return tf.nn.tanh

        if activation == "SIGMOID":
            return tf.nn.sigmoid

        """if activation == "LINEAR": #tf.nn doesn't have linear. Moving on.
            return           """

    def getRegularization(self):
        regularization = Arguments.objects.get(name="regularization")

        if regularization == "None":
            return tf.Variable("None", tf.string)

        if regularization == "L1":
            return tf.contrib.layers.l1_regularizer

        if regularization == "L2":
            return tf.contrib.layers.l2_regularizer

    def getRegularizationRate(self):
        regularizationRate = Arguments.objects.get(name="regularizationRate")
        number = float(regularizationRate)
        return tf.Variable(number, tf.float64)

    def getProblemType(self):
        problemType = Arguments.objects.get(name="problemType")

        if problemType == "CLASSIFICATION":
            return tf.contrib.learn.ProblemType.CLASSIFICATION

    def getBatchSize(self):
        batchSize = State.objects.get(name="batchSize")
        number = int(batchSize)
        return tf.Variable(number, tf.int32)

    def getNoise(self):
        noise = State.objects.get(name="noise")
        number = int(noise)
        return tf.Variable(number, tf.int32)

    def getTrainToTestRatio(self):
        trainToTestRatio = State.objects.get(name="trainToTestRatio")
        number = int(trainToTestRatio)
        return tf.Variable(number, tf.int32)

    def getNetworkShape(self): #Unsure what to return here
        shape = []
        i = 0
        done = False
        flag = "n"
        while(done != True):
            i = i + 1
            units = input("Enter number of neurons in %d hidden layer: " %(i))
            shape.append(units)
            flag = raw_input("Done? (press n to add another hidden layer) y/n: ")
            if flag == "y":
                done = True
            else:
                done = False

        return shape

    def getDiscretize(self):
        discretize = Run.objects.get(name="discretize")

        if discretize.lower() == "true":
            return tf.Variable(True, tf.bool)

        if discretize.lower() == "false":
            return tf.Variable(False, tf.bool)

        return tf.Variable("None", tf.string)

    def getPlay(self):
        play = Run.objects.get(name="play")

        if play.lower() == "true":
            return tf.Variable(True, tf.bool)

        if play.lower() == "false":
            return tf.Variable(False, tf.bool)

        return tf.Variable("None", tf.string)

    def getReset(self): #Check if reset stored in DB
        return tf.Variable("None", tf.string)

    def getNext(self): #Check if next stored in DB
        return tf.Variable("None", tf.string)


    #REVIEW Verify if each and every line of routine lines up with our dataset requirements
    #TODO Adjust model for our particular inputs after redefining and designing neural net
    #XXX Priority 2
    def classifierModel(self, features, labels, mode, params):
        """
        NAME: classifierModel (dnnClassifier)
        INPUTS: (features: dictionary) - A mapping from key to tensors, the key being the type of feature e.g. '5a'
                    (labels: list) - A list containing all the labels
                    (mode: object) - Defines the model's operation - TRAIN, PREDICT, or EVALUATE
                    (params: dictionary) - dict for additional configuration; in this case contains
                                                    (feature_columns: list) - A list of tf.feature_column.numeric_columns
                                                    (hidden_units: list) - A list containing the number of neurons in each hidden_layer, indexed by layer index
                                                    (n_classes: Integer) - The model must choose between these many classes
                    RETURN: (tf.estimator.EstimatorSpec: object) - A different EstimatorSpec depending on the kind of ModeKeys
                    PURPOSE: This routine defines a Deep Neural Network [DNN] Classifier Model with 2 Hidden Layers
                        The purpose of this routine is to perform the appropriate function on the provided features:
                        If mode is TRAIN :- train the model on the provided input data in features, compute loss and training_op,
                                                    and return an EstimatorSpec(tf.estimator.ModeKeys.TRAIN, loss, train_op).
                        If mode is PREDICT :- compute the predictions on the provided data, which comes without labels,
                                                    store them in a dict() 'predictions' containing keys('class_ids', 'probabilities', 'logits'
                                                    and return an EstimatorSpec(tf.estimator.ModeKeys.PREDICT, predictions).
                                If mode is EVALUATE :- compute the evaluation metrics, the necessary ones chosen in the model_fn,
                                                    and return an EstimatorSpec(tf.estimator.ModeKeys.EVALUATE, loss, eval_metric_ops).
    """

        global stateObjStatus

        net = tf.feature_column.input_layer(features, params['feature_columns'])
        stateObjStatus = False

        for units in range(0, params['hidden_units']):
            net = tf.layers.dense(net, units=self.getNetworkShape(), activation=getTensorflowActivation()) # Using the ReLu activation function
            # net signifies input layer during first iteration

        # Compute logits (one per class)
        logits = tf.layers.dense(net, params['n_classes'], activation=None)
        predicted_classes = tf.argmax(logits, 1)

        # Compute the predictions below
        if mode == tf.estimator.ModeKeys.PREDICT:
            predictions = {
                'class_ids' : predicted_classes[:, tf.newaxis],
                'probabilities' : tf.nn.softmax(logits),
                'logits' : logits,
            }
            return tf.estimator.EstimatorSpec(mode, predictions=predictions)

        loss = tf.losses_sparse_softmax_cross_entropy(labels=labels, logits=logits)

        # Compute the evaluation metrics, to print addl material on TensorBoard
        accuracy = tf.metrics.accuracy(labels=labels,
                                                        predictions=predicted_classes,
                                                        name='acc_op')
        metrics = {'accuracy' : accuracy}
        # scalar will make accuracy available to TensorBoard in both TRAIN and EVAL modes
        tf.summary.scalar('accuracy', accuracy[1])

        if mode == tf.estimator.ModeKeys.EVAL:
            return tf.estimator.EstimatorSpec(mode, loss=loss, eval_metric_ops=metrics)

        assert mode == tf.estimator.ModeKeys.TRAIN
        optimizer = tf.train.AdagradOptimizer
        # global_step keeps a record of the overall training steps taken (to know when to end)
        train_op = optimizer.minimize(loss, global_step=tf.train.get_global_step())

        return tf.estimator.EstimatorSpec(mode, loss=loss, train_op=train_op)


    def build(self, shape, train_x):

        feature_columns = []
        # for each key in the train_x dictionary
        #REVIEW after data loads successfully
        for key in train_x.keys():
            # append a numeric feature column to the list, with key same as the training set key
            feature_columns.append(tf.feature_column.numeric_column(key=key))

        classifier = tf.estimator.Estimator(
            model_fn=self.classifierModel,
            params={ 
                'feature_columns' : feature_columns,
                'hidden_units' : shape,
                'n_classes' : 2,
            }
        )

        return classifier

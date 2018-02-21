#!/usr/bin/python
"""
Deep Learning for Cancer Therapy

Authors:
Kumud Ravisankaran | Valeria Brewer
Ninad Mehta | Suraj Jena

A custom TensorFlow Estimator for a DNNClassifier for pmsignature classification.

This code runs in correlation with ./pmsignature.py, overseen by ./__main__.py
"""
# REVIEW Do Not Run
#=======================================================

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import argparse
import tensorflow as tf

def activation():
    #if <changes to activation>
    #    return activationWrapper(callback)

    #return tf.nn.relu

def learningRate():
    #if <changes to learning rate [nu]:
    #    return learningRateWrapper(callback)

    #return 0.01

def regularization():
    #if <changes to regularization>:
    #    return regularizationWrapper(callback)

    #return L1

def regularizationRate():
    #if <changes to regularization rate>:
    #    return regularizationRateWrapper(callback)

    #return 0

def problemType():
    #if <changes to problem type>:
    #    return problemTypeWrapper(callback)

    #return 0

def ratio():
    #if <changes to ratio of train:test data>:
    #    return ratioWrapper(callback)

    #return 50:50

def noise():
    #if <changes to noise coefficient>:
    #    return noiseWrapper(callback)

    #return 0

def batchSize():
    #if <changes to batch size>:
    #    return batchSizeWrapper(callback)

    #return 10

def featureSelection():
    #if <changes to active features>:
    #    return featureSelectionWrapper(callback)

    #return x1, x2

#REVIEW Verify if each and every line of routine lines up with our dataset requirements
#TODO Adjust model for our particular inputs after redefining and designing neural net
#XXX Priority 2
def classifierModel(features, labels, mode, params):
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
    # returns a dense Tensor as the input layer based on provided feature_columns
    net = tf.feature_column.input_layer(features, params['feature_columns'])

    for units in params['hidden_units']:
        # units is the number of output neurons in a layer
        net = tf.layers.dense(net, units=units, activation=tf.nn.relu) # Using the ReLu activation function
        # net signifies input layer during first iteration - when new layer is created, previous layers -
        # output is in net

    # Compute logits (one per class)
    # No activation function defines this as the output layer
    logits = tf.layers.dense(net, params['n_classes'], activation=None)

    # predict() section of the model
    # Compute the predictions below
    predicted_classes = tf.argmax(logits, 1)
    # ModeKeys in tf.estimator defines the mode, which has PREDICT as one mode
    if mode == tf.estimator.ModeKeys.PREDICT:
        # Create a predictions dict to store class ids and probabilities, and also the logits
        predictions = {
            'class_ids' : predicted_classes[:, tf.newaxis],
            'probabilities' : tf.nn.softmax(logits),
            'logits' : logits,
        }
        # Return an EstimatorSpec with the mode as PREDICT and the predictions dict
        return tf.estimator.EstimatorSpec(mode, predictions=predictions)

    # Compute the loss
    # labels contains the ground truths, and logits are the logits calculated from earlier
    loss = tf.losses_sparse_softmax_cross_entropy(labels=labels, logits=logits)

    # Compute the evaluation metrics, if any - only accuracy added here
    # Need metrics to print additional material on TensorBoard
    accuracy = tf.metrics.accuracy(labels=labels,
                                                    predictions=predicted_classes,
                                                    name='acc_op')
    metrics = {'accuracy' : accuracy
    # scalar will make accuracy available to TensorBoard in both TRAIN and EVAL modes
    tf.summary.scalar('accuracy', accuracy[1])

        # Entering evaluate() mode
    if mode == tf.estimator.ModeKeys.EVAL:
        # Evaluate mode simply returns an EstimatorSpec with the mode, loss and metrics
        return tf.estimator.EstimatorSpec(mode, loss=loss, eval_metric_ops=metrics)

    # Create training operation returned by the TRAIN mode call
    # ensure mode is TRAIN
    assert mode == tf.estimator.ModeKeys.TRAIN
    # Write a call to an optimizer function - using the Adagrad Gradient Descent Optimizer here
    optimizer = tf.train.AdagradOptimizer
    # The actual training operation, which makes use of the optimizer and gets a result
    # global_step keeps a record of the overall training steps taken (to know when to end)
    train_op = optimizer.minimize(loss, global_step=tf.train.get_global_step())

    # Only when in TRAIN mode, model returns an EstimatorSpec containing the mode, loss and
    # the training operation defined above
    return tf.estimator.EstimatorSpec(mode, loss=loss, train_op=train_op)

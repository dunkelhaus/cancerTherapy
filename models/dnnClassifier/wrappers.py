#!/usr/bin/python

# Write wrappers for TypeScript files in playground/

""" 
  Wrappers Needed: 
        learning rate, 
        activation function, 
        regularization, 
        regularization rate, 
        problem type, 
        ratio of training to test data,
        noise,
        batch size,
        which features do you want to feed in,
        add hidden layer,
        subtract hidden layer,
        add neuron to layer[i],
        remove neuron from layer[i]
        
"""
import json

def learningRateWrapper(callback):
    #check for changes in learning rate    

def activationWrapper(callback):
    #check for changes in activation function

def regularizationWrapper(callback):
    #check for changes in regularization

def regularizationRateWrapper(callback):
    #check for changes in regularization rate

def problemTypeWrapper(callback):
    #check for changes in problem type

def ratioWrapper(callback):
    #check for changes in ratio of training to test data

def noiseWrapper(callback):
    #check for changes in noise

def batchWrapper(callback):
    #check for changes in batch size

def featuresWrapper(callback):
    #check for changes in features to feed in

def addHiddenLayer(callback):
    #check for changes in number of hidden layers (add)

def rmHiddenLayer(callback):
    #check for changes in number of hidden layers (subtract)

def addNeuron(callback):
    #check for changes in neuron count for layer (add)

def rmNeuron(callback):
    #check for changes in neuron count for layer (subtract)

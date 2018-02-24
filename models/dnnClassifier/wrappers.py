#!/usr/bin/python

# Write wrappers for TypeScript files in playground/

import json


#this loads the correct data from json object
def JSONload(value):
    #do something and return new value from json

def datasetWrapper(callback):
    return JSONload('dataset')

def newDatasetWrapper(callback):
    return JSONload('newDataset')

def numHiddenLayersWrapper(callback):
    return JSONload('numHiddenLayerss')

def networkShapeWrapper(callback):
    return JSONload('networkShape')

def showTestDataWrapper(callback):
    #check for changes in test data
    return JSONload('showTestData')

def discretizeWrapper(callback):
    #check for changes
    return JSONload('discretize')

def percTrainDataWrapper(callback):
    return JSONload('percTrainData')

def noiseWrapper(callback):
    return JSONload('noise')  

def batchSizeWrapper(callback):
    return JSONload('batchSize')

def activationWrapper(callback):
    return JSONload('activation')   

def learningRateWrapper(callback):
    return JSONload('learningRate')  

def regularizationWrapper(callback):
    return JSONload('regularization')  

def regularizationRateWrapper(callback):
    return JSONload('regularizationRate')  

def problemTypeWrapper(callback):
    return JSONload('problem')   

def initZeroWrapper(callback):
    return JSONload('initZero')

def tutorialWrapper(callback):
    return JSONload('tutorial')
  
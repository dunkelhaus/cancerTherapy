#!/usr/bin/python

# Write wrappers for TypeScript files in playground/

import json
import requests

#/v1/state: numHiddenLayers, networkShape, noise, batchSize, percTrainData
#/v1/run:
#/v1/reset:
#/v1/...: 

#this loads the correct data from json object
def JSONload(url):
    #The incoming JSON object will come by POST request. 
    req = requests.get(url)
    json = req.json()
    return json

def datasetWrapper(callback):
    json = JSONload('')
    return json['dataset']

def newDatasetWrapper(callback):
    json = JSONload('')
    return json['newDataset']

def numHiddenLayersWrapper(callback):
    json = JSONload('/v/1/state')
    return json['numHiddenLayers']

def networkShapeWrapper(callback):
    json = JSONload('/v/1/state')
    return json['networkShape']

def showTestDataWrapper(callback):
    json = JSONload('')
    return json['showTestData']

def discretizeWrapper(callback):
    json = JSONload('')
    return json['discretize']

def percTrainDataWrapper(callback):
    json = JSONload('/v/1/state')
    return json['percTrainData']

def noiseWrapper(callback):
    json = JSONload('/v/1/state')
    return json['noise']  

def batchSizeWrapper(callback):
    json = JSONload('/v/1/state')
    return json['batchSize']

def activationWrapper(callback):
    json = JSONload('')
    return json['activation']

def learningRateWrapper(callback):
    json = JSONload('')
    return json['learningRate']    

def regularizationWrapper(callback):
    json = JSONload('')
    return json['regularization']

def regularizationRateWrapper(callback):
    json = JSONload('')
    return json['regularizationRate']

def problemTypeWrapper(callback):
    json = JSONload('')
    return json['problem']

def initZeroWrapper(callback):
    json = JSONload('')
    return json['initZero']

def tutorialWrapper(callback):
    json = JSONload('')
    return json['tutorial']
  
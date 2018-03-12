#!/usr/bin/python

# Write wrappers for TypeScript files in playground/

import json
import requests

#/v1/: ALL
#/v1/arguments: learningRate, activation, regularization, regularizationRate, problemType
#/v1/state: numHiddenLayers, networkShape, noise, batchSize, percTrainData
#/v1/run: reset, play, nextButton, showTestData, discretize
#/v1/settings: dataset, weights
#/v1/features: features

#Request data using XMLHttpRequest and return the appropriate JSON object
def JSONload(url):
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", url, true, "vbrewer", "mlkillscancer") 
    xmlHttp.responseType = "json"
    xmlHttp.send(null);
    if xmlHttp.readyState == xmlHttp.DONE:
    	return xmlHttp.responseText

def datasetWrapper(callback):
    json = JSONload('/v1/settings/')
    return json['dataset']

def numHiddenLayersWrapper(callback):
    json = JSONload('/v1/state/')
    return json['numHiddenLayers']

def networkShapeWrapper(callback):
    json = JSONload('/v1/state/')
    return json['networkShape']

def showTestDataWrapper(callback):
    json = JSONload('/v1/run/')
    return json['showTestData']

def discretizeWrapper(callback):
    json = JSONload('/v1/run/')
    return json['discretize']

def percTrainDataWrapper(callback):
    json = JSONload('/v1/state/')
    return json['percTrainData']

def noiseWrapper(callback):
    json = JSONload('/v1/state/')
    return json['noise']  

def batchSizeWrapper(callback):
    json = JSONload('/v1/state/')
    return json['batchSize']

def activationWrapper(callback):
    json = JSONload('/v1/arguments/')
    return json['activation']

def learningRateWrapper(callback):
    json = JSONload('/v1/arguments/')
    return json['learningRate']    

def regularizationWrapper(callback):
    json = JSONload('/v1/arguments/')
    return json['regularization']

def regularizationRateWrapper(callback):
    json = JSONload('/v1/arguments/')
    return json['regularizationRate']

def problemTypeWrapper(callback):
    json = JSONload('/v1/arguments/')
    return json['problem']

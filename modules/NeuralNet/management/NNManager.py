"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

 A custom TensorFlow Estimator for a DNNClassifier for mutation classification.

 This code runs in correlation with ./dataProcessor.py, overseen by ./__main__.py
"""
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
import execManager as ex
import sys

#import  sys
#sys.path.append('/home/skjena/cancerTherapy/modules/RESTAPI/mutationDnnWeb/')
#from mutationDnnWeb.models import V1, State, Run, Arguments, Features, Settings
#from mutationDnnWeb.serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
import argparse
import tensorflow as tf
#from django.core.exceptions import ObjectDoesNotExist
#from typings.network import Network

def modelZero(trainPath):
    #Call the execTrain, Test and Eval function
    ex.execTrain(trainPath)
    ex.execTest()
    ex.execEval()

def main():
     print("Here in NN Manager before calling modelZero")

     trainPath = str(sys.argv[1])
     modelZero(trainPath)

if __name__ == '__main__' :
    main()

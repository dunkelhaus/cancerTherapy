"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

 A custom TensorFlow Estimator for a DNNClassifier for mutation classification.

 This code runs in correlation with core/dataProcessor.py, overseen by DataDispatcher/DDManager.py
"""
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from NeuralNet.management.execManager import execManager
import sys
import os
sys.path.insert(0, '/home/skjena/cancerTherapy/modules/RESTAPI/mutationDnnWeb')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mutationDnnWeb.settings")
import django
django.setup()
from mutationDnnWeb.models import V1, State, Run, Arguments, Features, Settings
from mutationDnnWeb.serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
import argparse
import tensorflow as tf
from Status.Status import Status
import os
from django.core.exceptions import ObjectDoesNotExist
from typings.network import Network
sys.path.insert(0, '/home/skjena/cancerTherapy/modules')
from RESTAPI.RAPIManager import RAPIManager

class NNManager():
    def __init__(self, trainpath, testpath, network, problem):
        self.iteration = 0
        self.trainpath = trainpath
        self.testpath = testpath
        self.network = network
        self.problemType = problem
        self.executor = execManager(self.trainpath, self.testpath, self.network, self.problemType)
        self.status = Status("NNManager")

    def modelZero(self):
        self.status.message(1, "modelZero()")
        self.executor.train()
        self.executor.test()
        self.executor.predict()
        self.status.message(0, "modelZero()")

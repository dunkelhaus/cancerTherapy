#!/usr/bin/env python
import os
import sys
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
import socket
import django
django.setup()
from mutationDnnWeb.mutationDnnWeb.models import V1, State, Run, Arguments, Features, Settings
from mutationDnnWeb.mutationDnnWeb.serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
from mutationDnnWeb.typings.network import Network

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "RESTAPI.mutationDnnWeb.mutationDnnWeb.settings")

class RAPIManager():
    def __init__(self):
        self.djangostatus = self.isRunning()
        self.network = Network()
        self.networkstate = False
        self.status = Status("RAPIManager")

    def getArguments(self):
        self.status.message(1, "getArguments(self)")
        model = Arguments.objects.get(id=1)
        self.network.arguments.learningRate = model.learningRate
        self.network.arguments.activation = model.activation
        self.network.arguments.regularization = model.regularization
        self.network.arguments.regularizationRate = model.regularizationRate
        self.network.arguments.problemType = model.problemType

        self.status.message(0, "getArguments(self)")
        return

    def getState(self):
        self.status.message(1, "getState(self)")
        model = State.objects.get(id=1)
        self.network.state.batchSize = model.batchSize
        self.network.state.noise = model.noise
        self.network.state.trainToTestRatio = model.trainToTestRatio
        self.network.state.numHiddenLayers = model.numHiddenLayers
        self.network.state.networkShape = model.networkShape

        self.status.message(0, "getState(self)")
        return

    def getFeatures(self):
        self.status.message(1, "getFeatures(self)")
        model = Features.objects.get(id=1)
        self.network.features.cXa = model.cXa
        self.network.features.cXg = model.cXg
        self.network.features.cXt = model.cXt
        self.network.features.tXa = model.tXa
        self.network.features.tXg = model.tXg
        self.network.features.tXc = model.tXc

        self.status.message(0, "getFeatures(self)")
        return

    def getRun(self):
        self.status.message(1, "getRun(self)")
        model = Run.objects.get(id=1)
        self.network.run.reset = model.reset
        self.network.run.play = model.play
        self.network.run.nextButton = model.nextButton
        self.network.run.showTestData = model.showTestData
        self.network.run.discretize = model.discretize

        self.status.message(0, "getRun(self)")
        return

    def getSettings(self):
        self.status.message(1, "getSettings(self)")
        model = Settings.objects.get(id=1)
        self.network.settings.dataset = model.dataset
        self.network.settings.weights = model.weights
        self.network.settings.biases = model.biases

        self.status.message(0, "getSettings(self)")
        return

    def populate(self):
        if self.djangostatus == False:
            self.isRunning()
            return self.networkstate

        self.status.message(1, "populate(self)")
        self.network.arguments = self.getArguments()
        self.network.state = self.getState()
        self.network.settings = self.getSettings()
        self.network.features = self.getFeatures()
        self.network.run = self.getRun()
        self.status.message(7)
        self.networkstate = True

        self.status.message(0, "populate(self)")
        return self.networkstate

    def isRunning(self):
        self.status.message(1, "isRunning(self)")
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = sock.connect_ex(('127.0.0.1',80))
        sock.close()
        if result == 0:
            self.djangostatus = False
            self.status.message(8)
        else:
            self.djangostatus = True
            self.status.message(9)

        self.status.message(0, "isRunning(self)")
        return self.djangostatus

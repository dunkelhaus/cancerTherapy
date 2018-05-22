#!/usr/bin/env python
import os
import sys
import socket
from RESTAPI.mutationDnnWeb.mutationDnnWeb.models import V1, State, Run, Arguments, Features, Settings
from RESTAPI.mutationDnnWeb.mutationDnnWeb.serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
from RESTAPI.mutationDnnWeb.typings.network import Network

sys.path.insert(0, "/home/skjena/cancerTherapy/modules")

class RAPIManager():
    def __init__(self):
        self.djangostatus = self.isRunning()
        self.network = Network()
        self.networkstate = False
        self.status = Status("RAPIManager")

    def getArguments(self):
        self.status.message(1, "getArguments(self)")
        arguments = Arguments.objects.all()

        self.status.message(0, "getArguments(self)")
        return

    def getState(self):
        self.status.message(1, "getState(self)")
        state = State.objects.all()

        self.status.message(0, "getState(self)")
        return

    def getFeatures(self):
        self.status.message(1, "getFeatures(self)")
        features = Features.objects.all()

        self.status.message(0, "getFeatures(self)")
        return

    def getRun(self):
        self.status.message(1, "getRun(self)")
        run = Run.objects.all()

        self.status.message(0, "getRun(self)")
        return

    def getSettings(self):
        self.status.message(1, "getSettings(self)")
        settings = Settings.objects.all()

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

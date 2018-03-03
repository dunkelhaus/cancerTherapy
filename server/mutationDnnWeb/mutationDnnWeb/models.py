# -*- coding: utf-7 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class V1(models.Model):
	learningRate = models.FloatField()
	activation = models.CharField(max_length=10)
	regularization = models.CharField(max_length=10)
	regularizationRate = models.IntegerField()
	problemType = models.CharField(max_length=20)	
	batchSize = models.IntegerField()
	noise = models.IntegerField()
	trainToTestRatio = models.FloatField()
	numHiddenLayers = models.IntegerField()
	#networkShape:[10,10]
	reset = models.BooleanField()
	play =  models.BooleanField()
	pause = models.BooleanField()
	showTestData = models.BooleanField()
	discretize = models.BooleanField()
	features = 0 
	dataset = 0 
	weights = 0

	def __Str__(self):
		return self.activation

class Arguments(models.Model):
	learningRate = models.FloatField()
	activation = models.CharField(max_length=10)
	regularization = models.CharField(max_length=10)
	regularizationRate = models.IntegerField()
	problemType = models.CharField(max_length=20)

	def __str__(self):
		return self.activation

class State(models.Model):
	batchSize = models.IntegerField()
	noise = models.IntegerField()
	trainToTestRatio = models.FloatField()
	numHiddenLayers = models.IntegerField()
	#networkShape:[10,10]

	def __str__(self):
		return self.numHiddenLayers

class Run(models.Model):
	reset = models.BooleanField()
	play =  models.BooleanField()
	pause = models.BooleanField()
	showTestData = models.BooleanField()
	discretize = models.BooleanField()

	def __str__(self):
		return self.reset


class Features(models.Model):
	#Not sure how to represent our features. 0 for now
	features = 0

	def __str__(self):
		return self.features


class Settings(models.Model):
	#Not sure how to represent dataset and weights. 0 for now
	dataset = 0
	weights = 0

	def __str__(self):
		return self.weights

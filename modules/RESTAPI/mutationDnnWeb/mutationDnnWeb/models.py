# -*- coding: utf-7 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class V1(models.Model):
	learningRate = models.FloatField()
	activation = models.CharField(max_length=30)
	regularization = models.CharField(max_length=30)
	regularizationRate = models.IntegerField()
	problemType = models.CharField(max_length=30)
	batchSize = models.IntegerField()
	noise = models.IntegerField()
	trainToTestRatio = models.FloatField()
	numHiddenLayers = models.IntegerField()
	networkShape = models.CharField(max_length=30)
	reset = models.BooleanField()
	play =  models.BooleanField()
	pause = models.BooleanField()
	showTestData = models.BooleanField()
	discretize = models.BooleanField()
	cXa = models.BooleanField()
	cXg = models.BooleanField()
	cXt = models.BooleanField()
	tXa = models.BooleanField()
	tXg = models.BooleanField()
	tXc = models.BooleanField()
	dataset = models.CharField(max_length=30)
	weights = models.BooleanField()
	biases = models.BooleanField()

	def __str__(self):
		return self.problemType

class Arguments(models.Model):
	learningRate = models.FloatField()
	activation = models.CharField(max_length=30)
	regularization = models.CharField(max_length=30)
	regularizationRate = models.IntegerField()
	problemType = models.CharField(max_length=30)

	def __str__(self):
		return self.learningRate

class State(models.Model):
	batchSize = models.IntegerField()
	noise = models.IntegerField()
	trainToTestRatio = models.FloatField()
	numHiddenLayers = models.IntegerField()
	networkShape = models.CharField(max_length=30)

	def __str__(self):
		return self.networkShape

class Run(models.Model):
	reset = models.BooleanField()
	play =  models.BooleanField()
	nextButton = models.BooleanField() #can't use 'next' because its a keyword
	showTestData = models.BooleanField()
	discretize = models.BooleanField()

	def __str__(self):
		return u'%s' % (self.reset)

class Features(models.Model):
	cXa = models.BooleanField()
	cXg = models.BooleanField()
	cXt = models.BooleanField()
	tXa = models.BooleanField()
	tXg = models.BooleanField()
	tXc = models.BooleanField()

	def __str__(self):
		return self.cXa


class Settings(models.Model):
	dataset = models.CharField(max_length=30)
	weights = models.BooleanField()
	biases = models.BooleanField()

	def __str__(self):
		return self.weights

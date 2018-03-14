from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import V1, State, Run, Arguments, Features, Settings
from .serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
from classifiers.dnnClassifier.DNNClassifierModel import DNNClassifierModel
#/v1/
model = DNNClassifierModel()

class V1List(APIView):

    def get(self, request):
        if request.method == 'GET':
            v1 = V1.objects.all()
            serializer = V1Serializer(v1, many=True)
            return Response(serializer.data)
        else:
            print("ERROR from views.py! GET ")


#/v1/arguments/
class ArgumentList(APIView):
    def get(self, request):
        if request.method == 'GET':
            #args = Arguments.objects.all()  NOTE Not needed, commented for now
            #serializer = ArgSerializer(args, many=True) NOTE Not needed, commented for now
            arguments = model.network.getArguments()
            serializer2 = ArgSerializer(arguments, many=True)
            return Response(serializer2.data)
        else:
            print("ERROR from views.py! GET ")

    def post(self, request):
        if request.method == 'POST':
            args = Arguments.objects.all().first()
            serializer = ArgSerializer(args, data=request.data)
            #ArgumentListDecoder()
            # learningRate
            try:
                newLearningRate = Arguments.objects.get(name="learningRate")
            except ObjectDoesNotExist:
                newLearningRate = None

            newLearningRatePlaceholder = model.learningRateCallback(newLearningRate)

            # activation
            try:
                newActivation = Arguments.objects.get(name="activation")
            except ObjectDoesNotExist:
                newActivation = None

            newActivationPlaceholder = model.activationCallback(newActivation)

            # regularization
            try:
                newRegularization = Arguments.objects.get(name="regularization")
            except ObjectDoesNotExist:
                newRegularization = None

            newRegularizationplaceholder = model.regularizationCallback(newRegularization)

            # regularizationRate
            try:
                newRegularizationRate = Arguments.objects.get(name="regularizationRate")
            except ObjectDoesNotExist:
                newRegularizationRate = None

            newRegularizationRatePlaceholder = model.regularizationRateCallback(newRegularizationRate)

            # problemType
            try:
                newProblemType = Arguments.objects.get(name="problemType")
            except ObjectDoesNotExist:
                newProblemType = None

            newProblemTypePlaceholder = model.problemTypeCallback(newProblemType)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")


#/v1/state/
class StateList(APIView):
    def get(self, request):
        if request.method == 'GET':
            #state = State.objects.all() NOTE Not needed, commented for now
            #serializer = StateSerializer(state, many=True) NOTE Not needed, commented for now
            states = model.network.getState()
            serializer2 = ArgSerializer(states, many=True)
            return Response(serializer2.data)
        else:
            print("ERROR from views.py! GET ")

    def post(self, request):
        if request.method == 'POST':
            state = State.objects.all().first()
            serializer = StateSerializer(state, data=request.data)
            #StateListDecoder()
            # batchSize
            try:
                newBatchSize = State.objects.get(name="batchSize")
            except ObjectDoesNotExist:
                newBatchSize = None

            newBatchSizePlaceholder = model.batchSizeCallback(newBatchSize)

            # noise
            try:
                newNoise = State.objects.get(name="noise")
            except ObjectDoesNotExist:
                newNoise = None

            newNoisePlaceholder = model.noiseCallback(newNoise)

            # trainToTestRatio
            try:
                newTrainToTestRatio = State.objects.get(name="trainToTestRatio")
            except ObjectDoesNotExist:
                newTrainToTestRatio = None

            newTrainToTestRatioPlaceholder = model.trainToTestRatioCallback(newTrainToTestRatio)

            # numHiddenLayers
            try:
                newNumHiddenLayers = State.objects.get(name="numHiddenLayers")
            except ObjectDoesNotExist:
                newNumHiddenLayers = None

            newNumHiddenLayersPlaceholder = model.numHiddenLayersCallback(newNumHiddenLayers)

            # networkShape
            try:
                newNetworkShape = State.objects.get(name="networkShape")
            except ObjectDoesNotExist:
                newNetworkShape = None

            newNetworkShapePlaceholder = model.networkShapeCallback(newNetworkShape)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

#/v1/run/
class RunList(APIView):
    def get(self, request):
        if request.method == 'GET':
            #run = Run.objects.all() NOTE Not needed, commented for now
            #serializer = RunSerializer(run, many=True) NOTE Not needed, commented for now
            runs = model.network.getRun()
            serializer2 = ArgSerializer(runs, many=True)
            return Response(serializer2.data)
        else:
            print("ERROR from views.py! GET ")


    def post(self, request):
        if request.method == 'POST':
            run = Run.objects.all().first()
            serializer = RunSerializer(run, data=request.data)
            #RunListDecoder()
            # reset
            try:
                newReset = Run.objects.get(name="reset")
            except ObjectDoesNotExist:
                newReset = None

            newResetPlaceholder = model.resetCallback(newReset)

            # play
            try:
                newPlay = Run.objects.get(name="play")
            except ObjectDoesNotExist:
                newPlay = None

            newPlayPlaceholder = model.playCallback(newPlay)

            # nextButton
            try:
                newNextButton = Run.objects.get(name="nextButton")
            except ObjectDoesNotExist:
                newNextButton = None

            newNextButtonPlaceholder = model.nextButtonCallback(newNextButton)

            # showTestData
            try:
                newShowTestData = Run.objects.get(name="showTestData")
            except ObjectDoesNotExist:
                newShowTestData = None

            newShowTestDataPlaceholder = model.showTestDataCallback(newShowTestData)

            # discretize
            try:
                newDiscretize = Run.objects.get(name="discretize")
            except ObjectDoesNotExist:
                newDiscretize = None

            newDiscretizePlaceholder = model.discretizeCallback(newDiscretize)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

#/v1/features/
class FeatureList(APIView):
    def get(self, request):
        if request.method == 'GET':
            #features = Features.objects.all() NOTE Not needed, commented for now
            #serializer = FeatureSerializer(features, many=True) NOTE Not needed, commented for now
            feature = model.network.getFeatures()
            serializer2 = ArgSerializer(feature, many=True)
            return Response(serializer2.data)
        else:
            print("ERROR from views.py! GET ")


    def post(self, request):
        if request.method == 'POST':
            features = Features.objects.all().first()
            serializer = FeatureSerializer(features, data=request.data)
            #FeatureListDecoder()
            # NOTE: Not sure how to represent features
            #Extract the following
            # features
            try:
                newFeatures = Features.objects.get(name="features")
            except ObjectDoesNotExist:
                newFeatures = None

            newFeaturesPlaceholder = model.featuresCallback(newFeatures)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

#/v1/settings/
class SettingsList(APIView):
    def get(self, request):
        if request.method == 'GET':
            #settings = Settings.objects.all() NOTE Not needed, commented for now
            #serializer = SettingsSerializer(settings, many=True) NOTE Not needed, commented for now
            setting = model.network.getSettings()
            serializer2 = ArgSerializer(setting, many=True)
            return Response(serializer2.data)
        else:
            print("ERROR from views.py! GET ")

    def post(self, request):
        if request.method == 'POST':
            settings = Settings.objects.all().first()
            serializer = SettingsSerializer(settings, data=request.data)
            #SettingsListDecoder()
            #Extract the following
            # dataset
            try:
                newDataset = Settings.objects.get(name="dataset")
            except ObjectDoesNotExist:
                newDataset = None

            newDatasetPlaceholder = model.datasetCallback(newDataset)

            # weights
            try:
                newWeights = Settings.objects.get(name="weights")
            except ObjectDoesNotExist:
                newWeights = None

            newWeightsPlaceholder = model.weightsCallback(newWeights)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import V1, State, Run, Arguments, Features, Settings
from .serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer

#from mlmodels.dnnClassifier.DNNClassifierModel import djangoToTensorflow
#/v1/
class V1List(APIView):

    def get(self, request):
        if request.method == 'GET':
            v1 = V1.objects.all()
            serializer = V1Serializer(v1, many=True)
            #Callback to tensorflow here
            #splitV1List(  ,  v1) #Add callback here?
            return Response(serializer.data)
        else:
            print("ERROR from views.py! GET ")

    def V1ListDecoder():

        # Extract the following

        # weights
        try:
            newWeights = V1.objects.get(name="weights")
        except ObjectDoesNotExist:
            newWeights = None

#/v1/arguments/
class ArgumentList(APIView):
    def get(self, request):
        if request.method == 'GET':
            args = Arguments.objects.all()
            serializer = ArgSerializer(args, many=True)
            #Callback to tensorflow here
            #splitArgumentList(  ,  args) #Add callback here?
            return Response(serializer.data)
        else:
            print("ERROR from views.py! GET ")

    def post(self, request):
        if request.method == 'POST':
            args = Arguments.objects.all().first()
            serializer = ArgSerializer(args, data=request.data)
            ArgumentListDecoder()

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

    def ArgumentListDecoder():
        #Extract the following
        # learningRate
        try:
            newLearningRate = Arguments.objects.get(name="learningRate")
        except ObjectDoesNotExist:
            newLearningRate = None

        learningRateCallback(newLearningRate)

        # activation
        try:
            newActivation = Arguments.objects.get(name="activation")
        except ObjectDoesNotExist:
            newActivation = None

        activationCallback(newActivation)

        # regularization
        try:
            newRegularization = Arguments.objects.get(name="regularization")
        except ObjectDoesNotExist:
            newRegularization = None

        regularizationCallback(newRegularization)

        # regularizationRate
        try:
            newRegularizationRate = Arguments.objects.get(name="regularizationRate")
        except ObjectDoesNotExist:
            newRegularizationRate = None

        regularizationRateCallback(newRegularizationRate)

        # problemType
        try:
            newProblemType = Arguments.objects.get(name="problemType")
        except ObjectDoesNotExist:
            newProblemType = None

        problemTypeCallback(newProblemType)


#/v1/state/
class StateList(APIView):
    def get(self, request):
        if request.method == 'GET':
            state = State.objects.all()
            serializer = StateSerializer(state, many=True)
            #djangoToTensorflow()
            return Response(serializer.data)
        else:
            print("ERROR from views.py! GET ")

    def post(self, request):
        if request.method == 'POST':
            state = State.objects.all().first()
            serializer = StateSerializer(state, data=request.data)
            StateListDecoder()
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

    def StateListDecoder():

        # Extract the following
        # batchSize
        try:
            newBatchSize = State.objects.get(name="batchSize")
        except ObjectDoesNotExist:
            newBatchSize = None

        batchSizeCallback(newBatchSize)

        # noise
        try:
            newNoise = State.objects.get(name="noise")
        except ObjectDoesNotExist:
            newNoise = None

        noiseCallback(newNoise)

        # trainToTestRatio
        try:
            newTrainToTestRatio = State.objects.get(name="trainToTestRatio")
        except ObjectDoesNotExist:
            newTrainToTestRatio = None

        trainToTestRatioCallback(newTrainToTestRatio)

        # numHiddenLayers
        try:
            newNumHiddenLayers = State.objects.get(name="numHiddenLayers")
        except ObjectDoesNotExist:
            newNumHiddenLayers = None

        # networkShape
        try:
            newNetworkShape = State.objects.get(name="networkShape")
        except ObjectDoesNotExist:
            newNetworkShape = None

        networkShapeCallback(newNetworkShape)

#/v1/run/
class RunList(APIView):
    def get(self, request):
        if request.method == 'GET':
            run = Run.objects.all()
            serializer = RunSerializer(run, many=True)
            #djangoToTensorflow()
            return Response(serializer.data)
        else:
            print("ERROR from views.py! GET ")


    def post(self, request):
        if request.method == 'POST':
            run = Run.objects.all().first()
            serializer = RunSerializer(run, data=request.data)
            RunListDecoder()
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

    def RunListDecoder():
        #Extract the following
        # reset
        try:
            newReset = Run.objects.get(name="reset")
        except ObjectDoesNotExist:
            newReset = None

        resetCallback(newReset)

        # play
        try:
            newPlay = Run.objects.get(name="play")
        except ObjectDoesNotExist:
            newPlay = None

        playCallback(newPlay)

        # nextButton
        try:
            newNextButton = Run.objects.get(name="nextButton")
        except ObjectDoesNotExist:
            newNextButton = None

        nextButtonCallback(newNextButton)

        # showTestData
        try:
            newShowTestData = Run.objects.get(name="showTestData")
        except ObjectDoesNotExist:
            newShowTestData = None

        showTestDataCallback(newShowTestData)

        # discretize
        try:
            newDiscretize = Run.objects.get(name="discretize")
        except ObjectDoesNotExist:
            newDiscretize = None

        discretizeCallback(newDiscretize)

#/v1/features/
class FeatureList(APIView):
    def get(self, request):
        if request.method == 'GET':
            features = Features.objects.all()
            serializer = FeatureSerializer(features, many=True)
            #djangoToTensorflow()
            return Response(serializer.data)
        else:
            print("ERROR from views.py! GET ")


    def post(self, request):
        if request.method == 'POST':
            features = Features.objects.all().first()
            serializer = FeatureSerializer(features, data=request.data)
            FeatureListDecoder()
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

    def FeatureListDecoder():
        # NOTE: Not sure how to represent features
        #Extract the following
        # features
        try:
            newFeatures = Features.objects.get(name="features")
        except ObjectDoesNotExist:
            newFeatures = None

        featuresCallback(newFeatures)

#/v1/settings/
class SettingsList(APIView):
    def get(self, request):
        if request.method == 'GET':
            settings = Settings.objects.all()
            serializer = SettingsSerializer(settings, many=True)
            #djangoToTensorflow()
            return Response(serializer.data)
        else:
            print("ERROR from views.py! GET ")

    def post(self, request):
        if request.method == 'POST':
            settings = Settings.objects.all().first()
            serializer = SettingsSerializer(settings, data=request.data)
            SettingsListDecoder()
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("ERROR from views.py! POST ")

    def SettingsListDecoder():
        #Extract the following
        # dataset
        try:
            newDataset = Settings.objects.get(name="dataset")
        except ObjectDoesNotExist:
            newDataset = None

        datasetCallback(newDataset)

        # weights
        try:
            newWeights = Settings.objects.get(name="weights")
        except ObjectDoesNotExist:
            newWeights = None

        weightsCallback(newWeights)

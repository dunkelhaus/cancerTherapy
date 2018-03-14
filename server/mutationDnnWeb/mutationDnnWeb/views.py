from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import tensorflow as tf
from .models import V1, State, Run, Arguments, Features, Settings
from .serializers import V1Serializer, ArgSerializer, StateSerializer, RunSerializer, FeatureSerializer, SettingsSerializer
from classifiers.dnnClassifier.DNNClassifierModel import DNNClassifierModel
#/v1/
model = DNNClassifierModel()

class V1List(APIView):
    def get(self, request, format=None):
        v1 = V1.objects.all()
        serializer = V1Serializer(v1, many=True)
        return Response(serializer.data)

#/v1/arguments/
class ArgumentList(APIView):
    def get(self, request):
        arguments = Arguments.objects.all()
        serializer = ArgSerializer(arguments, many=True)
        return Response(serializer.data)

    def post(self, request):
        args = Arguments.objects.all().first()
        serializer = ArgSerializer(args, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#/v1/state/
class StateList(APIView):
    def get(self, request):
        state = State.objects.all()
        serializer = StateSerializer(state, many=True)
        return Response(serializer.data)

    def post(self, request):
        state = State.objects.all().first()
        serializer = StateSerializer(state, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#/v1/run/
class RunList(APIView):
    def get(self, request):
        run = Run.objects.all()
        serializer = RunSerializer(run, many=True)
        return Response(serializer.data)

    def post(self, request):
        run = Run.objects.all().first()
        serializer = RunSerializer(run, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#/v1/features/
class FeatureList(APIView):
    def get(self, request):
        features = Features.objects.all()
        serializer = FeatureSerializer(features, many=True)
        return Response(serializer.data)

    def post(self, request):
        features = Features.objects.all().first()
        serializer = FeatureSerializer(features, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#/v1/settings/
class SettingsList(APIView):
    def get(self, request):
        settings = Settings.objects.all()
        serializer = SettingsSerializer(settings, many=True)

        return Response(serializer.data)

    def post(self, request):
        settings = Settings.objects.all().first()
        serializer = SettingsSerializer(settings, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

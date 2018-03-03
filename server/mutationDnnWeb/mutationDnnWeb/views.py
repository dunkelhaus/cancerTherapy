#from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import State, Run, Arguments, Features, Settings
from .serializers import V1Serializer

#/v1/arguments/
#@api_view(['GET', 'POST'])
class ArgumentList(APIView):
	def get(self, request):
		args = Arguments.objects.all()
		serializer = V1Serializer(args, many=True)
		return Response(serializer.data)

	def post(self):
		pass

#/v1/state/
#@api_view(['GET', 'POST'])
class StateList(APIView):
	def get(self, request):
		state = State.objects.all()
		serializer = V1Serializer(state, many=True)
		return Response(serializer.data)

	def post(self):
		pass

#/v1/run/
#@api_view(['GET', 'POST'])
class RunList(APIView):
	def get(self, request):
		run = Run.objects.all()
		serializer = V1Serializer(run, many=True)
		return Response(serializer.data)

	def post(self):
		pass

#/v1/features/
#@api_view(['GET', 'POST'])
class FeatureList(APIView):
	def get(self, request):
		features = Features.objects.all()
		serializer = V1Serializer(features, many=True)
		return Response(serializer.data)

	def post(self):
		pass

#/v1/settings/
#@api_view(['GET', 'POST'])
class SettingsList(APIView):
	def get(self, request):
		settings = Settings.objects.all()
		serializer = V1Serializer(settings, many=True)
		return Response(serializer.data)

	def post(self):
		pass

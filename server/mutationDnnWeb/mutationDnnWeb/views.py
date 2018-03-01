from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import State, Run, Arguments, Features, Settings
from .serializers import V1Serializer

#/v1/arguments/
class ArgumentList(APIView):
	def GET(self):
		args = Arguments.objects.all()
		serializer = V1Serializer(args, many=True)
		return Response(serializer.data)

	def POST(self):
		pass

#/v1/state/
class StateList(APIView):
	def GET(self):
		state = State.objects.all()
		serializer = V1Serializer(state, many=True)
		return Response(serializer.data)

	def POST(self):
		pass

#/v1/run/
class RunList(APIView):
	def GET(self):
		run = Run.objects.all()
		serializer = V1Serializer(run, many=True)
		return Response(serializer.data)

	def POST(self):
		pass

#/v1/features/
class FeatureList(APIView):
	def GET(self):
		features = Features.objects.all()
		serializer = V1Serializer(features, many=True)
		return Response(serializer.data)

	def POST(self):
		pass

#/v1/settings/
class SettingsList(APIView):
	def GET(self):
		settings = Settings.objects.all()
		serializer = V1Serializer(settings, many=True)
		return Response(serializer.data)

	def POST(self):
		pass
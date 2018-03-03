from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import State, Run, Arguments, Features, Settings
from .serializers import V1Serializer

#/v1/arguments/
class ArgumentList(APIView):

	def GET(self, request):

		if request.method == 'GET':
			args = Arguments.objects.all()
			serializer = V1Serializer(args, many=True)
			return Response(serializer.data)

		else:
			print("ERROR from ArgumentList! Not a GET Request")

	def POST(self, request):

		if request.method == 'POST':
			args = Arguments.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

		

#/v1/state/
class StateList(APIView):
	def GET(self, request):

		if request.method == 'GET':
			state = State.objects.all()
			serializer = V1Serializer(state, many=True)
			return Response(serializer.data)

		else:
			print("ERROR from StateList! Not a GET Request")

	def POST(self, request):
		if request.method == 'POST':
			args = State.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#/v1/run/
class RunList(APIView):
	def GET(self, request):

		if request.method == 'GET':
			run = Run.objects.all()
			serializer = V1Serializer(run, many=True)
			return Response(serializer.data)

		else:
			print("ERROR from RunList! Not a GET Request")


	def POST(self, request):
		if request.method == 'POST':
			args = Run.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#/v1/features/
class FeatureList(APIView):
	def GET(self, request):

		if request.method == 'GET':
			features = Features.objects.all()
			serializer = V1Serializer(features, many=True)
			return Response(serializer.data)

		else:
			print("ERROR from FeatureList! Not a GET Request")


	def POST(self, request):
		if request.method == 'POST':
			args = Features.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#/v1/settings/
class SettingsList(APIView, request):
	def GET(self, request):

		if request.method == 'GET':
			settings = Settings.objects.all()
			serializer = V1Serializer(settings, many=True)
			return Response(serializer.data)

		else:
			print("ERROR from SettingsList! Not a GET Request")


	def POST(self, request):
		if request.method == 'POST':
			args = Features.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

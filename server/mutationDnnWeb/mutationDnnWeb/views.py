#from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import State, Run, Arguments, Features, Settings
from .serializers import V1Serializer

#/v1/
#@api_view(['GET'])
class V1List(APIView):
	def get(self, request):
		if request.method == 'GET':
			v1 = V1.objects.all()
			serializer = V1Serializer(v1, many=True)
			return Response(serializer.data)
		else:
			print("ERROR from views.py! GET ")

	def post(self, request):
		if request.method == 'POST':
			v1 = V1.objects.all()
			serializer = V1Serializer(data=request.data)
			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                        print("ERROR from views.py! POST ")

#/v1/arguments/
#@api_view(['GET', 'POST'])
class ArgumentList(APIView):
	def get(self, request):
		if request.method == 'GET':
			args = Arguments.objects.all()
			serializer = V1Serializer(args, many=True)
			return Response(serializer.data)
		else:
			print("ERROR from views.py! GET ")

	def post(self, request):
		if request.method == 'POST':
			args = Arguments.objects.all()
			serializer = V1Serializer(data=request.data)
			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                        print("ERROR from views.py! POST ")

#/v1/state/
#@api_view(['GET', 'POST'])
class StateList(APIView):
	def get(self, request):
                if request.method == 'GET':
			state = State.objects.all()
			serializer = V1Serializer(state, many=True)
			return Response(serializer.data)
                else:
                        print("ERROR from views.py! GET ")

	def post(self, request):
		if request.method == 'POST':
			args = State.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)	
                else:
                        print("ERROR from views.py! POST ")


#/v1/run/
#@api_view(['GET', 'POST'])
class RunList(APIView):
	def get(self, request):
                if request.method == 'GET':
			run = Run.objects.all()
			serializer = V1Serializer(run, many=True)
			return Response(serializer.data)
                else:
                        print("ERROR from views.py! GET ")


	def post(self, request):
		if request.method == 'POST':
			args = Run.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                        print("ERROR from views.py! POST ")


#/v1/features/
#@api_view(['GET', 'POST'])
class FeatureList(APIView):
	def get(self, request):
                if request.method == 'GET':
			features = Features.objects.all()
			serializer = V1Serializer(features, many=True)
			return Response(serializer.data)
                else:
                        print("ERROR from views.py! GET ")

	
	def post(self, request):
		if request.method == 'POST':
			args = Features.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                        print("ERROR from views.py! POST ")


#/v1/settings/
#@api_view(['GET', 'POST'])
class SettingsList(APIView):
	def get(self, request):
                if request.method == 'GET':
			settings = Settings.objects.all()
			serializer = V1Serializer(settings, many=True)
			return Response(serializer.data)
                else:
                        print("ERROR from views.py! GET ")

	def post(self, request):
		if request.method == 'POST':
			args = Features.objects.all()
			serializer = V1Serializer(data=request.data)

			if serializer.is_Valid():
				serializer.save()
				return Response(serializer.data, status=status.HTTP_201_CREATED)

			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                        print("ERROR from views.py! POST ")


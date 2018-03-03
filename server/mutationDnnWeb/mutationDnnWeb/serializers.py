from rest_framework import serializers
from .models import State, Run, Arguments, Features, Settings

class V1Serializer(serializers.ModelSerializer):
	
	class Arguments:
		model = Arguments
		fields = '__all__'

	class State:
		model = State
		fields = '__all__'

	class Run:
		model = Run
		fields = '__all__'

	class Features:
		model = Features
		fields = '__all__'

	class Settings:
		model = Settings
		fields = '__all__'

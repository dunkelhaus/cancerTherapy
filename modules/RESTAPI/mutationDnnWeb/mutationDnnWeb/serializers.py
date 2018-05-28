from rest_framework import serializers
from .models import V1, State, Run, Arguments, Features, Settings

class V1Serializer(serializers.ModelSerializer):
	class Meta:
		model = V1
		fields = '__all__'


class ArgSerializer(serializers.ModelSerializer):
	class Meta:
		model = Arguments
                fields = '__all__'


class StateSerializer(serializers.ModelSerializer):
	class Meta:
		model = State
                fields = '__all__'


class RunSerializer(serializers.ModelSerializer):
	class Meta:
		model = Run
                fields = '__all__'


class FeatureSerializer(serializers.ModelSerializer):
	class Meta:
		model = Features
                fields = '__all__'


class SettingsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Settings
                fields = '__all__'


from rest_framework import serializers
from .models import React, Save, Data


class ReactSerializer (serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['reguler', 'text']


class SaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Save
        fields = ['name', 'discription']


class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ['username', 'password']

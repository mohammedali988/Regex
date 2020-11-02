from django.shortcuts import render
from rest_framework.views import APIView
from .models import React, Data
from rest_framework.response import Response
from .serializer import ReactSerializer, SaveSerializer, LogSerializer
from django.contrib.auth.models import User
import re


class ReactView(APIView):
    serializer_class = ReactSerializer

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        print(request.data, "hereeeeeeeeee")
        if serializer.is_valid(raise_exception=True):
            # print(request.data['reguler'], "hereeeeeeee")
            if re.search(request.data['reguler'], request.data['text']) != None:
                print(re.search(request.data['reguler'],
                                request.data['text']), "hello")
                print(re.findall(
                    request.data['reguler'], request.data['text']))
                return Response(re.findall(
                    request.data['reguler'], request.data['text']))
            else:
                return Response(False)


class SaveView(APIView):
    serializer_class = SaveSerializer

    def post(self, request):
        serializer = SaveSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print(serializer.data)
            return Response(True)


class LogView (APIView):
    serializer_class = LogSerializer

    def post(self, request):
        serializer = LogSerializer(data=request.data)
        print(request.data, 'hereeeeeeeeee')
        if serializer.is_valid(raise_exception=True):
            user = User.objects.create_user(
                request.data['username'], request.data['password'])
            user.save()
            print(request.data)
            return Response(True)

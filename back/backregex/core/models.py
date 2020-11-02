from django.db import models

# Create your models here.


class React (models.Model):
    reguler = models.CharField(max_length=500)
    text = models.CharField(max_length=500)


class Save(models.Model):
    name = models.CharField(max_length=100)
    discription = models.CharField(max_length=500)


class Data(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

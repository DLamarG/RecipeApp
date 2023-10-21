from . import serializers
from rest_framework import generics
from . import models


# Create your views here.
class RecipeList(generics.ListCreateAPIView):
    queryset=models.RecipeModel.objects.all()
    serializer_class=serializers.RecipeModelSerializer

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.RecipeModel.objects.all()
    serializer_class=serializers.RecipeModelSerializer
   
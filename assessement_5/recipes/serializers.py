from rest_framework import serializers
from .models import RecipeModel




class RecipeModelSerializer(serializers.ModelSerializer):
    class Meta:
        model= RecipeModel
        fields= '__all__'
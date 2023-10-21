from django.db import models
from django.contrib.auth.models import User
from recipes.models import RecipeModel



# Create your models here.
class UserAccount(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    my_recipes = models.ManyToManyField(RecipeModel, related_name='my_recipes', blank=True)


    def add_to_recipes(self, title, ingrediants):
        if not self.my_recipes.filter(title=title).exists():
            recipe=RecipeModel.objects.create(title=title, ingrediants=ingrediants)
            self.my_recipes.add(recipe)
            return {'message': 'recipe added to your recipes'}
        else:
            return {'message': 'recipe already exist'}
        

    def __str__(self):
        return self.user.username
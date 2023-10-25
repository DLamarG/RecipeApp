from django.db import models


# Create your models here.
class RecipeModel(models.Model):
    recipe_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, blank=False)
    ingrediants = models.CharField(max_length=1000, blank=False)
    picture = models.FileField(upload_to="foodapp_pics", blank=True, null=True)

    def __str__(self):
        return self.title
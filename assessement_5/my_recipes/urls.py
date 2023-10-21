from django.urls import path
from . import views

urlpatterns = [

path('myrecipes/', views.MyRecipeAPIView.as_view(), name='my_recipes'),
path('myrecipes/<int:recipe_id>', views.MyRecipeAPIView.as_view(), name='delete_my_recipes'),
]
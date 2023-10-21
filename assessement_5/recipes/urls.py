from . import views
from django.urls import path


urlpatterns = [
    # Vendors
    path('recipes/', views.RecipeList.as_view()),
    path('recipe-details/<int:pk>/',views.RecipeDetail.as_view()),
]


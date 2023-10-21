from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user_account.models import UserAccount
from recipes.models import RecipeModel
from recipes.serializers import RecipeModelSerializer


class MyRecipeAPIView(APIView):
    def get(self, request):
        user = request.user  # Get the currently logged-in user
        
        try:
            profile = UserAccount.objects.get(user=user)
            my_recipe_list = profile.my_recipes.all()  # Retrieve the user's cars from garage

            # Serialize the watchlist movies data
            serializer = RecipeModelSerializer(my_recipe_list, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except UserAccount.DoesNotExist:
            return Response({'message': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    

    def post(self, request):
        title = request.data.get('title')
        ingrediants = request.data.get('ingrediants')
        user = request.user
    

        try:
            profile = UserAccount.objects.get(user=user)
            if not profile.my_recipes.filter(title=title).exists():
                recipe = RecipeModel.objects.create(title=title, ingrediants=ingrediants)
                profile.my_recipes.add(recipe)
                return Response({'message': 'Recipe added.'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Recipe already in list.'}, status=status.HTTP_200_OK)

        except UserAccount.DoesNotExist:
            return Response({'message': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)



    def delete(self, request, recipe_id):
        user = request.user

        try:
            profile = UserAccount.objects.get(user=user)
            my_recipe = profile.my_recipes.filter(recipe_id=recipe_id).first()

            if my_recipe:
                # Delete the recipe from the user's list
                profile.my_recipes.remove(my_recipe)
                my_recipe.delete()

                return Response({'message': 'Recipe deleted.'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'message': 'Recipe not found in the list.'}, status=status.HTTP_404_NOT_FOUND)

        except UserAccount.DoesNotExist:
            return Response({'message': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)

# Create your views here.

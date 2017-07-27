recipeApp.controller("RecipeDetailsCtrl", function ($scope, $location, recipes, activeUser,  $routeParams, Recipe) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    // Creating a copy of the recipe object so changes won't be reflected on the array
    $scope.recipe = new Recipe(recipes.get($routeParams.recipeIndex));

    $scope.cancel = function() {
        $location.path("/recipes");
    }

    $scope.update = function() {
        recipes.update($routeParams.recipeIndex, $scope.recipe);
        $location.path("/recipes");
    }

    $scope.remove = function() {
        recipes.remove($routeParams.recipeIndex);
        $location.path("/recipes");
    }
    
})

recipeApp.controller("NewRecipeCtrl", function ($scope, $location, recipes, activeUser, Recipe) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.recipe = new Recipe({});

    $scope.cancel = function () {
        $location.path("/recipes");
    }

    $scope.create = function () {
        recipes.add($scope.recipe);
        $location.path("/recipes");
    }
});
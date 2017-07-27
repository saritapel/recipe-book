recipeApp.controller("RecipeGalleryCtrl", function ($scope, $http, $location, activeUser, recipes) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().firstName;

    // Making sure that we are only loading once
    if (recipes.getAll().length === 0) {
        $scope.recipeArr = [];
        $http.get(activeUser.get().data).then(function(response) {
            recipes.load(response.data);
            $scope.recipeArr = recipes.getAll();
        });
    } else {
        $scope.recipeArr = recipes.getAll();
    }

    $scope.openDetails = function(index) {
        $location.path("/recipes/" + index)
    }
});

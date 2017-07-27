// Shared Recipe Constructor
recipeApp.factory("Recipe", function(){
    function Recipe(plainObject) {
        this.name = plainObject.name;
        this.description = plainObject.description;
        this.duration = plainObject.duration;
        this.ingrediants = plainObject.ingrediants;
        this.steps = plainObject.steps;
        this.imageUrl = plainObject.imageUrl;
    };

    return Recipe;
});



recipeApp.factory("recipes", function(Recipe) {
    var recipeArr = [];

    var add = function(recipe) {
        recipeArr.push(recipe);
    }

    var update = function(index, recipe) {
        recipeArr[index] = recipe;
    }

    var remove = function(index) {
        recipeArr.splice(index, 1);
    }

    var load = function(receipePlainObjectArr) {
        for (var i = 0; i < receipePlainObjectArr.length; i++) {
            recipeArr.push(new Recipe(receipePlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return recipeArr;
    }

    var get = function(index) {
        return recipeArr[index];
    }

    var removeAll = function() {
        recipeArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})
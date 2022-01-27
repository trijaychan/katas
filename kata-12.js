const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (recipe of recipes) {
    if ((bakeryA.includes(recipe.ingredients[0]) && bakeryB.includes(recipe.ingredients[1])) 
    || (bakeryA.includes(recipe.ingredients[1]) && bakeryB.includes(recipe.ingredients[0]))) {
      return recipe.name;
    }
  }
}
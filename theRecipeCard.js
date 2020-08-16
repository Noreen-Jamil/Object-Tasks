function theRecipeCard(){
	console.clear();
// 	Create an object to hold information on your favorite recipe. It should have properties for title (a string), 
// servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
	const recipe = {
		title: "Noodles",
		servings: 2,
		ingredients:['water','noodles packet','powder sache']
	}
	console.log("The Recipe Card");
	console.log(" ");
	console.log(recipe.title);
	console.log(`Serves: ${recipe.servings}`);
	console.log(`Ingredients:`);
	recipe.ingredients.forEach(ingredient => console.log(ingredient));
}
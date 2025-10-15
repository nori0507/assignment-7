console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["tacos", "ramen", "sushi", "cheese", "orange", "apple"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i<= favoriteFoods.length-1; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i]);
}


// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
console.log("My #1 favorite food is " + favoriteFoods[2]);
console.log("My #2 favorite food is " + favoriteFoods[3]);
console.log("My #3 favorite food is " + favoriteFoods[4]);
console.log("My #4 favorite food is " + favoriteFoods[1]);
console.log("My #5 favorite food is " + favoriteFoods[5]);
console.log("My #6 favorite food is " + favoriteFoods[0]);


// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
}


// 4b. Call the function at least 3 times
printFoodRecommendation(favoriteFoods[2]);
printFoodRecommendation(favoriteFoods[3]);
printFoodRecommendation(favoriteFoods[4]);


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.

/*for (let i = 0; i <= friendFavorites.length-1; i++){
  if (friendFavorites[i].includes("a")){
    console.log(friendFavorites[i])
  }
}*/


// 6. Store the result in an array called foodsWithA. Print out the array.

/*for (let i = 0; i <= friendFavorites.length-1; i++){
  
}
*/


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
longFoodNames = [];
for (let i = 0; i <= friendFavorites.length-1; i++){
  if (friendFavorites[i].length >6){
    longFoodNames.push(friendFavorites[i]);
  }
}



// 8. Create another array shortFoodNames for foods 6 characters or shorter.
shortFoodNames = [];
for (let i = 0; i <= friendFavorites.length-1; i++){
  if (friendFavorites[i].length <= 6){
    shortFoodNames.push(friendFavorites[i]);
  }
}



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log("number of long-named foods: " + longFoodNames.length);
console.log(shortFoodNames);
console.log("number of short-named foods: " + shortFoodNames.length);

// the comment above suggested two different output, but i created the third one just in case the lengths were the same
if (longFoodNames.length > shortFoodNames.length){
  console.log("There are more long-named foods.");
}else if (longFoodNames.length < shortFoodNames.length){
  console.log("There are more short-named foods.");
}else{
  console.log("The number of long-named foods and short-named foods are the same.");
}


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."

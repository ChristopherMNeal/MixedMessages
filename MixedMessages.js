//Set arrays of options
const ingredients = ['apple', 'abalone', 'artichoke', 'avocado', 'almond', 'asparagus', 'albacore', 'bacon', 'black beans', 'bagel', 'barley', 'bread', 'burrito', 'cabbage', 'carrots', 'celery', 'cheese', 'chicken', 'catfish', 'chips', 'clams', 'cookies', 'corn', 'crab', 'falafel', 'hot dogs', 'gnocchi', 'goose', 'grapes', 'green beans', 'grits', 'halibut', 'ham', 'hash browns', 'hummus', 'ice cream', 'jalapeno', 'kale', 'kabobs', 'kiwi', 'kidney beans', 'lobster', 'lamb', 'meatballs', 'milk', 'noodles' ,'pizza', 'pepperoni', 'pancakes', 'quiche', 'spinach', 'urchin', 'yogurt' ,'zucchini'];
const preparations = ['baked', 'boiled', 'blanched', 'braised', 'infused', 'pressure cooked', 'simmered', 'steamed', 'steeped', 'toasted', 'stewed', 'grilled', 'fried', 'deep fried', 'microwaved', 'roasted', 'grilled', 'seared', 'smoked', 'brined', 'dried', 'fermented', 'marinated', 'pickled', 'salted', 'sugared'];
const flavorings = ['black pepper', 'garlic', 'onion', 'mustard', 'caraway', 'coriander', 'cumin', 'allspice', 'fennel', 'celery seed', 'dill', 'beer', 'ginger', 'white pepper', 'turmeric', 'anise', 'cardamom', 'sesame', 'chile', 'beet', 'chocolate', 'dukkah', 'coffee', 'galangal', 'grains of paradise', 'mase', 'lime leaf', 'sichuan pepper', 'anise', 'sumac', 'tamarine', 'juniper', 'chervil', 'lavender', 'mint', 'cilantro', 'rosemary' ,'curry', 'basil', 'fenugreek', 'parsley', 'tarragon', 'oregano', 'bay', 'thyme', 'lemongrass', 'lemon', 'lime', 'sage', 'savory', 'apple pie spice', 'sesame', 'cinnamon', 'everything bagel spice', 'honey', 'fish sauce', 'soy sauce', 'chipotle', 'ras al hanout'];

//Function to return random selections from an array
function randomPicker(array) {
    let randomDuJour = array[Math.floor(Math.random() * array.length)];
    return randomDuJour;    
}

//Use random picker function on each array
let ingredientDuJour = randomPicker(ingredients);
let preparationDuJour = randomPicker(preparations);
let flavoringDuJour = randomPicker(flavorings);

//Display message with random options
console.log(`Your ingredient du jour is ${preparationDuJour} ${ingredientDuJour} with ${flavoringDuJour}.`);
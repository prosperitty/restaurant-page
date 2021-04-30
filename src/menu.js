export default loadMenu
const contentContainer = document.querySelector('#content')

function Menu(title) {
    this.title = title
}

function Food(name,ingredients,image) {
    this.name = name
    this.ingredients = ingredients
    this.image = image
}

Menu.prototype.createRow = function() {
    const title = document.createElement('h3');
    title.className = 'fw-bold';
    title.innerText = this.title;

    const rowContainer = document.createElement('div');
    rowContainer.className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3'

    contentContainer.appendChild(title);
    contentContainer.appendChild(rowContainer);
    Menu.prototype.category = rowContainer;
}

Food.prototype.createCard = function(category) {
    const column = document.createElement('div');
    column.className = 'col mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const foodImage = document.createElement('img');
    foodImage.src = this.image;
    foodImage.className = 'card-img-top img-fluid';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const foodName = document.createElement('h5');
    foodName.className = 'card-title';
    foodName.innerText = this.name;

    const foodIngredients = document.createElement('p');
    foodIngredients.className = 'card-text';
    foodIngredients.innerText = this.ingredients;

    category.appendChild(column);
    column.appendChild(card);
    card.appendChild(foodImage);
    card.appendChild(cardBody)
    cardBody.appendChild(foodName);
    cardBody.appendChild(foodIngredients);
}

function loadMenu() {
    const breakfast = new Menu('breakfast');
    const lunch =  new Menu('lunch');
    const dinner = new Menu('dinner');
    const dessert = new Menu('dessert');
    
    const pancakes = new Food('pancakes','freshly made pancakes with fruit,butter, and syrup','/images/yulia-khlebnikova-pancakes-unsplash.jpg');
    const waffles = new Food('waffles','baked waffles with butter and fruit of your chocie','/images/arifuddin-rahmad-waffles-unsplash.jpg');
    const frenchToast = new Food('french toast','warm french toast with fruits, syrup, and some flour','/images/joseph-gonzalez-french-toast-unsplash.jpg');
    const cheeseburger = new Food('cheeseburger','grilled burger with lettuce, onion, tomatoe, cheese, pickle, and ketchup','/images/ilya-mashkov-burger-unsplash.jpg');
    const salad = new Food('salad','mixed salad with croutons, cherry tomatoe, and diced radishes', '/images/sina-piryae-salad-unsplash.jpg');
    const sandwich = new Food('sandwich','sandwich filled with your choice of protein, lettuce, mayonaise, and tomatoe','/images/mae-mu-sandwich-unsplash.jpg');
    const steak = new Food('steak','freshly grilled steak cooked to your liking','/images/chad-montano-steak-unsplash.jpg');
    const ribs = new Food('ribs','grilled ribs with barbeque','/images/alexandru-bogdan-ghita-ribs-unsplash.jpg');
    const pasta = new Food('pasta','boiled pasta with your choice of topping','/images/bruna-branco-pasta-unsplash.jpg');
    const iceCream = new Food('ice cream','vanilla,chocolate, or strawberry ice cream on a cone','/images/mathilde-pee-icecream-unsplash.jpg');
    const cheeseCake = new Food('cheese cake','cheesecake topped with fudge and strawberries','/images/alireza-etemadi-cheesecake-unsplash.jpg');
    const cake = new Food('cake', 'sweet delicous cake with frosting', '/images/american-heritage-chocolate-cake-unsplash.jpg');

    const heading = document.createElement('h2');
    heading.innerText = 'menu';

    contentContainer.appendChild(heading);
    breakfast.createRow();
    pancakes.createCard(breakfast.category);
    waffles.createCard(breakfast.category);
    frenchToast.createCard(breakfast.category);
    lunch.createRow();
    cheeseburger.createCard(lunch.category);
    salad.createCard(lunch.category);
    sandwich.createCard(lunch.category);
    dinner.createRow();
    steak.createCard(dinner.category);
    ribs.createCard(dinner.category);
    pasta.createCard(dinner.category);
    dessert.createRow();
    iceCream.createCard(dessert.category);
    cheeseCake.createCard(dessert.category);
    cake.createCard(dessert.category);
}

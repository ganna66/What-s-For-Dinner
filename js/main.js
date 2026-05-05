// Creating Meals Object
var caesarSalad = {
  foodName: "Caeser Salad",
  level: "Easy",
  foodCountry: "American",
  description: "Classic salad with crispy romaine and creamy dressing",
  ingredient: [
    "large romaine lettuce",
    "1/2 cup Caesar dressing",
    "1/2 cup parmesan cheese, shaved",
    "1 cup croutons",
    "2 anchovy fillets (optional)",
    "Lemon wedges",
    "Black pepper",
  ],
  instruction: [
    "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
    "Place lettuce in a large salad bowl.",
    "Add Caesar dressing and toss until evenly coated.",
    "Add croutons and half the parmesan cheese. Toss gently.",
    "Top with remaining parmesan shavings and anchovies if using.",
  ],
  tips: [
    "Use cold, crisp lettuce for best texture",
    "Make homemade croutons for better flavor",
    "Add grilled chicken for a complete meal",
    "Don't dress salad until ready to serve",
  ],
  image: "./images/salad.jpg",
  rate: 4.5,
  reviews: 412,
  prepTime: 15,
  cookTime: 0,
  servingPeople: 2,
};

var spaghettiBolognese = {
  foodName: "Spaghetti Bolognese",
  level: "Medium",
  foodCountry: "Italian",
  description: "Rich tomato meat sauce served over tender spaghetti",
  ingredient: [
    "300g spaghetti",
    "400g ground beef",
    "1 onion, finely chopped",
    "2 garlic cloves, minced",
    "1 can crushed tomatoes",
    "2 tbsp tomato paste",
    "1 carrot, grated",
    "2 tbsp olive oil",
    "1 tsp dried oregano",
    "Salt and black pepper",
    "Fresh basil (optional)",
    "Parmesan cheese for serving",
  ],
  instruction: [
    "Boil spaghetti in salted water until al dent, then drain.",
    "Heat olive oil in a pan and sauté onion and garlic until soft.",
    "Add ground beef and cook until browned.",
    "Stir in carrot, tomato paste, and crushed tomatoes.",
    "Season with salt, pepper, and oregano.",
    "Let the sauce simmer for 15-20 minutes.",
    "Serve sauce over spaghetti and top with parmesan and basil.",
  ],
  tips: [
    "Simmer longer for deeper flavor",
    "Add a splash of milk to make sauce smoother",
    "Use fresh basil for better aroma",
    "Leftover sauce tastes better the next day",
  ],
  image: "./images/Spaghetti.jpg",
  rate: 4.3,
  reviews: 322,
  prepTime: 9,
  cookTime: 30,
  servingPeople: 3,
};

var pastaAlfredo = {
  foodName: "Pasta Alfredo",
  level: "Medium",
  foodCountry: "Italian",
  description: "Creamy pasta with rich Alfredo sauce",
  ingredient: [
    "Pasta",
    "Butter",
    "Garlic",
    "Heavy cream",
    "Parmesan cheese",
    "Salt & pepper",
  ],
  instruction: [
    "Cook pasta according to instructions.",
    "Melt butter and sauté garlic.",
    "Add cream and simmer.",
    "Stir in parmesan cheese.",
    "Mix pasta with sauce.",
  ],
  tips: ["Use fresh parmesan", "Don't overcook pasta", "Serve immediately"],
  image: "./images/Alfredo.jpg",
  rate: 4,
  reviews: 223,
  prepTime: 10,
  cookTime: 35,
  servingPeople: 6,
};
var padThai = {
  foodName: "Pad Thai",
  level: "Intermediate",
  foodCountry: "Asian",
  description: "Popular Thai stir-fried noodles with shrimp and peanuts",
  ingredient: [
    "200g rice noodles",
    "200g shrimp, peeled",
    "2 eggs",
    "3 tablespoons tamarind paste",
    "2 tablespoons fish sauce",
    "1 tablespoon palm sugar",
    "Bean sprouts",
    "Crushed peanuts",
    `Lime wedges and cilantro
`,
  ],
  instruction: [
    "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
    "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
    "Heat wok over high heat. Scramble eggs and set aside.",
    "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
    "Add scrambled eggs and bean sprouts. Toss everything together.",
  ],
  tips: [
    "Don't over soak noodles or they'll be mushy",
    "Cook on high heat for authentic wok flavor",
    "Balance sweet, sour, and salty flavors",
    "Prepare all ingredients before starting to cook",
  ],
  image: "./images/paid-thai.jpg",
  rate: 3.8,
  reviews: 132,
  prepTime: 15,
  cookTime: 10,
  servingPeople: 6,
};
var chickenTeriyaki = {
  foodName: "Chicken Teriyaki",
  level: "Easy",
  foodCountry: "Japanese",
  description: "Sweet and savory glazed chicken served with rice",
  ingredient: [
    "500g chicken thighs, sliced",
    "3 tbsp soy sauce",
    "2 tbsp mirin",
    "2 tbsp sugar or honey",
    "1 tbsp sake (optional)",
    "1 garlic clove, minced",
    "1 tsp ginger, grated",
    "1 tbsp vegetable oil",
    "Sesame seeds",
    "Spring onions, chopped",
    "Steamed rice for serving",
  ],
  instruction: [
    "Mix soy sauce, mirin, sugar, garlic, and ginger to make teriyaki sauce.",
    "Heat oil in a pan and cook chicken until golden brown.",
    "Pour sauce over chicken and simmer until it thickens.",
    "Coat chicken evenly with the glaze.",
    "Serve over steamed rice.",
    "Garnish with sesame seeds and spring onions.",
  ],
  tips: [
    "Use chicken thighs for juicier texture",
    "Don’t burn the sauce—cook on medium heat",
    "Add vegetables like broccoli or carrots for balance",
    "Let sauce thicken naturally for best glaze",
  ],
  image: "./images/TeriyakiChicken.jpg",
  rate: 4.9,
  reviews: 200,
  prepTime: 25,
  cookTime: 15,
  servingPeople: 5,
};
var pizza = {
  foodName: "Margherita Pizza",
  level: "Medium",
  foodCountry: "Italian",
  description: "Classic pizza with tomato sauce and mozzarella",
  ingredient: [
    "Pizza dough",
    "Tomato sauce",
    "Mozzarella cheese",
    "Fresh basil",
    "Olive oil",
  ],
  instruction: [
    "Preheat oven to high temperature.",
    "Spread tomato sauce on dough.",
    "Add mozzarella cheese.",
    "Bake until crust is golden.",
    "Top with fresh basil and olive oil.",
  ],
  tips: [
    "Use fresh mozzarella",
    "Preheat oven well",
    "Don't overload toppings",
  ],
  image: "./images/pizza.jpg",
  rate: 3.7,
  reviews: 188,
  prepTime: 20,
  cookTime: 45,
  servingPeople: 8,
};
var chickenStirFry = {
  foodName: "Chicken Stir-Fry",
  level: "Easy",
  foodCountry: "Asian",
  description: `"Quick and healthy stir-fry with colorful vegetables"`,
  ingredient: [
    "500g chicken breast, sliced",
    "2 bell peppers, sliced",
    "1 broccoli head, florets",
    "2 carrots, julienned",
    "3 tablespoons soy sauce",
    "2 tablespoons oyster sauce",
    "1 tablespoon sesame oil",
    "2 cloves garlic, minced",
    "Fresh ginger, grated",
  ],
  instruction: [
    "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
  ],
  tips: [
    "Cut all ingredients before starting to cook",
    "Keep heat high for authentic stir-fry texture",
    "Don't overcrowd the wok or vegetables will steam",
    "Add cashews or peanuts for extra crunch",
  ],
  image: "./images/stir-fry.jpg",
  rate: 2.9,
  reviews: 120,
  prepTime: 10,
  cookTime: 15,
  servingPeople: 9,
};
// Array for different type of meals
var meal = [
  chickenTeriyaki,
  caesarSalad,
  spaghettiBolognese,
  pizza,
  chickenStirFry,
  pastaAlfredo,
  padThai,
];
// Initializing variables
let currentRandom;
var randomNumber;
// Main Function On Click
function displayMealContent() {
  randomNumber = Math.trunc(Math.random() * meal.length);
  while (randomNumber === currentRandom) {
    randomNumber = Math.floor(Math.random() * 3) + 1;
  }
  console.log(randomNumber);
  currentRandom = randomNumber;
  //Food Name and Description
  console.log(
    (document.getElementById("description").innerHTML =
      meal[randomNumber].description),
  );
  console.log(
    (document.getElementById("foodName").innerHTML =
      meal[randomNumber].foodName),
  );

  // spans
  document.getElementById("level").innerHTML = meal[randomNumber].level;
  document.getElementById("country").innerHTML = meal[randomNumber].foodCountry;
  // alert msg
  if (meal[randomNumber].cookTime > 45) {
    alertMsg();
  }
  displayIngredient();
  displayInstruction();
  displayTips();
  displayImage();
}
displayMealContent();

// All Functions Needed
function displayIngredient() {
  let box = "";
  for (var i = 0; i < meal[randomNumber].ingredient.length; i++) {
    box += `<li class="mb-3 d-flex align-items-center justify-content-start">
                        <span class="me-2 rounded-circle text-white numbers"
                          >${i + 1}</span
                        >
                        <p class="m-0">${meal[randomNumber].ingredient[i]}</p>
                      </li>`;
  }
  document.getElementById("ingredient").innerHTML = box;
}

function displayInstruction() {
  let box = "";
  for (var i = 0; i < meal[randomNumber].instruction.length; i++) {
    box += `<li class="d-flex align-items-center justify-content-start mb-3" >
                        <span class="me-2 ins-num rounded-4">${i + 1}</span>
                        <p class="align-self-end">
                          ${meal[randomNumber].instruction[i]}
                        </p>
                      </li>`;
  }
  document.getElementById("instruction").innerHTML = box;
}

function displayTips() {
  let box = "";
  for (var i = 0; i < meal[randomNumber].tips.length; i++) {
    box += `<div class="item mb-3 rounded-4 p-4 bg-danger-subtle border-start border-danger border-3 d-flex justify-content-start align-items-center"
                    >
                      <div class="check me-2 rounded-circle">
                        <i
                          class="fa-solid fa-check fa-xs d-flex align-items-center justify-content-center"
                          style="color: rgb(255, 255, 255)"
                        ></i>
                      </div>
                      <p class="m-0">
                        ${meal[randomNumber].tips[i]}
                      </p>
                    </div>`;
  }
  console.log(box);
  document.getElementById("tips").innerHTML = box;
}

function displayImage() {
  document.getElementById("img").innerHTML =
    `<div class="review d-flex position-absolute align-items-center justify-content-start gap-1 bg-white py-2 px-4 rounded-5" >
                <i
                  class="fa-solid fa-star fa-sm"
                  style="color: rgb(253, 199, 0)"
                ></i>
                <span class="fw-bold">${meal[randomNumber].rate}</span
                ><span class="revNumber text-secondary">(${meal[randomNumber].reviews} reviews)</span>
              </div>
              <img
                src=${meal[randomNumber].image}
                alt=""
                class="w-100 h-100 object-fit-cover"
              />
              <div class="time position-absolute w-100 p-4">
                <div class="container text-center">
                  <div
                    class="cookTime row bg-white px-5 py-4 rounded-4 shadow g-5"
                  >
                    <div
                      class="col d-flex flex-column justify-content-center align-items-center g-2"
                    >
                      <i
                        class="fa-clock fa-solid fa-xl mb-3"
                        style="color: #ff6900"
                      ></i>
  
                      <span class="text-secondary">Prep Time</span
                      ><span class="fw-bold">${meal[randomNumber].prepTime} min</span>
                    </div>
                    <div
                      class="col d-flex flex-column justify-content-center align-items-center g-2"
                    >
                      <i
                        class="fa-solid fa-fire-burner fa-xl mb-3"
                        style="color: rgb(251, 44, 54)"
                      ></i>
                      <span class="text-secondary">Cook Time</span
                      ><span class="fw-bold">${meal[randomNumber].cookTime} min</span>
                    </div>
                    <div
                      class="col d-flex flex-column justify-content-center align-items-center g-2"
                    >
                      <i class="fa-solid fa-users fa-xl mb-3 text-primary"></i>
                      <span class="text-secondary">Serving</span
                      ><span class="fw-bold">${meal[randomNumber].servingPeople} min</span>
                    </div>
                  </div>
                </div>
              </div>`;
}
function alertMsg() {
  document.querySelector(".alertMsg").classList.remove("d-none");
}

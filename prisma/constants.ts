import { Category, ProductWithoutOptions } from "@/types"
import { Ingredients } from "@/types/ingredients-types"

export const CATEGORIES: Category[] = [
  {
    value: "pizza",
    name: "Pizza",
    filters: [
      { value: "pizza-meat", label: "Meat" },
      { value: "pizza-vegetarian", label: "Vegetarian" },
      { value: "pizza-extra-cheese", label: "Extra Cheese" },
      { value: "pizza-thin-crust", label: "Thin Crust" },
      { value: "pizza-thick-crust", label: "Thick Crust" },
    ],
  },
  {
    value: "sushi",
    name: "Sushi",
    filters: [
      { value: "sushi-hot-rolls", label: "Hot Rolls" },
      { value: "sushi-raw-rolls", label: "Raw Rolls" },
      { value: "sushi-baked-rolls", label: "Baked Rolls" },
      { value: "sushi-salmon", label: "Salmon" },
      { value: "sushi-tuna", label: "Tuna" },
      { value: "sushi-vegan", label: "Vegan" },
    ],
  },
  {
    value: "pasta",
    name: "Pasta",
    filters: [
      { value: "pasta-creamy", label: "Creamy" },
      { value: "pasta-tomato", label: "Tomato" },
      { value: "pasta-seafood", label: "Seafood" },
      { value: "pasta-meat", label: "Meat" },
      { value: "pasta-vegetarian", label: "Vegetarian" },
    ],
  },
  {
    value: "salads",
    name: "Salads",
    filters: [
      { value: "salad-caesar", label: "Caesar" },
      { value: "salad-greek", label: "Greek" },
      { value: "salad-vegan", label: "Vegan" },
      { value: "salad-chicken", label: "With Chicken" },
      { value: "salad-seafood", label: "With Seafood" },
    ],
  },
  {
    value: "snacks",
    name: "Snacks",
    filters: [
      { value: "snack-fries", label: "Fries" },
      { value: "snack-onion-rings", label: "Onion Rings" },
    ],
  },
  {
    value: "sauces",
    name: "Sauces",
    filters: [
      { value: "sauce-ketchup", label: "Ketchup" },
      { value: "sauce-mayo", label: "Mayonnaise" },
      { value: "sauce-spicy", label: "Spicy Mayo" },
    ],
  },
  {
    value: "drinks",
    name: "Drinks",
    filters: [
      { value: "drink-soft", label: "Soft Drinks" },
      { value: "drink-coffee", label: "Coffee" },
      { value: "drink-tea", label: "Tea" },
      { value: "drink-juice", label: "Juices" },
      { value: "drink-smoothie", label: "Smoothies" },
      { value: "drink-lemonade", label: "Lemonades" },
    ],
  },
  {
    value: "desserts",
    name: "Desserts",
    filters: [
      { value: "dessert-ice-cream", label: "Ice Cream" },
      { value: "dessert-cake", label: "Cakes" },
      { value: "dessert-pastry", label: "Pastries" },
      { value: "dessert-vegan", label: "Vegan" },
      { value: "dessert-gluten-free", label: "Gluten Free" },
    ],
  },
]

export const INGREDIENTS: Ingredients[] = [
  {
    name: "Mozzarella",
    price: 30,
    imageUrl: "/ingredients/mozzarella.png",
    category: "Cheese",
  },
  {
    name: "Parmesan",
    price: 40,
    imageUrl: "/ingredients/parmesan.png",
    category: "Cheese",
  },
  {
    name: "Gorgonzola",
    price: 45,
    imageUrl: "/ingredients/gorgonzola.png",
    category: "Cheese",
  },
  {
    name: "Cheddar",
    price: 35,
    imageUrl: "/ingredients/cheddar.png",
    category: "Cheese",
  },
  {
    name: "Feta",
    price: 40,
    imageUrl: "/ingredients/feta.png",
    category: "Cheese",
  },

  {
    name: "Pepperoni",
    price: 50,
    imageUrl: "/ingredients/pepperoni.png",
    category: "Meat",
  },
  {
    name: "Bacon",
    price: 45,
    imageUrl: "/ingredients/bacon.png",
    category: "Meat",
  },
  {
    name: "Ham",
    price: 40,
    imageUrl: "/ingredients/ham.png",
    category: "Meat",
  },
  {
    name: "Chicken",
    price: 45,
    imageUrl: "/ingredients/chicken.png",
    category: "Meat",
  },
  {
    name: "Salami",
    price: 50,
    imageUrl: "/ingredients/salami.png",
    category: "Meat",
  },

  {
    name: "Salmon",
    price: 70,
    imageUrl: "/ingredients/salmon.png",
    category: "Seafood",
  },
  {
    name: "Tuna",
    price: 65,
    imageUrl: "/ingredients/tuna.png",
    category: "Seafood",
  },
  {
    name: "Shrimp",
    price: 60,
    imageUrl: "/ingredients/shrimp.png",
    category: "Seafood",
  },
  {
    name: "Crab",
    price: 55,
    imageUrl: "/ingredients/crab.png",
    category: "Seafood",
  },

  {
    name: "Tomato",
    price: 15,
    imageUrl: "/ingredients/tomato.png",
    category: "Vegetables",
  },
  {
    name: "Bell Pepper",
    price: 20,
    imageUrl: "/ingredients/bell-pepper.png",
    category: "Vegetables",
  },
  {
    name: "Mushrooms",
    price: 25,
    imageUrl: "/ingredients/mushrooms.png",
    category: "Vegetables",
  },
  {
    name: "Onion",
    price: 10,
    imageUrl: "/ingredients/onion.png",
    category: "Vegetables",
  },
  {
    name: "Olives",
    price: 25,
    imageUrl: "/ingredients/olives.png",
    category: "Vegetables",
  },
  {
    name: "Corn",
    price: 15,
    imageUrl: "/ingredients/corn.png",
    category: "Vegetables",
  },
  {
    name: "Cucumber",
    price: 10,
    imageUrl: "/ingredients/cucumber.png",
    category: "Vegetables",
  },
  {
    name: "Avocado",
    price: 35,
    imageUrl: "/ingredients/avocado.png",
    category: "Vegetables",
  },

  {
    name: "Basil",
    price: 10,
    imageUrl: "/ingredients/basil.png",
    category: "Herbs",
  },
  {
    name: "Oregano",
    price: 5,
    imageUrl: "/ingredients/oregano.png",
    category: "Herbs",
  },
  {
    name: "Garlic",
    price: 10,
    imageUrl: "/ingredients/garlic.png",
    category: "Herbs",
  },
  {
    name: "Chili Pepper",
    price: 15,
    imageUrl: "/ingredients/chili.png",
    category: "Herbs",
  },

  {
    name: "Tomato Sauce",
    price: 15,
    imageUrl: "/ingredients/tomato-sauce.png",
    category: "Sauces",
  },
  {
    name: "BBQ Sauce",
    price: 20,
    imageUrl: "/ingredients/bbq-sauce.png",
    category: "Sauces",
  },
  {
    name: "Spicy Mayo",
    price: 20,
    imageUrl: "/ingredients/spicy-mayo.png",
    category: "Sauces",
  },
  {
    name: "Soy Sauce",
    price: 10,
    imageUrl: "/ingredients/soy-sauce.png",
    category: "Sauces",
  },

  {
    name: "Pineapple",
    price: 20,
    imageUrl: "/ingredients/pineapple.png",
    category: "Exotic",
  },
]

export const PRODUCTS_WITHOUT_VARIANTS: ProductWithoutOptions[] = [
  // Drinks
  {
    name: "Coca-Cola",
    description: "Classic Coca-Cola, 500ml.",
    imageUrl: "/drinks/coca-cola.png",
    categoryValue: "drinks",
  },
  {
    name: "Orange Juice",
    description: "Freshly squeezed orange juice, 300ml.",
    imageUrl: "/drinks/orange-juice.png",
    categoryValue: "drinks",
  },
  {
    name: "Espresso",
    description: "Strong Italian espresso, 30ml.",
    imageUrl: "/drinks/espresso.png",
    categoryValue: "drinks",
  },
  {
    name: "Green Tea",
    description: "Japanese green tea, 250ml.",
    imageUrl: "/drinks/green-tea.png",
    categoryValue: "drinks",
  },
  {
    name: "Lemonade",
    description: "Fresh lemonade with mint, 400ml.",
    imageUrl: "/drinks/lemonade.png",
    categoryValue: "drinks",
  },

  // Sauces
  {
    name: "Ketchup",
    description: "Classic tomato ketchup, 50g.",
    imageUrl: "/sauces/ketchup.png",
    categoryValue: "sauces",
  },
  {
    name: "Mayonnaise",
    description: "Creamy mayonnaise, 50g.",
    imageUrl: "/sauces/mayonnaise.png",
    categoryValue: "sauces",
  },
  {
    name: "Spicy Mayo",
    description: "Spicy mayonnaise with chili, 50g.",
    imageUrl: "/sauces/spicy-mayo.png",
    categoryValue: "sauces",
  },
  {
    name: "BBQ Sauce",
    description: "Smoky barbecue sauce, 50g.",
    imageUrl: "/sauces/bbq.png",
    categoryValue: "sauces",
  },
  {
    name: "Soy Sauce",
    description: "Classic soy sauce, 30ml.",
    imageUrl: "/sauces/soy.png",
    categoryValue: "sauces",
  },

  // Snacks
  {
    name: "French Fries",
    description: "Crispy golden fries with sea salt.",
    imageUrl: "/snacks/fries.png",
    categoryValue: "snacks",
  },
  {
    name: "Onion Rings",
    description: "Crispy battered onion rings with dipping sauce.",
    imageUrl: "/snacks/onion-rings.png",
    categoryValue: "snacks",
  },
  {
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs.",
    imageUrl: "/snacks/garlic-bread.png",
    categoryValue: "snacks",
  },

  // Desserts
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone.",
    imageUrl: "/desserts/tiramisu.png",
    categoryValue: "desserts",
  },
  {
    name: "Cheesecake",
    description: "Creamy New York cheesecake with berry sauce.",
    imageUrl: "/desserts/cheesecake.png",
    categoryValue: "desserts",
  },
  {
    name: "Ice Cream",
    description: "Three scoops: vanilla, chocolate, strawberry.",
    imageUrl: "/desserts/ice-cream.png",
    categoryValue: "desserts",
  },

  // Salads
  {
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons, Caesar dressing.",
    imageUrl: "/salads/caesar.png",
    categoryValue: "salads",
  },
  {
    name: "Greek Salad",
    description: "Tomatoes, cucumbers, olives, red onion, feta cheese.",
    imageUrl: "/salads/greek.png",
    categoryValue: "salads",
  },

  // Sushi
  {
    name: "California Roll",
    description: "Crab stick, avocado, cucumber, sesame.",
    imageUrl: "/sushi/california.png",
    categoryValue: "sushi",
  },
  {
    name: "Philadelphia Roll",
    description: "Salmon, cream cheese, cucumber.",
    imageUrl: "/sushi/philadelphia.png",
    categoryValue: "sushi",
  },
  {
    name: "Spicy Tuna Roll",
    description: "Tuna, spicy mayo, cucumber, sesame.",
    imageUrl: "/sushi/spicy-tuna.png",
    categoryValue: "sushi",
  },
]

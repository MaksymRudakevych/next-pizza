import type { Category } from "@/types"

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

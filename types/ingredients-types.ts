export type IngredientCategory =
  "Cheese" | "Meat" | "Seafood" | "Vegetables" | "Herbs" | "Sauces" | "Exotic"

export type Ingredients = {
  name: string
  price: number
  imageUrl: string
  category: IngredientCategory
}

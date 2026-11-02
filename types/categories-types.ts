import { BaseOption } from "."

export type CategoryValue =
  | "pizza"
  | "sushi"
  | "pasta"
  | "salads"
  | "snacks"
  | "sauces"
  | "drinks"
  | "desserts"

export type Category = {
  value: CategoryValue
  name: string
  filters: BaseOption[]
}

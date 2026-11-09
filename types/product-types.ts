import { CategoryValue } from "./categories-types"

export type Product = {
  id: number
  img: string
  name: string
  description: string
  price: number
}

export type ProductWithoutOptions = {
  name: string
  description: string
  imageUrl: string
  categoryValue: CategoryValue
}

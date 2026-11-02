import Link from "next/link"
import { Button, Card } from "../ui"
import { CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Plus } from "lucide-react"
import { Product } from "@/types"

export const ProductCard = (item: Product) => {
  return (
    <Link href={`/product/${item.id}`}>
      <Card className="relative mx-auto w-full max-w-75 pt-0">
        <div className="absolute inset-0 z-30 aspect-4/3 bg-black/20" />
        <img
          src={item.img}
          alt={item.name}
          className="relative aspect-4/3 w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="pb-3">{item.name}</CardTitle>
          <CardDescription className="min-h-20">
            {item.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-between gap-10">
          <p className="text-lg font-bold">{item.price} ₴</p>
          <Button className="font-bold">
            <Plus />
            Add To Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

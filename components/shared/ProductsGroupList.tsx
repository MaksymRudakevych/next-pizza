"use client"

import { CategoryValue, Product } from "@/types"
import { ProductCard } from "./ProductCard"
import { Title } from "./Title"
import { useIntersectionObserver } from "@reactuses/core"
import { useEffect, useRef, useState } from "react"
import { useCategoryStore } from "@/store/category"

type Props = {
  titleText: string
  items: Product[]
  categoryValue: CategoryValue
}

export const ProductsGroupList = ({
  titleText,
  items,
  categoryValue,
}: Props) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  }

  const intersectionRef = useRef(null)
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

  const [entry, setEntry] = useState<IntersectionObserverEntry[]>([])

  const stop = useIntersectionObserver(
    intersectionRef,
    (entry) => {
      setEntry(entry)
    },
    options
  )

  useEffect(() => {
    if (entry[0]?.isIntersecting) {
      setActiveCategoryId(categoryValue)
    }
  }, [entry, categoryValue, titleText])

  return (
    <div className="scroll-mt-16" id={categoryValue} ref={intersectionRef}>
      <Title text={titleText} size="sm" className="mb-4 pb-1 font-bold" />
      <div className="flex flex-wrap justify-between gap-4">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            img={item.img}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}

import { Container, Title, TopBar, Filter } from "@/components/shared"
import { ProductsGroupList } from "@/components/shared/ProductsGroupList"
import { PASTA, PIZZAS, SUSHI } from "@/data"

export default function Page() {
  return (
    <Container className="mt-6">
      <Title className="font-heading text-primary" text="Full Menu" size="lg" />
      <TopBar />

      <div className="mt-10 flex gap-8">
        <div className="w-63 shrink-0">
          <Filter />
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <ProductsGroupList
            titleText="Pizzas"
            items={PIZZAS}
            categoryValue="pizza"
          />
          <ProductsGroupList
            titleText="Sushi"
            items={SUSHI}
            categoryValue="sushi"
          />
          <ProductsGroupList
            titleText="Pasta"
            items={PASTA}
            categoryValue="pasta"
          />
        </div>
      </div>
    </Container>
  )
}

import { prisma } from "@/lib/prisma-client"
import { hashSync } from "bcryptjs"
import { CATEGORIES, INGREDIENTS, PRODUCTS_WITHOUT_VARIANTS } from "./constants"
import { PizzaType, Prisma } from "@/lib/generated/prisma/client"

const generateProductItem = ({
  productId,
  pizzaType,
  size,
  price,
}: {
  productId: number
  pizzaType?: PizzaType
  size?: number
  price: number
}): Prisma.ProductItemUncheckedCreateInput => {
  return {
    productId,
    pizzaType,
    size,
    price,
  }
}

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Maksym Cedric",
        password: hashSync("111", 10),
        email: "maks.cedric2@gmail.com",
        provider: "credentials",
        providerId: "maks.cedric2@gmail.com",
        role: "USER",
        verified: new Date(),
      },
      {
        fullName: "admin Lancey",
        password: hashSync("111", 10),
        email: "vas.lan@gmail.com",
        provider: "credentials",
        providerId: "vas.lan@gmail.com",
        role: "ADMIN",
        verified: new Date(),
      },
    ],
  })

  await prisma.category.createMany({
    data: CATEGORIES,
  })

  await prisma.ingredients.createMany({
    data: INGREDIENTS,
  })

  await prisma.product.createMany({
    data: PRODUCTS_WITHOUT_VARIANTS,
  })

  const pizza1 = await prisma.product.create({
    data: {
      name: "Pepperoni",
      imageUrl: "/pizza/pepperoni.png",
      description: "Tomato sauce, mozzarella, and spicy pepperoni slices.",
      categoryValue: "pizza",
      ingredients: {
        connect: [
          { name: "Mozzarella" },
          { name: "Tomato" },
          { name: "Pepperoni" },
        ],
      },
    },
  })

  const pizza2 = await prisma.product.create({
    data: {
      name: "Margherita",
      imageUrl: "/pizza/margherita.png",
      description:
        "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
      categoryValue: "pizza",
      ingredients: {
        connect: [
          { name: "Mozzarella" },
          { name: "Tomato" },
          { name: "Basil" },
        ],
      },
    },
  })

  await prisma.productItem.createMany({
    data: [
      generateProductItem({
        productId: pizza1.id,
        pizzaType: "THIN",
        size: 20,
        price: 150,
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: "TRADITIONAL",
        size: 20,
        price: 160,
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: "THIN",
        size: 30,
        price: 180,
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: "TRADITIONAL",
        size: 30,
        price: 190,
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: "THIN",
        size: 40,
        price: 220,
      }),
      generateProductItem({
        productId: pizza1.id,
        pizzaType: "TRADITIONAL",
        size: 40,
        price: 230,
      }),

      generateProductItem({
        productId: pizza2.id,
        pizzaType: "THIN",
        size: 20,
        price: 120,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: "TRADITIONAL",
        size: 20,
        price: 130,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: "THIN",
        size: 30,
        price: 150,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: "TRADITIONAL",
        size: 30,
        price: 160,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: "THIN",
        size: 40,
        price: 190,
      }),
      generateProductItem({
        productId: pizza2.id,
        pizzaType: "TRADITIONAL",
        size: 40,
        price: 200,
      }),

      generateProductItem({ productId: 1, price: 40 }),
      generateProductItem({ productId: 2, price: 60 }),
      generateProductItem({ productId: 3, price: 35 }),
      generateProductItem({ productId: 4, price: 30 }),
      generateProductItem({ productId: 5, price: 50 }),
      generateProductItem({ productId: 6, price: 10 }),
      generateProductItem({ productId: 7, price: 10 }),
      generateProductItem({ productId: 8, price: 15 }),
      generateProductItem({ productId: 9, price: 15 }),
      generateProductItem({ productId: 10, price: 5 }),
      generateProductItem({ productId: 11, price: 60 }),
      generateProductItem({ productId: 12, price: 70 }),
      generateProductItem({ productId: 13, price: 50 }),
      generateProductItem({ productId: 14, price: 90 }),
      generateProductItem({ productId: 15, price: 85 }),
      generateProductItem({ productId: 16, price: 70 }),
      generateProductItem({ productId: 17, price: 140 }),
      generateProductItem({ productId: 18, price: 130 }),
      generateProductItem({ productId: 19, price: 150 }),
      generateProductItem({ productId: 20, price: 200 }),
      generateProductItem({ productId: 21, price: 180 }),
    ],
  })

  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: "11111" },
      { userId: 2, totalAmount: 0, token: "22222" },
    ],
  })

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cardId: 1,
      quantity: 2,
      ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] },
    },
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredients" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (e) {
    console.error(e)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

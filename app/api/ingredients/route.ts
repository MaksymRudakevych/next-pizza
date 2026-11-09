import { prisma } from "@/lib/prisma-client"
import { NextResponse } from "next/server"

export async function GET() {
  const ingredients = await prisma.ingredients.findMany()

  return NextResponse.json(ingredients)
}

import { NextResponse } from "next/server";
import products from "../products.json";
export async function GET() {
  const resultados = [];

  const firstCategory = products.filter(
    (product) => product.category === "Mouse"
  )[0];
  const secondCategory = products.filter(
    (product) => product.category === "Keyboards"
  )[0];
  const threeCategory = products.filter(
    (product) => product.category === "Headphones"
  )[0];
  if (threeCategory) {
    resultados.push(threeCategory);
  }
  if (firstCategory) {
    resultados.push(firstCategory);
  }
  if (secondCategory) {
    resultados.push(secondCategory);
  }
  return NextResponse.json(resultados);
}

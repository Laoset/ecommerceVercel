import { NextResponse } from "next/server";
import products from "../products.json";
//RANDOM TRES
export async function GET() {
  const resultados = [];

  const firstCategory = products.filter(
    (product) => product.category === "Mouse"
  );
  const secondCategory = products.filter(
    (product) => product.category === "Keyboards"
  );
  const threeCategory = products.filter(
    (product) => product.category === "Headphones"
  );
  if (threeCategory) {
    const randomIndex = Math.floor(Math.random() * threeCategory.length);

    resultados.push(threeCategory[randomIndex]);
  }
  if (firstCategory) {
    const randomIndex = Math.floor(Math.random() * firstCategory.length);

    resultados.push(firstCategory[randomIndex]);
  }
  if (secondCategory) {
    const randomIndex = Math.floor(Math.random() * secondCategory.length);

    resultados.push(secondCategory[randomIndex]);
  }
  return NextResponse.json(resultados);
}

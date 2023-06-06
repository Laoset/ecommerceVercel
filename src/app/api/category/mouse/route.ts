import { NextRequest, NextResponse } from "next/server";
import products from "../../products.json";
export async function GET() {
  const probando = products;
  const filtradoProbando = probando.filter(
    (product) => product.category === "Mouse"
  );
  return NextResponse.json(filtradoProbando);
}

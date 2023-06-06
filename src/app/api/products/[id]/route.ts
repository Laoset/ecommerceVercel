import { NextResponse } from "next/server";
import products from "../../products.json";

export async function GET(request: any, { params }) {
  const id = params.id;
  const probando = id;
  const product = products.find((produc) => produc.id === Number(probando));
  if (!product)
    return NextResponse.json({
      message: "No exist any product with the ID provided",
    });
  return NextResponse.json(product);
}

import { NextRequest, NextResponse } from "next/server";
import products from "../products.json";
export async function GET(products: any) {
  return NextResponse.json(products);
}

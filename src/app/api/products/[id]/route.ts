import { deleteProductHandler, getProductByIdHandler } from "@/controllers/products.controllers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  return getProductByIdHandler(id);
}

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}) {
    const { id } = await params;
    return deleteProductHandler(id)
} 
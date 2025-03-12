import { createProduct, deleteProduct, getProductById, getProducts } from "@/services/products.services";
import { NextResponse } from "next/server";

export async function getProdutsHandler() {
    const data = await getProducts();
    return NextResponse.json(data, {status: 200});
}

export async function createProductHandler() {
    const data = await createProduct();
    return NextResponse.json(data, {status: 201})
}

export async function getProductByIdHandler(id: string) {
    const numId = Number(id)
    if (isNaN(numId) || numId <= 0 ) {
        return NextResponse.json({error: 'ID invalido.'}, {status: 400})
    }
    const data = await getProductById(numId)
    return NextResponse.json(data, {status: 200})
}

export async function deleteProductHandler(id: string){
    const numId = Number(id)
    if (isNaN(numId) || numId <= 0 ) {
        return NextResponse.json({error: 'ID invalido.'}, {status: 400})
    }
    const data = await deleteProduct(numId)
    return NextResponse.json(data, {status: 204})
}
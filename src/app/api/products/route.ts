import { createProductHandler, getProdutsHandler } from "@/controllers/products.controllers";

export function GET() {
    return getProdutsHandler();
}

export function POST() {
    return createProductHandler();
}
export function getProducts() {
    return {message: 'Obteniendo productos'}
}

export function createProduct() {
    return {message: 'Creando productos'}
}

export function getProductById(id: number) {
    return {message: `Producto ID: ${id}`}
}

export function deleteProduct(id: number) {
    return {message: `Producto ID: ${id} eliminado`}
}
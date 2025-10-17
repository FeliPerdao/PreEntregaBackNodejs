import {
    addProducts,
    deleteProducto,
    getAProduct,
    getProducts,
} from "./fakeStoreFunctions.js";

const argumentos = process.argv.slice(2);
console.log(argumentos);

if (argumentos[0] == "GET" && argumentos[1] == "products") {
    getProducts();
} else if (
    argumentos[0] == "GET" &&
    argumentos[1] &&
    argumentos[1].includes("products/")
) {
    getAProduct(argumentos[1]);
} else if (
    argumentos[0] == "POST" &&
    argumentos[1] == "products" &&
    argumentos.length == 5
) {
    const product = {
        title: argumentos[2],
        price: parseFloat(argumentos[3]),
        category: argumentos[4],
    };
    addProducts(product);
} else if (argumentos[0] == "DELETE" && argumentos[1].includes("products/")) {
    deleteProducto(argumentos[1]);
} else {
    console.log("Comando no reconocido");
}

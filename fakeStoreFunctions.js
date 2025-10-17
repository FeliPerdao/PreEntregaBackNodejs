// FUNCIONES ASÍCRONAS

export async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "GET",
        });
        const data = await response.json();
        console.log(`Los productos son:`);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

export async function getAProduct(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

export async function addProducts(product) {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product), // Convierte el objeto JS a una cadena JSON
        });

        const data = await response.json();
        console.log("Producto agregado con éxito");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

const newProduct = {
    id: "jaja",
    title: "Perro",
    price: 2.55,
    category: "Perros",
};

export async function deleteProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log("Producto eliminado con éxito");
        console.log(data.title);
    } catch (error) {
        console.error(error);
    }
}

export async function actualizarProducto(producto) {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/${producto.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto),
            }
        );
    } catch (error) {
        console.error(error);
    }
}

// LLAMADAS A LAS FUNCIONES
//getProducts();
//addProducts(newProduct);
//getAProduct("products/20");
//deleteProducto("products/2");

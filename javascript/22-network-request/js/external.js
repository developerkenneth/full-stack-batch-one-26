// fetch datas from external api's

// dummyjson to be precise

async function fetchProducts() {

    try {
        const url = "https://dummyjson.com/products";
        const response = await fetch(url);
        const data = await response.json();
       data.products.forEach(
        product =>{
            console.log(product);
        }
       )
    } catch (err) {
        console.error(err);

    } finally {
        console.log("loaded");
    }

}

fetchProducts();
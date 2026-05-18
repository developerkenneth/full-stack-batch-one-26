// GET request
// get all products

async function getAll() {
    const url = `http://localhost:3000/products`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }

}


// POST request 
async function create() {
    const url = `http://localhost:3000/products`;

    const body = JSON.stringify({
        price: 25,
        categoery: "beverages",
        title: "orange drink",
        stock: 90,
        description: "better orange drink for ur body",
        company: "coke"
    });
    const response = await fetch(url, {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    console.log(data);
}


// PUT request 
async function update(id) {
    const url = `http://localhost:3000/products/${id}`;

    const body = JSON.stringify({
        price: 25,
        categoery: "beverages",
        title: "apple drink",
        stock: 90,
        description: "better apple drink for ur body and ur children",
        company: "pulpy"
    });
    const response = await fetch(url, {
        method: "PUT",
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    console.log(data);
}


// DELETE request 
async function destroy(id) {
    const url = `http://localhost:3000/products/${id}`;
    const response = await fetch(url, {
        method: "DELETE"
    });
    const data = await response.json();

    console.log(data);
}

destroy("pLpbH0Hv06A");
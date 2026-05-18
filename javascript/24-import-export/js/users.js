export default async function allUsers() {
    const url = `http://localhost:3000/users`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

// POST request 
export async function createUser(userData) {
    const url = `http://localhost:3000/users`;

    const body = JSON.stringify({
        userData
    });

    const response = await fetch(url, {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
}
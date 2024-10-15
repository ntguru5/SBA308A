const API_URL = 'https://dogapi.dog/api/v2';
const POST_URL = 'https://dummyjson.com/docs';

export async function getDogFact() {
    const response = await fetch(`${API_URL}/facts`);
    const data = await response.json();
    return data;
}

export async function createDogFact(fact) {
    const response = await fetch(`${POST_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fact)
    });
    const data = await response.json();
    return data;
}

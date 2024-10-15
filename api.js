const API_URL = 'https://dogapi.dog/api/v2';

export async function getDogFacts() {
    const response = await fetch(`${API_URL}/facts`);
    const data = await response.json();
    return data;
}

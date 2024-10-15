import { getDogFacts } from './api.js';

const factElement = document.getElementById('fact');
const getFactButton = document.getElementById('get-fact-button');

getFactButton.addEventListener('click', async () => {
    try {
        const fact = await getDogFacts();
        const factBody = fact.data[0].attributes.body;
        factElement.innerText = factBody;
    } catch (error) {
        console.error(error);
    }
});

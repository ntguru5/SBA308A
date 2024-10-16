import { getDogFact, createDogFact } from './api.js';

const factElement = document.getElementById('fact');
const getFactButton = document.getElementById('get-fact-button');
const createFactButton = document.getElementById('create-fact-button');

getFactButton.addEventListener('click', async () => {
    try {
        const fact = await getDogFact();
        const factBody = fact.data[0].attributes.body;
        factElement.innerText = factBody;
    } catch (error) {
        console.error(error);
    }
});

createFactButton.addEventListener('click', () => {
    fetch('https://dummyjson.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        const newFact = data.posts[0].title;
        factElement.innerText = `New Fact: ${newFact}`;
        })
        .catch(error => console.error(error));
    });

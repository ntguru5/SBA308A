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
    const fact = {
        title: 'My New Fact',
        content: 'This is a new fact about dogs!'
    };

    fetch('https://dummyjson.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(fact)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

// createFactButton.addEventListener('click', async () => {
//     try {
//         const fact = {
//             attributes: {
//                 body: 'This is a new fact!'
//             }
//         };
//         const response = await createDogFact(fact);
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// });

// to make a POST request
function makePostRequest(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

// URLs and data list
const url1 = 'https:endpoint1';
const payload1 = { key: 'value1' };

const url2 = 'https:endpoint2';
const payload2 = { key: 'value2' };

const url3 = 'https:endpoint3';
const payload3 = { key: 'value3' };

// multiple request
const finalResult = [
    makePostRequest(url1, payload1),
    makePostRequest(url2, payload2),
    makePostRequest(url3, payload3)
];

// make all request at once and wait for all to complete using promise
Promise.all(finalResult)
    .then(responses => {
        // program comes here after completing all request
    })
    .catch(error => {
        // Handle errors
    });
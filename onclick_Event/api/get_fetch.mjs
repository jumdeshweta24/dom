import fetch from 'node-fetch';

fetch('https://api.github.com/users/manishmshiva')
    // Handle success
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Request Failed', err));

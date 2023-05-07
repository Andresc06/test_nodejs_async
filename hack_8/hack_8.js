const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData.length;
}

module.exports = fnTest;
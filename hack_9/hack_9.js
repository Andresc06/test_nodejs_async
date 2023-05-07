const fetch = require('cross-fetch');
/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar'
    })
  })
  const jsonData = await response.json();
  return jsonData;
}

module.exports = fnTest;
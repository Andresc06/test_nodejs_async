const fetch = require('cross-fetch');
/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/

async function fnTest(id) {

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
      id: 50
    })
  })
  return response;
}

module.exports = fnTest;
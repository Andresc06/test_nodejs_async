const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/

async function fnTest() {
  
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const response = await axios.post(url)

  return response;
}

module.exports = fnTest;
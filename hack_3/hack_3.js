const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

async function fnTest() {
  
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

  const response = await axios.put(url);
  return response;
}

module.exports = fnTest;
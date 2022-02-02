const serverless = require("serverless-http");
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.json({
    statusCode: 200,
    body: JSON.stringify({"message": "/"})
  });
})

app.get("/teste", (request, response) => {
  response.json({
    statusCode: 200,
    body: JSON.stringify({"message": "/teste"})
  });
});


exports.handler = serverless(app);
/*
 * Title: Row Node Project
 * Description: A restful api for monitoring down time of user defined links
 * Author: Palash Talukder
 * Date: 10.11.2024
 */

//Dependency
const http = require("http");

const { handleReqRes } = require("./helpers/handleReqRes");

//app object- module scaffoldinhg
const app = {};

//configuration
app.config = {
  port: 4000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listinging to port numbder ${app.config.port}`);
  });
};

// handle request, response
app.handleReqRes = handleReqRes;

app.createServer();

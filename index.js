/*
 * Title: Row Node Project
 * Description: A restful api for monitoring down time of user defined links
 * Author: Palash Talukder
 * Date: 10.11.2024
 */

//Dependency
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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
app.handleReqRes = (req, res) => {
  //request handle

  //Get the url and parse it
  const parseUrl = url.parse(req.url, true);

  const path = parseUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    //response handle
    res.end("Hello Developer, Palash Talukder");
  });
};

app.createServer();

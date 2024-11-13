/*
 * Title: Handle Request and Response
 * Description: Handle Request and Response
 * Author: Palash Talukder
 * Date: 10.11.2024
 *
 */
//Dependency
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const { notFoundHandler } = require("../handlers/routeHandler/notFoundHandler");
//Module schaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  //request handle

  //Get the url and parse it
  const parseUrl = url.parse(req.url, true);

  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headerObject = req.headers;

  const requestProperties = {
    parseUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headerObject,
  };
  const choosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;
  

  const decoder = new StringDecoder("utf-8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    choosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      //Return the final response
      res.setHeader('Content-type', 'application/json')
      res.writeHead(statusCode);
      res.end(payloadString);
    });
    //response handle
    res.end("Hello Developer, Palash Talukder");
  });
};

module.exports = handler;

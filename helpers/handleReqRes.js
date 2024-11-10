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
//Module schaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
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

module.exports = handler;

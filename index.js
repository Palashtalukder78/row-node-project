/*
 * Title: Row Node Project
 * Description: A restful api for monitoring down time of user defined links
 * Author: Palash Talukder
 * Date: 10.11.2024
 */

//Dependency
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require('./lib/data')

//app object- module scaffoldinhg
const app = {}; 

//testing file system
data.create('test', 'newfile', {name: 'Bangladesh', language: 'bengeli'}, (err)=>{
  console.log('Error was', err)
})

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Listinging to port numbder ${environment.port}`);
  });
};

// handle request, response
app.handleReqRes = handleReqRes;

app.createServer();

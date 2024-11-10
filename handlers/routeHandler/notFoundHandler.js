/*
 * Title: Not-Found Handler
 * Description: 404 Not-Found route
 * Author: Palash Talukder
 * Date: 10.11.2024
 *
 */
//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callBack) => {
  console.log(requestProperties);
  callBack(404, {
    message: "404 Not found",
  });
};
module.exports = handler;

/*
 * Title: sample Handler
 * Description: sample Handler routes
 * Author: Palash Talukder
 * Date: 10.11.2024
 *
 */
//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callBack) => {
  console.log(requestProperties);
  callBack(200, {
    message: " This is a sample URL",
  });
};
module.exports = handler;

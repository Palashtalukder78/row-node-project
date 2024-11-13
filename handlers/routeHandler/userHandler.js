/*
 * Title: User Handler
 * Description: Route handler to handle user related routes
 * Author: Palash Talukder
 * Date: 13.11.2024
 *
 */
//module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callBack) => {
    callBack(200, {
        message: " This is a User URL",
    });
};
module.exports = handler;
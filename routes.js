/*
 * Title: Routes
 * Description: Application Routes
 * Author: Palash Talukder
 * Date: 10.11.2024
 *
 */

const { sampleHandler } = require("./handlers/routeHandler/sampleHandler");
const { userHandler } = require("./handlers/routeHandler/userHandler");


const routes = {
    sample : sampleHandler,
    user: userHandler,
};

module.exports = routes;
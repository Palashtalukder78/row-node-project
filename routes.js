/*
 * Title: Routes
 * Description: Application Routes
 * Author: Palash Talukder
 * Date: 10.11.2024
 *
 */

const { sampleHandler } = require("./handlers/routeHandler/sampleHandler");


const routes = {
    'sample' : sampleHandler
};

module.exports = routes;
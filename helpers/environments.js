/*
 * Title: Handle Request and Response
 * Description: Handle Request and Response
 * Author: Palash Talukder
 * Date: 10.11.2024
 *
 */
//Dependency

//Module scaffolding
const environments = {};

environments.staging = {
  port: 4000,
  envName: "staging",
};
environments.production = {
  port: 5000,
  envName: "production",
};

//determined which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

//export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environment.staging;

//Export module
module.exports = environmentToExport;

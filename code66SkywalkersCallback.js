"use strict";

const request = require("request");

function findSkywalkersCallback() {
    request("https://swapi.co/api/people", (error, response, body) => {
        console.log("error: " + error);
        console.log("response " + response.statusCode);
        const people = JSON.parse(body).results;
        const skywalkers = people.filter(person => person.name.match(/([Ss]kywalker)/));

        if (skywalkers === []) {
            console.log("No Skywalkers on this planet");
        } else {
            console.log("Skywalkers found: " + skywalkers.map(person => person.name));
        }
    });
}

module.exports = {
    findSkywalkersCallback,
};

"use strict";

const rp = require("request-promise");

function findSkywalkersPromise() {
    return rp("https://swapi.co/api/people")
        .then(body => {
            const people = JSON.parse(body).results;

            return people.filter(person => person.name.match(/([Ss]kywalker)/)).map(person => person.name);
        })
        .catch(error => {
            console.log("error: " + error);
        });
}

module.exports = {
    findSkywalkersPromise,
};

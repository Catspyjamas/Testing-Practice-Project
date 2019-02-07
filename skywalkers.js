"use strict";

const rp = require("request-promise");

async function fetchAllPeople() {
    try {
        const SWAPIpeople = await rp("https://swapi.co/api/people");
        const resp = await JSON.parse(SWAPIpeople);

        if (resp.next === null) {
            return resp.results;
        }
        const peoplePromises = [];
        let currentPage = 1;

        for (let personIndex = 0; personIndex <= resp.count; personIndex += 10) {
            console.log("personIndex 🙎 ", personIndex, " resp count 🗣️ ", resp.count);
            peoplePromises.push(rp(`https://swapi.co/api/people/?page=${currentPage}`));
            currentPage++;
        }

        return Promise.all(peoplePromises);
    } catch (err) {
        console.log("error: " + err);
    }
}

function findSkywalkers() {
    return fetchAllPeople();
    // const allPeople = await fetchAllPeople();

    // console.log(allPeople.length);
    // const skywalkers = people.filter(person => person.name.match(/([Ss]kywalker)/));

    // return skywalkers.map(person => person.name);
}

module.exports = {
    findSkywalkers,
};
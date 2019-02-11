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

// async function parse(arr) {
//     try {
//         const objPromises = []
//         for (let objCount = 0; objCount <= arr.length; objCount++) {
//             const parsedPromise = new Promise((resolve, reject) => {
//                 JSON.parse(arr[objCount])
//             })
//         }
//     }
//     catch(err) {}
// }

async function findSkywalkers() {
    try {
        const results = await fetchAllPeople();
        const resultsParsed = results.map(result => JSON.parse(result));
        const people = [];

        resultsParsed.forEach(items => {
            people.push(...items.results);
        });

        return people.filter(person => person.name.match(/([Ss]kywalker)/));
    } catch (error) {
        console.log("error: " + error);
    }
}

module.exports = {
    findSkywalkers,
};

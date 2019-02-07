"use strict";

// const month = process.argv[2];
// const {
//     mondaysInMonth,
// } = require("./mondaysInMonth");
// const {
//     findSkywalkersCallback,
// } = require("./code66SkywalkersCallback");
// const {
//     findSkywalkersPromise,
// } = require("./code66SkywalkersPromise");
const {
    findSkywalkers,
} = require("./skywalkers");

// console.log(mondaysInMonth(month));
// findSkywalkersPromise().then(resp =>
//     console.log(resp))
// .catch(error => console.log(error));

findSkywalkers().then(resp => {
    console.log(resp);
});

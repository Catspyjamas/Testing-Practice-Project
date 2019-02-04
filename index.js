"use strict";

const month = process.argv[2];

console.log(month);
const {
    mondaysInMonth,
} = require("./mondaysInMonth");

console.log(mondaysInMonth(month));

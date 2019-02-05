"use strict";

const month = process.argv[2];
const {
    mondaysInMonth,
} = require("./mondaysInMonth");

console.log(mondaysInMonth(month));

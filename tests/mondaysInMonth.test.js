"use strict";

const moment = require("moment");
const {
    mondaysInMonth,
} = require("../mondaysInMonth");

// function sum(a, b) {
//     return a - b;
// }

// test("adds 1 + 2 to equal 3", () => {
//     expect(sum(5, 2)).toBe(3);
// });

// Eventually you might have to lie to Moment.js what day it is today. This is mocking, ask Tanner when this happens

test("returns an integer", () => {
    expect(typeof mondaysInMonth("2019-04")).toBe("number");
});

// Note: with 'toThrow()', you must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
test("returns an error if something different from a month is passed", () => {
    expect(() => {
        mondaysInMonth("nonsense");
    }).toThrow();
});

test("returns 4 for February 2019", () => {
    expect(mondaysInMonth("2019-02")).toBe(4);
});

test("returns 5 for February 2016", () => {
    expect(mondaysInMonth("2016-02")).toBe(5);
});

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

it(" doesn't include Mondays that come before the first day of the month", () => {
    expect(mondaysInMonth("2019-02")).toBe(4);
});

it("includes Mondays that are the first day of the month", () => {
    expect(mondaysInMonth("2016-02")).toBe(5);
});

it("does include all Mondays that come after the first day of the month", () => {
    expect(mondaysInMonth("2016-05")).toBe(5);
});

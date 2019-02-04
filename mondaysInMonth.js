"use strict";

const moment = require("moment");

function mondaysInMonth(month) {
    const first = moment(month, "YYYY-MM", true).startOf("month");
    // Get the actual number of days in the given month
    const daysInMonth = first.daysInMonth();

    console.log(daysInMonth);

    if (first.isValid() !== true) {
        throw new Error("Please pass a month in this format: 'YYYY-MM'");
    }
    console.log(first.format());

    // Set corresponding Monday
    const mondayThisWeek = first.clone().day(1);

    console.log(mondayThisWeek.format());

    let firstMonday;

    // Check if first is a Monday
    if (mondayThisWeek.isSame(first)) {
        firstMonday = mondayThisWeek;
        // Check if first is from Tuesday til Saturday
    } else if (mondayThisWeek.isBefore(first)) {
        firstMonday = first.day(1 + 7);
    } else {
        firstMonday = first.day(1);
    }

    const dateOfFirstMonday = firstMonday.date();
    // console.log(dateOfFirstMonday);
    // Set Monday counter
    let numberOfMondays = 0;

    // Count up until next month
    for (let fr = dateOfFirstMonday; fr <= daysInMonth; fr += 7) {
        numberOfMondays += 1;
    }

    return numberOfMondays;
}

module.exports = {
    mondaysInMonth,
};

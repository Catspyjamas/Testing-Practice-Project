"use strict";

const moment = require("moment");

function mondaysInMonth(month) {
    const first = moment(month, "YYYY-MM", true).startOf("month");

    if (first.isValid() !== true) {
        throw new Error("Please pass a month in this format: 'YYYY-MM'");
    }

    // Set corresponding Monday
    const mondayThisWeek = first.clone().day(1);
    let firstMonday;

    if (mondayThisWeek.isBefore(first)) {
        firstMonday = first.clone().day(1 + 7);
    } else {
        firstMonday = mondayThisWeek;
    }

    return Math.floor((first.daysInMonth() - firstMonday.date()) / 7) + 1;
}

module.exports = {
    mondaysInMonth,
};

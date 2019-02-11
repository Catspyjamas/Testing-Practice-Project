"use strict";

jest.mock("../skywalkers");

const {
    findSkywalkers,
} = require("../skywalkers");

const desiredMatch = [
{
    name: expect.stringMatching(/([Ss]kywalker)/),
}
];

it("Only logs out Skywalkers", () => {
    expect(findSkywalkers()).toMatchObject(desiredMatch);
});

// test("filters out non-Skywalker people from the response", () => {
//     // mock response the api, some people will have skwalker some wont in their last name
//     it(" doesn't include Mondays that come before the first day of the month", () => {
//       expect(mondaysInMonth("2019-02")).toBe(4);
//   });
//     // expect either the response to be the json without nonskywalkers, or the length to be right
// });

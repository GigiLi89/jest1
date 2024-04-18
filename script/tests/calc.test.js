const addition = require("../calc");

//the addition will come back as a fail since addition is not a function and we need
//to go to our cal.js file and add the function. Since we have added two breaking tests
//we need to write num1 and num2 for both of them to work. 
describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});
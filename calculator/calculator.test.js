const calculator = require('./calculator.js');
const { add } = calculator;

it('runs the tests', () => {
    expect(true).toBe(true);
})

describe('the calculator', () => {

    describe('the add method', () => {

        it('should add two numbers', () => {

            expect(add(2, 2)).toBe(4);
        })

        it('should return 0 on no arguments', () => {

            expect(add()).toBe(0);
        })
    })
})
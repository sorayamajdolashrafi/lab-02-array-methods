const { map, filter, findIndex, reduce } = require('../array-methods');

describe('array methods', () => {
    it('map takes an array and a callback and creates a new array with the return value of each called callback', () => {

        const array = [1, 2, 3];
        const callback = (item) => item * 2

        expect(map(array, callback)).toEqual([2, 4, 6])

    });

    it('filter takes an array and callback and creates a new array with all the items whose callback returned true or truthy', () => {

        const array = ['snake', 'turtle', 'skunk', 'sea lion', 'giraffe'];
        const callback = (item) => item.startsWith('s');

        expect(filter(array, callback)).toEqual(['snake', 'skunk', 'sea lion'])

    });

    it('findIndex takes an array and callback and returns the index of the first item whose callback returns true or truthy', () => {

        const array = ['snake', 'turtle', 'skunk', 'sea lion', 'giraffe', 'tiger'];
        const callback = (item) => item.startsWith('t');

        expect(findIndex(array, callback)).toEqual(1)

    });

    it.only('reduce takes an array, a callback, and an optional second initialValue parameter that is the initial value of the accumulator. The return value is passed as the accumulator argument of the next function call', () => {

        const array = [1, 2, 3];
        const callback = (acc, item) => item * acc
        let initialValue = 2;

        expect(reduce(array, callback, initialValue)).toEqual([2, 8, 16])

    });

});

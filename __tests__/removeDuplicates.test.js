import removeDuplicates from '../src/js/removeDuplicates.js';

describe('removeDuplicates', () => {

  test('should return', () => {
    //arrange
    const input = [3,3, "fish","fish","fish"];
    const expected = [3, "fish"];
    //act
    const result = removeDuplicates(input);
    //assert
    expect(result).toEqual(expected);
  });

});
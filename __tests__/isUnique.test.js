import isUnique from '../src/js/isUnique.js';

describe('isUnique', () => {

  test('should return false if the input contains a duplicate', () => {
    //arrange
    const input = "hithere";
    const expected = false;
    //act
    const result = isUnique(input);
    //assert
    expect(result).toEqual(expected);
  });
  
  test('should return true if the input does not contain a duplicate', () => {
    //arrange
    const input = "hit";
    const expected = true;
    //act
    const result = isUnique(input);
    //assert
    expect(result).toEqual(expected);
  });

});
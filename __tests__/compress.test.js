import compress from '../src/js/compress.js';

describe('compress', () => {

  test('should return a string with the number of consecutively repeated letters before the number', () => {
    //arrange
    const input = "aaabccdddda";
    const expected = "3ab2c4da";
    //act
    const result = compress(input);
    //assert
    expect(result).toEqual(expected);
  });

});
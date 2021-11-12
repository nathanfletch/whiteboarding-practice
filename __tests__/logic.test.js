import functionName from './../src/js/logic.js';

describe('functionName', () => {

  test('should return', () => {
    //arrange
    const input = "hi";
    const expected = "hi";
    //act
    const result = functionName(input);
    //assert
    expect(result).toEqual(expected);
  });

});
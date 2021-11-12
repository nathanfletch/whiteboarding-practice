import convertToUrl from './../src/js/convertToUrl.js';

describe('convertToUrl', () => {

  test('should return', () => {
    //arrange
    const input = "hi there";
    const expected = "hi%20there";
    //act
    const result = convertToUrl(input);
    //assert
    expect(result).toEqual(expected);
  });

});
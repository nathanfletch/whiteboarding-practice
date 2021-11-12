import quickSort from '../src/js/quickSort.js';

describe('quickSort', () => {

  test('should return', () => {
    //arrange
    const input = [9, 2, 7, 12];
    const expected = [2, 7, 9, 12];
    //act
    const result = quickSort(input);
    //assert
    expect(result).toEqual(expected);
  });

});
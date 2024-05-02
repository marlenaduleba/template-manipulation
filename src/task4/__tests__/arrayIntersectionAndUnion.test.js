const { getArrayIntersection, getArrayUnion } = require('../arrayIntersectionAndUnion');

describe('getArrayIntersection', () => {
  it('should return the intersection of two arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const expectedResult = [3, 4];
    
    expect(getArrayIntersection(arr1, arr2)).toEqual(expectedResult);
  });

  it('should return an empty array if there are no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    
    expect(getArrayIntersection(arr1, arr2)).toEqual([]);
  });

  it('should return an empty array if one of the arrays is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    
    expect(getArrayIntersection(arr1, arr2)).toEqual([]);
  });
});

describe('getArrayUnion', () => {
  it('should return the union of two arrays without duplicates', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    const expectedResult = [1, 2, 3, 4, 5];
    
    expect(getArrayUnion(arr1, arr2)).toEqual(expectedResult);
  });

  it('should return the union of two arrays when there are duplicates', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [3, 3, 4, 5];
    const expectedResult = [1, 2, 3, 4, 5];
    
    expect(getArrayUnion(arr1, arr2)).toEqual(expectedResult);
  });

  it('should return one array if the other array is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    
    expect(getArrayUnion(arr1, arr2)).toEqual(arr1);
  });
});

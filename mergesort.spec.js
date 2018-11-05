describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
    const unsplit = [5, 9, 1, 18, 3, 92];
    const splitR = split(unsplit);
    expect(splitR).toEqual([[5, 9, 1], [18, 3, 92]]);
    expect(splitR.length).toEqual(2);
  });
  it('is able to split an array with an odd number of elements', function() {
    expect(split([1, 2, 3])).toEqual([[1], [2,3]]);
    expect(split([1, 2, 3]).length).toEqual(2);
    const unsplit = [5, 9, 1, 18, 3];
    const splitR = split(unsplit);
    expect(splitR).toEqual([[5, 9], [1, 18, 3]]);
    expect(splitR.length).toEqual(2);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([3],[5])).toEqual([3,5]);
    expect(merge([2,5],[3,7])).toEqual([2,5,3,7]);
    expect(merge([2,5],[4,6,8])).toEqual([2,5,4,6,8]);
  });
});

describe('MergeSort function', function() {
  it('is able to sort an unsorted array', function() {
    expect(mergeSort([2])).toEqual([2]);
    expect(mergeSort([3,1])).toEqual([1,3]);
    expect(mergeSort([3,2,6,1,0,15])).toEqual([0,1,2,3,6,15]);
    expect(mergeSort([5,9,2,15,6])).toEqual([2,5,6,9,15]);
    expect(mergeSort([3, -8, 36, -18])).toEqual([-18,-8,3,36]);
  });
});

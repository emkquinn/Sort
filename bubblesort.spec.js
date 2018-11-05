describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one item', function(){
    expect(bubbleSort([3])).toEqual([3]);
  });
  it('handles an array with multiple items', function(){
    expect(bubbleSort([3, 1, 5, 8])).toEqual ([1, 3, 5, 8]);
  });
});

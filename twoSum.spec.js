const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Should return an array', () => {
    expect(Array.isArray(twoSum([1, 2, 3], 5))).to.equal(true);
  });

  it('Should return an empty array if there is no solution', () => {
    expect(twoSum([1, 2, 3], 6)).to.deep.equal([]);
  });

  it('Should return the indices of the correct values if there is a solution', () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });

  it('Should not use the same index twice', () => {
    expect(twoSum([2, 3], 4)).to.deep.equal([]);
  });

  it('Should return the correct indices in an unsorted array', () => {
    expect(twoSum([3, 2, 1], 5)).to.deep.equal([0, 1]);
  });
});

const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns a string that is less than the column length', () => {
    expect(wrap('banana', 10)).to.equal('banana');
  });

  it('Returns an empty string if the column length is less than the first word', () => {
    expect(wrap('banana', 4)).to.equal('');
  });

  it('Wraps a string with a single line break', () => {
    expect(wrap('bananas apples', 8)).to.equal('bananas\napples');
  });

  it('Wraps a string if the line break falls in the middle of a word', () => {
    expect(wrap('bananas apples', 10)).to.equal('bananas\napples');
  });

  it('Wraps a long string', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.'
      ).to.equal(
        'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
      )
    );
  });
});

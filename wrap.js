const wrap = (line, maxLen) => {
  const letter = line.indexOf(maxLen);
};

console.log(
  wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)
);

module.exports = wrap;

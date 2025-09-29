const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};
const onMin = function (x, y) {
  return `${x} + ${y} = ${x + y}`;
};
onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// Arrow.
const one = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};
const two = function (x, y) {
  return `${x} + ${y} = ${x + y}`;
};
one(20, 20);
console.log(two(20, 20));
console.log('');
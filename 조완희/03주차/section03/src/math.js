export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add: add,
//   sub, // key, value가 같을 때 그냥 적어도 상관x
// };

// export {add, sub};

export default function multiply(a, b) {
  return a * b;
}

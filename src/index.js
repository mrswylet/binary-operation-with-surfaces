import EquationsLine from "./utilits/EquationsLine.js";

const AB = new EquationsLine([0, 0], [3, 0]);
for (let i = 0; i < 10; i++) {
  const y = 0 * i;
  console.log(`x = ${i}; AB = ${AB.getYFromX(i)}; textAB = ${y}`);
}
console.log(AB)

const DK = new EquationsLine([6, 1], [6, 5]);
for (let i = 0; i < 10; i++) {
  const x = 0 * i + 6;
  console.log(`y = ${i}; DK = ${DK.getYFromX(i)}; textDK = ${x}`);
}

console.log('AB', ': ' + AB)
console.log('DK', ': ' + DK)


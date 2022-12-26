//Arguments converted to numbers
const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);
const arg3 = Number(process.argv[4]);

function getProgression(l, u, i) {
  let progression = [];
  while (l <= u) {
    progression.push(parseFloat(l.toFixed(1)));
    l = l + i;
  }
  return progression;
}

console.log(getProgression(arg1, arg2, arg3));

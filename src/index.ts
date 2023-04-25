const arr = [0, 0, 0, 1, 0, 1];

const splitedArray = arr.join("").split("0");
let result = 0;
let bigTotal = 0;
for (let index = 1; index < splitedArray.length; index++) {
  const prevEl = splitedArray[index - 1];
  const el = splitedArray[index];
  const total = prevEl.length + el.length;
  if (total >= bigTotal) {
    bigTotal = total;
    result = index;
  }
}
console.log("splitedArray", splitedArray.splice(0, result).join("0").length);

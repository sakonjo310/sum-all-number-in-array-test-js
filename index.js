function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // console.log(item)
      sum += sumItems(item);
    } else {
      sum += item;
    } 
  })
  return sum;
}
// console.log(sumItems([1,2,[3,4],5]))
module.exports = sumItems;
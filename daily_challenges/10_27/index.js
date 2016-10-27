//Question 1
function toTheMoon(a,b) {
  var larger = Math.max(a, b);
    return larger
};


//Question 2
function soLow(a,b) {
  var smaller = Math.min(a,b);
  return smaller
};

//Question 3
function muchOrder(a,b) {
  var larger = Math.max(a, b);
  var smaller = Math.min(a, b);
  return [larger, smaller]
};

//Question 4
console.assert(toTheMoon(60, 13)===60);
console.assert(toTheMoon(13, 40)===40);

console.assert(soLow(93, 3)===3);
console.assert(soLow(23, 41)===23);

console.assert(muchOrder(93,3)[0]===93);
console.assert(muchOrder(93,3)[1]===3);
console.assert(muchOrder(23,41)[0]===41);
console.assert(muchOrder(23,41)[1]===23);

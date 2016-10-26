// (Challenge) Functions-1
//
// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

function addNumbers(numberA, numberB) {
    return (numberA + numberB);
}
var twoPlusTwo = addNumbers(2, 2);

console.assert(twoPlusTwo === 4);


//(Challenge) Vector Magnitude
/**
For a given 2D vector described by cartesian coordinates of its initial point
and terminal point in the following format: [[x1, y1], [x2, y2]], your function
must return this vector's length presented as a float.
**/

function vectorLength([[x1, y1],[x2, y2]]){
  return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2))
}

console.assert(vectorLength([[0, 1],[0, 0]]) === 1)
console.assert(vectorLength([[0, 3],[4, 0]]) === 5)
console.assert(vectorLength([[1, -1],[1, -1]]) === 0)


//(Challenge) Comma Operator
//
var myVarOne = [10, 20, 30, 40][1, 2, 3]
var myVarTwo = [10, 20, 30, 40][3, 2, 1]

console.assert(myVarOne === 40)
console.assert(myVarTwo === 20)

//It passes because it prints the corresponding value in the first array

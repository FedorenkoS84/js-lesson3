// Function Declaration
function getRectangleArea(width, height) {
  return width * height;
}

console.log(getRectangleArea(5, 10));

// Function Expression
const getRectangleAreaExpression = function (width, height) {
  return width * height;
};

console.log(getRectangleAreaExpression(10, 20));

// Arrow function
const getRectangleAreaArrow = (width, height) => width * height;

console.log(getRectangleAreaArrow(20, 30));

// Function Declaration
function rectangle(width, height) {
  return width * height;
}

console.log(rectangle(5, 10));

// Function Expression
const rectangleExpression = function (width, height) {
  return width * height;
};

console.log(rectangleExpression(10, 20));

// Arrow function
const rectangleArrow = (width, height) => width * height;

console.log(rectangleArrow(20, 30));

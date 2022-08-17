/*
    Completed by Colack (8/16/2022)
*/

// Multiply 2 values.
Number.prototype.multiply = function(n) {
	return this * n;
};

// Divide 2 values.
Number.prototype.divide = function(n) {
	return this / n;
};

// Add 2 values.
Number.prototype.add = function(n) {
	return this + n;
};

// Subtract 2 values.
Number.prototype.subtract = function(n) {
	return this - n;
};

// Modulo 2 values.
Number.prototype.modulo = function(n) {
	return this % n;
};

// Useful in cases where a variable may not be a number
Number.isInteger = function (value) {
    return (typeof value === 'number' && isFinite(value) && Math.floor(value) === value)
}

// Checks if a given value is a float
Number.prototype.isFloat = function () {
    return (typeof this === 'number' && Math.floor(this) !== this && isFinite(this));
}

// Returns the lowest value possible of a positive or negative number
Number.prototype.redline = function () {
    return (Math.sign(this));
}

// Returns the opposite lowest value of a positive or negative number
Number.prototype.breakline = function () {
    return (-Math.sign(this));
}

// Is more shorthanded just in case the type is already a number and need specific testing
Number.prototype.isInteger = function () {
    return (typeof this === 'number' && isFinite(this) && Math.floor(this) === this)
}

// Shorthanded version if the datatype is already a Number
Number.prototype.isFloat = function () {
    return (typeof this === 'number' && isFinite(this) && Math.floor(this) !== this);
}

// Checks if a(n) number is even
Number.prototype.isEven = function () {
    return (this % 2 === 0);
}

// Checks if a number is odd
Number.prototype.isOdd = function () {
    return (!this.isEven());
}

// Checks if a number is prime Euclidian Method
Number.prototype.isPrime = function () {
    var max = Math.sqrt(this);
    for (var i = 2; i <= max; i++) {
        if (this % i === 0) {
            return (false)
        }
    }
    return (this > 1);
}

// Checks if number only contains a decimal value
Number.prototype.isDecimal = function () {
    return (this > -1 && this < 1 && this !== 0);
}

// Returns a decimal from a float or double
Number.prototype.getDecimal = function () {
    var str = this.toString();
    var pos = str.indexOf(".");
    return (parseFloat(str.substring(pos, str.length)));
}

// Floors at a specific decimal place
Number.prototype.floorAt = function (point) {
    var p = Math.pow(10, point);
    return (Math.floor(this * p) / p || Math.floor(this))
}

// Rounds at a specific decimal place 
Number.prototype.roundAt = function (point) {
    var p = Math.pow(10, point);
    return (Math.round(this * p) / p || Math.round(this))
}

// Ceils at a specific decimal place
Number.prototype.ceilAt = function (point) {
    var p = Math.pow(10, point);
    return (Math.ceil(this * p) / p || Math.ceil(this))
}

// Create a random number between two numbers
function random(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

// Calculate the circumference of a circle
function circumference(radius) {
    return 2 * Math.PI * radius;
}

// Get the square root of a number
function squareRoot(num) {
    return Math.sqrt(num);
}

// Get the absolute value of a number
function absolute(number) {
  if (number < 0) {
    return number *= -1;
  } else {
    return number *= 1;
  }
}


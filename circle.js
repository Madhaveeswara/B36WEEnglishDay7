var Circle = /** @class */ (function () {
    function Circle() {
        var myarray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            myarray[_i] = arguments[_i];
        }
        this.color = "red";
        this.radius = 1.0;
        if (myarray.length === 2) {
            console.log("arugument length is :: " + myarray.length);
            console.log('two argument constructor called here !!');
            this.radius = Number(myarray[0]);
            this.color = myarray[1];
            return;
        }
        if (myarray.length === 1) {
            console.log('one argument constructor called here !!');
            this.radius = Number(myarray[0]);
            return;
        }
        if (myarray.length === 0) {
            console.log('one argument constructor called here !!');
            return;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Circle[radius=" + this.radius + ", color=" + this.color + "]";
    };
    Circle.prototype.getArea = function () {
        var r = this.radius.valueOf();
        //Area = PI*r*r;
        var area = (Math.PI * r * r).toFixed(2);
        return area;
    };
    Circle.prototype.getCircumference = function () {
        var circumference = 0.0;
        var r = this.radius.valueOf();
        circumference = Number((2 * Math.PI * r).toFixed(2));
        return circumference;
    };
    return Circle;
}());
var circleObj1 = new Circle(6);
var circleObj2 = new Circle(8, "greenapple");
console.log("Circle1", circleObj1);
console.log("Area1", circleObj1.getArea());
console.log("Circumference1", circleObj1.getCircumference());
console.log("Circle2", circleObj2);
console.log("Area2", circleObj2.getArea());
console.log("Circumference2", circleObj2.getCircumference());

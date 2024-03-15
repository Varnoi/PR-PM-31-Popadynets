function TriangleArea(base = 7, height = 3) {
    var area = 0.5 * base * height;
    console.log("Площа трикутника з основою " + base + " і висотою " + height + " дорівнює " + area);
    return area;
}

TriangleArea(3, 6);
TriangleArea();
// 2
function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.AssignCaptain = function(boat, name, yearsOfExperience, hasFamily) {
    boat.captain = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasFamily: hasFamily
    };
};

var myBoat = new Boat("blue", 30, 100, "SeaMaster", "USA");
Boat.AssignCaptain(myBoat, "John Smith", 10, true);

console.log(myBoat);
//3 
class SimpleCircle {
    constructor(majorRadius) {
        this._majorRadius = majorRadius;
    }

    set majorRadius(value) {
        this._majorRadius = value;
    }

    get majorRadius() {
        return this._majorRadius;
    }
}

class Ellipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    static calculateArea(a, b) {
        return Math.PI * a * b;
    }
}

const circle = new SimpleCircle(5);
console.log("Simple Circle:", circle);

const ellipse = new Ellipse(8, 6);
console.log("Ellipse:", ellipse);

const area = Ellipse.calculateArea(ellipse.majorRadius, ellipse.minorRadius);
console.log("Area of Ellipse:", area);
//4
function SubGenerator(num) {
    return function(subtrahend) {
        return num - subtrahend;
    };
}

const subtractBy5 = SubGenerator(5);
const subtractBy10 = SubGenerator(10);

console.log(subtractBy5(3));
console.log(subtractBy10(7));

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

document.getElementById('output').innerHTML = `
    <p>Result of :SimpleCircle(5) ${JSON.stringify(circle)}</p>
    <p>Result of Ellipse(8, 6):${JSON.stringify(ellipse)}</p>
`;

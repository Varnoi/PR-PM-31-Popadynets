
//4
function SubGenerator(num) {
    return function(subtrahend) {
        return num - subtrahend;
    };
}

const subtractBy5 = SubGenerator(5);
const subtractBy10 = SubGenerator(10);

document.getElementById('output').innerHTML = `
    <p>Result of subtractBy5(3): ${subtractBy5(3)}</p>
    <p>Result of subtractBy10(7): ${subtractBy10(7)}</p>
`;


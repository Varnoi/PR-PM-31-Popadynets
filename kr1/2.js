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

var outputDiv = document.getElementById('output');
outputDiv.innerHTML = `<pre>${JSON.stringify(myBoat, null, 2)}</pre>`;

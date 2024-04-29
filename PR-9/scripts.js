let arr1 = [1, 5, 9, 4,
	{
		name: "Polisichuk",
		mark: 100,
		subject: "JS"
	},
	function (num) {
		return Math.pow(num, 4);
	},
	function (object) {
		console.log(object.name);
	},
	-6, 14
];


arr1.forEach(item => console.log(item));
arr1.splice(arr1.indexOf(5), 1, 8);
arr1.splice(arr1.indexOf(4), 0, "Hello");


let arr2 = arr1.slice(arr1.findIndex(item => typeof item === 'function'));
arr2.forEach(item => console.log(item));


let arr3 = arr1.slice(0, arr1.indexOf(4) + 1);
arr3.forEach(item => console.log(item));

let arr3Reversed = arr3.slice().reverse();
arr3Reversed.forEach(item => console.log(item));


console.log(arr1.indexOf(-6));
console.log(arr1.filter(item => typeof item === 'number' && item > 4));

arr1.find(item => typeof item === 'function' && item.toString().includes('name'))(arr1.find(item => typeof item === 'object'));

console.log(arr1.find(item => typeof item === 'function' && item(-6)));


for (let index in arr1) {
	console.log(arr1[index]);
}

for (let index in arr1) {
	if (typeof arr1[index] === 'object') {
		for (let prop in arr1[index]) {
			console.log(prop);
		}
	}
}

for (let item of arr1) {
	console.log(item);
}


arr1.version = "1.0.0";


for (let index in arr1) {
	console.log(arr1[index]);
}

for (let item of arr1) {
	console.log(item);
}


let Igorovich = {
	name: "Igorovich",
	skill: "JS",
	level: "junior"
};

let Olegovich = {
	name: "Olegovich",
	skill: "HTML/CSS",
	level: "middle"
};

let Panasovich = {
	name: "Panasovich",
	skill: "TS",
	level: "trainee"
};


let map1 = new Map();
map1.set(Igorovich.name, Igorovich);
map1.set(Olegovich.name, Olegovich);
map1.set(Panasovich.name,Panasovich);


console.log(map1.has("Ivanko"));
console.log(map1.has("Panasovich"));


for (let key of map1.keys()) {
	console.log(key);
}

// Yes, But for what????  >:(
map1.delete("Olegovich");


for (let [name, { name: n, level, skill }] of map1.entries()) {
	console.log(`${n} is ${level} in ${skill}`);
}


let set1 = new Set();
set1.add(Igorovich);
set1.add(Olegovich);
set1.add(Volodyk);

let mihalich = {
	name: "mihalich",
	skill: "PHP",
	level: "senior"
};


console.log(set1.has(mihalich));
console.log(set1.has(Olegovich));


for (let item of set1) {
	console.log(item);
}

// Ha-Ha-Ha :)
set1.delete(Panasovich);


for (let { name, level, skill } of set1) {
	console.log(`${name} is ${level} in ${skill}`);
}

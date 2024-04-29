// IV
let array = [];
for (let i = 0; i < 20; i++) {
	array.push(Math.floor(Math.random() * 100));
}
array.sort((a, b) => a - b);

document.getElementById('ForMasyv').innerHTML = "<p>Відсортований масив: " + array.join(', ') + "</p>";

// V


function generate() {
	const height = document.getElementById('Vub').value;
	const ForKvadr = document.getElementById('ForKvadr');
	const samKvadrat = document.getElementById('Kvadr');

	if (samKvadrat) {
		samKvadrat.remove();
	}

	ForKvadr.innerHTML += '<div id="Kvadr" style="background-color: blue; width: 30px; height: ' + height + 'px;"></div>';
}


// VI

function moveLeft() {
	const ForKvadr = document.getElementById('ForKvadr');
	const computedStyle = window.getComputedStyle(ForKvadr);
	let currentLeft = parseInt(computedStyle.getPropertyValue('left')) || 0;
	ForKvadr.style.left = (currentLeft - 20) + 'px';
}

function moveRight() {
	const ForKvadr = document.getElementById('ForKvadr');
	const computedStyle = window.getComputedStyle(ForKvadr);
	let currentLeft = parseInt(computedStyle.getPropertyValue('left')) || 0;
	ForKvadr.style.left = (currentLeft + 20) + 'px';
}

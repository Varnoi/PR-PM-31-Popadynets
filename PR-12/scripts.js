document.getElementById('1').addEventListener('click', function () {
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var meal = document.querySelector('input[name="meal"]:checked');
	var dishes = document.querySelectorAll('input[name="dish"]:checked');
	var comment = document.getElementById('comment').value;

	if (!username || !email || !meal || dishes.length === 0) {
		alert('Не вийшло');
		return;
	}

	var mealValue = meal ? meal.value : 'не вказано';
	var dishesValue = Array.from(dishes).map(function (dish) {
		return dish.value;
	}).join(', ');

	var outputText = username + ' (' + email + ') їв на ' + mealValue + ' ' + dishesValue;
	if (comment) {
		outputText += ' коментар: "' + comment + '"';
	}

	document.getElementById('output').innerText = outputText;
});
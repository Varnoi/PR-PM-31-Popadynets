
var names = ["Huxley","Oaklee","Sutton","Jack","Harper","Madison","Willow","Ruby"];

for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();

	if (firstLetter === 'j') {
		speakGoodBye.speak(names[i]);
	} else {
		speakHello.speak(names[i]);
	}
}


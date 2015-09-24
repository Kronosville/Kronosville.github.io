// HTML Elements
var inputBox = document.getElementById("pl-input");
var outputBox = document.getElementById("pl-output");
var translateBtn = document.getElementById("pl-translate-btn");

function isVowel(l) {
	var ll = l.toLowerCase();
	return ll === "a" || ll === "e" || ll === "i" || ll === "o" || ll === "u"
};

function translate() {
	var output = '';
	var words = inputBox.value.split(" ");

	for(var i = 0; i < words.length; i++) {
		var word = words[i];
		var outWord;

		for(var j = 0; j < word.length; j++) {
			var letter = word[j];
			if(isVowel(letter)) {
				var first = word.substring(0, j);
				var last = word.substring(j, word.length);

				if (first[0] === first[0].toUpperCase()) {
					first = first[0].toLowerCase() + first.substring(1, first.length);
					last = last[0].toUpperCase() + last.substring(1, last.length);
				}

				j = word.length;
				outWord = last + "-" + first;
			}
		}
		
		if (outWord === undefined) {
			if (word[0] === word[0].toUpperCase()) {
				outWord = word[1].toUpperCase() + word.substring(2, word.length) + "-" + word[0].toLowerCase();
			} else {
				outWord = word.substring(1, word.length) + "-" + word[0];
			}
		}

		output += outWord + "ay ";
	}
	outputBox.textContent = output;
}

translateBtn.onclick = translate;
inputBox.onkeydown = function(event) {
	if ((event.which || event.keyCode) === 13) translate();
};

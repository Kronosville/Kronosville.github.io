// Minecraft Bukkit Essentials & codes, JavaScript

var inputBox = document.getElementById("acodes-input");
var sendBtn = document.getElementById("acodes-btn");
var outputBox = document.getElementById("acodes-output");

var black = '#000000';
var aCodes = [
	{
		code: '0',
		type: 'colour',
		colour: black
	},
	{
		code: '1',
		type: 'colour',
		colour: '#0000AA'
	},
	{
		code: '2',
		type: 'colour',
		colour: '00AA00'
	},
	{
		code: '3',
		type: 'colour',
		colour: '#00AAAA'
	},
	{
		code: '4',
		type: 'colour',
		colour: '#AA0000'
	},
	{
		code: '5',
		type: 'colour',
		colour: '#AA00AA'
	},
	{
		code: '6',
		type: 'colour',
		colour: '#FFAA00'
	},
	{
		code: '7',
		type: 'colour',
		colour: '#AAAAAA'
	},
	{
		code: '8',
		type: 'colour',
		colour: '#555555'
	},
	{
		code: '9',
		type: 'colour',
		colour: '#5555FF'
	},
	{
		code: 'a',
		type: 'colour',
		colour: '#55FF55'
	},
	{
		code: 'b',
		type: 'colour',
		colour: '#55FFFF'
	},
	{
		code: 'c',
		type: 'colour',
		colour: '#FF5555'
	},
	{
		code: 'd',
		type: 'colour',
		colour: '#FF55FF'
	},
	{
		code: 'e',
		type: 'colour',
		colour: '#FFFF55'
	},
	{
		code: 'f',
		type: 'colour',
		colour: '#FFFFFF'
	},
	{
		code: 'l',
		CSS: 'text-weight:bold;'
	},
	{
		code: 'm',
		CSS: 'text-decoration:line-through;'
	},
	{
		code: 'n',
		CSS: 'text-decoration:underline;'
	},
	{
		code: 'o',
		CSS: 'font-style:italic;'
	},
	{
		code: 'r',
		type: 'colour',
		colour: black
	}
];


var format = function() {
	
	function closeSpans() {
		for(var i = 0; i < spansOpen; i++) {
			output += '</span>';
		}
		spansOpen = 0;
	}
	
	function addLetterToOutput() {
		output += input[i];
	}
	
	var spansOpen = 0;
	var input = inputBox.value;
	var output = '';
	for(var i = 0; i < input.length; i++) {
		if(input[i] === "&") {
			var foundCode = false;
			for(var j = 0; j < aCodes.length; j++) {
				if(input[i+1].toLowerCase() == aCodes[j].code) {
					foundCode = true;
					if(aCodes[j].type === 'colour') {
						closeSpans();
						output += '<span style="color:' + aCodes[j].colour + ';">';
					} else {
						output += '<span style="' + aCodes[j].CSS + '">';
					}
					spansOpen++;
					i++;
					break;
				}
			}
			if(!foundCode) {
				addLetterToOutput();
			}
		} else {
			addLetterToOutput();
		}
		if(i === input.length-1) {
			closeSpans();
		}
	}
	outputBox.value = output;
};

sendBtn.onclick = format;
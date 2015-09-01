var playerList = $("#players");
var avatarWidth = 100;

$.getJSON("http://mcping.net/api/mc.kronosville.net", function(data) {
	for(var i = 0; i < data.sample.length; i++) {
		var player = document.createElement("DIV");
	}
});
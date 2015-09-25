var statusEl = $("#status");
$.getJSON("http://mcping.net/api/mc.kronosville.net", function(data) {
	statusEl.html(data.online + "/" + data.max + " players online");
});

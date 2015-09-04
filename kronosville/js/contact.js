var bodyEl = $("#email-form");

var from = $("#from-field");
var message = $("#message-field");

function echo(msg) {
	bodyEl.innerHTML = msg;
}

function sendEmail() {
	
	
	var error = false;
	$.ajax("../php/contact.php", {
		type: "POST",
		
		data: {
			from: from.value,
			message: message.value
		},
		
		success: function(sent) {
			if (sent == true) {
				from.value = '';
				message.value = '';
			} else {error = true;}
		},
		error: function() {error = true;}
	});
	// TODO Format this text
	echo(error ? "ERROR! Please contact 1b8... somehow..." : "E-mail sent!");
}
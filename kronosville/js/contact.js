var bodyEl = $("#email-form");

function echo(msg) {
	bodyEl.innerHTML = msg;
}

function sendEmail() {
	var from = $("#from-field").value;
	var message = $("#message-field").value;
	
	var error = false;
	$.ajax("../php/contact.php", {
		type: "POST",
		
		data: {
			from: from,
			message: message
		},
		
		success: function(sent) {
			if (sent == true) {
			} else {error = true;}
		},
		error: function() {error = true;}
	});
	// TODO Format this text
	echo(error ? "ERROR! Please contact 1b8... somehow..." : "E-mail sent!");
}
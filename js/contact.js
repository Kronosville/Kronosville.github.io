var bodyEl = $("#email-form");

var mFrom = $("#from-field");
var mMessage = $("#message-field");

function sendEmail() {

	var error = false;
	$.ajax("../php/contact.php", {
		type: "POST",

		data: {
			from: mFrom.value,
			message: mMessage.value
		},

		success: function(sent) {
			if (sent == true) {
				mFrom.value = '';
				mMessage.value = '';
			} else {error = true;}
		},
		error: function() {error = true;}
	});
	// TODO Format this text
	bodyEl.html(error ? "ERROR! Please contact 1b8... somehow..." : "E-mail sent!");
}

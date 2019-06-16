//Create a Firebase account and add code to Initialize the database

firebase.initializeApp(config);
/* call reference to firebase */
var messageRef = firebase.database().ref('messages');

/* Bootstrap validation */
(function() {
	'use strict';
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();
/* Add event listener */
document.getElementById('contactForm').addEventListener('submit', submitForm);
/* submits form */
function submitForm(e) {
	e.preventDefault();
	//getValues
	var name = getInputVal('name');
	var email = getInputVal('email-address');
	var subject = getInputVal('subject');
	var message = getInputVal('message');
	if (document.getElementById('contactForm').checkValidity() === true) {
		//save message
		saveMessage(name, email, subject, message);
		//show alert
		document.querySelector('.alert-success').style.display = 'block';
		// hide alert after a 3sS
		setTimeout(function() {
			document.querySelector('.alert-success').style.display = 'none';
		}, 5000);
		//remove default error messages
		setTimeout(function() {
			document.getElementById("contactForm").className = "needs-validation";
		}, 0.0001);
		//clear form
		document.querySelector('form').reset();
	}
}
/* get Form values */
function getInputVal(id) {
	return document.getElementById(id).value;
}
/*Save message to firebase */
function saveMessage(name, email, subject, message) {
	var newMessageRef = messageRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		subject: subject,
		message: message
	});
}

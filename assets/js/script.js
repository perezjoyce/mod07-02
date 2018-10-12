$(document).ready (() => {

	let button = $('#greet_button');
	let username = $('#username');
	let greeting = $('#user_greeting');


	if (username.html() === "") {

		button.click( () => {
			greeting.html('pls enter text').css('color','red');
			
		});
		
	}

	else {
		// DISPLAY
		button.click( () => {

			username.val(); // GET
			greeting.html(username.val()); // SET (SHOW THE VALUE YOU GOT FROM username)

		});

		// CLEAR
		button.dblclick( () => {
			username.val('');
			greeting.html('');
			// alert("test");
		});
	}
	

});


// ACTIVITY 2: ADD CONTENT TO EXISTING CONTENT

$(document).ready (() => {

	let button2 = $('#greet_button2');
	let username2 = $('#username2');
	let greeting2 = $('#user_greeting2');


		// DISPLAY
		button2.click( () => {

			username2.val(); // GET
			// greeting2.html(  + username2.val()); // SET (SHOW THE VALUE YOU GOT FROM username)
			greeting2.append(' <strong>Renz</strong>'); // APPEND METHOD // WELCOME RENZ
			greeting2.prepend('<strong>Renz</strong> '); // PREPEND METHOD // RENZ WELCOME RENZ

			

		});

		// CLEAR
		button2.dblclick( () => {
			// $('strong').remove(); // removes selected element AND ITS CHILD // RENZ and strong
			$('strong').empty(); // removes the child of selected element // RENZ ONLY
		});


});
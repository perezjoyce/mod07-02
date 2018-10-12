$(document).ready (() => {

	let postBtn = $('#post_button');
	let deleteBtn = $('#delete_button');
	let task = $('#taskName');
	let list = $('#taskList');

	//&#8226 

		// TRIGGER
		postBtn.click( () => {

			// who. put at the back from where, break
			list.append( '<li>' + task.val() + '<br>' );
			task.val('');

		});

		// CLEAR
		deleteBtn.click( () => {
	
			list.html('');
			// list.attr('li' ());
			// $('li').empty();
	
		});
	

});


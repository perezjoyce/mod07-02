$(document).ready (() => {

	let postBtn = $('#post_button');
	let deleteBtn = $('#delete_button');
	let task = $('#taskName');
	let list = $('#taskList');
	let doneList = $('#doneList');
	


	//&#8226 

		// TRIGGER
		postBtn.click( () => {

			if (task.val() === '') {
				alert('Please enter text.');
			} else {
				// who. put at the back from where, break
				list.append("<li><span>" + task.val() + "</span> " 
									+ "<button class='btnRemove listBtn'>X</button>" + " " 
									+ "<button class='btnDone listBtn'>&#10003;</button>" + " " 
									+ "<button class='btnEdit listBtn'>Edit</button>" + " " 
									
							);
				task.val('');
			}

		});

		// REMOVE
		// MY SOLUTION
		$(document).on('click', '.btnRemove', e => {
			$(e.target).parent().remove();
		});

		// SIR RENZ' SOLUTION WORKS ON CONSOLE because the code there isn't enclosed in .ready
		// $('.btnRemove').click(e => {0
		// 	$(e.target).parent().remove();
		// }

		// DONE
		// MY SOLUTION
		$(document).on('click', '.btnDone', e => {
			let parent = $(e.target).parent();
			doneList.append('<li>' + '<span>' 
								   + parent.find('span').text() + '</span>' + " "
								   + "<button id='btnRemove'>X</button>" + " "
								   + "<button class='btnEdit'>Edit</button>" + " " 
					  );
			parent.remove();
		});

		//EDIT
		// MY SOLUTION
		$(document).on('click', '.btnEdit', e => {
			parent = $(e.target).parent();
			task.val(parent.find('span').text()
				      );
			parent.remove();		
		});

	

		// CLEAR
		deleteBtn.click( () => {
			doneList.html('');
			list.html('');
			// list.attr('li' ());
			// $('li').empty();
	
		});
	

});


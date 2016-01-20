$( document ).ready(function() {

//Function to control whether the login or the logout button is shown
	function showButton(currentUser) {
		if (currentUser) {
			$('.logout-btn').show()
		} else {
			$('.login-btn').show()
		}
	}

//Calls the function. Right now I'm manually entering a value of true. Though, in a real-life situation, I would create a helper function that would create the currentUser value and pull from the database.

	showButton(true);
});
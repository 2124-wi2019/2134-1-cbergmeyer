/*Craig Bergmeyer
Script.js
INFO 2134
Thoendel
March 13, 2020*/


window.addEventListener('load', function() {
    /* Write your solution between this comment */
    
    //for loop to get ages 1 through 100
    for (let age = 1 ; age < 101 ; age++) {
    	
    	// creates new option element
    	let newOption = document.createElement('option');
		
  		// enters the age into the new element 
  		let addAge = document.createTextNode(age); 
  		// add the text node to the option element
 		newOption.appendChild(addAge); 
  		//sets the position to insert the text
  		let insertOption = document.getElementById("age");
		//inserts the text into the select box
		insertOption.add(newOption);
 
		}
		
		
	

	//Defines the proper submit box and calls the 'onClick' function
	let submitBox = document.getElementsByTagName('input')[2];
	submitBox.addEventListener('click', onClick);   
    	
	function onClick(e) {
   	//Removes the error message text.
   	var eHeader = document.getElementById('errorHeader');
	if (eHeader != null)
	   	{
	    let toDels = document.querySelectorAll('li');
		for (let toDel of toDels) 
		{
	    var eList = document.getElementById('errorList');	  		
	    eList.parentNode.removeChild(eList);
	    }
	    let eHeader = document.getElementById('errorHeader');
	    eHeader.parentNode.removeChild(eHeader);
	}
	//defines the variables to be used by each input checker
	let fName =  document.getElementById('first-name').value;
	let lName =  document.getElementById('last-name').value;
	let ageP =  document.getElementById('age');
	let agePicked = ageP.options[ageP.selectedIndex].value;
	
	//sets and resets boolean value to false
	let errorCheck = false
	//Checks the value entered in the box for first name
	if (fName == ""){
		//sets the errorCheck flag
		errorCheck = true;
		//Create a list and gives the list an id
		let fNameError = document.createElement('li');
		fNameError.id = 'errorList';
  		// Enters the error text to be displayed
  		let errorCode = document.createTextNode('First name is missing or blank!'); 
  		// adds the text Node to the list element 
 		fNameError.appendChild(errorCode); 
  		//sets the position to insert the text
  		let insertError = document.getElementById('error-holder');
		//inserts the text
  		document.getElementById("error-holder").appendChild(fNameError);
  		}
		

		//Checks the value entered in the box for last name
		if (lName == ""){
		//sets the errorCheck flag
		errorCheck = true;
		//Create a list and gives the list an id
		let lNameError = document.createElement('li');
		lNameError.id = 'errorList';
  		// Enters the error text to be displayed
  		let errorCode = document.createTextNode('Last name is missing or blank!'); 
  		// adds the text Node to the list element
 		lNameError.appendChild(errorCode); 
  		//sets the position to insert the text
  		let insertError = document.getElementById('error-holder');
		// inserts the text
  		document.getElementById("error-holder").appendChild(lNameError);

		}
		//Checks the value selected from the age box
		if (agePicked == ""){
		//Sets the errorCheck Flag
		errorCheck = true;
		//Creates the list and gives the list an id
		let ageError = document.createElement('li');
		ageError.id = 'errorList';
		//enters the error text to be displayed	 
  		let errorCode = document.createTextNode('Age is missing or blank!'); 
  		// add the text node to the list element
 		ageError.appendChild(errorCode); 
  		//sets the position to insert the text
  		let insertError = document.getElementById('error-holder');
		//inserts the text  		
  		document.getElementById("error-holder").appendChild(ageError);

		}
		//checks if any flags were set 
		if (errorCheck == true)
		{
			//creates a paragraph element for the header text
			let errorMessage = document.createElement('p');
			errorMessage.id = 'errorHeader';
			let errorCode = document.createTextNode('Error! Please correct the following items before you can submit the form:');
			errorMessage.appendChild(errorCode);
			//the last thing i did so i just put in x since I was tired of coming up with meaningful variable names
			// places header text on the top of any list created
			let x = document.getElementById('error-holder');
			x.insertBefore(errorMessage, x.firstChild)
			//defines the class to be used for the error-holder div
			let errorClass = document.getElementById("error-holder");
  			errorClass.classList.add("error-box");
  			//prevents the default action of the submit button
			e.preventDefault();
		}
			
					
	
};
    /* and this comment */
    
});


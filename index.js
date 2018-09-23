firebase.auth().onAuthStateChanged(function(user) {  //Manage Users in Firebase
  if (user) {
    // User is signed in.

   //document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
	if(user != null){

	  window.location="main.html";
	}

  } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});



function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {   //Sign in a user with an email address and password
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();   //signOut
}



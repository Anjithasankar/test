// JavaScript Document

function validateForm() {
  var x = document.forms["myform"]["Name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;

  }
var y = document.forms["myform"]["Address"].value;
if(y == ""){
	alert("address must be filled out");
	return false;
}
var Z = document.forms["myform"]["Email"].value;
if(Z == ""){
	alert("email must be filled out");
	return false;
}
var A = document.forms["myform"]["Zip"].value;
if(A == ""){
	alert("Zip code must be filled out");
	return false;
}

  return true;
}


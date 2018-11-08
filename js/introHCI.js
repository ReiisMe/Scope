// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

var vm = this;
window.onload = function () {
  vm.username = getParam().username;
  console.log(vm.username);
  if(username!=undefined){
  	document.getElementById("login-btn").innerHTML=username;  
  }

}

/* Helper function to get parameters from href. */
function getParam(){
  var params = location.search.substr(1);
  var result = {};
  params.split("&").forEach(function(ss) {
    var item = ss.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

$(".project #myelement").mousemove(changeText);
function changeText(event) {
	$(this).text("WTF");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

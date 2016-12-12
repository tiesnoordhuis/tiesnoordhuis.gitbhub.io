var test = "<button onclick=\"buttonClear()\">clear</button>";
var charLogger = [];
var lijst = [];

function onAllKeyPress(event){
	var x = event.which || event.keyCode;
	document.getElementById("mainContainer3").innerHTML = x;
	charLogger.push(x);
}

function startFunction(){
	var h = [window.innerHeight,window.innerWidth,0,0] ;
	document.getElementById("mainContainer").innerHTML += test;
	
}

function buttonFunction(){
	document.getElementById("mainContainer2").innerHTML += charLogger;
	document.getElementById("mainContainer2").innerHTML += "<br>";
}

function buttonClear(){
	document.getElementById("mainContainer2").innerHTML = "";
	charLogger = [];
}

function makeList(){
	for (i = 0; i < charLogger.length; i ++){
		lijst.push(String.fromCharCode(charLogger[i]));
		document.getElementById("mainContainer5").innerHTML = lijst;
	} 
lijst = []
}
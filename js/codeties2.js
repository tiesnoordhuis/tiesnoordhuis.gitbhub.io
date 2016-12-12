var test = "<button onclick=\"buttonClear()\">clear</button>";
var charLogger = [];
var keyLogger = [];
var charLijst = [];
var keyLijst = [];
var n = 1;

function charKeyMode(n){
	if (n==1){
		document.getElementById("charWindow").style.display = "block";
		document.getElementById("keyWindow").style.display = "none";
	} else if (n==2){
		document.getElementById("charWindow").style.display = "none";
		document.getElementById("keyWindow").style.display = "block";
	} else {
		document.getElementById("charWindow").style.display = "block";
		document.getElementById("keyWindow").style.display = "block";
		window.alert("fout in charKeyMode");
	}
}

function onAllKeyDown(event){
	var x = event.which || event.keyCode;
	document.getElementById("keyContainer1").innerHTML = x;
	keyLogger.push(x);
}

function onAllKeyPress(event){
	var x = event.which || event.keyCode;
	document.getElementById("mainContainer3").innerHTML = x;
	charLogger.push(x);
}

function startFunction(){
	var h = [window.innerHeight,window.innerWidth,0,0] ;
	document.getElementById("mainContainer").innerHTML += test;
	
}


/* pakt de lijst die gegeven wordt en plakt hem in een div */
function buttonFunction(a,b){
	var naam = ["mainContainer2","keyContainer1"];
	document.getElementById(naam[b]).innerHTML += "<br>";
	document.getElementById(naam[b]).innerHTML += a;

}

function buttonClear(){
	document.getElementById("mainContainer2").innerHTML = "";
	charLogger = [];
}

function makeList(){
	for (i = 0; i < charLogger.length; i ++){
		charLijst.push(String.fromCharCode(charLogger[i]));
		document.getElementById("mainContainer5").innerHTML = charLijst;
	} 
charLijst = []
}
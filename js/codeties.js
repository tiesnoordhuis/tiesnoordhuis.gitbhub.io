/*
comments

12-sept-2016
geschreven door Ties Noordhuis

*/
/*variable*/
var galerijType = "lijst";
var plaatjeNummer = 1;
var plaatjeNaam = "leeg";
var plaatjeNaamLengte = 0;
var totaalPlaatjes = 22;

setImgHomeIntro();

function setImgHomeIntro(){
	var hw = setImgWindow(document.getElementById("homeImg2").height , document.getElementById("homeImg2").width);
	var h = hw[0];
	var w = hw[1];
	document.getElementById("homeImg2").style.height = h[3]+"px" ;
	document.getElementById("homeImg2").style.width = w[1]+"px" ;
	document.getElementById("homeImgDiv2").style.height = h[3]+"px" ;
	document.getElementById("homeImgDiv2").style.width = w[1]+"px" ;
	document.getElementById("homeGalerij").style.height = h[3]+"px" ;
	document.getElementById("homeGalerij").style.width = w[1]+"px" ;
	document.getElementById("homeImgDiv2").innerHTML += hw + "</br>" + h + "</br>" + w;
}

function setImgIntro(){
	var hw = setImgWindow(document.getElementById("img2").height , document.getElementById("img2").width);
	var h = hw[0];
	var w = hw[1];
	setImgWindowWeb3(h,w);
	document.getElementById("searchBar").placeholder = hw;
}

function setImgWindow(a,b){
var h = [window.innerHeight,0,0,0] ;
h[1] = 0.9 * h[0];
h[2] = a;
var w = [0,0];
w[0] = b
/*
	h[2] = document.getElementById("img2").height;
	w[0] = document.getElementById("img2").width;
*/
var ratio = h[2]/w[0];
if (h[2] > h[1] && w[0] < 1000){
	h[3] = h[1];
	w[1] = h[3] / ratio;
}
else if (h[2] < h[1] && w[0] > 1000){
	w[1] = 1000;
	h[3] = ratio * 1000;
}
else if(h[2] < h[1] && w[0] < 1000){
	h[3] = h[2];
	w[1] = w[0];
}
else if(h[2] > h[1] && w[0] > 1000){
	if(ratio * 1000 > h[1]){
		h[3] = h[1];
		w[1] = h[1] / ratio;
	}
	else if(ratio * 1000 < h[1]){
		w[1] = 1000;
		h[3] = w[1] * ratio;
	}
	else if(ratio * 1000 == h[1]){
		w[1] = 1000;
		h[3] = h[1];
	}
}
var hw = [h,w];
return hw;
}

function setImgWindowWeb3(h,w){
document.getElementById("img2").style.height = h[3]+"px" ;
document.getElementById("img2").style.width = w[1]+"px" ;
document.getElementById("imgContainer").style.height = h[3]+"px" ;
document.getElementById("imgContainer").style.width = w[1]+"px" ;

return;
}
function galerijLijst(){
	
	return
}
/* 	maakt een array "lengthExtensie"
	[0] waarde is de lengte van de totale string van het pad van het plaatje
	[1] waarde is de positie van de punt "." als scheiding naar de extensie en dus ook de lengte tot de extensie
	[2] waarde is de lengte van de extensie + de punt   b.v. plaatje.jpg geeft als waarde 4
	[3] waarde is het laatste nummer voor de punt   b.v. plaatje3.jpeg geeft als waarde 3
	[4] waarde is de lengte van het volgnummer van het plaatje
*/
function getImgPad(){
	var plaatsPuntTemp = document.getElementById("plaatjeFrame").src.toString().slice(-6);
	var plaatsPunt = plaatsPuntTemp.search(/\u002E/g)+ document.getElementById("plaatjeFrame").src.toString().length - 6;
	var lengthExtensie = [document.getElementById("plaatjeFrame").src.toString().length , plaatsPunt,0,0,1];
	lengthExtensie[2] = lengthExtensie[0] - lengthExtensie[1];
	var isNumber = [document.getElementById("plaatjeFrame").src.charAt(lengthExtensie[1]-1) , document.getElementById("plaatjeFrame").src.charAt(lengthExtensie[1]-2)]
	if (isNaN(isNumber[0])){
		document.getElementById("testGalerij").innerHTML = "0 nummer" + isNumber + "</br>" + plaatsPunt + "</br>" + document.getElementById("plaatjeFrame").src;
	}
	else if (isNaN(isNumber[1])){
		document.getElementById("testGalerij").innerHTML = "1 nummer" + isNumber + "</br>" + plaatsPunt + "</br>" + document.getElementById("plaatjeFrame").src;
		lengthExtensie[4] = 1;
	}
	else{
		document.getElementById("testGalerij").innerHTML = "2 nummer" + isNumber + "</br>" + plaatsPunt + "</br>" + document.getElementById("plaatjeFrame").src;
		lengthExtensie[4] = 2;
	}
	lengthExtensie[3] = document.getElementById("plaatjeFrame").src.toString().slice(lengthExtensie[1] - lengthExtensie[4] , lengthExtensie[1])
	return lengthExtensie
}
/*
	maakt de naam van het plaatje bestand, door het samen te voegen van het nieuwe volgnummer met de oude naam string
*/
function setPlaatjeNaam(lengthExtensie,plaatjeNummer){
	plaatjeNaamLengte = lengthExtensie[1] - lengthExtensie[4];
	plaatjeNaam = document.getElementById("plaatjeFrame").src.toString().substr(0,plaatjeNaamLengte);
	document.getElementById("plaatjeFrame").src = plaatjeNaam + plaatjeNummer + ".jpg";
	return
}
/*
	verandert het plaatje naar het plaatje met 1 LAGER volgnummer
*/
function galerijLinks(){
	lengthExtensie = getImgPad();
	if (Number(lengthExtensie[3]) > 1){
		plaatjeNummer = Number(lengthExtensie[3]) - 1;
	}
	else{
		plaatjeNummer = totaalPlaatjes;
	}
	setPlaatjeNaam(lengthExtensie,plaatjeNummer);
	return
}
/*
	verandert het plaatje naar het plaatje met 1 HOGER volgnummer
*/
function galerijRechts(){
	lengthExtensie = getImgPad();
	if (Number(lengthExtensie[3]) < totaalPlaatjes){
		plaatjeNummer = Number(lengthExtensie[3]) + 1;
	}
	else{
		plaatjeNummer = 1;
	}
	setPlaatjeNaam(lengthExtensie,plaatjeNummer);
	return
}

/*
	test voor mooiere gallery van w3schools
*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  setImgWindow(document.getElementById("img2").height , document.getElementById("img2").width);
  setImgWindowWeb3(h,w);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeImg", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeImg";
}

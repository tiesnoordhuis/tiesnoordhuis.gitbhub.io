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
var homeImgDiv = ["homeImgDiv1", "homeImgDiv2", "homeImgDiv3"];
var homeImg = ["homeImg1", "homeImg2", "homeImg3"];
var homeImgBegin = getHomeImgActive();
var plaatjeFrame = "plaatjeFrame"
var i = 0;

function getHomeImgActive(){
	var n = 0;
	for (n = 0; n < 3; n++ ) {
		var homeImgActiveTemp = document.getElementById(homeImgDiv[n]).style.display;
		if (homeImgActiveTemp == "block")
			var homeImgActive = n;
	}
	return homeImgActive
}

function homeImgNext () {
	var homeImgActive = getHomeImgActive()
	var homeImgActiveTemp = 0;	
	if (homeImgActive == 0) {
		document.getElementById(homeImgDiv[0]).style.display = "none";
		document.getElementById(homeImg[0]).style.height = "";
		document.getElementById(homeImg[0]).style.width = "";
		document.getElementById(homeImgDiv[1]).style.display = "block";
		homeImgActiveTemp = 2;
	}
	else if (homeImgActive == 1) {
		document.getElementById(homeImgDiv[1]).style.display = "none";
		document.getElementById(homeImg[1]).style.height = "";
		document.getElementById(homeImg[1]).style.width = "";		
		document.getElementById(homeImgDiv[2]).style.display = "block";
		homeImgActiveTemp = 0;
	}
	else if (homeImgActive == 2) {
		document.getElementById(homeImgDiv[2]).style.display = "none";
		document.getElementById(homeImg[2]).style.height = "";
		document.getElementById(homeImg[2]).style.width = "";		
		document.getElementById(homeImgDiv[0]).style.display = "block";
		homeImgActiveTemp = 1;		
	}
	for (i = 0 ; i < 3 ; i++){
	lengthExtensie = getImgPad(homeImg[homeImgActiveTemp]);
		if (Number(lengthExtensie[3]) < totaalPlaatjes){
		plaatjeNummer = Number(lengthExtensie[3]) + 1;
		}
		else{
			plaatjeNummer = 1;
		}
		setPlaatjeNaam(lengthExtensie, plaatjeNummer, homeImg[homeImgActiveTemp]);
	}
	
	setHomeImgWindow();
	return lengthExtensie;	
}

function homeImgPrev () {
	var homeImgActive = getHomeImgActive();
	var homeImgActiveTemp = 0;
	if (homeImgActive == 0) {
		document.getElementById(homeImgDiv[0]).style.display = "none";
		document.getElementById(homeImg[0]).style.height = "";
		document.getElementById(homeImg[0]).style.width = "";
		document.getElementById(homeImgDiv[2]).style.display = "block";
		homeImgActiveTemp = 1;
	}
	else if (homeImgActive == 1) {
		document.getElementById(homeImgDiv[1]).style.display = "none";
		document.getElementById(homeImg[1]).style.height = "";
		document.getElementById(homeImg[1]).style.width = "";
		document.getElementById(homeImgDiv[0]).style.display = "block";
		homeImgActiveTemp = 2;
	}
	else if (homeImgActive == 2) {
		document.getElementById(homeImgDiv[2]).style.display = "none";
		document.getElementById(homeImg[2]).style.height = "";
		document.getElementById(homeImg[2]).style.width = "";
		document.getElementById(homeImgDiv[1]).style.display = "block";
		homeImgActiveTemp = 0;
	}
	for (i = 0 ; i < 3 ; i++){
	lengthExtensie = getImgPad(homeImg[homeImgActiveTemp]);
		if (Number(lengthExtensie[3]) > 1){
			plaatjeNummer = Number(lengthExtensie[3]) - 1;
		}
		else{
			plaatjeNummer = totaalPlaatjes;
		}
		setPlaatjeNaam(lengthExtensie, plaatjeNummer, homeImg[homeImgActiveTemp]);
	}
	
	setHomeImgWindow();
	return lengthExtensie;
}

function setHomeImgWindow(){
	var homeImgActive = getHomeImgActive();
	var hw = setImgWindow(document.getElementById(homeImg[homeImgActive]).height , document.getElementById(homeImg[homeImgActive]).width);
	var h = hw[0];
	var w = hw[1];
	document.getElementById(homeImg[homeImgActive]).style.height = h[3]+"px" ;
	document.getElementById(homeImg[homeImgActive]).style.width = w[1]+"px" ;
	document.getElementById(homeImgDiv[homeImgActive]).style.height = h[3]+"px" ;
	document.getElementById(homeImgDiv[homeImgActive]).style.width = w[1]+"px" ;
	document.getElementById("slideshow-container").style.height = h[3]+"px" ;
	document.getElementById("slideshow-container").style.width = w[1]+"px" ;
}

setImgHomeIntro();

function setImgHomeIntro(){
	var hw = setImgWindow(document.getElementById("homeImg2").height , document.getElementById("homeImg2").width);
	var h = hw[0];
	var w = hw[1];
	document.getElementById("homeImg2").style.height = h[3]+"px" ;
	document.getElementById("homeImg2").style.width = w[1]+"px" ;
	document.getElementById("homeImgDiv2").style.height = h[3]+"px" ;
	document.getElementById("homeImgDiv2").style.width = w[1]+"px" ;
	document.getElementById("slideshow-container").style.height = h[3]+"px" ;
	document.getElementById("slideshow-container").style.width = w[1]+"px" ;
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

var lengthExtensie = [0,0,0,0,0];

function getImgPad(plaatjeFrame){	
	var plaatsPuntTemp = document.getElementById(plaatjeFrame).src.toString().slice(-6);
	var plaatsPunt = plaatsPuntTemp.search(/\u002E/g)+ document.getElementById(plaatjeFrame).src.toString().length - 6;
	lengthExtensie = [document.getElementById(plaatjeFrame).src.toString().length , plaatsPunt,0,0,1];
	lengthExtensie[2] = lengthExtensie[0] - lengthExtensie[1];
	var isNumber = [document.getElementById(plaatjeFrame).src.charAt(lengthExtensie[1]-1) , document.getElementById(plaatjeFrame).src.charAt(lengthExtensie[1]-2)]
	if (isNaN(isNumber[0])){
	}
	else if (isNaN(isNumber[1])){
		lengthExtensie[4] = 1;
	}
	else{
		lengthExtensie[4] = 2;
	}
	lengthExtensie[3] = document.getElementById(plaatjeFrame).src.toString().slice(lengthExtensie[1] - lengthExtensie[4] , lengthExtensie[1])
	return lengthExtensie
}
/*
	maakt de naam van het plaatje bestand, door het samen te voegen van het nieuwe volgnummer met de oude naam string
*/
function setPlaatjeNaam(lengthExtensie, plaatjeNummer, plaatjeFrame){
	plaatjeNaamLengte = lengthExtensie[1] - lengthExtensie[4];
	plaatjeNaam = document.getElementById(plaatjeFrame).src.toString().substr(0,plaatjeNaamLengte);
	document.getElementById(plaatjeFrame).src = plaatjeNaam + plaatjeNummer + ".jpg";
}
/*
	verandert het plaatje naar het plaatje met 1 LAGER volgnummer
*/
function galerijLinks(){
	lengthExtensie = getImgPad("plaatjeFrame");
	if (Number(lengthExtensie[3]) > 1){
		plaatjeNummer = Number(lengthExtensie[3]) - 1;
	}
	else{
		plaatjeNummer = totaalPlaatjes;
	}
	setPlaatjeNaam(lengthExtensie, plaatjeNummer, "plaatjeFrame");
	return
}
/*
	verandert het plaatje naar het plaatje met 1 HOGER volgnummer
*/
function galerijRechts(){
	lengthExtensie = getImgPad("plaatjeFrame");
	if (Number(lengthExtensie[3]) < totaalPlaatjes){
		plaatjeNummer = Number(lengthExtensie[3]) + 1;
	}
	else{
		plaatjeNummer = 1;
	}
	setPlaatjeNaam(lengthExtensie, plaatjeNummer, "plaatjeFrame");
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

/* nieuw stuk code, joepie! nu nog bedenken wat ik ga maken
*/

/* ooh het is een modal img ding, leuk
*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function escapeModal(){
	var x = event.keyCode;
	if (x == 27){
		document.getElementById("myModal").style.display = "none";
	}
}
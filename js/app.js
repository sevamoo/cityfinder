
var onlyroads = "https://api.mapbox.com/styles/v1/sevamoo/cix65j03d008v2pnw5npbx7qj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q"
var basemap ='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw'
var zoominit = 12.1

var citynames;
$.getJSON("data/citynames.json", function(json) {
	citynames = json[0];
//    console.log(json[0][0]); // this will show the info it in firebug console
});


var city_neigs_names;
$.getJSON("data/city_neigs_names.json", function(json) {
	city_neigs_names = json;
//    console.log(city_neigs_names[0]); // this will show the info it in firebug console
});


var city_neigs_lats;
$.getJSON("data/city_neigs_lats.json", function(json) {
	city_neigs_lats = json;
//    console.log(city_neigs_lats[0]); // this will show the info it in firebug console
});


var city_neigs_lngs;
$.getJSON("data/city_neigs_lngs.json", function(json) {
	city_neigs_lngs = json;
//    console.log(city_neigs_lngs[0]); // this will show the info it in firebug console
});


cityid = document.getElementById("cityname").value;
console.log(cityid);

console.log(city_neigs_lngs[0]);
lngs = city_neigs_lngs[cityid]
lats = city_neigs_lats[cityid]

	var mymap0 = L.map('mapid0').setView([lats[0], lngs[0]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap0);
// var credits = L.control.attribution().removeAttribution('Leaflet').addTo(mymap0);
// credits.addAttribution('© <a' );
// credits.removeAttribution('Leaflet');

	var mymap1 = L.map('mapid1').setView([lats[1], lngs[1]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap1);


	var mymap2 = L.map('mapid2').setView([lats[2], lngs[2]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap2);


	var mymap3 = L.map('mapid3').setView([lats[3], lngs[3]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap3);


	var mymap4 = L.map('mapid4').setView([lats[4], lngs[4]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap4);


	var mymap5 = L.map('mapid5').setView([lats[5], lngs[5]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap5);


	var mymap6 = L.map('mapid6').setView([lats[6], lngs[6]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap6);

	var mymap7 = L.map('mapid7').setView([lats[7], lngs[7]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap7);

	var mymap8 = L.map('mapid8').setView([lats[8], lngs[8]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap8);


	var mymap9 = L.map('mapid9').setView([lats[9], lngs[9]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap9);

	var mymap10 = L.map('mapid10').setView([lats[10], lngs[10]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap10);

	var mymap11 = L.map('mapid11').setView([lats[11], lngs[11]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap11);

	var mymap12 = L.map('mapid12').setView([lats[12], lngs[12]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap12);

	var mymap13 = L.map('mapid13').setView([lats[13], lngs[13]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap13);

	var mymap14 = L.map('mapid14').setView([lats[14], lngs[14]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap14);


function find_similar_cities(){



cityid = document.getElementById("cityname").value;
//console.log(cityid,citynames[cityid])
//mymap14 = L.map('mapid14').setView([51.505, -0.09], 10);

lngs = city_neigs_lngs[cityid]
lats = city_neigs_lats[cityid]
neigs_names  =city_neigs_names[cityid]


//console.log(lats);

mymap0.setView( [lats[0], lngs[0]], zoominit);
mymap1.setView( [lats[1], lngs[1]], zoominit);
mymap2.setView( [lats[2], lngs[2]], zoominit);
mymap3.setView( [lats[3], lngs[3]], zoominit);
mymap4.setView( [lats[4], lngs[4]], zoominit);
mymap5.setView( [lats[5], lngs[5]], zoominit);
mymap6.setView( [lats[6], lngs[6]], zoominit);
mymap7.setView( [lats[7], lngs[7]], zoominit);
mymap8.setView( [lats[8], lngs[8]], zoominit);
mymap9.setView( [lats[9], lngs[9]], zoominit);
mymap10.setView( [lats[10], lngs[10]], zoominit);
mymap11.setView( [lats[11], lngs[11]], zoominit);
mymap12.setView( [lats[12], lngs[12]], zoominit);
mymap13.setView( [lats[13], lngs[13]], zoominit);
mymap14.setView( [lats[14], lngs[14]], zoominit);

document.querySelector('#ZoomVal').value = zoominit;


//if (RENTORSALE == 'rent'){
//    itemType = document.getElementById("itemType").value;
//    Cityname = document.getElementById("Cityname").value;
//    ZIP = document.getElementById("ZIP").value;
//    Adress1 = document.getElementById("itemAdress1").value;
//    Adress2 = document.getElementById("itemAdress2").value;
//    Adress3 = document.getElementById("itemAdress3").value;
//    Address = Cityname + " "+ ZIP +" "+ Adress1+" " + Adress2+ " " + Adress3 + " Switzerland"
//    Rooms = document.getElementById("itemRooms").value;
//    Floor = document.getElementById("itemFloor").value;
//    Living_space = document.getElementById("itemLiving_space").value;
//    Year_built = document.getElementById("itemYear_built").value;
//    Last_renovation = document.getElementById("itemLast_renovation").value;
//
//
//
//    }
// else{
//// return nothing for now
// }






}


function change_zoom(){

ZoomVal = document.getElementById("Zoom").value;
document.querySelector('#ZoomVal').value = ZoomVal;
console.log(ZoomVal);

mymap0.setZoom(ZoomVal);
mymap1.setZoom(ZoomVal);
mymap2.setZoom(ZoomVal);
mymap3.setZoom(ZoomVal);
mymap4.setZoom(ZoomVal);
mymap5.setZoom(ZoomVal);
mymap6.setZoom(ZoomVal);
mymap7.setZoom(ZoomVal);
mymap8.setZoom(ZoomVal);
mymap9.setZoom(ZoomVal);
mymap10.setZoom(ZoomVal);
mymap11.setZoom(ZoomVal);
mymap12.setZoom(ZoomVal);
mymap13.setZoom(ZoomVal);
mymap14.setZoom(ZoomVal);



}



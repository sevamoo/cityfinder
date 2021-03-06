
var rgb = "https://api.mapbox.com/styles/v1/sevamoo/cix65j03d008v2pnw5npbx7qj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q"
var Dark = 'https://api.mapbox.com/styles/v1/sevamoo/ciyesucrg00342qml99q6rm7u/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q'
var White = 'https://api.mapbox.com/styles/v1/sevamoo/ciyevt3o900372qmlt9qwkv42/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q'
var White ='https://api.mapbox.com/styles/v1/sevamoo/cix65j03d008v2pnw5npbx7qj.html?title=true&access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q#12.7/47.368636/8.551504/0'


var WhiteLayer = L.tileLayer(White);
var DarkLayer = L.tileLayer(Dark);


var onlyroads = White;
var mapstyle =  document.getElementById("mapstyle").value;

if (mapstyle == 'Dark'){
onlyroads = Dark;

}

if (mapstyle == 'White'){
onlyroads = White;

}



var basemap ='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw'
var zoominit = 12;


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




var cityid = document.getElementById("cityname").value;
var names_init = {"0":"Eleele United States","1":"Kiowa United States","2":"Highmore United States","3":"Tribune United States","4":"Luxora United States","5":"Faulkton United States","6":"Vinalhaven United States","7":"Levan United States","8":"Wauneta United States","9":"Bird Island United States","10":"Onyx United States","11":"Weatherly United States","12":"Alma Center United States","13":"Scobey United States","14":"Soper United States","15":"Yatesville United States","16":"Mescalero United States","17":"Waitsburg United States","18":"Ekalaka United States","19":"Emmet United States","20":"Enosburg Falls United States","21":"Stanberry United States","22":"Lake Preston United States","23":"West Yellowstone United States","24":"Blandinsville United States","25":"Lockesburg United States","26":"Fordville United States"}
//document.getElementById("city0").innerHTML = '<font size="1">'+names_init[0]+'</font>';
//document.getElementById("city1").innerHTML = '<font size="1">'+names_init[1]+'</font>';
//document.getElementById("city2").innerHTML = '<font size="1">'+names_init[2]+'</font>';
//document.getElementById("city3").innerHTML = '<font size="1">'+names_init[3]+'</font>';
//document.getElementById("city4").innerHTML = '<font size="1">'+names_init[4]+'</font>';
//document.getElementById("city5").innerHTML = '<font size="1">'+names_init[5]+'</font>';
//document.getElementById("city6").innerHTML = '<font size="1">'+names_init[6]+'</font>';
//document.getElementById("city7").innerHTML = '<font size="1">'+names_init[7]+'</font>';
//document.getElementById("city8").innerHTML = '<font size="1">'+names_init[8]+'</font>';
//
//document.getElementById("city9").innerHTML = '<font size="1">'+names_init[9]+'</font>';
//document.getElementById("city10").innerHTML = '<font size="1">'+names_init[10]+'</font>';
//document.getElementById("city11").innerHTML = '<font size="1">'+names_init[11]+'</font>';
//document.getElementById("city12").innerHTML = '<font size="1">'+names_init[12]+'</font>';
//document.getElementById("city13").innerHTML = '<font size="1">'+names_init[13]+'</font>';
//document.getElementById("city14").innerHTML = '<font size="1">'+names_init[14]+'</font>';
//document.getElementById("city15").innerHTML = '<font size="1">'+names_init[15]+'</font>';
//document.getElementById("city16").innerHTML = '<font size="1">'+names_init[16]+'</font>';
//document.getElementById("city17").innerHTML = '<font size="1">'+names_init[17]+'</font>';
//
//
//document.getElementById("city18").innerHTML = '<font size="1">'+names_init[18]+'</font>';
//document.getElementById("city19").innerHTML = '<font size="1">'+names_init[19]+'</font>';
//document.getElementById("city20").innerHTML = '<font size="1">'+names_init[20]+'</font>';
//document.getElementById("city21").innerHTML = '<font size="1">'+names_init[21]+'</font>';
//document.getElementById("city22").innerHTML = '<font size="1">'+names_init[22]+'</font>';
//document.getElementById("city23").innerHTML = '<font size="1">'+names_init[23]+'</font>';
//document.getElementById("city24").innerHTML = '<font size="1">'+names_init[24]+'</font>';
//document.getElementById("city25").innerHTML = '<font size="1">'+names_init[25]+'</font>';
//document.getElementById("city26").innerHTML = '<font size="1">'+names_init[26]+'</font>';


//document.getElementById("city9").innerHTML = '<font size="1">'+names_init[9]+'</font>';



var lat_init = 21.386338;
var lng_init = -157.9255357
var lats = {'24': 42.3598359, '25': 46.1302414, '26': 48.034234, '20': 47.744005, '21': 31.4965591, '22': 48.2688879, '23': 52.8201219, '1': 63.3496305, '0': 47.6925621, '3': 37.228554, '2': 44.995272, '5': 45.426442, '4': 53.732456, '7': 38.0014004, '6': 46.278593, '9': 45.866908, '8': 44.476168, '11': 51.27304, '10': 36.1047979, '13': 52.1187869, '12': 38.4792749, '15': 48.2919886, '14': 51.3581903, '17': 34.5932062, '16': 35.6611904, '19': 48.1448139, '18': 35.7006921};
var lngs = {'24': 1.6949015, '25': -94.9486356, '26': -0.703926, '20': 3.647396, '21': -89.7395195, '22': -2.067511, '23': 5.9748349, '1': 13.4529077, '0': 10.9919727, '3': -120.2482336, '2': 4.516512, '5': 4.883074, '4': 10.0865489, '7': -97.5086518, '6': 0.35923, '9': -95.1522522, '8': 0.19511, '11': 16.3653, '10': -84.597162, '13': 38.3384567, '12': -80.4134157, '15': 12.7259351, '14': 4.8635474, '17': -80.6753495, '16': -84.1721357, '19': 6.7896, '18': -80.8881295};

//console.log(lats[0],lats['24'])
//	var mymap0 = L.map('mapid0',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap0.attributionControl;
//	attribution.setPrefix('');
//
//
//	var mymap1 = L.map('mapid1',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [DarkLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap1.attributionControl;
//	attribution.setPrefix('');
//
//
//	var mymap2 = L.map('mapid2',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap2.attributionControl;
//	attribution.setPrefix('');
//
//
//	var mymap3 = L.map('mapid3',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap3.attributionControl;
//	attribution.setPrefix('');
//
//
//	var mymap4 = L.map('mapid4',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap4.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap5 = L.map('mapid5',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap5.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap6 = L.map('mapid6',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap6.attributionControl;
//	attribution.setPrefix('');
//
//
//	var mymap7 = L.map('mapid7',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap7.attributionControl;
//	attribution.setPrefix('');
//
//
//	var mymap8 = L.map('mapid8',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap8.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap9 = L.map('mapid9',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap9.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap10 = L.map('mapid10',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap10.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap11 = L.map('mapid11',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap11.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap12 = L.map('mapid12',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap12.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap13 = L.map('mapid13',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap13.attributionControl;
//	attribution.setPrefix('');
//
//	var mymap14 = L.map('mapid14',{
//	zoomControl:false,
//	maxZoom: 18,
//	layers: [WhiteLayer],
//	}).setView([lats[0], lngs[0]], zoominit);
//	attribution = mymap14.attributionControl;
//	attribution.setPrefix('');



	var mymap0 = L.map('mapid0',{ zoomControl:false }).setView([lats[1], lngs[1]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap0);
	attribution = mymap0.attributionControl;
	attribution.setPrefix('');


	var mymap1 = L.map('mapid1',{ zoomControl:false }).setView([lats[1], lngs[1]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap1);
	attribution = mymap1.attributionControl;
	attribution.setPrefix('');


	var mymap2 = L.map('mapid2',{ zoomControl:false }).setView([lats[2], lngs[2]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap2);
	attribution = mymap2.attributionControl;
	attribution.setPrefix('');


	var mymap3 = L.map('mapid3',{ zoomControl:false }).setView([lats[3], lngs[3]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap3);
	attribution = mymap3.attributionControl;
	attribution.setPrefix('');


	var mymap4 = L.map('mapid4',{ zoomControl:false }).setView([lats[4], lngs[4]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap4);
	attribution = mymap4.attributionControl;
	attribution.setPrefix('');


	var mymap5 = L.map('mapid5',{ zoomControl:false }).setView([lats[5], lngs[5]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap5);
	attribution = mymap5.attributionControl;
	attribution.setPrefix('');


	var mymap6 = L.map('mapid6',{ zoomControl:false }).setView([lats[6], lngs[6]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap6);
	attribution = mymap6.attributionControl;
	attribution.setPrefix('');

	var mymap7 = L.map('mapid7',{ zoomControl:false }).setView([lats[7], lngs[7]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap7);
	attribution = mymap7.attributionControl;
	attribution.setPrefix('');

	var mymap8 = L.map('mapid8',{ zoomControl:false }).setView([lats[8], lngs[8]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap8);
	attribution = mymap8.attributionControl;
	attribution.setPrefix('');


	var mymap9 = L.map('mapid9',{ zoomControl:false }).setView([lats[9], lngs[9]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap9);
	attribution = mymap9.attributionControl;
	attribution.setPrefix('');

	var mymap10 = L.map('mapid10',{ zoomControl:false }).setView([lats[10], lngs[10]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap10);
	attribution = mymap10.attributionControl;
	attribution.setPrefix('');

	var mymap11 = L.map('mapid11',{ zoomControl:false }).setView([lats[11], lngs[11]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap11);
	attribution = mymap11.attributionControl;
	attribution.setPrefix('');

	var mymap12 = L.map('mapid12',{ zoomControl:false }).setView([lats[12], lngs[12]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap12);
	attribution = mymap12.attributionControl;
	attribution.setPrefix('');

	var mymap13 = L.map('mapid13',{ zoomControl:false }).setView([lats[13], lngs[13]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap13);
	attribution = mymap13.attributionControl;
	attribution.setPrefix('');

	var mymap14 = L.map('mapid14',{ zoomControl:false }).setView([lats[14], lngs[14]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap14);
attribution = mymap14.attributionControl; attribution.setPrefix('');


var mymap15 = L.map('mapid15',{ zoomControl:false }).setView([lats[15], lngs[15]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap15);
attribution = mymap15.attributionControl; attribution.setPrefix('');

var mymap16 = L.map('mapid16',{ zoomControl:false }).setView([lats[16], lngs[16]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap16);
attribution = mymap16.attributionControl; attribution.setPrefix('');

var mymap17 = L.map('mapid17',{ zoomControl:false }).setView([lats[17], lngs[17]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap17);
attribution = mymap17.attributionControl; attribution.setPrefix('');

var mymap18 = L.map('mapid18',{ zoomControl:false }).setView([lats[18], lngs[18]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap18);
attribution = mymap18.attributionControl; attribution.setPrefix('');

var mymap19 = L.map('mapid19',{ zoomControl:false }).setView([lats[19], lngs[19]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap19);
attribution = mymap19.attributionControl; attribution.setPrefix('');

var mymap20 = L.map('mapid20',{ zoomControl:false }).setView([lats[20], lngs[20]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap20);
attribution = mymap20.attributionControl; attribution.setPrefix('');

var mymap21 = L.map('mapid21',{ zoomControl:false }).setView([lats[21], lngs[21]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap21);
attribution = mymap21.attributionControl; attribution.setPrefix('');

var mymap22 = L.map('mapid22',{ zoomControl:false }).setView([lats[22], lngs[22]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap22);
attribution = mymap22.attributionControl; attribution.setPrefix('');

var mymap23 = L.map('mapid23',{ zoomControl:false }).setView([lats[23], lngs[23]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap23);
attribution = mymap23.attributionControl; attribution.setPrefix('');

var mymap24 = L.map('mapid24',{ zoomControl:false }).setView([lats[24], lngs[24]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap24);
attribution = mymap24.attributionControl; attribution.setPrefix('');

var mymap25 = L.map('mapid25',{ zoomControl:false }).setView([lats[25], lngs[25]], zoominit);
L.tileLayer(onlyroads, {maxZoom: 18,}).addTo(mymap25);
attribution = mymap25.attributionControl; attribution.setPrefix('');

var mymap26 = L.map('mapid26',{ zoomControl:false }).setView([lats[26], lngs[26]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap26);
	var credits = L.control.attribution().addTo(mymap26);
	credits.addAttribution('<a href="https://www.mapbox.com/">Mapbox</a>');
	attribution = mymap26.attributionControl;
	attribution.setPrefix('');








function change_mapstyle(){

mapstyle = document.getElementById("mapstyle").value;

if (mapstyle == 'Dark'){
onlyroads = Dark;

}

if (mapstyle == 'White'){
onlyroads = White;

}



L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap0);
	attribution = mymap0.attributionControl;
	attribution.setPrefix('');

L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap1);
	attribution = mymap1.attributionControl;
	attribution.setPrefix('');



	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap2);
	attribution = mymap2.attributionControl;
	attribution.setPrefix('');



	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap3);
	attribution = mymap3.attributionControl;
	attribution.setPrefix('');



	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap4);
	attribution = mymap4.attributionControl;
	attribution.setPrefix('');



	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap5);
	attribution = mymap5.attributionControl;
	attribution.setPrefix('');



	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap6);
	attribution = mymap6.attributionControl;
	attribution.setPrefix('');


	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap7);
	attribution = mymap7.attributionControl;
	attribution.setPrefix('');


	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap8);
	attribution = mymap8.attributionControl;
	attribution.setPrefix('');



	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap9);
	attribution = mymap9.attributionControl;
	attribution.setPrefix('');


	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap10);
	attribution = mymap10.attributionControl;
	attribution.setPrefix('');


	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap11);
	attribution = mymap11.attributionControl;
	attribution.setPrefix('');


	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap12);
	attribution = mymap12.attributionControl;
	attribution.setPrefix('');


	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap13);
	attribution = mymap13.attributionControl;
	attribution.setPrefix('');


	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap14);

	L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap15);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap16);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap17);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap18);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap19);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap20);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap21);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap22);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap23);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap24);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap25);

L.tileLayer(onlyroads, {
maxZoom: 18,
}).addTo(mymap26);


}


function find_similar_cities(){

document.querySelector('#Zoom').value = zoominit;

cityid = document.getElementById("cityname").value;
//console.log(cityid,citynames[cityid])
//mymap14 = L.map('mapid14').setView([51.505, -0.09], 10);

var names_init = city_neigs_names[cityid];
//document.getElementById("city0").innerHTML = '<font size="1">'+names_init[0]+'</font>';
//document.getElementById("city1").innerHTML = '<font size="1">'+names_init[1]+'</font>';
//document.getElementById("city2").innerHTML = '<font size="1">'+names_init[2]+'</font>';
//document.getElementById("city3").innerHTML = '<font size="1">'+names_init[3]+'</font>';
//document.getElementById("city4").innerHTML = '<font size="1">'+names_init[4]+'</font>';
//document.getElementById("city5").innerHTML = '<font size="1">'+names_init[5]+'</font>';
//document.getElementById("city6").innerHTML = '<font size="1">'+names_init[6]+'</font>';
//document.getElementById("city7").innerHTML = '<font size="1">'+names_init[7]+'</font>';
//document.getElementById("city8").innerHTML = '<font size="1">'+names_init[8]+'</font>';
//
//
//document.getElementById("city9").innerHTML = '<font size="1">'+names_init[9]+'</font>';
//document.getElementById("city10").innerHTML = '<font size="1">'+names_init[10]+'</font>';
//document.getElementById("city11").innerHTML = '<font size="1">'+names_init[11]+'</font>';
//document.getElementById("city12").innerHTML = '<font size="1">'+names_init[12]+'</font>';
//document.getElementById("city13").innerHTML = '<font size="1">'+names_init[13]+'</font>';
//document.getElementById("city14").innerHTML = '<font size="1">'+names_init[14]+'</font>';
//document.getElementById("city15").innerHTML = '<font size="1">'+names_init[15]+'</font>';
//document.getElementById("city16").innerHTML = '<font size="1">'+names_init[16]+'</font>';
//document.getElementById("city17").innerHTML = '<font size="1">'+names_init[17]+'</font>';
//
//
//document.getElementById("city18").innerHTML = '<font size="1">'+names_init[18]+'</font>';
//document.getElementById("city19").innerHTML = '<font size="1">'+names_init[19]+'</font>';
//document.getElementById("city20").innerHTML = '<font size="1">'+names_init[20]+'</font>';
//document.getElementById("city21").innerHTML = '<font size="1">'+names_init[21]+'</font>';
//document.getElementById("city22").innerHTML = '<font size="1">'+names_init[22]+'</font>';
//document.getElementById("city23").innerHTML = '<font size="1">'+names_init[23]+'</font>';
//document.getElementById("city24").innerHTML = '<font size="1">'+names_init[24]+'</font>';
//document.getElementById("city25").innerHTML = '<font size="1">'+names_init[25]+'</font>';
//document.getElementById("city26").innerHTML = '<font size="1">'+names_init[26]+'</font>';

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
mymap15.setView( [lats[15], lngs[15]], zoominit);
mymap16.setView( [lats[16], lngs[16]], zoominit);
mymap17.setView( [lats[17], lngs[17]], zoominit);
mymap18.setView( [lats[18], lngs[18]], zoominit);
mymap19.setView( [lats[19], lngs[19]], zoominit);
mymap20.setView( [lats[20], lngs[20]], zoominit);
mymap21.setView( [lats[21], lngs[21]], zoominit);
mymap22.setView( [lats[22], lngs[22]], zoominit);
mymap23.setView( [lats[23], lngs[23]], zoominit);
mymap24.setView( [lats[24], lngs[24]], zoominit);
mymap25.setView( [lats[25], lngs[25]], zoominit);
mymap26.setView( [lats[26], lngs[26]], zoominit);

//document.querySelector('#ZoomVal').value = zoominit;


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
//document.querySelector('#ZoomVal').value = ZoomVal;
//console.log(ZoomVal);

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
mymap15.setZoom(ZoomVal);
mymap16.setZoom(ZoomVal);
mymap17.setZoom(ZoomVal);
mymap18.setZoom(ZoomVal);
mymap19.setZoom(ZoomVal);
mymap20.setZoom(ZoomVal);
mymap21.setZoom(ZoomVal);
mymap22.setZoom(ZoomVal);
mymap23.setZoom(ZoomVal);
mymap24.setZoom(ZoomVal);
mymap25.setZoom(ZoomVal);
mymap26.setZoom(ZoomVal);


}


function showcityname(obj){
var cityid = document.getElementById("cityname").value;
var names_init = city_neigs_names[cityid];


for (var i = 0; i <= 26 ; i++) {
if ("mapid"+i == obj.id){
document.querySelector('#popup').value  = names_init[i];

}

}

//document.getElementById("popup").innerHTML = '<font size="1">'+names_init[0]+'</font>';
document.getElementById("mapid10").style.borderColor = "thick solid #0000FF";
document.querySelector('#popup').style.backgroundColor= "steelblue";
document.querySelector('#popup').style.color= "white";
//document.getElementById("mapid0").innerHTML = '<font size="1">'+names_init[0]+'</font>';
//document.getElementById("mapid1").innerHTML = '<font size="1">'+names_init[1]+'</font>';
//document.getElementById("mapid2").innerHTML = '<font size="1">'+names_init[2]+'</font>';
//document.getElementById("mapid3").innerHTML = '<font size="1">'+names_init[3]+'</font>';
//document.getElementById("mapid4").innerHTML = '<font size="1">'+names_init[4]+'</font>';
//document.getElementById("mapid5").innerHTML = '<font size="1">'+names_init[5]+'</font>';
//document.getElementById("mapid6").innerHTML = '<font size="1">'+names_init[6]+'</font>';
//document.getElementById("mapid7").innerHTML = '<font size="1">'+names_init[7]+'</font>';
//document.getElementById("mapid8").innerHTML = '<font size="1">'+names_init[8]+'</font>';
//
//
//document.getElementById("mapid9").innerHTML = '<font size="1">'+names_init[9]+'</font>';
//document.getElementById("mapid10").innerHTML = '<font size="1">'+names_init[10]+'</font>';
//document.getElementById("mapid11").innerHTML = '<font size="1">'+names_init[11]+'</font>';
//document.getElementById("mapid12").innerHTML = '<font size="1">'+names_init[12]+'</font>';
//document.getElementById("mapid13").innerHTML = '<font size="1">'+names_init[13]+'</font>';
//document.getElementById("mapid14").innerHTML = '<font size="1">'+names_init[14]+'</font>';
//document.getElementById("mapid15").innerHTML = '<font size="1">'+names_init[15]+'</font>';
//document.getElementById("mapid16").innerHTML = '<font size="1">'+names_init[16]+'</font>';
//document.getElementById("mapid17").innerHTML = '<font size="1">'+names_init[17]+'</font>';
//
//
//document.getElementById("mapid18").innerHTML = '<font size="1">'+names_init[18]+'</font>';
//document.getElementById("mapid19").innerHTML = '<font size="1">'+names_init[19]+'</font>';
//document.getElementById("mapid20").innerHTML = '<font size="1">'+names_init[20]+'</font>';
//document.getElementById("mapid21").innerHTML = '<font size="1">'+names_init[21]+'</font>';
//document.getElementById("mapid22").innerHTML = '<font size="1">'+names_init[22]+'</font>';
//document.getElementById("mapid23").innerHTML = '<font size="1">'+names_init[23]+'</font>';
//document.getElementById("mapid24").innerHTML = '<font size="1">'+names_init[24]+'</font>';
//document.getElementById("mapid25").innerHTML = '<font size="1">'+names_init[25]+'</font>';
//document.getElementById("mapid26").innerHTML = '<font size="1">'+names_init[26]+'</font>';


}

function hidencityname(){


document.getElementById("popup").value = '';
//document.querySelector('#popup').style.backgroundColor= "none";
document.querySelector('#popup').style.backgroundColor= "white";

document.querySelector('#popup').style.color= "red";

//document.querySelector('#popup').value  = names_init[0]


}



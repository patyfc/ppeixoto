//initialize the map and set the view to the coordinates
var mymap = L.map('map').setView([51.0424, -114.0720], 13);

//add tile layer
var mainTile= L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGF0eWZwZWl4b3RvIiwiYSI6ImNra2M1cjVkbjBucG4zMnA1cDc4eDAyNG0ifQ.A63_-bFotDgdkvH3qTyN0g'
}).addTo(mymap);

var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

//add custom markers
var myRedIcon = L.icon({
    iconUrl: 'https://api.geoapify.com/v1/icon/?type=material&color=%23ec1010&size=large&iconType=awesome&scaleFactor=2&apiKey=7c53f0568d4440d7b141509e6495c43d',
    iconSize: [31, 47],
});

var myYellowIcon = L.icon({
    iconUrl: 'https://api.geoapify.com/v1/icon/?type=material&color=%23e8d519&size=large&iconType=awesome&scaleFactor=2&apiKey=7c53f0568d4440d7b141509e6495c43d',
    iconSize: [31, 47],
});

var myBlueIcon = L.icon({
    iconUrl: 'https://api.geoapify.com/v1/icon/?type=material&color=%231969e8&size=large&iconType=awesome&scaleFactor=2&apiKey=7c53f0568d4440d7b141509e6495c43d',
    iconSize: [31, 47],
});

var myGreenIcon = L.icon({
    iconUrl: 'https://api.geoapify.com/v1/icon/?type=material&color=%2309b70a&size=large&iconType=awesome&scaleFactor=2&apiKey=7c53f0568d4440d7b141509e6495c43d',
    iconSize: [31, 47],
});

var myPurpleIcon = L.icon({
    iconUrl: 'https://api.geoapify.com/v1/icon/?type=material&color=%23bd0fd4&size=large&iconType=awesome&scaleFactor=2&apiKey=7c53f0568d4440d7b141509e6495c43d',
    iconSize: [31, 47],
});



//variables all parks
//L.marker([50.97, -114.03],{icon:myRedIcon}).bindPopup("<a href='southeast/carburn.html'>Carburn Park</a>").addTo(mymap); 

var carburn = L.marker([50.97, -114.03],{icon:myRedIcon}).bindPopup("<a href='southeast/carburn.html'>Carburn Park</a>"),  
    sue = L.marker([50.96, -114.03],{icon:myRedIcon}).bindPopup("<a href='southeast/sue.html'>Sue Higgins Park</a>"),  
    inglewood = L.marker([51.03, -114.01],{icon:myRedIcon}).bindPopup("<a href='southeast/inglewood.html'>Inglewood Bird Sanctuary</a>"), 
    memorial = L.marker([51.0410, -114.0700],{icon:myYellowIcon}).bindPopup("<a href='downtown/memorial.html'>Central Memorial Park</a>"),  
    prince = L.marker([51.0551, -114.0701],{icon:myYellowIcon}).bindPopup("<a href='downtown/princeisland.html'>Prince's Island Park</a>"),
    shaw = L.marker([51.0460, -114.0912],{icon:myYellowIcon}).bindPopup("<a href='downtown/shaw.html'>Shaw Millennium Park</a>"), 
    confederation = L.marker([51.0764, -114.0884],{icon:myBlueIcon}).bindPopup("<a href='northwest/confederation.html'>Confederation Park</a>"),
    noseHill = L.marker([51.1119, -114.1114],{icon:myBlueIcon}).bindPopup("<a href='northwest/noseHill.html'>Nose Hill Park</a>"),  
    westConf = L.marker([51.0815, -114.1115],{icon:myBlueIcon}).bindPopup("<a href='northwest/west-conf.html'>West Confederation Park</a>"),  
    rotary = L.marker([51.0572, -114.0610],{icon:myGreenIcon}).bindPopup("<a href='northeast/rotary.html'>Rotary Park</a>"), 
    westNose = L.marker([51.1282, -114.0516],{icon:myGreenIcon}).bindPopup("<a href='northeast/westNose.html'>West Nose Creek</a>"),  
    campbellHill = L.marker([51.0517, -114.0302],{icon:myGreenIcon}).bindPopup("<a href='northeast/campbellHill.html'>Tom Campbell's Hill</a>"),     
    river = L.marker([51.0143, -114.1084],{icon:myPurpleIcon}).bindPopup("<a href='southwest/river.html'>River Park</a>"), 
    sandy = L.marker([51.0095, -114.0925],{icon:myPurpleIcon}).bindPopup("<a href='southwest/sandybeach.html'>Sandy Beach</a>"), 
    stanley = L.marker([51.0185, -114.0676],{icon:myPurpleIcon}).bindPopup("<a href='southwest/stanley.html'>Stanley Park</a>");
 
//combining by quadrant
var southeast = L.layerGroup([carburn, sue, inglewood]),
    southwest = L.layerGroup([river, sandy, stanley]),
    northwest = L.layerGroup([westConf, confederation, noseHill]),
    northeast = L.layerGroup([westNose, rotary, campbellHill]),
    downtown = L.layerGroup([prince, shaw, memorial]),
    parks = L.layerGroup([southeast,southwest,northwest,northeast,downtown]);

//toggle overlay  
var baseMaps = {    
    "Satellite": Esri_WorldImagery,
    "Streets": mainTile,
    "Terrain": Stamen_Terrain,
};

var overlayMaps = {
    "All parks": parks,
    "Downtown": downtown,
    "Northeast": northeast,    
    "Northwest": northwest,
    "Southeast": southeast,
    "Southwest": southwest,   
};

//add overlay to the map
L.control.layers(baseMaps,overlayMaps).addTo(mymap);












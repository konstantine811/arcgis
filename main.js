require([
	"esri/Map",
	"esri/views/MapView",
	"esri/Graphic",
	"esri/layers/GraphicsLayer"
], function(Map, MapView, Graphic, GraphicsLayer) {

	var graphicsLayer = new GraphicsLayer();

	var map = new Map({
		basemap: "topo-vector"
	});
	map.add(graphicsLayer);

	var polygon = {
		type: 'polygon',
		rings: [
			[28.714013415, 48.966867844],
			[28.71842, 48.968365],
			[28.732182, 48.962655],
			[28.73012, 48.961843],
			[28.714013415, 48.966867844]
		]
	}

	var simpleFillSymbol = {
		type: 'simple-fill',
		color: [227, 139, 79, 0.8],
		outline: {
			color: [255, 255, 255],
			width: 1
		}
	}

	var polygonGraphic = new Graphic({
		geometry: polygon,
		symbol: simpleFillSymbol
	});

	graphicsLayer.add(polygonGraphic)




	var view = new MapView({
		container: "viewDiv",
		map: map,
		center: [28.72197848000, 48.965484370000],
		zoom: 15
	});
});
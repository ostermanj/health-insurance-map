(function(){

    "use strict";
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N0ZXJtYW5qIiwiYSI6ImNpdnU5dHVndjA2eDYyb3A3Nng1cGJ3ZXoifQ.Xo_k-kzGfYX_Yo_RDcHDBg';
    const censusKey = '3a82a0bf1219fb2fb0962763bb1582c5951f8566',
          originalCenter = [-96.2,38.28],
          originalZoom = 3.9;

    const mapView = {
        
        initializeMap(resolve){
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v9',
                zoom: originalZoom,
                center: originalCenter
                
            });

            // disable map rotation using right click + drag
            this.map.dragRotate.disable();

            // disable map rotation using touch rotation gesture
            this.map.touchZoomRotate.disableRotation();

            window.map = this.map; // for access in console

            function checkDataLoaded(){
                if ( mapView.map.getSource('states') ){ // if addSource below has taken effect
                    console.log('render', mapView.map.getSource('states'));
                    resolve(true); // resolve the promise
                    mapView.map.off('render', checkDataLoaded); // and turn off the listener for render
                }
            }

            this.map.on('render', checkDataLoaded) // render event is fired often, including when addSource below takes effect

            this.map.on('load', () => { // takes some time to take effect. will trigger 'render' event when it does
                this.map.addSource("states", {
                    type: "vector",
                    url: "mapbox://mapbox.us_census_states_2015"
                });
            });
        },

        initializeChloroPleth(data){

            editRoadLayers.call(this);
            createStops.call(this);
            addChloroLayer.call(this);
            addLegend.call(this);

            
            function editRoadLayers() {
                var roadLayers = this.map.getStyle().layers.filter(function(each){
                    return each['source-layer'] === 'road';
                });
                roadLayers.forEach(each => {
                    this.map.setPaintProperty(each.id, 'line-opacity', 0.2 )
                });
            }

            function createStops() {

                this.maxValue = d3.max(data, function(d){
                    return d.DP03_0099PE;
                });
                this.minValue = d3.min(data, function(d){
                    return d.DP03_0099PE;
                });

                var scale = d3.scaleLinear().domain([this.minValue,this.maxValue]).range([0,1]);

                window.scale = scale;

                //var colorScale = d3.scaleSequential(d3.interpolateYlOrBrG);
                //console.log(d3.interpolateYlOrBrG(0.5));
                // borrowed from https://www.mapbox.com/mapbox-gl-js/example/data-join/
                // First value is the default, used where the is no data
                this.stops = [["0", "rgb(100,100,100)"]];

                // Calculate color for each state based on the unemployment rate
                data.forEach((row) => {
                    var color = d3.interpolateYlOrBr(scale(row.DP03_0099PE));
                    console.log(color);
                    var stateToString = row.state > 9 ? row.state.toString() : '0' + row.state.toString();
                    this.stops.push([stateToString, color]);
                });
            }

            function addChloroLayer() {

                function checkLayerLoaded(){
                    if ( mapView.map.getLayer('states-join') && mapView.map.getLayer('states-join-hover') ){ // if addLayer below has taken effect
                        console.log('render', mapView.map.getLayer('states-join'));
                        mapView.map.off('render', checkLayerLoaded); //  turn off the listener for render
                        mapView.setMouseEvents();
                    }
                }

                this.map.on('render', checkLayerLoaded)

                mapView.map.addLayer({
                    "id": "states-join",
                    "type": "fill",
                    "source": "states",
                    "source-layer": 'states',
                    "paint": {
                        "fill-color": {
                            "property": "STATEFP",
                            "type": "categorical",
                            "stops": this.stops
                        }
                    }
                }, 'water');

                mapView.map.addLayer({
                    "id": "states-join-hover",
                    "type": "line",
                    "source": "states",
                    "source-layer": 'states',
                    "paint": {
                        "line-color": '#4D90FE',
                        "line-width": 4,
                        "line-blur": 2
                    },
                    "filter": ["==", "name", ""]
                });

            }

            function addLegend() {
                var scheme = d3.schemeYlOrRd[6]

                var legend = d3.select('#map')
                    .append('div')
                    .attr('class','map-overlay')
                    .attr('id','legend');

                legend
                    .append('p')
                    .text('Percent without health insurance');

                var legendDivs = legend
                    .selectAll('legendDiv')
                    .data(scheme)
                    .enter().append('div');

                legendDivs.append('span')
                    .attr('class','legend-key')
                    .style('background-color', function(d){
                        return d;
                    });

                legendDivs.append('span')
                    .html((d, i, array) => {
                        var interval = ( this.maxValue - this.minValue ) / array.length;
                        return d3.format(".1f")((this.minValue + interval * i )) + '&ndash;' + d3.format(".1f")(( this.minValue + interval * (i + 1) ));
                    });

                legend
                    .append('p')
                    .text('Source: ACS 2011–2015 5-year estimates');
                
            }

        },
        setMouseEvents(){

            this.map.on('mousemove', 'states-join', e => {
                if ( !controller.controlState.getState().isStateZoomed ){
                    this.map.setFilter("states-join-hover", ["==", "STATEFP", e.features[0].properties.STATEFP]);  
                }
            });
            this.map.on('mouseleave', 'states-join', e => {
                this.map.setFilter("states-join-hover", ["==", "STATEFP", ""]);  
            });
            this.map.on('click', 'states-join', e => {
                    console.log(controller.controlState.getState());
                if ( !controller.controlState.getState().isStateZoomed ){
                    controller.controlState.setState('isStateZoomed',true);
                    var features = this.map.queryRenderedFeatures(e.point, {
                        layers: ['states-join']
                    });

                    // some states have multiple coordinate arrays that need to be concatenated together
                    // HT https://stackoverflow.com/a/10865042/5701184 for the [] concat apply method
                    var coordinatesArray = features[0].geometry.coordinates.length === 1 ? [].concat.apply([], features[0].geometry.coordinates) : [].concat.apply([], [].concat.apply([], features[0].geometry.coordinates) );
                    console.log(coordinatesArray);
                        
                    var minLon = d3.min(coordinatesArray, function(d){
                        return d[0];
                    });

                    var minLat = d3.min(coordinatesArray, function(d){
                        return d[1];
                    });
                    var maxLon = d3.max(coordinatesArray, function(d){
                        return d[0];
                    });
                    var maxLat = d3.max(coordinatesArray, function(d){
                        return d[1];
                    });

                    var bounds = [
                        [minLon, minLat],
                        [maxLon, maxLat]
                    ];

               //     console.log(JSON.stringify(bounds));
                    map.fitBounds(bounds, {
                        linear: true,
                        padding: {top:10,right:150,bottom:10,left:10}
                    });
                } else {
                    controller.controlState.setState('isStateZoomed',false);
                    this.map.flyTo({
                        center: originalCenter,
                        zoom: originalZoom
                    });
                }
            });
        }
    }; // end mapView

    const controller = {
        controlState: StateModule(),
        init(){
        window.controller = controller;
            this.promises = {};
            this.getACSData('stateData','https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=state:*&key=')
            this.promises.stateData.then(values => {
                console.log(values);
            });
            this.promises.mapLoaded = new Promise((resolve, reject) => {
                mapView.initializeMap(resolve);
            });
            Promise.all([this.promises.stateData, this.promises.mapLoaded]).then(values => {
                console.log('ready to go!', values);
                mapView.initializeChloroPleth(values[0]);
            });
        },
        getACSData(name, url){
            this.promises[name] = new Promise((resolve,reject) => {
                d3.json(url + censusKey, (error,data) => { 
                    console.log(data); // array of arrays, with array 0 being the field names
                    if (error) throw error;
                    resolve(this.returnKeyValues(data));
                });
            });
        },
        returnKeyValues(values, rollup){ 
            return values.slice(1).map(row => row.reduce(function(acc, cur, i) { // 1. params: total, currentValue, currentIndex[, arr]
              acc[values[0][i]] = isNaN(+cur) ? cur : +cur; // 3. // acc is an object , key is corresponding value from row 0, value is current value of array
              if ( rollup ) {
                acc.rollup = rollup;
              }
              return acc;
            }, {}));
        }
    }; // end controller

    
    function StateModule() {
        
        var state = {};

        function _logState(){
            console.log(state);
        }

        function _getState(){
            return state;
        }

        function _setState(key,value) { 
                                   
            state[key] = value;
        }

        return {
            logState: _logState,
            getState: _getState,
            setState: _setState
        }
    }

    controller.init();   

}()); // end IIFE

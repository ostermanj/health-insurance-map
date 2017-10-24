(function(){

    "use strict";
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N0ZXJtYW5qIiwiYSI6ImNpdnU5dHVndjA2eDYyb3A3Nng1cGJ3ZXoifQ.Xo_k-kzGfYX_Yo_RDcHDBg';
    const censusKey = '3a82a0bf1219fb2fb0962763bb1582c5951f8566';

    const mapView = {
        
        initializeMap(resolve){
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v9',
                zoom: 3.9,
                center: [-96.2,38.28]
                
            });

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

            var roadLayers = this.map.getStyle().layers.filter(function(each){
                return each['source-layer'] === 'road';
            });

            roadLayers.forEach(each => {
                this.map.setPaintProperty(each.id, 'line-opacity', 0.2 )
            });

            var maxValue = d3.max(data, function(d){
                return d.DP03_0099PE;
            });
            console.log(maxValue);
            // borrowed from https://www.mapbox.com/mapbox-gl-js/example/data-join/
            // First value is the default, used where the is no data
            var stops = [["0", "rgba(100,100,100,1)"]];

            // Calculate color for each state based on the unemployment rate
            data.forEach(function(row) {
                var green = Math.round(255 - ((row.DP03_0099PE / maxValue) * 255) );
                var color = "rgba(" + 0 + ", " + green + ", " + 0 + ", 1)";
                console.log(color);
                var stateToString = row.state > 9 ? row.state.toString() : '0' + row.state.toString();
                stops.push([stateToString, color]);
            });
            console.log(stops);

            // Add layer from the vector tile source with data-driven style
            mapView.map.addLayer({
                "id": "states-join",
                "type": "fill",
                "source": "states",
                "source-layer": 'states',
                "paint": {
                    "fill-color": {
                        "property": "STATEFP",
                        "type": "categorical",
                        "stops": stops
                    }
                }
            }, 'water');
                }
    }; // end mapView

    const controller = {
        
        init(){
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

    controller.init();   

}()); // end IIFE

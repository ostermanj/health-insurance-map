(function(){

    "use strict";
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N0ZXJtYW5qIiwiYSI6ImNpdnU5dHVndjA2eDYyb3A3Nng1cGJ3ZXoifQ.Xo_k-kzGfYX_Yo_RDcHDBg';
    const censusKey = '3a82a0bf1219fb2fb0962763bb1582c5951f8566';

    const mapView = {
        
        initializeMap(){
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v9',
                zoom: 3.9,
                center: [-96.2,38.28],
                hash: true
            });

            this.map.on('load', function(){
                controller.promises.mapLoaded = new Promise(function(resolve,reject){
                    resolve(true);
                });
                console.log(controller.promises);
            });
        }
    }; // end mapView

    const controller = {
        
        init(){
            this.promises = {};
            mapView.initializeMap();
            this.getACSData('stateData','https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=state:*&key=')
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

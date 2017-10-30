(function(){

    "use strict";
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N0ZXJtYW5qIiwiYSI6ImNpdnU5dHVndjA2eDYyb3A3Nng1cGJ3ZXoifQ.Xo_k-kzGfYX_Yo_RDcHDBg';
    const stateBounds={10:[[-75.794677734375,38.45358870894137],[-75.05859375,39.84228602074339]],11:[[-77.11990356445312,38.792091771584694],[-76.9097900390625,38.99570671505043]],12:[[-87.637939453125,24.51713945052515],[-80.035400390625,31.00586290462421]],13:[[-85.60546875,30.363396239603716],[-80.848388671875,35.00300339527672]],16:[[-117.24609375,41.992160233376296],[-111.0498046875,49.00184391797853]],17:[[-91.51611328125,36.97622678464096],[-87.506103515625,42.51260171573665]],18:[[-88.099365234375,37.779398571318765],[-84.79248046875,41.76311744700587]],19:[[-96.646728515625,40.38002840251184],[-90.142822265625,43.5007524356904]],20:[[-102.052001953125,36.993778388725175],[-94.59228515625,40.01078714046551]],21:[[-89.571533203125,36.50080531760479],[-81.968994140625,39.15562239342324]],22:[[-94.053955078125,28.93124697186731],[-88.824462890625,33.027087580028734]],23:[[-71.08154296875,43.060861371343265],[-66.95068359375,47.46523622438363]],24:[[-79.4970703125,37.918201119766636],[-75.05859375,39.7240885773337]],25:[[-73.509521484375,41.244772343082076],[-69.93896484375,42.89206418807336]],27:[[-97.239990234375,43.5007524356904],[-89.49462890625,49.38952445158216]],28:[[-91.658935546875,30.18312184219552],[-88.099365234375,35.00300339527672]],29:[[-95.77880859375,35.99578538642032],[-89.09912109375,40.61395244116659]],30:[[-116.0595703125,44.36313311380772],[-104.04052734375,49.00184391797853]],31:[[-104.0625,40.00237193587648],[-95.3173828125,43.00464712779444]],32:[[-120.0146484375,35.00300339527672],[-114.049072265625,42.008489015723995]],33:[[-72.564697265625,42.69858589169843],[-70.7080078125,45.305802599435765]],34:[[-75.56396484375,38.93377552819723],[-73.89404296875,41.36031866306709]],35:[[-109.05029296875,31.33487103395059],[-103.0078125,37.00255267215955]],36:[[-79.771728515625,40.497092372695676],[-71.861572265625,45.01918507438177]],37:[[-84.3310546875,33.852169701407405],[-75.465087890625,36.58906837139911]],38:[[-104.051513671875,45.93587062119053],[-96.558837890625,49.00184391797853]],39:[[-84.825439453125,38.41055825094608],[-80.52978515625,41.983994270935625]],40:[[-103.0078125,33.62376800118811],[-94.4384765625,37.00255267215955]],41:[[-124.56298828125,42.00032514831622],[-116.466064453125,46.27103747280262]],42:[[-80.52978515625,39.7240885773337],[-74.696044921875,42.2773087742371]],44:[[-71.87255859375,41.153842357114485],[-71.12548828125,42.02481360781778]],45:[[-83.353271484375,32.03602003973755],[-78.541259765625,35.21869749632886]],46:[[-104.0625,42.488301979602284],[-96.43798828125,45.951149686691394]],47:[[-90.318603515625,34.985003130171066],[-81.650390625,36.68604127658193]],48:[[-106.6552734375,25.83944940206318],[-93.526611328125,36.50080531760479]],49:[[-114.06005859375,37.00255267215955],[-109.05029296875,42.008489015723995]],50:[[-73.443603515625,42.73087427928485],[-71.466064453125,45.01918507438177]],51:[[-83.682861328125,36.544949441483226],[-75.245361328125,39.47012512235818]],53:[[-124.73876953125,45.544831492424635],[-116.91650390625,49.009050809382046]],54:[[-82.650146484375,37.204081555898526],[-77.728271484375,40.63896734381723]],55:[[-92.889404296875,42.49640294093706],[-86.81396484375,47.07760411715964]],56:[[-111.060791015625,41.0047754222295],[-104.0625,45.01141864227728]],72:[[-67.950439453125,17.88465917954281],[-65.225830078125,18.521283325496285]],"06":[[-124.4091796875,32.537551746769],[-114.136962890625,42.01665183556824]],"04":[[-114.818115234375,31.33487103395059],[-109.05029296875,37.00255267215955]],"08":[[-109.061279296875,36.993778388725175],[-102.052001953125,41.0047754222295]],"05":[[-94.625244140625,33.008663494575586],[-89.6484375,36.50080531760479]],"01":[[-88.48388671875,30.23059456493219],[-84.90234375,35.012002043160706]],"09":[[-73.729248046875,40.98819156349393],[-71.795654296875,42.05745022024681]],"02":[[-188.459,50.403],[-140,72.2]],26:[[-90.511,41.683],[-82.433,48.25]]};
    const censusKey = '3a82a0bf1219fb2fb0962763bb1582c5951f8566',
          maxBounds = {
            lower48: [
              [-125.94823224526017, 23.14551812884227], // 60.516 deg wide by 26.908 deg high
              [-65.43255594715713, 50.05360024146327]
            ],
            alaska: stateBounds["02"],
            hawaii: stateBounds["15"] 
          };

    const mapOptions = [
        {
            container: 'map-0',
            style: 'mapbox://styles/mapbox/light-v9',
            maxBounds: maxBounds.lower48                
        },
        {
            container: 'map-1',
            style: 'mapbox://styles/mapbox/light-v9',
            maxBounds: maxBounds.alaska                
        }
    ];

    const mapView = {
        maps: [],
        initializeMap(options, i, resolve){
            this.maps[i] = new mapboxgl.Map(options);  
            this.maps[i].originalOptions = options;
            this.maps[i].on('load',() => {
                resolve(true);
            });        
        },
        sharedSetup(map){
            console.log(map);
            map.dragRotate.disable();
            map.touchZoomRotate.disableRotation();

            function checkDataLoaded(){
                if ( map.getSource('states') && map.getSource('counties') ){ // if addSource below has taken effect
                    console.log('render', map.getSource('states'));
                    map.off('render', checkDataLoaded); // and turn off the listener for render
                }
            }

            map.on('render', checkDataLoaded); // render event is fired often, including when addSource below takes effect

            map.addSource("states", {
                "type": "vector",
                "url": "mapbox://mapbox.us_census_states_2015"
                });
            map.addSource('counties', {
                "type": "vector",
                "url": "mapbox://mapbox.82pkq93d"
            });
        }
    };


    const controller = {
        controlState: StateModule(),
        init(){
            this.promises = {maps:[]};
            mapOptions.forEach((options, i) =>{
                this.promises.maps[i] = new Promise((resolve,reject) => {
                    mapView.initializeMap(options, i, resolve);
                });
            });
            this.getACSData('stateData','https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=state:*&key=');
            this.getACSData('countyData','https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=county:*&key=');
            Promise.all([this.promises.stateData, this.promises.countyData, Promise.all(this.promises.maps)]).then(values => {
                console.log('ready to go!', values);
                mapView.maps.forEach((each) => {
                    mapView.sharedSetup(each);
                });
            });
           
        },
        getACSData(name, url){
            this.promises[name] = new Promise((resolve,reject) => {
                d3.json(url + censusKey, (error,data) => { 
                    console.log(data); // array of arrays, with array 0 being the field names
                    if (error) throw error;
                    resolve(this.returnKeyValues(data, null, false));
                });
            });
        },
        returnKeyValues(values, rollup, coerce){ // coerce = BOOL coerce to num or not 
            return values.slice(1).map(row => row.reduce(function(acc, cur, i) { // 1. params: total, currentValue, currentIndex[, arr]
              acc[values[0][i]] = coerce === true ? isNaN(+cur) ? cur : +cur : cur; // 3. // acc is an object , key is corresponding value from row 0, value is current value of array
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


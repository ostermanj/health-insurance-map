(function(){

    "use strict";
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N0ZXJtYW5qIiwiYSI6ImNpdnU5dHVndjA2eDYyb3A3Nng1cGJ3ZXoifQ.Xo_k-kzGfYX_Yo_RDcHDBg';
    const stateBounds={10:[[-75.794677734375,38.45358870894137],[-75.05859375,39.84228602074339]],11:[[-77.11990356445312,38.792091771584694],[-76.9097900390625,38.99570671505043]],12:[[-87.637939453125,24.51713945052515],[-80.035400390625,31.00586290462421]],13:[[-85.60546875,30.363396239603716],[-80.848388671875,35.00300339527672]],15:[[-161,18.48917],[-153,22.525]],16:[[-117.24609375,41.992160233376296],[-111.0498046875,49.00184391797853]],17:[[-91.51611328125,36.97622678464096],[-87.506103515625,42.51260171573665]],18:[[-88.099365234375,37.779398571318765],[-84.79248046875,41.76311744700587]],19:[[-96.646728515625,40.38002840251184],[-90.142822265625,43.5007524356904]],20:[[-102.052001953125,36.993778388725175],[-94.59228515625,40.01078714046551]],21:[[-89.571533203125,36.50080531760479],[-81.968994140625,39.15562239342324]],22:[[-94.053955078125,28.93124697186731],[-88.824462890625,33.027087580028734]],23:[[-71.08154296875,43.060861371343265],[-66.95068359375,47.46523622438363]],24:[[-79.4970703125,37.918201119766636],[-75.05859375,39.7240885773337]],25:[[-73.509521484375,41.244772343082076],[-69.93896484375,42.89206418807336]],27:[[-97.239990234375,43.5007524356904],[-89.49462890625,49.38952445158216]],28:[[-91.658935546875,30.18312184219552],[-88.099365234375,35.00300339527672]],29:[[-95.77880859375,35.99578538642032],[-89.09912109375,40.61395244116659]],30:[[-116.0595703125,44.36313311380772],[-104.04052734375,49.00184391797853]],31:[[-104.0625,40.00237193587648],[-95.3173828125,43.00464712779444]],32:[[-120.0146484375,35.00300339527672],[-114.049072265625,42.008489015723995]],33:[[-72.564697265625,42.69858589169843],[-70.7080078125,45.305802599435765]],34:[[-75.56396484375,38.93377552819723],[-73.89404296875,41.36031866306709]],35:[[-109.05029296875,31.33487103395059],[-103.0078125,37.00255267215955]],36:[[-79.771728515625,40.497092372695676],[-71.861572265625,45.01918507438177]],37:[[-84.3310546875,33.852169701407405],[-75.465087890625,36.58906837139911]],38:[[-104.051513671875,45.93587062119053],[-96.558837890625,49.00184391797853]],39:[[-84.825439453125,38.41055825094608],[-80.52978515625,41.983994270935625]],40:[[-103.0078125,33.62376800118811],[-94.4384765625,37.00255267215955]],41:[[-124.56298828125,42.00032514831622],[-116.466064453125,46.27103747280262]],42:[[-80.52978515625,39.7240885773337],[-74.696044921875,42.2773087742371]],44:[[-71.87255859375,41.153842357114485],[-71.12548828125,42.02481360781778]],45:[[-83.353271484375,32.03602003973755],[-78.541259765625,35.21869749632886]],46:[[-104.0625,42.488301979602284],[-96.43798828125,45.951149686691394]],47:[[-90.318603515625,34.985003130171066],[-81.650390625,36.68604127658193]],48:[[-106.6552734375,25.83944940206318],[-93.526611328125,36.50080531760479]],49:[[-114.06005859375,37.00255267215955],[-109.05029296875,42.008489015723995]],50:[[-73.443603515625,42.73087427928485],[-71.466064453125,45.01918507438177]],51:[[-83.682861328125,36.544949441483226],[-75.245361328125,39.47012512235818]],53:[[-124.73876953125,45.544831492424635],[-116.91650390625,49.009050809382046]],54:[[-82.650146484375,37.204081555898526],[-77.728271484375,40.63896734381723]],55:[[-92.889404296875,42.49640294093706],[-86.81396484375,47.07760411715964]],56:[[-111.060791015625,41.0047754222295],[-104.0625,45.01141864227728]],72:[[-67.950439453125,17.88465917954281],[-65.225830078125,18.521283325496285]],"06":[[-124.4091796875,32.537551746769],[-114.136962890625,42.01665183556824]],"04":[[-114.818115234375,31.33487103395059],[-109.05029296875,37.00255267215955]],"08":[[-109.061279296875,36.993778388725175],[-102.052001953125,41.0047754222295]],"05":[[-94.625244140625,33.008663494575586],[-89.6484375,36.50080531760479]],"01":[[-88.48388671875,30.23059456493219],[-84.90234375,35.012002043160706]],"09":[[-73.729248046875,40.98819156349393],[-71.795654296875,42.05745022024681]],"02":[[-190.539,53.135],[-116,71.139]],26:[[-90.511,41.683],[-82.433,48.25]]};
    const censusKey = '3a82a0bf1219fb2fb0962763bb1582c5951f8566',
          mapBounds = {
            lower48: [
              [-125.94823224526017, 24], // 60.516 deg wide by 26.908 deg high
              [-65.43255594715713, 50.05360024146327]
            ],
            '02': stateBounds["02"],
            '15': stateBounds[15] 
          };

    const mapColorBuckets = 10;

    const mapOptions = [
        {
            container: 'map-0',
            style: 'mapbox://styles/mapbox/light-v9',
            bounds: [
              [-125.94823224526017, 24], // 60.516 deg wide by 26.908 deg high
              [-65.43255594715713, 50.05360024146327]
            ]
        },
        {
            container: 'map-1',
            style: 'mapbox://styles/mapbox/light-v9',
            bounds: '02'
        },
        {
            container: 'map-2',
            style: 'mapbox://styles/mapbox/light-v9',
            bounds: '15'              
        }
    ];

    const mbHelper = {
        promises: {},
        addSourceAndLayers(sourceOptions,layerOptionsArray){ // this = map
            var sourceName = sourceOptions.name;
            mbHelper.promises[sourceOptions.name] = new Promise((resolve,reject) => {
                delete sourceOptions.name;
                function checkDataLoaded(){
                    if ( this.getSource(sourceName) ){ // if addSource below has taken effect
                        resolve(true);
                        this.off('render', checkDataLoaded); // and turn off the listener for render
                    }
                }
                this.on('render', checkDataLoaded);
                this.addSource(sourceName, sourceOptions);
            });
            var layerPromises = [];
            return mbHelper.promises[sourceName].then(() => { // GET THIS TO RETURN A PROMISE.ALL FOR THE LAYERS
                layerOptionsArray.forEach((each) => {
                    layerPromises.push(
                        new Promise((resolve,reject) => {
                            var beforeLayer = each.beforeLayer ? each.beforeLayer : '';
                            delete each.beforeLayer;
                            each.source = sourceName;
                            function checkLayerLoaded(){
                                if ( this.getLayer(each.id) ){ // if addLayer below has taken effect
                                    resolve(true);
                                    this.off('render', checkLayerLoaded); // and turn off the listener for render
                                }
                            }
                            this.on('render', checkLayerLoaded);
                            this.addLayer(each, beforeLayer);
                        })
                    );
                });
                return Promise.all(layerPromises);
            });
        }
    }

    const mapView = {
        maps: [],
        init(){
            setSubs([
                ['activeStateFP', mapView.zoomInMapHandler],
                ['activeMap', mapView.zoomInMapHandler],
                ['activeStateFP', mapView.updateLegend]
            ]);
            this.wrapper = document.getElementById('map-view-wrapper');
            this.el = document.getElementById('map-view');
            this.checkMapViewAspect();
        },
        initializeMap(options, i, resolve){
            var {container,style,bounds} = options;
            var maxBounds;
            console.log(typeof bounds);
            if ( typeof bounds === 'object' ){ // actually an array but typeof <array> === object
                maxBounds = bounds;
            } else if ( typeof bounds === 'string' ){
                maxBounds = mapBounds[bounds]; 
            } else {
                throw 'bounds not corrct type: should be lng/lat array or string key to mapBounds object'
            }
            var mbOptions = {container,style,maxBounds}; // ES6 shorthand

            this.maps[i] = new mapboxgl.Map(mbOptions);
            this.maps[i].originalOptions = options;
            this.maps[i].index = i;
            var map = this.maps[i];
           
            this.maps[i].on('load',() => {
                resolve(true);
            });   
            window.maps = this.maps;     
        },
        resizeMaps(){
            this.maps.forEach(function(each){
                console.log('resizing', each);
                each.fitBounds(each.getMaxBounds());
               // mapView.setOriginalCenterAndZoom(each); // THIS MAY BE TRIGGERING BEFORE THE ZOOM ENDS
            });
        },
        checkMapViewAspect(){
            var wrapperHeight = this.wrapper.offsetHeight;
            var wrapperWidth = this.wrapper.offsetWidth;
            if ( wrapperHeight < 0.813 * wrapperWidth ) {
                this.el.style.maxWidth = 1.23 * wrapperHeight + 'px';
                //this.maps
            } else {
                this.el.style.maxWidth = '100%';
            }
        },
        setup(values){
            console.log(values);
            var stateData = values[0],
                countyData = values[1];
            mapView.countyDate = countyData;
            createStops.call(this);
            createLegend.call(this);
            mapView.maps.forEach(each => {
                this.sharedMapSetup(each);
            });

            function createStops() {
                this.mapRange = returnRange(mapColorBuckets - 1);
                this.legendRange = [];
                this.mapRange.forEach((value,i, array) => {
                  if ( i % 2 === 0 || i === array.length - 1) {
                    this.legendRange.push(value)
                  }
                });

                mapView.scaleState = d3.scaleQuantile().domain(stateData.map(function(row){
                  return row.DP03_0099PE;
                })).range(this.mapRange);
                mapView.scaleCounty = d3.scaleQuantile().domain(countyData.map(function(row){
                  return row.DP03_0099PE;
                })).range(this.mapRange);
                window.scaleState = mapView.scaleState;

                mapView.stateStops = [["0", "rgb(100,100,100)"]];
                mapView.countyStops = {
                  string: [["0", "rgb(100,100,100)"]],
                  numeric: [[0, "rgb(100,100,100)"]]
                };

                stateData.forEach((row) => { // states
                    var color = d3.interpolateYlOrBr(mapView.scaleState(row.DP03_0099PE));
                    mapView.stateStops.push([row.state, color]);
                });
                countyData.forEach((row) => { // counties
                    var color = d3.interpolateYlOrBr(mapView.scaleCounty(row.DP03_0099PE));
                      if ( row.state[0] === '0'){
                        mapView.countyStops.string.push([(row.state + row.county), color]);
                      } else {
                        mapView.countyStops.numeric.push([+(row.state + row.county), color]);
                      }
                });
                
                function returnRange(n){ // creates a discrete set of stops between 0 and 1 (inclusive) based
                                         // on the number of colorBuckets specified up top. used as the output
                                         // range in the d3.scale function, which is then interpolated on the
                                         // color scale
                  var array = [];
                  for ( let i = 0; i <= n; i++ ){
                    array.push( Math.round( (10 / (n) * i / 10) * 100 ) / 100 );
                  }
                  return array;
                }
            }

            function createLegend(){
                this.legend = d3.select('#sidebar-top')
                    .append('div')
                    .attr('id','legend');

                var legend = this.legend;

                legend   
                    .append('p')
                    .text('Percent without health insurance');

                var legendDivs = legend
                    .selectAll('legendDiv')
                    .data(this.legendRange.slice(0,-1))
                    .enter().append('div');

                legendDivs.append('span')
                    .attr('class','legend-key')
                    .attr('style', (d,i) => {
                        return `background: ${d3.interpolateYlOrBr(d)}; /* For browsers that do not support gradients */
                                background: -webkit-linear-gradient(${d3.interpolateYlOrBr(d)}, ${d3.interpolateYlOrBr(this.legendRange[i + 1])}); /* For Safari 5.1 to 6.0 */
                                background: -o-linear-gradient(${d3.interpolateYlOrBr(d)}, ${d3.interpolateYlOrBr(this.legendRange[i + 1])}); /* For Opera 11.1 to 12.0 */
                                background: -moz-linear-gradient(${d3.interpolateYlOrBr(d)}, ${d3.interpolateYlOrBr(this.legendRange[i + 1])}); /* For Firefox 3.6 to 15 */
                                background: linear-gradient(to right, ${d3.interpolateYlOrBr(d)} , ${d3.interpolateYlOrBr(this.legendRange[i + 1])});`;
                    });

                this.legendSpans = legendDivs.append('span');
                this.updateLegend();    

                legend
                    .append('p')
                    .text('Source: ACS 2011–2015 5-year estimates');
            }
        },
        updateLegend(msg,data){
            var scale = ( msg === 'activeStateFP' && data !== null) ? mapView.scaleCounty : mapView.scaleState;
            mapView.legendSpans.html((d, i) => {
                return d3.format(',.1f')(scale.invertExtent(d)[0]) + '&ndash;' + d3.format(',.1f')(scale.invertExtent(mapView.mapRange[i * 2 + 1])[1]);
            });
            d3.select('#legend').node().parentNode.classList.add('load-finished');
        },
        setOriginalCenterAndZoom(map){
            map.originalCenter = map.getCenter();
            map.originalZoom = map.getZoom();
        },
        sharedMapSetup(map){
            
            map.dragRotate.disable();
            map.touchZoomRotate.disableRotation();
            mapView.setOriginalCenterAndZoom(map);
            editRoadLayers();
        
            mbHelper.addSourceAndLayers.call(map,
                { // source
                    "type": "vector",
                    "url": "mapbox://mapbox.us_census_states_2015",
                    "name": "states"
                }, [ // layers
                    {
                        "id": "states-join",
                        "type": "fill",
                        "source-layer": 'states',
                        "paint": {
                          "fill-color": 'transparent'
                        },
                        "beforeLayer": "water"
                    },
                    {
                        "id": "states-join-hover",
                        "type": "line",
                        "source-layer": 'states',
                        "paint": {
                            "line-color": '#4D90FE',
                            "line-width": 4,
                            "line-blur": 2
                        },
                        "filter": ["==", "name", ""]
                    }
                ]).then(() => {
                    mbHelper.addSourceAndLayers.call(map,
                        { // source
                            "type": "vector",
                            "url": "mapbox://mapbox.82pkq93d",
                            "name": "counties"
                        }, [ // layers
                                    {
                              "id": "counties",
                              "type": "fill",
                              "source": "counties",
                              "source-layer": "original",
                              "paint": {
                                  "fill-outline-color": "rgba(255,255,255,0.5)",
                                  "fill-color": "transparent"
                              },
                              "beforeLayer": "water",
                              "filter": ["==", "FIPS", ""]
                          }
                        ]).then(() => {
                            addChloroLayer();
                            setMouseEvents();
                            d3.select('#' + map.originalOptions.container + ' .load-overlay')
                                .classed('load-finished', true);
                        });
                    });

            function setMouseEvents(){

                map.on('mousemove', 'states-join', e => {
                    map.setFilter("states-join-hover", ["==", "STATEFP", e.features[0].properties.STATEFP]);  
                });
                map.on('mouseleave', 'states-join', e => {
                    map.setFilter("states-join-hover", ["==", "STATEFP", ""]);  
                });
                map.on('click', 'states-join', e => {
                    
                    setState('activeMap', map.index); // stateModule only publishes if state is new, no need for if statement
                    if ( getState('activeStateFP') !== e.features[0].properties.STATEFP ) { // if statement needed here b/c click on already active state requires special response
                        setState('activeStateFP', e.features[0].properties.STATEFP );
                    } else { // click on already active/zoomed US state
                        setState('activeStateFP', null );
                    }
                }); 
            }
            function addChloroLayer(){
                mapView.stateFillActive = {
                      "property": "STATEFP",
                      "type": "categorical",
                      "stops": mapView.stateStops
                    };
                mapView.stateFillInactive = "#959595";
                mapView.countyFill = {
                            "property": "FIPS",
                            "type": "categorical",
                            "stops": mapView.countyStops.string
                        };

                map.setPaintProperty('states-join', 'fill-color', mapView.stateFillActive);
            }

            function editRoadLayers() {
                var roadLayers = map.getStyle().layers.filter(function(each){
                    return each['source-layer'] === 'road';
                });
                roadLayers.forEach(each => {
                    map.setPaintProperty(each.id, 'line-opacity', 0.2 )
                });
            }
        },
        zoomInMapHandler(msg,data){ // msg = 'activeStateFP'; data = activeStateFP OR 'activeMap'; activeMap
            
            if ( msg === 'activeStateFP' ) {
                if ( data === null || data === 'null' ){
                    zoomMapBackOut(getState('activeMap'));
                } else {
                    zoomMapToState();
                }
            }

            if ( msg === 'activeMap' && getPreviousState('activeMap') !== undefined ){
                zoomMapBackOut(getPreviousState('activeMap'));
            }

            function zoomendCenter(){ // `this` = the map
                this.off('zoomend', zoomendCenter);
                this.flyTo({center: this.originalCenter});
            }
            function zoomMapBackOut(index){
                var map = mapView.maps[index];
                map.setFilter("counties", ["==", "FIPS", ""]);
                if ( map.index > 0 ){
                    map.on('zoomend', zoomendCenter);
                }
                map.fitBounds(map.getMaxBounds());
                mapView.maps.forEach(function(each){
                    each.setPaintProperty('states-join', 'fill-color', mapView.stateFillActive);
                });
            }
            function zoomMapToState(){
                var map = mapView.maps[getState('activeMap')];
                if ( data[0] === '0' ){ //data is string; if it starts with 0 . . . 
                  map.setPaintProperty('counties', 'fill-color', {
                        "property": "FIPS",
                        "type": "categorical",
                        "stops": mapView.countyStops.string
                  });
                } else {
                  map.setPaintProperty('counties', 'fill-color', {
                        "property": "FIPS",
                        "type": "categorical",
                        "stops": mapView.countyStops.numeric
                  });
                }
                mapView.maps.forEach(function(each) {
                    each.setPaintProperty('states-join', 'fill-color', mapView.stateFillInactive);
                });
                if ( map.index > 0 ){
                    map.on('zoomend', zoomendCenter);
                }
                var wrapperPadding = map.index === 0 ? 10 : 0;
                map.fitBounds(stateBounds[data], {
                    padding: wrapperPadding
                });
                map.setFilter("counties", ["all",
                  [">", "FIPS", getCountyRange(data).min],
                  ["<=", "FIPS", getCountyRange(data).max]
                ]);
                if ( map.getZoom() < 2 ) {
                  map.setZoom(2);
                }                    
            }
            function getCountyRange(statefp) {
                if (statefp[0] === '0'){
                    return { // county FIPS less than 10,000 start with zeroes and are stored as strings in source data
                      min: '0' + ( +statefp.slice(0,2) * 1000 ),
                      max: '0' + ( +statefp.slice(0,2) * 1000 + 999 )
                    }
                } else {
                    return { // others are stored as numbers
                      min:  +statefp.slice(0,2) * 1000,
                      max:  +statefp.slice(0,2) * 1000 + 999
                    }
                }
            }
        }
    };

    var sidebarView = {
        fadeInHTML(callback){
            console.log(this);
            this.transition()
                .duration(sidebarView.duration / 2)
                .ease(d3.easeCubicOut)
                .style('opacity', 0)
                .on('end', function(d){
                    var $this = d3.select(this);
                    $this.html(function(){
                        return callback(d);
                    });
                    $this.transition()
                        .duration(sidebarView.duration / 2)
                        .ease(d3.easeCubicOut)
                        .style('opacity', 1);
                });
        },
        duration: 500,
        transition: d3.transition().duration(500).ease(d3.easeCubicOut),
        chartsAreCreated: false,
        initializeDropdown(data){
            setSubs([
                ['activeStateFP', function(msg,data){
                    d3.select('#state-selector').node().value = data; 
                }],
                ['activeStateFP', this.getStateDetails]
            ]);
            d3.select('#state-selector').node().onchange = function(evt){
                console.log(this.value);
                var matchingMap = mapView.maps.find((map) => {
                    return map.originalOptions.bounds === this.value
                });
                var mapIndex = matchingMap ? matchingMap.index: 0;
                setState('activeMap', mapIndex);
                setState('activeStateFP', this.value);
            };
            d3.select('#state-selector')
                .selectAll('stateOptions')
                .data(data)
                .enter().append('option')
                .attr('value', function(d){
                    return d.state;
                })
                .text(function(d){
                    return d.NAME;
                });

            d3.select('#dropdown-div')
                .classed('load-finished', true);
        },
        getStateDetails(msg,data){
            d3.select('#sidebar-bottom').classed('load-finished', false);
            if ( controller.promises.dictionary === undefined ){
                controller.promises.dictionary = controller.returnData('data/data-dictionary.json', null, false);
            }
            if ( data ) {
                if ( controller.promises['state' + data] === undefined) {
                    controller.promises['state' + data] = controller.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0095E,DP03_0095PE,DP03_0096E,DP03_0096PE,DP03_0097E,DP03_0097PE,DP03_0098E,DP03_0098PE,DP03_0099E,DP03_0099PE,DP03_0100E,DP03_0100PE,DP03_0101E,DP03_0101PE,DP03_0102E,DP03_0102PE,DP03_0103E,DP03_0103PE,DP03_0104E,DP03_0104PE,DP03_0105E,DP03_0105PE,DP03_0106E,DP03_0106PE,DP03_0107E,DP03_0107PE,DP03_0108E,DP03_0108PE,DP03_0109E,DP03_0109PE,DP03_0110E,DP03_0110PE,DP03_0111E,DP03_0111PE,DP03_0112E,DP03_0112PE,DP03_0113E,DP03_0113PE,DP03_0114E,DP03_0114PE,DP03_0115E,DP03_0115PE,DP03_0116E,DP03_0116PE,DP03_0117E,DP03_0117PE,DP03_0118E,DP03_0118PE,NAME&for=state:' + data + '&key=');
                }
                Promise.all([controller.promises.dictionary, controller.promises['state' + data]]).then((values) =>{
                  sidebarView.handleCharts(values);
                  console.log(values);
                });
                
            }
        },
        handleCharts(values){ // values[0] is the dictionary; [1][0] is the state's data
            
            console.log(values[1][0]);
            
            
            
            if ( !this.chartsAreCreated ){
                console.log('charts not created');
                var noInsuranceVars = values[0].filter(x => x.type === 'without' && x.variable.indexOf('PE') !== -1).map(x => x.variable);
                var withInsuranceVars = values[0].filter(x => x.type === 'with' && x.variable.indexOf('PE') !== -1).map(x => x.variable);
                var noInsData = controller.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=' + noInsuranceVars.join() + ',NAME&for=state:*&key=', null, false);
                var withInsData = controller.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=' + withInsuranceVars.join() + ',NAME&for=state:*&key=', null, false);
                Promise.all([noInsData,withInsData]).then(values => {

                    function reduceValues(value) {
                        return value.reduce((acc, cur) => {
                            Object.keys(cur).forEach(each => {
                                if ( cur[each].indexOf('.') !== -1 ){
                                    acc.push(+cur[each]);
                                }
                            });
                            return acc;
                        },[]);
                    }

                    sidebarView.maxWithout = d3.max(reduceValues(values[0]))
                    sidebarView.maxWith =    d3.max(reduceValues(values[1]));

                    createCharts(sidebarView.maxWithout, sidebarView.maxWith);
                    this.chartsAreCreated = true;
                    updateCharts();
                });
            } else { // end if ( !this.chartsAreCreated )
                console.log('charts already created');
                updateCharts();
            }

            function updateCharts(){
                sidebarView.fadeInHTML.call(sidebarView.countryLabel, function(d){
                    return values[1][0].NAME;
                });
                
                sidebarView.nested.forEach(function(each){
                    
                    sidebarView[each.key + '-without']
                        .transition(sidebarView.transition)
                        .attr('transform', d => `translate(${scale(sidebarView.maxWithout) - scale(values[1][0][d.variable.replace('E','PE')]) }, 0)`)
                        .attr('width', d => { console.log(d.variable.replace('E','PE'));
                            return scale(values[1][0][d.variable.replace('E','PE')]);
                        });

                    if ( each.values.find(x => x.type === 'private') !== undefined ) {
                    sidebarView[each.key + '-pub']
                        .transition(sidebarView.transition)
                        .attr('transform', function(d){
                                var privateValue = values[1][0][each.values.find(x => x.type === 'private').variable.replace('E','PE')];
                                var publicValue =  values[1][0][each.values.find(x => x.type === 'public').variable.replace('E','PE')];
                                var withValue =  values[1][0][each.values.find(x => x.type === 'with').variable.replace('E','PE')];
                                return `translate(${scale(sidebarView.maxWithout) + scale(withValue - publicValue)}, 0)`;
                            })
                        .attr('width', d => scale(values[1][0][d.variable.replace('E','PE')]) )
                        
                    sidebarView[each.key + '-priv']
                        .transition(sidebarView.transition)
                        .attr('width', d => scale(values[1][0][d.variable.replace('E','PE')]) );

                    } else {
                        sidebarView[each.key + '-unspecified']
                            .transition(sidebarView.transition)
                            .attr('width', d => scale(100 - values[1][0][d.variable.replace('E','PE')]) )
                    }
                });
                d3.select('#sidebar-bottom').classed('load-finished', true);
            }            
            function createCharts(){

                sidebarView.countryLabel = d3.select('#sidebar-charts')
                    .append('p')
                    .html(values[1][0].NAME)
                    .classed('state-label', true)
                    .style('opacity', 0);

                sidebarView.definitions = d3.select('#sidebar-definitions');
                    
                console.log(sidebarView.maxWithout, sidebarView.maxWith);
                var rangeExtent = sidebarView.maxWithout + sidebarView.maxWith;
                var categories = values[0].filter(x => x.type === 'category' && x.variable.indexOf('PE') === -1 );
                var catDivs = d3.select('#sidebar-charts')
                    .selectAll('categories')
                    .data(categories)
                    .enter().append('div')
                    .attr('id', d => d.variable);
                    

             /*   catDivs.append('p')
                    .classed('category-label', true)
                    .text(d => d.label);*/
                   
                catDivs.each(function(d){
                    if ( d.variable !== d.group ){
                        console.log(this);
                        document.getElementById(d.group).appendChild(this);
                    }
                });



                var series = values[0].filter(x => x.type !== 'category' && x.variable.indexOf('PE') === -1 );
                console.log(series);
                sidebarView.nested = d3.nest()
                    .key(function(d){
                        return d.group;
                    })
                    .entries(series);
                    console.log(sidebarView.nested);
                sidebarView.nested.forEach(function(each){
                    console.log(each);
                    console.log(each.values.find(x => x.type === 'without').variable);
                    
                    var viewBox = '0 0 100 12',
                        margin = {top:6,right:0,bottom:0,left:0}, // in percentages of the viewbox width
                        width = 100 - margin.left - margin.right;

                    var scale = d3.scaleLinear().domain([0,rangeExtent]).range([0,width]);
                    window.scale = scale;
                   

                    
                    var svg = d3.select('#' + each.key)
                        .append('svg')
                        .attr('width', '100%')
                        .attr('xmlns','http://www.w3.org/2000/svg')
                        .attr('version','1.1')
                        .attr('viewBox', viewBox);
                        

                    var pattern = svg.append("defs")
                        .append("pattern")
                            .attr('id',"hash4_4")
                            .attr('width',"4")
                            .attr("height","4")
                            .attr("patternUnits","userSpaceOnUse")
                            .attr("patternTransform","rotate(60)");
                        pattern.append('rect')
                            .attr("width","2")
                            .attr("height","4")
                            .attr("transform","translate(0,0)")
                            .attr("fill","#2b526f");
                        pattern.append('rect')
                            .attr("width","2")
                            .attr("height","4")
                            .attr("transform","translate(2,0)")
                            .attr("fill","#3f98da");

                //    svg.html("<defs><pattern id='Pattern' x='0' y='0' width='10' height='10'><rect width='25' height='25' fill='#2b526f'/><g transform='rotate(45)'><rect width='99' height='3' fill='#3f98da' /><rect y='-7' width='99' height='3' fill='#3f98da'/></g></pattern></defs>");

                    var g =  svg.append('g')
                        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
                      
                    g.append('text')
                        .text(values[0].find(x => x.variable === each.values.find(x => x.type === 'without').group).label)
                        .attr('font-size', 5.5)
                        .attr('x', scale(sidebarView.maxWithout))
                        .attr('transform', 'translate(0,-2)')
                        .classed('category-label', true)
                        .on('mouseover', sidebarView.showDefinition)
                        .on('mouseleave', sidebarView.hideDefinition);

                    sidebarView[each.key + '-without']  = g.selectAll('without')
                        .data([each.values.find(x => x.type === 'without')])
                        .enter().append('rect')
                        .classed('without',true)
                        .attr('transform', d => `translate(${scale(sidebarView.maxWithout)}, 0)`)
                        .attr('height',5);

                    if ( each.values.find(x => x.type === 'private') !== undefined ) {
                        


                        sidebarView[each.key + '-priv'] = g.selectAll('private')
                                .data([each.values.find(x => x.type === 'private')])
                                .enter().append('rect')
                                .classed('private',true)
                                .attr('transform', d => `translate(${scale(sidebarView.maxWithout)}, 0)`)
                                .attr('height',5);
                                
                                
                        sidebarView[each.key + '-pub'] = g.selectAll('public')
                                .data([each.values.find(x => x.type === 'public')])
                                .enter().append('rect')
                                .classed('public',true)
                                .attr('height',5);

                   
                    } else {
                        sidebarView[each.key + '-unspecified'] = g.selectAll('unspecified')
                                .data([each.values.find(x => x.type === 'without')])
                                .enter().append('rect')
                                .classed('unspecified',true)
                                .attr('transform', d => `translate(${scale(sidebarView.maxWithout)}, 0)`)
                                .attr('height',5)
                                .attr('fill',"url(#hash4_4)");
                    }
                }); // end nested.forEach(...)
            } // end createCharts()
        }, // end sidebar.handleCharts()
        showDefinition(d){
            sidebarView.definitions
                .datum(d);

            console.log(this,d);
            sidebarView.fadeInHTML.call(sidebarView.definitions, function(d){
                return d.description ? `<p class="definition-name">${d.name} <span class="ACS-variable">(${d.variable})</span></p><p class="definition-description">${d.description}</p>` : `<p class="definition-name">${d.name}</p> <span class="ACS-variable">(${d.variable})</span>`;
            });
        },
        hideDefinition(){
            sidebarView.fadeInHTML.call(sidebarView.definitions, function(){
                return '';
            });
        }
    };

    const controller = {

        controlState: StateModule(),
        controlSubs: SubscribeModule(),
        init(){
            this.setRezizeWatcher();
            mapView.init();

            this.promises = {maps:[]};
            mapOptions.forEach((options, i) =>{
                this.promises.maps[i] = new Promise((resolve,reject) => {
                    mapView.initializeMap(options, i, resolve);
                });
            });
            this.promises.stateData = this.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=state:*&key=', null, false);
            this.promises.countyData = this.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=county:*&key=', null, false);
            Promise.all([this.promises.stateData]).then((values) => {
                sidebarView.initializeDropdown(values[0]);
            });
            Promise.all([this.promises.stateData,
                         this.promises.countyData,
                         Promise.all(this.promises.maps)])
                .then((values)=>{
                    console.log(values);
                    mapView.setup(values);
                });
             
        },
        setRezizeWatcher(){
            var timeOut = null;
            window.onresize = function(){
                if (timeOut != null){
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function(){
                    console.log('resized');
                    mapView.checkMapViewAspect();
                    mapView.resizeMaps();
                }, 200);
            };
        },
        returnACSData(url, rollup, coerce){
            return new Promise((resolve,reject) => {
                d3.json(url + censusKey, (error,data) => { 
                    if (error) {
                        console.log(error);
                        reject(error);
                    }
                    resolve(this.returnKeyValues(data, rollup, coerce));
                });
            });
        },
        returnData(url, rollup, coerce){
            return new Promise((resolve,reject) => {
                d3.json(url, (error,data) => { 
                    if (error) {
                        console.log(error);
                        reject(error);
                    }
                    resolve(data);
                });
            });
        },
        returnKeyValues(values, rollup, coerce){ // coerce = BOOL coerce to num or not 
            console.log(values);
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

        function _getState(property){
            return ( state[property] !== undefined ) ? state[property][0] : undefined;
        }

        function _getPreviousState(property){
            return ( state[property] !== undefined && state[property][1] !== undefined ) ? state[property][1] : undefined;
        }

        function _setState(key,value) { 

            if ( state[key] === undefined) { // ie first time state property is being defined
                state[key] = [value];
                PubSub.publish(key, value);
                _logState();
            } else { // not the first time the property is being defined
            //If it's a string or array and values are the same, stateChanged=False+
                var stateChanged = true;
                if (typeof value === 'string') {
                    stateChanged = (state[key][0] !== value)
                } else if (Array.isArray(value) && Array.isArray(state[key][0])) {
                    stateChanged = !value.compare(state[key][0])
                } else {
                    stateChanged = true; //assume it's changed if we can't verify
                }              
                //Only publish if we've changed state
                if ( stateChanged ) { 
                    state[key].unshift(value);
                    PubSub.publish(key, value);
                    _logState();
                    if ( state[key].length > 2 ) {
                        state[key].length = 2;
                    }
                }
            }
        }

        return {
            logState: _logState,
            getState: _getState,
            getPreviousState: _getPreviousState,
            setState: _setState
        }
    }

    function SubscribeModule() {
        var subscriptions = {};

        function logSubs() {
            console.log(subscriptions);
        }

        function createToken(topic, fnRef){
            var functionHash = 'f' + fnRef.toString().hashCode();
            var str = topic + fnRef;
            var token = 'sub' + str.hashCode();
            return {
                token: token,
                fn: functionHash
            }
        }

        function setSubs(subsArray) { // subsArray is array of topic/function pair arrays
            subsArray.forEach(function(pair){
                var topic = pair[0],
                    fnRef = pair[1],
                    tokenObj = createToken(topic,fnRef);
                
                if ( subscriptions[tokenObj.fn] === undefined ) {
                    subscriptions[tokenObj.fn] = {};
                }
                if ( subscriptions[tokenObj['fn']][topic] === undefined ) {
                    subscriptions[tokenObj['fn']][topic] = PubSub.subscribe(topic,fnRef);  
                } else {
                    throw 'Subscription token is already in use.';
                }
            });
        }

        function cancelSub(topic,fnRef) { // for canceling single subscription
            var tokenObj = createToken(topic,fnRef);
            if ( subscriptions[tokenObj.fn] !== undefined && subscriptions[tokenObj['fn']][topic] !== undefined ) {
                PubSub.unsubscribe( subscriptions[tokenObj['fn']][topic] );
                delete subscriptions[tokenObj['fn']][topic];
                if ( Object.keys(subscriptions[tokenObj['fn']]).length === 0 ) {
                    delete subscriptions[tokenObj['fn']];
                }
            } else {
                throw 'Subscription does not exist.';
            }
        }

        function cancelFunction(fnRef) {
            var tokenObj = createToken('',fnRef);
            PubSub.unsubscribe(fnRef);
            delete subscriptions[tokenObj['fn']];
        }

        return {
            logSubs:logSubs,
            setSubs:setSubs,
            cancelSub:cancelSub,
            cancelFunction: cancelFunction
        };

     }

    // ALIASES

    var setState = controller.controlState.setState,
        getState = controller.controlState.getState,
        getPreviousState = controller.controlState.getPreviousState;

    var setSubs = controller.controlSubs.setSubs,
        logSubs = controller.controlSubs.logSubs,
        cancelSub = controller.controlSubs.cancelSub,
        cancelFunction = controller.controlSubs.cancelFunction;

    // HELPER String.hashCode()

    String.prototype.hashCode = function() {
      var hash = 0, i, chr, len;
      if (this.length === 0) return hash;
      for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };

    controller.init();   

    

}()); // end IIFE


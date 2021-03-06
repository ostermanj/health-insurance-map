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
            mbHelper.promises[sourceOptions.name] = new Promise((resolve) => { // TO DO: figure out reject?
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
                        new Promise((resolve) => { // TO DO: figure out reject?
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
    };

    const mapView = {
        maps: [],
        init(){
            setSubs([
                ['activeStateFP', mapView.zoomInMapHandler],
                ['activeMap', mapView.zoomInMapHandler],
                ['activeStateFP', mapView.updateLegend],
                ['legendScale', mapView.changeLegendScale],
                ['holdCounty', mapView.holdCounty]
            ]);
            this.wrapper = document.getElementById('map-view-wrapper');
            this.el = document.getElementById('map-view');
            this.checkMapViewAspect();
        },
        holdCounty(msg,data){
            if ( data ){
                mapView.maps.forEach(map => {
                    map.off('mousemove', 'counties', mapView.countyMouseMove);
                    map.off('mouseleave', 'counties', mapView.countyMouseLeave);
                    map.off('mouseup', 'counties', mapView.countyMouseUp);
                });
                d3.select('#map-view-wrapper').on('mouseup', releaseClick);
                mapView.showMessage('&nbsp;Right click again to release selection&nbsp;');
            } else {
                console.log('release county');
                mapView.showMessage('');
                mapView.countyMouseLeave();
                mapView.maps.forEach(map => {
                    map.on('mousemove', 'counties', mapView.countyMouseMove);
                    map.on('mouseleave', 'counties', mapView.countyMouseLeave);
                    map.on('mouseup', 'counties', mapView.countyMouseUp);
                });
                d3.select('#map-view-wrapper').on('mouseup', null);
            }
            function releaseClick(){
                console.log(d3.event);
                if (d3.event.button === 2 ) { // ie is a right click
                    setState('holdCounty', false);
                }
            }
        },
        showMessage(message){
            sidebarView.fadeInHTML.call(d3.select('#message'), function(){
                return message;
            });
        },
        initializeMap(options, i, resolve){
            var {container,style,bounds} = options;
            var maxBounds;
            
            if ( typeof bounds === 'object' ){ // actually an array but typeof <array> === object
                maxBounds = bounds;
            } else if ( typeof bounds === 'string' ){
                maxBounds = mapBounds[bounds]; 
            } else {
                throw 'bounds not corrct type: should be lng/lat array or string key to mapBounds object';
            }
            var mbOptions = {container,style,maxBounds}; // ES6 shorthand

            this.maps[i] = new mapboxgl.Map(mbOptions);
            this.maps[i].originalOptions = options;
            this.maps[i].index = i;
            this.maps[i].on('load',() => {
                resolve(true);
            });   
        },
        resizeMaps(){
            this.maps.forEach(function(each){
                
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
                    this.legendRange.push(value);
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
                this.legend = d3.select('#legend');

                var legend = this.legend;

                legend   
                    .append('h2')
                    .attr('class','legend-title')
                    .html('Percentage without health insurance');

                var legendDivs = legend
                    .selectAll('legendDiv')
                    .data(this.legendRange.slice(0,-1))
                    .enter().append('div')
                    .attr('class', 'flex end');

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
            }
        },
        updateLegend(msg,data){
            if ( msg === 'activeStateFP' && data !== null && data !== 'null' ) {
                setState('legendScale', 'county');
            } else {
                setState('legendScale', 'state');
            }
        },
        changeLegendScale(msg,data){
            d3.select('#legend').node().parentNode.classList.remove('load-finished');
            var scale = data === 'county' ? mapView.scaleCounty : mapView.scaleState;
            sidebarView.fadeInHTML.call(mapView.legendSpans, function(d,i){
                return '<span class="legend-item-min">' + d3.format(',.1f')(scale.invertExtent(d)[0]) + '</span>&ndash;<span class="legend-item-max">' + d3.format(',.1f')(scale.invertExtent(mapView.mapRange[i * 2 + 1])[1]) + '</span>';
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
                          },
                          {
                              "id": "counties-hover",
                              "type": "line",
                              "source": "counties",
                              "source-layer": "original",
                              "paint": {
                                    "line-color": '#584dfe',
                                    "line-width": 4,
                                    "line-blur": 2
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
                map.on('mouseleave', 'states-join', () => {
                    map.setFilter("states-join-hover", ["==", "STATEFP", ""]);  
                });
                map.on('click', 'states-join', (e) => {
                    console.log('click');
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
                    map.setPaintProperty(each.id, 'line-opacity', 0.2 );
                });
            }
        },
        zoomInMapHandler(msg,data){ // msg = 'activeStateFP'; data = activeStateFP OR 'activeMap'; activeMap
            console.log(msg,data); 
            setState('holdCounty', false); 
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
                map.setFilter("counties-hover", ['==', "FIPS", ""]);
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
                var wrapperPadding = map.index === 0 ? 30 : 0;
                map.fitBounds(stateBounds[data], {
                    padding: wrapperPadding
                });
                map.setFilter("counties", ["all",
                  [">", "FIPS", getCountyRange(data).min],
                  ["<=", "FIPS", getCountyRange(data).max]
                ]);
                
                map.on('mousemove', 'counties', mapView.countyMouseMove);
                map.on('mouseleave', 'counties', mapView.countyMouseLeave);
                map.on('mouseup', 'counties', mapView.countyMouseUp);

                if ( map.getZoom() < 2 ) {
                  map.setZoom(2);
                }                    
            }
            function getCountyRange(statefp) {
                if (statefp[0] === '0'){
                    return { // county FIPS less than 10,000 start with zeroes and are stored as strings in source data
                      min: '0' + ( +statefp.slice(0,2) * 1000 ),
                      max: '0' + ( +statefp.slice(0,2) * 1000 + 999 )
                    };
                } else {
                    return { // others are stored as numbers
                      min:  +statefp.slice(0,2) * 1000,
                      max:  +statefp.slice(0,2) * 1000 + 999
                    };
                }
            }
        },
        countyMouseUp(e){
            if ( e.originalEvent.button === 2 ){
                setState('holdCounty', true);
            }
        },
        countyMouseMove(e){
            mapView.mousemoveFilter(e, mapView.highlightCounty);
        },
        mousemoveFilter(e, fn){
            if ( !mapView.mousemoveActive || mapView.mousemoveActive !== e.features[0].id ){
                mapView.mousemoveActive = e.features[0].id;
                fn(e);
            }
        },
        highlightCounty(e) {
            var map = mapView.maps[getState('activeMap')];
            map.setFilter("counties-hover", ["==", "FIPS", e.features[0].properties.FIPS]);
            mapView.showMessage('&nbsp;Right click to hold selection&nbsp;');
            Promise.all([controller.promises.dictionary, controller.promises.countyDetails]).then((values) =>{
              sidebarView.handleCharts(values, e.features[0].properties.FIPS );
            });  
        },
        countyMouseLeave(){
            mapView.maps[getState('activeMap')].setFilter("counties-hover", ["==", "FIPS", ""]);
            mapView.showMessage('');
            mapView.mousemoveActive = null;
            sidebarView.getStateDetails('activeStateFP', getState('activeStateFP'));
        }
    };

    var sidebarView = {
        fadeInHTML(callback){
            
            this.transition()
                .duration(sidebarView.duration / 2)
                .ease(d3.easeCubicOut)
                .style('opacity', 0)
                .on('end', function(d,i){
                    var $this = d3.select(this);
                    $this.html(function(){
                        return callback(d,i);
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
            d3.select('#state-selector').node().onchange = function(){
                var matchingMap = mapView.maps.find((map) => {
                    return map.originalOptions.bounds === this.value;
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
        getStateDetails(msg,data){ // when a state is selected, msg = 'activeStateFP'; data = stringified id number
                                   // when state is deselected (zoom back out),  msg = 'activeStateFP'; data = null
                                   // when charts are first initialized to US, no msg, no data
            console.log(msg, data);
          /*  if ( msg === 'activeStateFP' && !data ){
                return;
            }*/
            d3.select('#sidebar-bottom').classed('load-finished', false);
            if ( controller.promises.dictionary === undefined ){
                controller.promises.dictionary = controller.returnData('data/data-dictionary.json', null, false);
            }
            if ( controller.promises.countyDetails === undefined) {
                controller.promises.countyDetails = controller.returnACSData(
                    'https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0095E,DP03_0095PE,DP03_0096E,DP03_0096PE,DP03_0097E,DP03_0097PE,DP03_0098E,DP03_0098PE,DP03_0099E,DP03_0099PE,DP03_0100E,DP03_0100PE,DP03_0101E,DP03_0101PE,DP03_0102E,DP03_0102PE,DP03_0103E,DP03_0103PE,DP03_0104E,DP03_0104PE,DP03_0105E,DP03_0105PE,DP03_0106E,DP03_0106PE,DP03_0107E,DP03_0107PE,DP03_0108E,DP03_0108PE,DP03_0109E,DP03_0109PE,DP03_0110E,DP03_0110PE,DP03_0111E,DP03_0111PE,DP03_0112E,DP03_0112PE,DP03_0113E,DP03_0113PE,DP03_0114E,DP03_0114PE,DP03_0115E,DP03_0115PE,DP03_0116E,DP03_0116PE,DP03_0117E,DP03_0117PE,DP03_0118E,DP03_0118PE,NAME&for=county:*&key=',
                    function(d){ return d.state + d.county;} 
                );   
            }
            if ( data && data !== 'null' ) { // ie is a activeStateFP
                if ( controller.promises.stateDetails === undefined) {
                    controller.promises.stateDetails = controller.returnACSData(
                        'https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0095E,DP03_0095PE,DP03_0096E,DP03_0096PE,DP03_0097E,DP03_0097PE,DP03_0098E,DP03_0098PE,DP03_0099E,DP03_0099PE,DP03_0100E,DP03_0100PE,DP03_0101E,DP03_0101PE,DP03_0102E,DP03_0102PE,DP03_0103E,DP03_0103PE,DP03_0104E,DP03_0104PE,DP03_0105E,DP03_0105PE,DP03_0106E,DP03_0106PE,DP03_0107E,DP03_0107PE,DP03_0108E,DP03_0108PE,DP03_0109E,DP03_0109PE,DP03_0110E,DP03_0110PE,DP03_0111E,DP03_0111PE,DP03_0112E,DP03_0112PE,DP03_0113E,DP03_0113PE,DP03_0114E,DP03_0114PE,DP03_0115E,DP03_0115PE,DP03_0116E,DP03_0116PE,DP03_0117E,DP03_0117PE,DP03_0118E,DP03_0118PE,NAME&for=state:*&key=',
                        'state' // returns data nested by state
                    );   
                }
                Promise.all([controller.promises.dictionary, controller.promises.stateDetails, controller.promises.countyDetails]).then((values) =>{
                  sidebarView.handleCharts(values);
                });
            } else { // ie is initial country-level load
               Promise.all([controller.promises.dictionary, controller.promises.USDetails, controller.promises.countyDetails]).then((values) =>{
                  sidebarView.handleCharts(values, 'US');
                }); 
            }
        },
        handleCharts(values, county){ // values[0] is the dictionary;
                                      // [1] is an object of arrays keyed by state ID (ie '08') OR single object of US data
                                      // [2] is county-level details used to set bounds 
            var dictionary = values[0],
                
                countyDetails = values[2] ? values[2] : null,
                data;
                
            if ( !county ){
                if ( values[1][getState('activeStateFP')] === undefined ){ // ie dropdown back to select state

                }
                data = values[1][getState('activeStateFP')][0];
                clearCountyLabel();
            } else if ( county === 'US' ) {
                data = values[1][0];
            } else {
                data = values[1][county][0];
                updateCountyLabel();
            }
            
            
            
            if ( !this.chartsAreCreated ){
                
                
                // create array of variable names with type 'without'
                var noInsuranceVars = dictionary.filter(x => x.type === 'without' && x.variable.indexOf('PE') !== -1).map(x => x.variable);
                // create array of variable names with type 'with'
                var withInsuranceVars = dictionary.filter(x => x.type === 'with' && x.variable.indexOf('PE') !== -1).map(x => x.variable);
                var insuranceValues = [[],[]];
                Object.keys(countyDetails).forEach(key => {
                    noInsuranceVars.map(each => {
                        insuranceValues[0].push(+countyDetails[key][0][each]);
                    });
                    withInsuranceVars.map(each => {
                        insuranceValues[1].push(+countyDetails[key][0][each]);
                    });
                });
                
                sidebarView.maxWithout = d3.max(insuranceValues[0]);
                sidebarView.maxWith =    d3.max(insuranceValues[1]);
                createCharts(sidebarView.maxWithout, sidebarView.maxWith);
                this.chartsAreCreated = true;
                createChartLegend();
                updateCharts();
            } else { // end if ( !this.chartsAreCreated )
                
                updateCharts();
            }
            function updateCountyLabel(){
                sidebarView.countyLabel
                    .datum(data);
                sidebarView.fadeInHTML.call(sidebarView.countyLabel, function(d){
                    return d.NAME !== 'United States' ? d.NAME.replace(/,.*/,'') : '&nbsp;';
                });
            }
            function clearCountyLabel(){
                sidebarView.fadeInHTML.call(sidebarView.countyLabel, function(){
                    return '&nbsp;';
                });
            }
            function updateCharts(){
             /*   if ( sidebarView.isInTransition ){
                    sidebarView.isOnHold = true;
                } else {*/
                    if ( county === 'US' ){
                        updateCountyLabel();
                    }
                    sidebarView.nested.forEach(function(each){
                        sidebarView[each.key + '-without']
                            .interrupt()
                            .on('mouseover', function(d){
                                sidebarView.showData(d, data[d.variable.replace('E','PE')], data[d.variable], 'left');
                            })
                            .transition(sidebarView.transition)
                            /*.on('start', function(){
                                if ( i === 0 ){
                                    sidebarView.isInTransition = true;
                                }
                            })*/
                            .attr('transform', d => `translate(${sidebarView.scale(sidebarView.maxWithout) - sidebarView.scale(data[d.variable.replace('E','PE')]) }, 0)`)
                            .attr('width', d => { 
                                return sidebarView.scale(data[d.variable.replace('E','PE')]);
                            });

                        if ( each.values.find(x => x.type === 'private') !== undefined ) {
                            sidebarView[each.key + '-pub']
                                .interrupt()
                                .on('mouseover', function(d){
                                    sidebarView.showData(d, data[d.variable.replace('E','PE')], data[d.variable]);
                                })
                                .transition(sidebarView.transition)
                                .attr('transform', function(){
                                        var publicValue =  data[each.values.find(x => x.type === 'public').variable.replace('E','PE')];
                                        var withValue =  data[each.values.find(x => x.type === 'with').variable.replace('E','PE')];
                                        return `translate(${sidebarView.scale(sidebarView.maxWithout) + sidebarView.scale(withValue - publicValue)}, 0)`;
                                    })
                                .attr('width', d => sidebarView.scale(data[d.variable.replace('E','PE')]));
                            sidebarView[each.key + '-priv']
                                .interrupt()
                                .on('mouseover', function(d){
                                    sidebarView.showData(d, data[d.variable.replace('E','PE')], data[d.variable]);
                                })
                                .transition(sidebarView.transition)
                                .attr('width', d => sidebarView.scale(data[d.variable.replace('E','PE')]) );
                        } else {
                            sidebarView[each.key + '-unspecified']
                                .interrupt()
                                .on('mouseover', function(d){
                                    sidebarView.showData({label:'With public or private insurance'}, 100 - data[d.variable.replace('E','PE')]);
                                })
                                .transition(sidebarView.transition)
                                .attr('width', d => sidebarView.scale(100 - data[d.variable.replace('E','PE')]) );
                               /* .on('end', function(){
                                    if ( ++i === array.length ) {
                                        sidebarView.isInTransition = false;
                                        if ( sidebarView.isOnHold ) {
                                            sidebarView.isOnHold = false;
                                            setTimeout(updateCharts,100);
                                        }
                                    }
                                });*/
                            }
                    });
                    d3.select('#sidebar-bottom').classed('load-finished', true);
               // }
                
            }            
            function createCharts(){

                sidebarView.definitionsLeft = d3.select('#sidebar-definitions #left');
                sidebarView.definitionsRight = d3.select('#sidebar-definitions #right');
                sidebarView.countyLabel = d3.select('#county-label').datum(data);
                    
                
                var rangeExtent = sidebarView.maxWithout + sidebarView.maxWith;
                var categories = dictionary.filter(x => x.type === 'category' && x.variable.indexOf('PE') === -1 );
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
                        
                        document.getElementById(d.group).appendChild(this);
                    }
                });



                var series = dictionary.filter(x => x.type !== 'category' && x.variable.indexOf('PE') === -1 );
                
                sidebarView.nested = d3.nest()
                    .key(function(d){
                        return d.group;
                    })
                    .entries(series);
                    
                sidebarView.nested.forEach(function(each, i, array){
                    
                    
                    
                    var heightPercent = 12, // as percentage of width
                        viewBox = i < array.length - 1 ? '0 0 100 ' + heightPercent : '0 0 100 ' + ( heightPercent + 10 ),
                        margin = {top:6,right:0,bottom:2,left:0}, // in percentages of the viewbox width
                        width = 100 - margin.left - margin.right,
                        
                        rectHeight = 4;

                    sidebarView.scale = d3.scaleLinear().domain([0,rangeExtent]).range([0,width]);
                   
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
                        .text(dictionary.find(x => x.variable === each.values.find(x => x.type === 'without').group).label)
                        .attr('font-size', 5.5)
                        .attr('text-anchor', 'middle')
                        .attr('x', sidebarView.scale(sidebarView.maxWithout))
                        .attr('transform', 'translate(0,-2)')
                        .classed('category-label', true)
                        .on('mouseover', sidebarView.showDefinition)
                        .on('mouseleave', sidebarView.hideDefinition);

                    sidebarView[each.key + '-without']  = g.selectAll('without')
                        .data([each.values.find(x => x.type === 'without')])
                        .enter().append('rect')
                        .classed('without',true)
                        .attr('transform', () => `translate(${sidebarView.scale(sidebarView.maxWithout)}, 0)`)
                        .attr('height',rectHeight)
                        .on('mouseleave', sidebarView.hideData);

                    if ( each.values.find(x => x.type === 'private') !== undefined ) {
                        


                        sidebarView[each.key + '-priv'] = g.selectAll('private')
                                .data([each.values.find(x => x.type === 'private')])
                                .enter().append('rect')
                                .classed('private',true)
                                .attr('transform', () => `translate(${sidebarView.scale(sidebarView.maxWithout)}, 0)`)
                                .attr('height',rectHeight)
                                .on('mouseleave', sidebarView.hideData);
                                
                                
                        sidebarView[each.key + '-pub'] = g.selectAll('public')
                                .data([each.values.find(x => x.type === 'public')])
                                .enter().append('rect')
                                .classed('public',true)
                                .attr('height',rectHeight)
                                .on('mouseleave', sidebarView.hideData);

                   
                    } else {
                        sidebarView[each.key + '-unspecified'] = g.selectAll('unspecified')
                                .data([each.values.find(x => x.type === 'without')]) // using `without` datum but invert below with 100 - value
                                .enter().append('rect')
                                .classed('unspecified',true)
                                .attr('transform', () => `translate(${sidebarView.scale(sidebarView.maxWithout)}, 0)`)
                                .attr('height',rectHeight)
                                .attr('fill',"url(#hash4_4)")
                                .on('mouseleave', sidebarView.hideData);
                    }

                    if ( i === array.length - 1 ) {
                        var increment = 25;
                        if ( 100 % increment !== 0) {
                            throw 'Increment must be factor of 100';
                        }

                        var xAxis = g.append('g')
                            .classed('x-axis', true)
                            .attr('transform', 'translate(0,11)');

                        xAxis.append('text')
                            .attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout + sidebarView.maxWith * 0.5) + ', 5)')
                            .attr('font-size', '5')
                            .attr('text-anchor', 'middle')
                            .text('with insurance');

                        xAxis.append('text')
                            .attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout * 0.5) + ', 5)')
                            .attr('font-size', '5')
                            .attr('text-anchor', 'middle')
                            .text('without insurance');

                        for ( let i = 0; i < (100 / increment); i++) {
                            xAxis.append('text') // rightward ticks
                                .attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout + i * increment) + ', 0)')
                                .attr('font-size', '5')
                                .attr('text-anchor', 'middle')
                                .text(function() { return i === 0 ? i * increment + '%' : i * increment; });

                            if ( i > 0 && i * (100 / increment) < sidebarView.maxWithout ) { // leftward ticks
                                xAxis.append('text') // rightward ticks
                                    .attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout - i * increment) + ', 0)')
                                    .attr('font-size', '5')
                                    .attr('text-anchor', 'middle')
                                    .text(i * increment);
                            }
                        }
                    }
                }); // end nested.forEach(...)
            } // end createCharts()
            function createChartLegend(){
                var chartLegendSVG = d3.select('#sidebar-charts')
                    .append('svg')
                    .classed('legend',true)
                    .attr('width', '292px')
                    .attr('height', '44px');
                    

                var pattern = chartLegendSVG.append("defs")
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

                var chartLegendContent = chartLegendSVG.append('g')
                    .attr('transform','translate(-114,0)');

                var chartLegendItems = chartLegendContent.selectAll('legend-item')
                    .data([
                            {
                                text: 'None',
                                class: 'without' 
                            },{
                                text: 'Private',
                                class: 'private'
                            },{
                                text: 'Public',
                                class: 'public'
                            }, {
                                text: 'Not specified',
                                class: 'unspecified',
                                fill: 'url(#hash4_4)'
                            }
                        ])
                    .enter().append('g')
                    .attr('transform', (d,i) => `translate(${ 70 * i + 146 }, 10)`);

                    chartLegendItems.append('rect')
                        .attr('class', d => d.class)
                        .attr('width', 15)
                        .attr('height', 15)
                        .attr('fill', d => {
                            if ( d.fill !== undefined ){
                                return d.fill;
                            }
                        });

                    chartLegendItems.append('text')
                        .attr('transform', 'translate(7,30)')
                        .attr('text-anchor','middle')
                        .text(d => d.text);


            }
        }, // end sidebar.handleCharts()
        showDefinition(d){
            sidebarView.definitionsLeft
                .datum(d);

            
            sidebarView.fadeInHTML.call(sidebarView.definitionsLeft, function(d){
                return d.description ? `<p class="definition-name">${d.name} <span class="ACS-variable">(${d.variable})</span></p><p class="definition-description">${d.description}</p>` : `<p class="definition-name">${d.name}</p> <span class="ACS-variable">(${d.variable})</span>`;
            });
        },
        hideDefinition(){
            sidebarView.fadeInHTML.call(sidebarView.definitionsLeft, function(){
                return '';
            });
        },
        showData(d,percent, value, leftOrRight){
            
            var defDiv = leftOrRight ? sidebarView.definitionsLeft : sidebarView.definitionsRight;
            defDiv.datum(d);
            
            sidebarView.fadeInHTML.call(defDiv, function(d){
                return value ? `<p>${d.label}:<br />${percent}% (${d3.format(',')(value)} people)</p>` : `<p>${d.label}:<br />${percent}%</p>` ;
            });
        },
        hideData(){
                sidebarView.fadeInHTML.call(sidebarView.definitionsLeft, function(){
                    return '';
                });
                sidebarView.fadeInHTML.call(sidebarView.definitionsRight, function(){
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
                this.promises.maps[i] = new Promise((resolve) => { // TO DO: figure out reject?
                    mapView.initializeMap(options, i, resolve);
                });
            });
            this.promises.stateData = this.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=state:*&key=', null, false);
            this.promises.countyData = this.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=county:*&key=', null, false);
            this.promises.USDetails = this.returnACSData(
                'https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0095E,DP03_0095PE,DP03_0096E,DP03_0096PE,DP03_0097E,DP03_0097PE,DP03_0098E,DP03_0098PE,DP03_0099E,DP03_0099PE,DP03_0100E,DP03_0100PE,DP03_0101E,DP03_0101PE,DP03_0102E,DP03_0102PE,DP03_0103E,DP03_0103PE,DP03_0104E,DP03_0104PE,DP03_0105E,DP03_0105PE,DP03_0106E,DP03_0106PE,DP03_0107E,DP03_0107PE,DP03_0108E,DP03_0108PE,DP03_0109E,DP03_0109PE,DP03_0110E,DP03_0110PE,DP03_0111E,DP03_0111PE,DP03_0112E,DP03_0112PE,DP03_0113E,DP03_0113PE,DP03_0114E,DP03_0114PE,DP03_0115E,DP03_0115PE,DP03_0116E,DP03_0116PE,DP03_0117E,DP03_0117PE,DP03_0118E,DP03_0118PE,NAME&for=us:*&key=',
                null,
                false
            );   
            Promise.all([this.promises.stateData]).then((values) => {
                sidebarView.initializeDropdown(values[0]);
            });
            Promise.all([this.promises.stateData,
                         this.promises.countyData,
                         Promise.all(this.promises.maps)])
                .then((values)=>{
                    
                    mapView.setup(values);
                });
            
            sidebarView.getStateDetails(); // inititiates the charts
             
        },
        setRezizeWatcher(){
            var timeOut = null;
            window.onresize = function(){
                if (timeOut != null){
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function(){
                    
                    mapView.checkMapViewAspect();
                    mapView.resizeMaps();
                }, 200);
            };
        },
        returnACSData(url, nestBy, coerce){
            
            return new Promise((resolve,reject) => {
                d3.json(url + censusKey, (error,data) => { 
                    if (error) {
                        
                        reject(error);
                    }
                    resolve(this.returnKeyValues(data, nestBy, coerce));
                });
            });
        },
        returnData(url){
            return new Promise((resolve,reject) => {
                d3.json(url, (error,data) => { 
                    if (error) {
                        
                        reject(error);
                    }
                    resolve(data);
                });
            });
        },
        returnKeyValues(values, nestBy, coerce){ // coerce = BOOL coerce to num or not 
            var unnested = values.slice(1).map(row => row.reduce(function(acc, cur, i) { // 1. params: total, currentValue, currentIndex[, arr]
              acc[values[0][i]] = coerce === true ? isNaN(+cur) ? cur : +cur : cur; // 3. // acc is an object , key is corresponding value from row 0, value is current value of array
                return acc;
            }, {}));
            console.log(unnested);
            if ( !nestBy ){
                return unnested;
            } else if ( typeof nestBy === 'string' ) { // ie only one nestBy field
                console.log('string', nestBy);
                return d3.nest()
                    .key(function(d){
                        return d[nestBy];
                    })
                    .object(unnested);
            } else if ( typeof nestBy === 'function' ){
                console.log('function', nestBy);
                return d3.nest()
                    .key(function(d){
                        return nestBy(d);
                    })
                    .object(unnested);
            } else {
                // TO DO: HANDLER FOR MULTIPLE NESTING
            }
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
                    stateChanged = (state[key][0] !== value);
                } else if (Array.isArray(value) && Array.isArray(state[key][0])) {
                    stateChanged = !value.compare(state[key][0]);
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
        };
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
            };
        }

        function setSubs(subsArray) { // subsArray is array of topic/function pair arrays
            subsArray.forEach(function(pair){
                var topic = pair[0],
                    fnRef = pair[1],
                    tokenObj = createToken(topic,fnRef);
                
                if ( subscriptions[tokenObj.fn] === undefined ) {
                    subscriptions[tokenObj.fn] = {};
                }
                if ( subscriptions[tokenObj.fn][topic] === undefined ) {
                    subscriptions[tokenObj.fn][topic] = PubSub.subscribe(topic,fnRef);  
                } else {
                    throw 'Subscription token is already in use.';
                }
            });
        }

        function cancelSub(topic,fnRef) { // for canceling single subscription
            var tokenObj = createToken(topic,fnRef);
            if ( subscriptions[tokenObj.fn] !== undefined && subscriptions[tokenObj.fn][topic] !== undefined ) {
                PubSub.unsubscribe( subscriptions[tokenObj.fn][topic] );
                delete subscriptions[tokenObj.fn][topic];
                if ( Object.keys(subscriptions[tokenObj.fn]).length === 0 ) {
                    delete subscriptions[tokenObj.fn];
                }
            } else {
                throw 'Subscription does not exist.';
            }
        }

        function cancelFunction(fnRef) {
            var tokenObj = createToken('',fnRef);
            PubSub.unsubscribe(fnRef);
            delete subscriptions[tokenObj.fn];
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
      //  logState = controller.controlState.logState,
        getPreviousState = controller.controlState.getPreviousState;

    var setSubs = controller.controlSubs.setSubs;//,
      //  logSubs = controller.controlSubs.logSubs,
      //  cancelSub = controller.controlSubs.cancelSub,
      //  cancelFunction = controller.controlSubs.cancelFunction;

    // HELPER String.hashCode()

    String.prototype.hashCode = function() {
      var hash = 0, i, chr, len;
      if (this.length === 0) {return hash;}
      for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };

    controller.init();   

    

}()); // end IIFE


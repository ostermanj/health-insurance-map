(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    "use strict";

    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N0ZXJtYW5qIiwiYSI6ImNpdnU5dHVndjA2eDYyb3A3Nng1cGJ3ZXoifQ.Xo_k-kzGfYX_Yo_RDcHDBg';
    var stateBounds = { 10: [[-75.794677734375, 38.45358870894137], [-75.05859375, 39.84228602074339]], 11: [[-77.11990356445312, 38.792091771584694], [-76.9097900390625, 38.99570671505043]], 12: [[-87.637939453125, 24.51713945052515], [-80.035400390625, 31.00586290462421]], 13: [[-85.60546875, 30.363396239603716], [-80.848388671875, 35.00300339527672]], 15: [[-161, 18.48917], [-153, 22.525]], 16: [[-117.24609375, 41.992160233376296], [-111.0498046875, 49.00184391797853]], 17: [[-91.51611328125, 36.97622678464096], [-87.506103515625, 42.51260171573665]], 18: [[-88.099365234375, 37.779398571318765], [-84.79248046875, 41.76311744700587]], 19: [[-96.646728515625, 40.38002840251184], [-90.142822265625, 43.5007524356904]], 20: [[-102.052001953125, 36.993778388725175], [-94.59228515625, 40.01078714046551]], 21: [[-89.571533203125, 36.50080531760479], [-81.968994140625, 39.15562239342324]], 22: [[-94.053955078125, 28.93124697186731], [-88.824462890625, 33.027087580028734]], 23: [[-71.08154296875, 43.060861371343265], [-66.95068359375, 47.46523622438363]], 24: [[-79.4970703125, 37.918201119766636], [-75.05859375, 39.7240885773337]], 25: [[-73.509521484375, 41.244772343082076], [-69.93896484375, 42.89206418807336]], 27: [[-97.239990234375, 43.5007524356904], [-89.49462890625, 49.38952445158216]], 28: [[-91.658935546875, 30.18312184219552], [-88.099365234375, 35.00300339527672]], 29: [[-95.77880859375, 35.99578538642032], [-89.09912109375, 40.61395244116659]], 30: [[-116.0595703125, 44.36313311380772], [-104.04052734375, 49.00184391797853]], 31: [[-104.0625, 40.00237193587648], [-95.3173828125, 43.00464712779444]], 32: [[-120.0146484375, 35.00300339527672], [-114.049072265625, 42.008489015723995]], 33: [[-72.564697265625, 42.69858589169843], [-70.7080078125, 45.305802599435765]], 34: [[-75.56396484375, 38.93377552819723], [-73.89404296875, 41.36031866306709]], 35: [[-109.05029296875, 31.33487103395059], [-103.0078125, 37.00255267215955]], 36: [[-79.771728515625, 40.497092372695676], [-71.861572265625, 45.01918507438177]], 37: [[-84.3310546875, 33.852169701407405], [-75.465087890625, 36.58906837139911]], 38: [[-104.051513671875, 45.93587062119053], [-96.558837890625, 49.00184391797853]], 39: [[-84.825439453125, 38.41055825094608], [-80.52978515625, 41.983994270935625]], 40: [[-103.0078125, 33.62376800118811], [-94.4384765625, 37.00255267215955]], 41: [[-124.56298828125, 42.00032514831622], [-116.466064453125, 46.27103747280262]], 42: [[-80.52978515625, 39.7240885773337], [-74.696044921875, 42.2773087742371]], 44: [[-71.87255859375, 41.153842357114485], [-71.12548828125, 42.02481360781778]], 45: [[-83.353271484375, 32.03602003973755], [-78.541259765625, 35.21869749632886]], 46: [[-104.0625, 42.488301979602284], [-96.43798828125, 45.951149686691394]], 47: [[-90.318603515625, 34.985003130171066], [-81.650390625, 36.68604127658193]], 48: [[-106.6552734375, 25.83944940206318], [-93.526611328125, 36.50080531760479]], 49: [[-114.06005859375, 37.00255267215955], [-109.05029296875, 42.008489015723995]], 50: [[-73.443603515625, 42.73087427928485], [-71.466064453125, 45.01918507438177]], 51: [[-83.682861328125, 36.544949441483226], [-75.245361328125, 39.47012512235818]], 53: [[-124.73876953125, 45.544831492424635], [-116.91650390625, 49.009050809382046]], 54: [[-82.650146484375, 37.204081555898526], [-77.728271484375, 40.63896734381723]], 55: [[-92.889404296875, 42.49640294093706], [-86.81396484375, 47.07760411715964]], 56: [[-111.060791015625, 41.0047754222295], [-104.0625, 45.01141864227728]], 72: [[-67.950439453125, 17.88465917954281], [-65.225830078125, 18.521283325496285]], "06": [[-124.4091796875, 32.537551746769], [-114.136962890625, 42.01665183556824]], "04": [[-114.818115234375, 31.33487103395059], [-109.05029296875, 37.00255267215955]], "08": [[-109.061279296875, 36.993778388725175], [-102.052001953125, 41.0047754222295]], "05": [[-94.625244140625, 33.008663494575586], [-89.6484375, 36.50080531760479]], "01": [[-88.48388671875, 30.23059456493219], [-84.90234375, 35.012002043160706]], "09": [[-73.729248046875, 40.98819156349393], [-71.795654296875, 42.05745022024681]], "02": [[-190.539, 53.135], [-116, 71.139]], 26: [[-90.511, 41.683], [-82.433, 48.25]] };
    var censusKey = '3a82a0bf1219fb2fb0962763bb1582c5951f8566',
        mapBounds = {
        lower48: [[-125.94823224526017, 24], // 60.516 deg wide by 26.908 deg high
        [-65.43255594715713, 50.05360024146327]],
        '02': stateBounds["02"],
        '15': stateBounds[15]
    };

    var mapColorBuckets = 10;

    var mapOptions = [{
        container: 'map-0',
        style: 'mapbox://styles/mapbox/light-v9',
        bounds: [[-125.94823224526017, 24], // 60.516 deg wide by 26.908 deg high
        [-65.43255594715713, 50.05360024146327]]
    }, {
        container: 'map-1',
        style: 'mapbox://styles/mapbox/light-v9',
        bounds: '02'
    }, {
        container: 'map-2',
        style: 'mapbox://styles/mapbox/light-v9',
        bounds: '15'
    }];

    var mbHelper = {
        promises: {},
        addSourceAndLayers: function addSourceAndLayers(sourceOptions, layerOptionsArray) {
            var _this = this;

            // this = map
            var sourceName = sourceOptions.name;
            mbHelper.promises[sourceOptions.name] = new Promise(function (resolve) {
                // TO DO: figure out reject?
                delete sourceOptions.name;
                function checkDataLoaded() {
                    if (this.getSource(sourceName)) {
                        // if addSource below has taken effect
                        resolve(true);
                        this.off('render', checkDataLoaded); // and turn off the listener for render
                    }
                }
                _this.on('render', checkDataLoaded);
                _this.addSource(sourceName, sourceOptions);
            });
            var layerPromises = [];
            return mbHelper.promises[sourceName].then(function () {
                // GET THIS TO RETURN A PROMISE.ALL FOR THE LAYERS
                layerOptionsArray.forEach(function (each) {
                    layerPromises.push(new Promise(function (resolve) {
                        // TO DO: figure out reject?
                        var beforeLayer = each.beforeLayer ? each.beforeLayer : '';
                        delete each.beforeLayer;
                        each.source = sourceName;
                        function checkLayerLoaded() {
                            if (this.getLayer(each.id)) {
                                // if addLayer below has taken effect
                                resolve(true);
                                this.off('render', checkLayerLoaded); // and turn off the listener for render
                            }
                        }
                        _this.on('render', checkLayerLoaded);
                        _this.addLayer(each, beforeLayer);
                    }));
                });
                return Promise.all(layerPromises);
            });
        }
    };

    var mapView = {
        maps: [],
        init: function init() {
            setSubs([['activeStateFP', mapView.zoomInMapHandler], ['activeMap', mapView.zoomInMapHandler], ['activeStateFP', mapView.updateLegend], ['legendScale', mapView.changeLegendScale], ['holdCounty', mapView.holdCounty]]);
            this.wrapper = document.getElementById('map-view-wrapper');
            this.el = document.getElementById('map-view');
            this.checkMapViewAspect();
        },
        holdCounty: function holdCounty(msg, data) {
            if (data) {
                mapView.maps.forEach(function (map) {
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
                mapView.maps.forEach(function (map) {
                    map.on('mousemove', 'counties', mapView.countyMouseMove);
                    map.on('mouseleave', 'counties', mapView.countyMouseLeave);
                    map.on('mouseup', 'counties', mapView.countyMouseUp);
                });
                d3.select('#map-view-wrapper').on('mouseup', null);
            }
            function releaseClick() {
                console.log(d3.event);
                if (d3.event.button === 2) {
                    // ie is a right click
                    setState('holdCounty', false);
                }
            }
        },
        showMessage: function showMessage(message) {
            sidebarView.fadeInHTML.call(d3.select('#message'), function () {
                return message;
            });
        },
        initializeMap: function initializeMap(options, i, resolve) {
            var container = options.container,
                style = options.style,
                bounds = options.bounds;

            var maxBounds;

            if ((typeof bounds === "undefined" ? "undefined" : _typeof(bounds)) === 'object') {
                // actually an array but typeof <array> === object
                maxBounds = bounds;
            } else if (typeof bounds === 'string') {
                maxBounds = mapBounds[bounds];
            } else {
                throw 'bounds not corrct type: should be lng/lat array or string key to mapBounds object';
            }
            var mbOptions = { container: container, style: style, maxBounds: maxBounds }; // ES6 shorthand

            this.maps[i] = new mapboxgl.Map(mbOptions);
            this.maps[i].originalOptions = options;
            this.maps[i].index = i;
            this.maps[i].on('load', function () {
                resolve(true);
            });
        },
        resizeMaps: function resizeMaps() {
            this.maps.forEach(function (each) {

                each.fitBounds(each.getMaxBounds());
                // mapView.setOriginalCenterAndZoom(each); // THIS MAY BE TRIGGERING BEFORE THE ZOOM ENDS
            });
        },
        checkMapViewAspect: function checkMapViewAspect() {
            var wrapperHeight = this.wrapper.offsetHeight;
            var wrapperWidth = this.wrapper.offsetWidth;
            if (wrapperHeight < 0.813 * wrapperWidth) {
                this.el.style.maxWidth = 1.23 * wrapperHeight + 'px';
                //this.maps
            } else {
                this.el.style.maxWidth = '100%';
            }
        },
        setup: function setup(values) {
            var _this2 = this;

            var stateData = values[0],
                countyData = values[1];
            mapView.countyDate = countyData;
            createStops.call(this);
            createLegend.call(this);
            mapView.maps.forEach(function (each) {
                _this2.sharedMapSetup(each);
            });

            function createStops() {
                var _this3 = this;

                this.mapRange = returnRange(mapColorBuckets - 1);
                this.legendRange = [];
                this.mapRange.forEach(function (value, i, array) {
                    if (i % 2 === 0 || i === array.length - 1) {
                        _this3.legendRange.push(value);
                    }
                });

                mapView.scaleState = d3.scaleQuantile().domain(stateData.map(function (row) {
                    return row.DP03_0099PE;
                })).range(this.mapRange);
                mapView.scaleCounty = d3.scaleQuantile().domain(countyData.map(function (row) {
                    return row.DP03_0099PE;
                })).range(this.mapRange);
                window.scaleState = mapView.scaleState;

                mapView.stateStops = [["0", "rgb(100,100,100)"]];
                mapView.countyStops = {
                    string: [["0", "rgb(100,100,100)"]],
                    numeric: [[0, "rgb(100,100,100)"]]
                };

                stateData.forEach(function (row) {
                    // states
                    var color = d3.interpolateYlOrBr(mapView.scaleState(row.DP03_0099PE));
                    mapView.stateStops.push([row.state, color]);
                });
                countyData.forEach(function (row) {
                    // counties
                    var color = d3.interpolateYlOrBr(mapView.scaleCounty(row.DP03_0099PE));
                    if (row.state[0] === '0') {
                        mapView.countyStops.string.push([row.state + row.county, color]);
                    } else {
                        mapView.countyStops.numeric.push([+(row.state + row.county), color]);
                    }
                });

                function returnRange(n) {
                    // creates a discrete set of stops between 0 and 1 (inclusive) based
                    // on the number of colorBuckets specified up top. used as the output
                    // range in the d3.scale function, which is then interpolated on the
                    // color scale
                    var array = [];
                    for (var i = 0; i <= n; i++) {
                        array.push(Math.round(10 / n * i / 10 * 100) / 100);
                    }
                    return array;
                }
            }

            function createLegend() {
                var _this4 = this;

                this.legend = d3.select('#legend');

                var legend = this.legend;

                legend.append('h2').attr('class', 'legend-title').html('Percentage without health insurance');

                var legendDivs = legend.selectAll('legendDiv').data(this.legendRange.slice(0, -1)).enter().append('div').attr('class', 'flex end');

                legendDivs.append('span').attr('class', 'legend-key').attr('style', function (d, i) {
                    return "background: " + d3.interpolateYlOrBr(d) + "; /* For browsers that do not support gradients */\n                                background: -webkit-linear-gradient(" + d3.interpolateYlOrBr(d) + ", " + d3.interpolateYlOrBr(_this4.legendRange[i + 1]) + "); /* For Safari 5.1 to 6.0 */\n                                background: -o-linear-gradient(" + d3.interpolateYlOrBr(d) + ", " + d3.interpolateYlOrBr(_this4.legendRange[i + 1]) + "); /* For Opera 11.1 to 12.0 */\n                                background: -moz-linear-gradient(" + d3.interpolateYlOrBr(d) + ", " + d3.interpolateYlOrBr(_this4.legendRange[i + 1]) + "); /* For Firefox 3.6 to 15 */\n                                background: linear-gradient(to right, " + d3.interpolateYlOrBr(d) + " , " + d3.interpolateYlOrBr(_this4.legendRange[i + 1]) + ");";
                });

                this.legendSpans = legendDivs.append('span');
                this.updateLegend();
            }
        },
        updateLegend: function updateLegend(msg, data) {
            if (msg === 'activeStateFP' && data !== null && data !== 'null') {
                setState('legendScale', 'county');
            } else {
                setState('legendScale', 'state');
            }
        },
        changeLegendScale: function changeLegendScale(msg, data) {
            d3.select('#legend').node().parentNode.classList.remove('load-finished');
            var scale = data === 'county' ? mapView.scaleCounty : mapView.scaleState;
            sidebarView.fadeInHTML.call(mapView.legendSpans, function (d, i) {
                return '<span class="legend-item-min">' + d3.format(',.1f')(scale.invertExtent(d)[0]) + '</span>&ndash;<span class="legend-item-max">' + d3.format(',.1f')(scale.invertExtent(mapView.mapRange[i * 2 + 1])[1]) + '</span>';
            });
            d3.select('#legend').node().parentNode.classList.add('load-finished');
        },
        setOriginalCenterAndZoom: function setOriginalCenterAndZoom(map) {
            map.originalCenter = map.getCenter();
            map.originalZoom = map.getZoom();
        },
        sharedMapSetup: function sharedMapSetup(map) {

            map.dragRotate.disable();
            map.touchZoomRotate.disableRotation();
            mapView.setOriginalCenterAndZoom(map);
            editRoadLayers();

            mbHelper.addSourceAndLayers.call(map, { // source
                "type": "vector",
                "url": "mapbox://mapbox.us_census_states_2015",
                "name": "states"
            }, [// layers
            {
                "id": "states-join",
                "type": "fill",
                "source-layer": 'states',
                "paint": {
                    "fill-color": 'transparent'
                },
                "beforeLayer": "water"
            }, {
                "id": "states-join-hover",
                "type": "line",
                "source-layer": 'states',
                "paint": {
                    "line-color": '#4D90FE',
                    "line-width": 4,
                    "line-blur": 2
                },
                "filter": ["==", "name", ""]
            }]).then(function () {
                mbHelper.addSourceAndLayers.call(map, { // source
                    "type": "vector",
                    "url": "mapbox://mapbox.82pkq93d",
                    "name": "counties"
                }, [// layers
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
                }, {
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
                }]).then(function () {
                    addChloroLayer();
                    setMouseEvents();
                    d3.select('#' + map.originalOptions.container + ' .load-overlay').classed('load-finished', true);
                });
            });

            function setMouseEvents() {

                map.on('mousemove', 'states-join', function (e) {
                    map.setFilter("states-join-hover", ["==", "STATEFP", e.features[0].properties.STATEFP]);
                });
                map.on('mouseleave', 'states-join', function () {
                    map.setFilter("states-join-hover", ["==", "STATEFP", ""]);
                });
                map.on('click', 'states-join', function (e) {
                    console.log('click');
                    setState('activeMap', map.index); // stateModule only publishes if state is new, no need for if statement
                    if (getState('activeStateFP') !== e.features[0].properties.STATEFP) {
                        // if statement needed here b/c click on already active state requires special response
                        setState('activeStateFP', e.features[0].properties.STATEFP);
                    } else {
                        // click on already active/zoomed US state
                        setState('activeStateFP', null);
                    }
                });
            }
            function addChloroLayer() {
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
                var roadLayers = map.getStyle().layers.filter(function (each) {
                    return each['source-layer'] === 'road';
                });
                roadLayers.forEach(function (each) {
                    map.setPaintProperty(each.id, 'line-opacity', 0.2);
                });
            }
        },
        zoomInMapHandler: function zoomInMapHandler(msg, data) {
            // msg = 'activeStateFP'; data = activeStateFP OR 'activeMap'; activeMap
            console.log(msg, data);
            setState('holdCounty', false);
            if (msg === 'activeStateFP') {
                if (data === null || data === 'null') {
                    zoomMapBackOut(getState('activeMap'));
                } else {
                    zoomMapToState();
                }
            }

            if (msg === 'activeMap' && getPreviousState('activeMap') !== undefined) {
                zoomMapBackOut(getPreviousState('activeMap'));
            }

            function zoomendCenter() {
                // `this` = the map
                this.off('zoomend', zoomendCenter);
                this.flyTo({ center: this.originalCenter });
            }
            function zoomMapBackOut(index) {
                var map = mapView.maps[index];
                map.setFilter("counties", ["==", "FIPS", ""]);
                map.setFilter("counties-hover", ['==', "FIPS", ""]);
                if (map.index > 0) {
                    map.on('zoomend', zoomendCenter);
                }
                map.fitBounds(map.getMaxBounds());
                mapView.maps.forEach(function (each) {
                    each.setPaintProperty('states-join', 'fill-color', mapView.stateFillActive);
                });
            }
            function zoomMapToState() {
                var map = mapView.maps[getState('activeMap')];
                if (data[0] === '0') {
                    //data is string; if it starts with 0 . . . 
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
                mapView.maps.forEach(function (each) {
                    each.setPaintProperty('states-join', 'fill-color', mapView.stateFillInactive);
                });
                if (map.index > 0) {
                    map.on('zoomend', zoomendCenter);
                }
                var wrapperPadding = map.index === 0 ? 30 : 0;
                map.fitBounds(stateBounds[data], {
                    padding: wrapperPadding
                });
                map.setFilter("counties", ["all", [">", "FIPS", getCountyRange(data).min], ["<=", "FIPS", getCountyRange(data).max]]);

                map.on('mousemove', 'counties', mapView.countyMouseMove);
                map.on('mouseleave', 'counties', mapView.countyMouseLeave);
                map.on('mouseup', 'counties', mapView.countyMouseUp);

                if (map.getZoom() < 2) {
                    map.setZoom(2);
                }
            }
            function getCountyRange(statefp) {
                if (statefp[0] === '0') {
                    return { // county FIPS less than 10,000 start with zeroes and are stored as strings in source data
                        min: '0' + +statefp.slice(0, 2) * 1000,
                        max: '0' + (+statefp.slice(0, 2) * 1000 + 999)
                    };
                } else {
                    return { // others are stored as numbers
                        min: +statefp.slice(0, 2) * 1000,
                        max: +statefp.slice(0, 2) * 1000 + 999
                    };
                }
            }
        },
        countyMouseUp: function countyMouseUp(e) {
            if (e.originalEvent.button === 2) {
                setState('holdCounty', true);
            }
        },
        countyMouseMove: function countyMouseMove(e) {
            mapView.mousemoveFilter(e, mapView.highlightCounty);
        },
        mousemoveFilter: function mousemoveFilter(e, fn) {
            if (!mapView.mousemoveActive || mapView.mousemoveActive !== e.features[0].id) {
                mapView.mousemoveActive = e.features[0].id;
                fn(e);
            }
        },
        highlightCounty: function highlightCounty(e) {
            var map = mapView.maps[getState('activeMap')];
            map.setFilter("counties-hover", ["==", "FIPS", e.features[0].properties.FIPS]);
            mapView.showMessage('&nbsp;Right click to hold selection&nbsp;');
            Promise.all([controller.promises.dictionary, controller.promises.countyDetails]).then(function (values) {
                sidebarView.handleCharts(values, e.features[0].properties.FIPS);
            });
        },
        countyMouseLeave: function countyMouseLeave() {
            mapView.maps[getState('activeMap')].setFilter("counties-hover", ["==", "FIPS", ""]);
            mapView.showMessage('');
            mapView.mousemoveActive = null;
            sidebarView.getStateDetails('activeStateFP', getState('activeStateFP'));
        }
    };

    var sidebarView = {
        fadeInHTML: function fadeInHTML(callback) {

            this.transition().duration(sidebarView.duration / 2).ease(d3.easeCubicOut).style('opacity', 0).on('end', function (d, i) {
                var $this = d3.select(this);
                $this.html(function () {
                    return callback(d, i);
                });
                $this.transition().duration(sidebarView.duration / 2).ease(d3.easeCubicOut).style('opacity', 1);
            });
        },

        duration: 500,
        transition: d3.transition().duration(500).ease(d3.easeCubicOut),
        chartsAreCreated: false,
        initializeDropdown: function initializeDropdown(data) {
            setSubs([['activeStateFP', function (msg, data) {
                d3.select('#state-selector').node().value = data;
            }], ['activeStateFP', this.getStateDetails]]);
            d3.select('#state-selector').node().onchange = function () {
                var _this5 = this;

                var matchingMap = mapView.maps.find(function (map) {
                    return map.originalOptions.bounds === _this5.value;
                });
                var mapIndex = matchingMap ? matchingMap.index : 0;
                setState('activeMap', mapIndex);
                setState('activeStateFP', this.value);
            };
            d3.select('#state-selector').selectAll('stateOptions').data(data).enter().append('option').attr('value', function (d) {
                return d.state;
            }).text(function (d) {
                return d.NAME;
            });

            d3.select('#dropdown-div').classed('load-finished', true);
        },
        getStateDetails: function getStateDetails(msg, data) {
            // when a state is selected, msg = 'activeStateFP'; data = stringified id number
            // when state is deselected (zoom back out),  msg = 'activeStateFP'; data = null
            // when charts are first initialized to US, no msg, no data
            console.log(msg, data);
            /*  if ( msg === 'activeStateFP' && !data ){
                  return;
              }*/
            d3.select('#sidebar-bottom').classed('load-finished', false);
            if (controller.promises.dictionary === undefined) {
                controller.promises.dictionary = controller.returnData('data/data-dictionary.json', null, false);
            }
            if (controller.promises.countyDetails === undefined) {
                controller.promises.countyDetails = controller.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0095E,DP03_0095PE,DP03_0096E,DP03_0096PE,DP03_0097E,DP03_0097PE,DP03_0098E,DP03_0098PE,DP03_0099E,DP03_0099PE,DP03_0100E,DP03_0100PE,DP03_0101E,DP03_0101PE,DP03_0102E,DP03_0102PE,DP03_0103E,DP03_0103PE,DP03_0104E,DP03_0104PE,DP03_0105E,DP03_0105PE,DP03_0106E,DP03_0106PE,DP03_0107E,DP03_0107PE,DP03_0108E,DP03_0108PE,DP03_0109E,DP03_0109PE,DP03_0110E,DP03_0110PE,DP03_0111E,DP03_0111PE,DP03_0112E,DP03_0112PE,DP03_0113E,DP03_0113PE,DP03_0114E,DP03_0114PE,DP03_0115E,DP03_0115PE,DP03_0116E,DP03_0116PE,DP03_0117E,DP03_0117PE,DP03_0118E,DP03_0118PE,NAME&for=county:*&key=', function (d) {
                    return d.state + d.county;
                });
            }
            if (data && data !== 'null') {
                // ie is a activeStateFP
                if (controller.promises.stateDetails === undefined) {
                    controller.promises.stateDetails = controller.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0095E,DP03_0095PE,DP03_0096E,DP03_0096PE,DP03_0097E,DP03_0097PE,DP03_0098E,DP03_0098PE,DP03_0099E,DP03_0099PE,DP03_0100E,DP03_0100PE,DP03_0101E,DP03_0101PE,DP03_0102E,DP03_0102PE,DP03_0103E,DP03_0103PE,DP03_0104E,DP03_0104PE,DP03_0105E,DP03_0105PE,DP03_0106E,DP03_0106PE,DP03_0107E,DP03_0107PE,DP03_0108E,DP03_0108PE,DP03_0109E,DP03_0109PE,DP03_0110E,DP03_0110PE,DP03_0111E,DP03_0111PE,DP03_0112E,DP03_0112PE,DP03_0113E,DP03_0113PE,DP03_0114E,DP03_0114PE,DP03_0115E,DP03_0115PE,DP03_0116E,DP03_0116PE,DP03_0117E,DP03_0117PE,DP03_0118E,DP03_0118PE,NAME&for=state:*&key=', 'state' // returns data nested by state
                    );
                }
                Promise.all([controller.promises.dictionary, controller.promises.stateDetails, controller.promises.countyDetails]).then(function (values) {
                    sidebarView.handleCharts(values);
                });
            } else {
                // ie is initial country-level load
                Promise.all([controller.promises.dictionary, controller.promises.USDetails, controller.promises.countyDetails]).then(function (values) {
                    sidebarView.handleCharts(values, 'US');
                });
            }
        },
        handleCharts: function handleCharts(values, county) {
            // values[0] is the dictionary;
            // [1] is an object of arrays keyed by state ID (ie '08') OR single object of US data
            // [2] is county-level details used to set bounds 
            var dictionary = values[0],
                countyDetails = values[2] ? values[2] : null,
                data;

            if (!county) {
                if (values[1][getState('activeStateFP')] === undefined) {// ie dropdown back to select state

                }
                data = values[1][getState('activeStateFP')][0];
                clearCountyLabel();
            } else if (county === 'US') {
                data = values[1][0];
            } else {
                data = values[1][county][0];
                updateCountyLabel();
            }

            if (!this.chartsAreCreated) {

                // create array of variable names with type 'without'
                var noInsuranceVars = dictionary.filter(function (x) {
                    return x.type === 'without' && x.variable.indexOf('PE') !== -1;
                }).map(function (x) {
                    return x.variable;
                });
                // create array of variable names with type 'with'
                var withInsuranceVars = dictionary.filter(function (x) {
                    return x.type === 'with' && x.variable.indexOf('PE') !== -1;
                }).map(function (x) {
                    return x.variable;
                });
                var insuranceValues = [[], []];
                Object.keys(countyDetails).forEach(function (key) {
                    noInsuranceVars.map(function (each) {
                        insuranceValues[0].push(+countyDetails[key][0][each]);
                    });
                    withInsuranceVars.map(function (each) {
                        insuranceValues[1].push(+countyDetails[key][0][each]);
                    });
                });

                sidebarView.maxWithout = d3.max(insuranceValues[0]);
                sidebarView.maxWith = d3.max(insuranceValues[1]);
                createCharts(sidebarView.maxWithout, sidebarView.maxWith);
                this.chartsAreCreated = true;
                createChartLegend();
                updateCharts();
            } else {
                // end if ( !this.chartsAreCreated )

                updateCharts();
            }
            function updateCountyLabel() {
                sidebarView.countyLabel.datum(data);
                sidebarView.fadeInHTML.call(sidebarView.countyLabel, function (d) {
                    return d.NAME !== 'United States' ? d.NAME.replace(/,.*/, '') : '&nbsp;';
                });
            }
            function clearCountyLabel() {
                sidebarView.fadeInHTML.call(sidebarView.countyLabel, function () {
                    return '&nbsp;';
                });
            }
            function updateCharts() {
                /*   if ( sidebarView.isInTransition ){
                       sidebarView.isOnHold = true;
                   } else {*/
                if (county === 'US') {
                    updateCountyLabel();
                }
                sidebarView.nested.forEach(function (each) {
                    sidebarView[each.key + '-without'].interrupt().on('mouseover', function (d) {
                        sidebarView.showData(d, data[d.variable.replace('E', 'PE')], data[d.variable], 'left');
                    }).transition(sidebarView.transition)
                    /*.on('start', function(){
                        if ( i === 0 ){
                            sidebarView.isInTransition = true;
                        }
                    })*/
                    .attr('transform', function (d) {
                        return "translate(" + (sidebarView.scale(sidebarView.maxWithout) - sidebarView.scale(data[d.variable.replace('E', 'PE')])) + ", 0)";
                    }).attr('width', function (d) {
                        return sidebarView.scale(data[d.variable.replace('E', 'PE')]);
                    });

                    if (each.values.find(function (x) {
                        return x.type === 'private';
                    }) !== undefined) {
                        sidebarView[each.key + '-pub'].interrupt().on('mouseover', function (d) {
                            sidebarView.showData(d, data[d.variable.replace('E', 'PE')], data[d.variable]);
                        }).transition(sidebarView.transition).attr('transform', function () {
                            var publicValue = data[each.values.find(function (x) {
                                return x.type === 'public';
                            }).variable.replace('E', 'PE')];
                            var withValue = data[each.values.find(function (x) {
                                return x.type === 'with';
                            }).variable.replace('E', 'PE')];
                            return "translate(" + (sidebarView.scale(sidebarView.maxWithout) + sidebarView.scale(withValue - publicValue)) + ", 0)";
                        }).attr('width', function (d) {
                            return sidebarView.scale(data[d.variable.replace('E', 'PE')]);
                        });
                        sidebarView[each.key + '-priv'].interrupt().on('mouseover', function (d) {
                            sidebarView.showData(d, data[d.variable.replace('E', 'PE')], data[d.variable]);
                        }).transition(sidebarView.transition).attr('width', function (d) {
                            return sidebarView.scale(data[d.variable.replace('E', 'PE')]);
                        });
                    } else {
                        sidebarView[each.key + '-unspecified'].interrupt().on('mouseover', function (d) {
                            sidebarView.showData({ label: 'With public or private insurance' }, 100 - data[d.variable.replace('E', 'PE')]);
                        }).transition(sidebarView.transition).attr('width', function (d) {
                            return sidebarView.scale(100 - data[d.variable.replace('E', 'PE')]);
                        });
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
            function createCharts() {

                sidebarView.definitionsLeft = d3.select('#sidebar-definitions #left');
                sidebarView.definitionsRight = d3.select('#sidebar-definitions #right');
                sidebarView.countyLabel = d3.select('#county-label').datum(data);

                var rangeExtent = sidebarView.maxWithout + sidebarView.maxWith;
                var categories = dictionary.filter(function (x) {
                    return x.type === 'category' && x.variable.indexOf('PE') === -1;
                });
                var catDivs = d3.select('#sidebar-charts').selectAll('categories').data(categories).enter().append('div').attr('id', function (d) {
                    return d.variable;
                });

                /*   catDivs.append('p')
                       .classed('category-label', true)
                       .text(d => d.label);*/

                catDivs.each(function (d) {
                    if (d.variable !== d.group) {

                        document.getElementById(d.group).appendChild(this);
                    }
                });

                var series = dictionary.filter(function (x) {
                    return x.type !== 'category' && x.variable.indexOf('PE') === -1;
                });

                sidebarView.nested = d3.nest().key(function (d) {
                    return d.group;
                }).entries(series);

                sidebarView.nested.forEach(function (each, i, array) {

                    var heightPercent = 12,
                        // as percentage of width
                    viewBox = i < array.length - 1 ? '0 0 100 ' + heightPercent : '0 0 100 ' + (heightPercent + 10),
                        margin = { top: 6, right: 0, bottom: 2, left: 0 },
                        // in percentages of the viewbox width
                    width = 100 - margin.left - margin.right,
                        rectHeight = 4;

                    sidebarView.scale = d3.scaleLinear().domain([0, rangeExtent]).range([0, width]);

                    var svg = d3.select('#' + each.key).append('svg').attr('width', '100%').attr('xmlns', 'http://www.w3.org/2000/svg').attr('version', '1.1').attr('viewBox', viewBox);

                    var pattern = svg.append("defs").append("pattern").attr('id', "hash4_4").attr('width', "4").attr("height", "4").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(60)");
                    pattern.append('rect').attr("width", "2").attr("height", "4").attr("transform", "translate(0,0)").attr("fill", "#2b526f");
                    pattern.append('rect').attr("width", "2").attr("height", "4").attr("transform", "translate(2,0)").attr("fill", "#3f98da");

                    //    svg.html("<defs><pattern id='Pattern' x='0' y='0' width='10' height='10'><rect width='25' height='25' fill='#2b526f'/><g transform='rotate(45)'><rect width='99' height='3' fill='#3f98da' /><rect y='-7' width='99' height='3' fill='#3f98da'/></g></pattern></defs>");

                    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

                    g.append('text').text(dictionary.find(function (x) {
                        return x.variable === each.values.find(function (x) {
                            return x.type === 'without';
                        }).group;
                    }).label).attr('font-size', 5.5).attr('text-anchor', 'middle').attr('x', sidebarView.scale(sidebarView.maxWithout)).attr('transform', 'translate(0,-2)').classed('category-label', true).on('mouseover', sidebarView.showDefinition).on('mouseleave', sidebarView.hideDefinition);

                    sidebarView[each.key + '-without'] = g.selectAll('without').data([each.values.find(function (x) {
                        return x.type === 'without';
                    })]).enter().append('rect').classed('without', true).attr('transform', function () {
                        return "translate(" + sidebarView.scale(sidebarView.maxWithout) + ", 0)";
                    }).attr('height', rectHeight).on('mouseleave', sidebarView.hideData);

                    if (each.values.find(function (x) {
                        return x.type === 'private';
                    }) !== undefined) {

                        sidebarView[each.key + '-priv'] = g.selectAll('private').data([each.values.find(function (x) {
                            return x.type === 'private';
                        })]).enter().append('rect').classed('private', true).attr('transform', function () {
                            return "translate(" + sidebarView.scale(sidebarView.maxWithout) + ", 0)";
                        }).attr('height', rectHeight).on('mouseleave', sidebarView.hideData);

                        sidebarView[each.key + '-pub'] = g.selectAll('public').data([each.values.find(function (x) {
                            return x.type === 'public';
                        })]).enter().append('rect').classed('public', true).attr('height', rectHeight).on('mouseleave', sidebarView.hideData);
                    } else {
                        sidebarView[each.key + '-unspecified'] = g.selectAll('unspecified').data([each.values.find(function (x) {
                            return x.type === 'without';
                        })]) // using `without` datum but invert below with 100 - value
                        .enter().append('rect').classed('unspecified', true).attr('transform', function () {
                            return "translate(" + sidebarView.scale(sidebarView.maxWithout) + ", 0)";
                        }).attr('height', rectHeight).attr('fill', "url(#hash4_4)").on('mouseleave', sidebarView.hideData);
                    }

                    if (i === array.length - 1) {
                        var increment = 25;
                        if (100 % increment !== 0) {
                            throw 'Increment must be factor of 100';
                        }

                        var xAxis = g.append('g').classed('x-axis', true).attr('transform', 'translate(0,11)');

                        xAxis.append('text').attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout + sidebarView.maxWith * 0.5) + ', 5)').attr('font-size', '5').attr('text-anchor', 'middle').text('with insurance');

                        xAxis.append('text').attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout * 0.5) + ', 5)').attr('font-size', '5').attr('text-anchor', 'middle').text('without insurance');

                        var _loop = function _loop(_i) {
                            xAxis.append('text') // rightward ticks
                            .attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout + _i * increment) + ', 0)').attr('font-size', '5').attr('text-anchor', 'middle').text(function () {
                                return _i === 0 ? _i * increment + '%' : _i * increment;
                            });

                            if (_i > 0 && _i * (100 / increment) < sidebarView.maxWithout) {
                                // leftward ticks
                                xAxis.append('text') // rightward ticks
                                .attr('transform', 'translate(' + sidebarView.scale(sidebarView.maxWithout - _i * increment) + ', 0)').attr('font-size', '5').attr('text-anchor', 'middle').text(_i * increment);
                            }
                        };

                        for (var _i = 0; _i < 100 / increment; _i++) {
                            _loop(_i);
                        }
                    }
                }); // end nested.forEach(...)
            } // end createCharts()
            function createChartLegend() {
                var chartLegendSVG = d3.select('#sidebar-charts').append('svg').classed('legend', true).attr('width', '292px').attr('height', '44px');

                var pattern = chartLegendSVG.append("defs").append("pattern").attr('id', "hash4_4").attr('width', "4").attr("height", "4").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(60)");

                pattern.append('rect').attr("width", "2").attr("height", "4").attr("transform", "translate(0,0)").attr("fill", "#2b526f");

                pattern.append('rect').attr("width", "2").attr("height", "4").attr("transform", "translate(2,0)").attr("fill", "#3f98da");

                var chartLegendContent = chartLegendSVG.append('g').attr('transform', 'translate(-114,0)');

                var chartLegendItems = chartLegendContent.selectAll('legend-item').data([{
                    text: 'None',
                    class: 'without'
                }, {
                    text: 'Private',
                    class: 'private'
                }, {
                    text: 'Public',
                    class: 'public'
                }, {
                    text: 'Not specified',
                    class: 'unspecified',
                    fill: 'url(#hash4_4)'
                }]).enter().append('g').attr('transform', function (d, i) {
                    return "translate(" + (70 * i + 146) + ", 10)";
                });

                chartLegendItems.append('rect').attr('class', function (d) {
                    return d.class;
                }).attr('width', 15).attr('height', 15).attr('fill', function (d) {
                    if (d.fill !== undefined) {
                        return d.fill;
                    }
                });

                chartLegendItems.append('text').attr('transform', 'translate(7,30)').attr('text-anchor', 'middle').text(function (d) {
                    return d.text;
                });
            }
        },
        // end sidebar.handleCharts()
        showDefinition: function showDefinition(d) {
            sidebarView.definitionsLeft.datum(d);

            sidebarView.fadeInHTML.call(sidebarView.definitionsLeft, function (d) {
                return d.description ? "<p class=\"definition-name\">" + d.name + " <span class=\"ACS-variable\">(" + d.variable + ")</span></p><p class=\"definition-description\">" + d.description + "</p>" : "<p class=\"definition-name\">" + d.name + "</p> <span class=\"ACS-variable\">(" + d.variable + ")</span>";
            });
        },
        hideDefinition: function hideDefinition() {
            sidebarView.fadeInHTML.call(sidebarView.definitionsLeft, function () {
                return '';
            });
        },
        showData: function showData(d, percent, value, leftOrRight) {

            var defDiv = leftOrRight ? sidebarView.definitionsLeft : sidebarView.definitionsRight;
            defDiv.datum(d);

            sidebarView.fadeInHTML.call(defDiv, function (d) {
                return value ? "<p>" + d.label + ":<br />" + percent + "% (" + d3.format(',')(value) + " people)</p>" : "<p>" + d.label + ":<br />" + percent + "%</p>";
            });
        },
        hideData: function hideData() {
            sidebarView.fadeInHTML.call(sidebarView.definitionsLeft, function () {
                return '';
            });
            sidebarView.fadeInHTML.call(sidebarView.definitionsRight, function () {
                return '';
            });
        }
    };

    var controller = {

        controlState: StateModule(),
        controlSubs: SubscribeModule(),
        init: function init() {
            var _this6 = this;

            this.setRezizeWatcher();
            mapView.init();

            this.promises = { maps: [] };
            mapOptions.forEach(function (options, i) {
                _this6.promises.maps[i] = new Promise(function (resolve) {
                    // TO DO: figure out reject?
                    mapView.initializeMap(options, i, resolve);
                });
            });
            this.promises.stateData = this.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=state:*&key=', null, false);
            this.promises.countyData = this.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0099PE,NAME&for=county:*&key=', null, false);
            this.promises.USDetails = this.returnACSData('https://api.census.gov/data/2015/acs/acs5/profile?get=DP03_0095E,DP03_0095PE,DP03_0096E,DP03_0096PE,DP03_0097E,DP03_0097PE,DP03_0098E,DP03_0098PE,DP03_0099E,DP03_0099PE,DP03_0100E,DP03_0100PE,DP03_0101E,DP03_0101PE,DP03_0102E,DP03_0102PE,DP03_0103E,DP03_0103PE,DP03_0104E,DP03_0104PE,DP03_0105E,DP03_0105PE,DP03_0106E,DP03_0106PE,DP03_0107E,DP03_0107PE,DP03_0108E,DP03_0108PE,DP03_0109E,DP03_0109PE,DP03_0110E,DP03_0110PE,DP03_0111E,DP03_0111PE,DP03_0112E,DP03_0112PE,DP03_0113E,DP03_0113PE,DP03_0114E,DP03_0114PE,DP03_0115E,DP03_0115PE,DP03_0116E,DP03_0116PE,DP03_0117E,DP03_0117PE,DP03_0118E,DP03_0118PE,NAME&for=us:*&key=', null, false);
            Promise.all([this.promises.stateData]).then(function (values) {
                sidebarView.initializeDropdown(values[0]);
            });
            Promise.all([this.promises.stateData, this.promises.countyData, Promise.all(this.promises.maps)]).then(function (values) {

                mapView.setup(values);
            });

            sidebarView.getStateDetails(); // inititiates the charts
        },
        setRezizeWatcher: function setRezizeWatcher() {
            var timeOut = null;
            window.onresize = function () {
                if (timeOut != null) {
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function () {

                    mapView.checkMapViewAspect();
                    mapView.resizeMaps();
                }, 200);
            };
        },
        returnACSData: function returnACSData(url, nestBy, coerce) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
                d3.json(url + censusKey, function (error, data) {
                    if (error) {

                        reject(error);
                    }
                    resolve(_this7.returnKeyValues(data, nestBy, coerce));
                });
            });
        },
        returnData: function returnData(url) {
            return new Promise(function (resolve, reject) {
                d3.json(url, function (error, data) {
                    if (error) {

                        reject(error);
                    }
                    resolve(data);
                });
            });
        },
        returnKeyValues: function returnKeyValues(values, nestBy, coerce) {
            // coerce = BOOL coerce to num or not 
            var unnested = values.slice(1).map(function (row) {
                return row.reduce(function (acc, cur, i) {
                    // 1. params: total, currentValue, currentIndex[, arr]
                    acc[values[0][i]] = coerce === true ? isNaN(+cur) ? cur : +cur : cur; // 3. // acc is an object , key is corresponding value from row 0, value is current value of array
                    return acc;
                }, {});
            });
            console.log(unnested);
            if (!nestBy) {
                return unnested;
            } else if (typeof nestBy === 'string') {
                // ie only one nestBy field
                console.log('string', nestBy);
                return d3.nest().key(function (d) {
                    return d[nestBy];
                }).object(unnested);
            } else if (typeof nestBy === 'function') {
                console.log('function', nestBy);
                return d3.nest().key(function (d) {
                    return nestBy(d);
                }).object(unnested);
            } else {
                // TO DO: HANDLER FOR MULTIPLE NESTING
            }
        }
    }; // end controller


    function StateModule() {

        var state = {};

        function _logState() {
            console.log(state);
        }

        function _getState(property) {
            return state[property] !== undefined ? state[property][0] : undefined;
        }

        function _getPreviousState(property) {
            return state[property] !== undefined && state[property][1] !== undefined ? state[property][1] : undefined;
        }

        function _setState(key, value) {

            if (state[key] === undefined) {
                // ie first time state property is being defined
                state[key] = [value];
                PubSub.publish(key, value);
                _logState();
            } else {
                // not the first time the property is being defined
                //If it's a string or array and values are the same, stateChanged=False+
                var stateChanged = true;
                if (typeof value === 'string') {
                    stateChanged = state[key][0] !== value;
                } else if (Array.isArray(value) && Array.isArray(state[key][0])) {
                    stateChanged = !value.compare(state[key][0]);
                } else {
                    stateChanged = true; //assume it's changed if we can't verify
                }
                //Only publish if we've changed state
                if (stateChanged) {
                    state[key].unshift(value);
                    PubSub.publish(key, value);
                    _logState();
                    if (state[key].length > 2) {
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

        function createToken(topic, fnRef) {
            var functionHash = 'f' + fnRef.toString().hashCode();
            var str = topic + fnRef;
            var token = 'sub' + str.hashCode();
            return {
                token: token,
                fn: functionHash
            };
        }

        function setSubs(subsArray) {
            // subsArray is array of topic/function pair arrays
            subsArray.forEach(function (pair) {
                var topic = pair[0],
                    fnRef = pair[1],
                    tokenObj = createToken(topic, fnRef);

                if (subscriptions[tokenObj.fn] === undefined) {
                    subscriptions[tokenObj.fn] = {};
                }
                if (subscriptions[tokenObj.fn][topic] === undefined) {
                    subscriptions[tokenObj.fn][topic] = PubSub.subscribe(topic, fnRef);
                } else {
                    throw 'Subscription token is already in use.';
                }
            });
        }

        function cancelSub(topic, fnRef) {
            // for canceling single subscription
            var tokenObj = createToken(topic, fnRef);
            if (subscriptions[tokenObj.fn] !== undefined && subscriptions[tokenObj.fn][topic] !== undefined) {
                PubSub.unsubscribe(subscriptions[tokenObj.fn][topic]);
                delete subscriptions[tokenObj.fn][topic];
                if (Object.keys(subscriptions[tokenObj.fn]).length === 0) {
                    delete subscriptions[tokenObj.fn];
                }
            } else {
                throw 'Subscription does not exist.';
            }
        }

        function cancelFunction(fnRef) {
            var tokenObj = createToken('', fnRef);
            PubSub.unsubscribe(fnRef);
            delete subscriptions[tokenObj.fn];
        }

        return {
            logSubs: logSubs,
            setSubs: setSubs,
            cancelSub: cancelSub,
            cancelFunction: cancelFunction
        };
    }

    // ALIASES

    var setState = controller.controlState.setState,
        getState = controller.controlState.getState,

    //  logState = controller.controlState.logState,
    getPreviousState = controller.controlState.getPreviousState;

    var setSubs = controller.controlSubs.setSubs; //,
    //  logSubs = controller.controlSubs.logSubs,
    //  cancelSub = controller.controlSubs.cancelSub,
    //  cancelFunction = controller.controlSubs.cancelFunction;

    // HELPER String.hashCode()

    String.prototype.hashCode = function () {
        var hash = 0,
            i,
            chr,
            len;
        if (this.length === 0) {
            return hash;
        }
        for (i = 0, len = this.length; i < len; i++) {
            chr = this.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    controller.init();
})(); // end IIFE

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfZGV2L2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FDLGFBQVU7QUFDUDs7QUFDQSxhQUFTLFdBQVQsR0FBdUIsOEZBQXZCO0FBQ0EsUUFBTSxjQUFZLEVBQUMsSUFBRyxDQUFDLENBQUMsQ0FBQyxlQUFGLEVBQWtCLGlCQUFsQixDQUFELEVBQXNDLENBQUMsQ0FBQyxXQUFGLEVBQWMsaUJBQWQsQ0FBdEMsQ0FBSixFQUE0RSxJQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFGLEVBQW9CLGtCQUFwQixDQUFELEVBQXlDLENBQUMsQ0FBQyxnQkFBRixFQUFtQixpQkFBbkIsQ0FBekMsQ0FBL0UsRUFBK0osSUFBRyxDQUFDLENBQUMsQ0FBQyxlQUFGLEVBQWtCLGlCQUFsQixDQUFELEVBQXNDLENBQUMsQ0FBQyxlQUFGLEVBQWtCLGlCQUFsQixDQUF0QyxDQUFsSyxFQUE4TyxJQUFHLENBQUMsQ0FBQyxDQUFDLFdBQUYsRUFBYyxrQkFBZCxDQUFELEVBQW1DLENBQUMsQ0FBQyxlQUFGLEVBQWtCLGlCQUFsQixDQUFuQyxDQUFqUCxFQUEwVCxJQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUYsRUFBTSxRQUFOLENBQUQsRUFBaUIsQ0FBQyxDQUFDLEdBQUYsRUFBTSxNQUFOLENBQWpCLENBQTdULEVBQTZWLElBQUcsQ0FBQyxDQUFDLENBQUMsWUFBRixFQUFlLGtCQUFmLENBQUQsRUFBb0MsQ0FBQyxDQUFDLGNBQUYsRUFBaUIsaUJBQWpCLENBQXBDLENBQWhXLEVBQXlhLElBQUcsQ0FBQyxDQUFDLENBQUMsY0FBRixFQUFpQixpQkFBakIsQ0FBRCxFQUFxQyxDQUFDLENBQUMsZUFBRixFQUFrQixpQkFBbEIsQ0FBckMsQ0FBNWEsRUFBdWYsSUFBRyxDQUFDLENBQUMsQ0FBQyxlQUFGLEVBQWtCLGtCQUFsQixDQUFELEVBQXVDLENBQUMsQ0FBQyxjQUFGLEVB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VSxTQUhQO0FBSUgsNEJBQWdCO0FBSmIsU0FBUDtBQU9GOztBQUVGOztBQUVBLFFBQUksV0FBVyxXQUFXLFlBQVgsQ0FBd0IsUUFBdkM7QUFBQSxRQUNJLFdBQVcsV0FBVyxZQUFYLENBQXdCLFFBRHZDOztBQUVFO0FBQ0UsdUJBQW1CLFdBQVcsWUFBWCxDQUF3QixnQkFIL0M7O0FBS0EsUUFBSSxVQUFVLFdBQVcsV0FBWCxDQUF1QixPQUFyQyxDQWxyQ08sQ0FrckNzQztBQUMzQztBQUNBO0FBQ0E7O0FBRUY7O0FBRUEsV0FBTyxTQUFQLENBQWlCLFFBQWpCLEdBQTRCLFlBQVc7QUFDckMsWUFBSSxPQUFPLENBQVg7QUFBQSxZQUFjLENBQWQ7QUFBQSxZQUFpQixHQUFqQjtBQUFBLFlBQXNCLEdBQXRCO0FBQ0EsWUFBSSxLQUFLLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFBQyxtQkFBTyxJQUFQO0FBQWE7QUFDckMsYUFBSyxJQUFJLENBQUosRUFBTyxNQUFNLEtBQUssTUFBdkIsRUFBK0IsSUFBSSxHQUFuQyxFQUF3QyxHQUF4QyxFQUE2QztBQUMzQyxrQkFBUSxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUjtBQUNBLG1CQUFTLENBQUMsUUFBUSxDQUFULElBQWMsSUFBZixHQUF1QixHQUEvQjtBQUNBLG9CQUFRLENBQVIsQ0FIMkMsQ0FHaEM7QUFDWjtBQUNELGVBQU8sSUFBUDtBQUNELEtBVEQ7O0FBV0EsZUFBVyxJQUFYO0FBSUgsQ0F4c0NBLEdBQUQsQyxDQXdzQ00iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2liM04wWlhKdFlXNXFJaXdpWVNJNkltTnBkblU1ZEhWbmRqQTJlRFl5YjNBM05uZzFjR0ozWlhvaWZRLlhvX2sta3pHZllYX1lvX1JEY0hEQmcnO1xuICAgIGNvbnN0IHN0YXRlQm91bmRzPXsxMDpbWy03NS43OTQ2Nzc3MzQzNzUsMzguNDUzNTg4NzA4OTQxMzddLFstNzUuMDU4NTkzNzUsMzkuODQyMjg2MDIwNzQzMzldXSwxMTpbWy03Ny4xMTk5MDM1NjQ0NTMxMiwzOC43OTIwOTE3NzE1ODQ2OTRdLFstNzYuOTA5NzkwMDM5MDYyNSwzOC45OTU3MDY3MTUwNTA0M11dLDEyOltbLTg3LjYzNzkzOTQ1MzEyNSwyNC41MTcxMzk0NTA1MjUxNV0sWy04MC4wMzU0MDAzOTA2MjUsMzEuMDA1ODYyOTA0NjI0MjFdXSwxMzpbWy04NS42MDU0Njg3NSwzMC4zNjMzOTYyMzk2MDM3MTZdLFstODAuODQ4Mzg4NjcxODc1LDM1LjAwMzAwMzM5NTI3NjcyXV0sMTU6W1stMTYxLDE4LjQ4OTE3XSxbLTE1MywyMi41MjVdXSwxNjpbWy0xMTcuMjQ2MDkzNzUsNDEuOTkyMTYwMjMzMzc2Mjk2XSxbLTExMS4wNDk4MDQ2ODc1LDQ5LjAwMTg0MzkxNzk3ODUzXV0sMTc6W1stOTEuNTE2MTEzMjgxMjUsMzYuOTc2MjI2Nzg0NjQwOTZdLFstODcuNTA2MTAzNTE1NjI1LDQyLjUxMjYwMTcxNTczNjY1XV0sMTg6W1stODguMDk5MzY1MjM0Mzc1LDM3Ljc3OTM5ODU3MTMxODc2NV0sWy04NC43OTI0ODA0Njg3NSw0MS43NjMxMTc0NDcwMDU4N11dLDE5OltbLTk2LjY0NjcyODUxNTYyNSw0MC4zODAwMjg0MDI1MTE4NF0sWy05MC4xNDI4MjIyNjU2MjUsNDMuNTAwNzUyNDM1NjkwNF1dLDIwOltbLTEwMi4wNTIwMDE5NTMxMjUsMzYuOTkzNzc4Mzg4NzI1MTc1XSxbLTk0LjU5MjI4NTE1NjI1LDQwLjAxMDc4NzE0MDQ2NTUxXV0sMjE6W1stODkuNTcxNTMzMjAzMTI1LDM2LjUwMDgwNTMxNzYwNDc5XSxbLTgxLjk2ODk5NDE0MDYyNSwzOS4xNTU2MjIzOTM0MjMyNF1dLDIyOltbLTk0LjA1Mzk1NTA3ODEyNSwyOC45MzEyNDY5NzE4NjczMV0sWy04OC44MjQ0NjI4OTA2MjUsMzMuMDI3MDg3NTgwMDI4NzM0XV0sMjM6W1stNzEuMDgxNTQyOTY4NzUsNDMuMDYwODYxMzcxMzQzMjY1XSxbLTY2Ljk1MDY4MzU5Mzc1LDQ3LjQ2NTIzNjIyNDM4MzYzXV0sMjQ6W1stNzkuNDk3MDcwMzEyNSwzNy45MTgyMDExMTk3NjY2MzZdLFstNzUuMDU4NTkzNzUsMzkuNzI0MDg4NTc3MzMzN11dLDI1OltbLTczLjUwOTUyMTQ4NDM3NSw0MS4yNDQ3NzIzNDMwODIwNzZdLFstNjkuOTM4OTY0ODQzNzUsNDIuODkyMDY0MTg4MDczMzZdXSwyNzpbWy05Ny4yMzk5OTAyMzQzNzUsNDMuNTAwNzUyNDM1NjkwNF0sWy04OS40OTQ2Mjg5MDYyNSw0OS4zODk1MjQ0NTE1ODIxNl1dLDI4OltbLTkxLjY1ODkzNTU0Njg3NSwzMC4xODMxMjE4NDIxOTU1Ml0sWy04OC4wOTkzNjUyMzQzNzUsMzUuMDAzMDAzMzk1Mjc2NzJdXSwyOTpbWy05NS43Nzg4MDg1OTM3NSwzNS45OTU3ODUzODY0MjAzMl0sWy04OS4wOTkxMjEwOTM3NSw0MC42MTM5NTI0NDExNjY1OV1dLDMwOltbLTExNi4wNTk1NzAzMTI1LDQ0LjM2MzEzMzExMzgwNzcyXSxbLTEwNC4wNDA1MjczNDM3NSw0OS4wMDE4NDM5MTc5Nzg1M11dLDMxOltbLTEwNC4wNjI1LDQwLjAwMjM3MTkzNTg3NjQ4XSxbLTk1LjMxNzM4MjgxMjUsNDMuMDA0NjQ3MTI3Nzk0NDRdXSwzMjpbWy0xMjAuMDE0NjQ4NDM3NSwzNS4wMDMwMDMzOTUyNzY3Ml0sWy0xMTQuMDQ5MDcyMjY1NjI1LDQyLjAwODQ4OTAxNTcyMzk5NV1dLDMzOltbLTcyLjU2NDY5NzI2NTYyNSw0Mi42OTg1ODU4OTE2OTg0M10sWy03MC43MDgwMDc4MTI1LDQ1LjMwNTgwMjU5OTQzNTc2NV1dLDM0OltbLTc1LjU2Mzk2NDg0Mzc1LDM4LjkzMzc3NTUyODE5NzIzXSxbLTczLjg5NDA0Mjk2ODc1LDQxLjM2MDMxODY2MzA2NzA5XV0sMzU6W1stMTA5LjA1MDI5Mjk2ODc1LDMxLjMzNDg3MTAzMzk1MDU5XSxbLTEwMy4wMDc4MTI1LDM3LjAwMjU1MjY3MjE1OTU1XV0sMzY6W1stNzkuNzcxNzI4NTE1NjI1LDQwLjQ5NzA5MjM3MjY5NTY3Nl0sWy03MS44NjE1NzIyNjU2MjUsNDUuMDE5MTg1MDc0MzgxNzddXSwzNzpbWy04NC4zMzEwNTQ2ODc1LDMzLjg1MjE2OTcwMTQwNzQwNV0sWy03NS40NjUwODc4OTA2MjUsMzYuNTg5MDY4MzcxMzk5MTFdXSwzODpbWy0xMDQuMDUxNTEzNjcxODc1LDQ1LjkzNTg3MDYyMTE5MDUzXSxbLTk2LjU1ODgzNzg5MDYyNSw0OS4wMDE4NDM5MTc5Nzg1M11dLDM5OltbLTg0LjgyNTQzOTQ1MzEyNSwzOC40MTA1NTgyNTA5NDYwOF0sWy04MC41Mjk3ODUxNTYyNSw0MS45ODM5OTQyNzA5MzU2MjVdXSw0MDpbWy0xMDMuMDA3ODEyNSwzMy42MjM3NjgwMDExODgxMV0sWy05NC40Mzg0NzY1NjI1LDM3LjAwMjU1MjY3MjE1OTU1XV0sNDE6W1stMTI0LjU2Mjk4ODI4MTI1LDQyLjAwMDMyNTE0ODMxNjIyXSxbLTExNi40NjYwNjQ0NTMxMjUsNDYuMjcxMDM3NDcyODAyNjJdXSw0MjpbWy04MC41Mjk3ODUxNTYyNSwzOS43MjQwODg1NzczMzM3XSxbLTc0LjY5NjA0NDkyMTg3NSw0Mi4yNzczMDg3NzQyMzcxXV0sNDQ6W1stNzEuODcyNTU4NTkzNzUsNDEuMTUzODQyMzU3MTE0NDg1XSxbLTcxLjEyNTQ4ODI4MTI1LDQyLjAyNDgxMzYwNzgxNzc4XV0sNDU6W1stODMuMzUzMjcxNDg0Mzc1LDMyLjAzNjAyMDAzOTczNzU1XSxbLTc4LjU0MTI1OTc2NTYyNSwzNS4yMTg2OTc0OTYzMjg4Nl1dLDQ2OltbLTEwNC4wNjI1LDQyLjQ4ODMwMTk3OTYwMjI4NF0sWy05Ni40Mzc5ODgyODEyNSw0NS45NTExNDk2ODY2OTEzOTRdXSw0NzpbWy05MC4zMTg2MDM1MTU2MjUsMzQuOTg1MDAzMTMwMTcxMDY2XSxbLTgxLjY1MDM5MDYyNSwzNi42ODYwNDEyNzY1ODE5M11dLDQ4OltbLTEwNi42NTUyNzM0Mzc1LDI1LjgzOTQ0OTQwMjA2MzE4XSxbLTkzLjUyNjYxMTMyODEyNSwzNi41MDA4MDUzMTc2MDQ3OV1dLDQ5OltbLTExNC4wNjAwNTg1OTM3NSwzNy4wMDI1NTI2NzIxNTk1NV0sWy0xMDkuMDUwMjkyOTY4NzUsNDIuMDA4NDg5MDE1NzIzOTk1XV0sNTA6W1stNzMuNDQzNjAzNTE1NjI1LDQyLjczMDg3NDI3OTI4NDg1XSxbLTcxLjQ2NjA2NDQ1MzEyNSw0NS4wMTkxODUwNzQzODE3N11dLDUxOltbLTgzLjY4Mjg2MTMyODEyNSwzNi41NDQ5NDk0NDE0ODMyMjZdLFstNzUuMjQ1MzYxMzI4MTI1LDM5LjQ3MDEyNTEyMjM1ODE4XV0sNTM6W1stMTI0LjczODc2OTUzMTI1LDQ1LjU0NDgzMTQ5MjQyNDYzNV0sWy0xMTYuOTE2NTAzOTA2MjUsNDkuMDA5MDUwODA5MzgyMDQ2XV0sNTQ6W1stODIuNjUwMTQ2NDg0Mzc1LDM3LjIwNDA4MTU1NTg5ODUyNl0sWy03Ny43MjgyNzE0ODQzNzUsNDAuNjM4OTY3MzQzODE3MjNdXSw1NTpbWy05Mi44ODk0MDQyOTY4NzUsNDIuNDk2NDAyOTQwOTM3MDZdLFstODYuODEzOTY0ODQzNzUsNDcuMDc3NjA0MTE3MTU5NjRdXSw1NjpbWy0xMTEuMDYwNzkxMDE1NjI1LDQxLjAwNDc3NTQyMjIyOTVdLFstMTA0LjA2MjUsNDUuMDExNDE4NjQyMjc3MjhdXSw3MjpbWy02Ny45NTA0Mzk0NTMxMjUsMTcuODg0NjU5MTc5NTQyODFdLFstNjUuMjI1ODMwMDc4MTI1LDE4LjUyMTI4MzMyNTQ5NjI4NV1dLFwiMDZcIjpbWy0xMjQuNDA5MTc5Njg3NSwzMi41Mzc1NTE3NDY3NjldLFstMTE0LjEzNjk2Mjg5MDYyNSw0Mi4wMTY2NTE4MzU1NjgyNF1dLFwiMDRcIjpbWy0xMTQuODE4MTE1MjM0Mzc1LDMxLjMzNDg3MTAzMzk1MDU5XSxbLTEwOS4wNTAyOTI5Njg3NSwzNy4wMDI1NTI2NzIxNTk1NV1dLFwiMDhcIjpbWy0xMDkuMDYxMjc5Mjk2ODc1LDM2Ljk5Mzc3ODM4ODcyNTE3NV0sWy0xMDIuMDUyMDAxOTUzMTI1LDQxLjAwNDc3NTQyMjIyOTVdXSxcIjA1XCI6W1stOTQuNjI1MjQ0MTQwNjI1LDMzLjAwODY2MzQ5NDU3NTU4Nl0sWy04OS42NDg0Mzc1LDM2LjUwMDgwNTMxNzYwNDc5XV0sXCIwMVwiOltbLTg4LjQ4Mzg4NjcxODc1LDMwLjIzMDU5NDU2NDkzMjE5XSxbLTg0LjkwMjM0Mzc1LDM1LjAxMjAwMjA0MzE2MDcwNl1dLFwiMDlcIjpbWy03My43MjkyNDgwNDY4NzUsNDAuOTg4MTkxNTYzNDkzOTNdLFstNzEuNzk1NjU0Mjk2ODc1LDQyLjA1NzQ1MDIyMDI0NjgxXV0sXCIwMlwiOltbLTE5MC41MzksNTMuMTM1XSxbLTExNiw3MS4xMzldXSwyNjpbWy05MC41MTEsNDEuNjgzXSxbLTgyLjQzMyw0OC4yNV1dfTtcbiAgICBjb25zdCBjZW5zdXNLZXkgPSAnM2E4MmEwYmYxMjE5ZmIyZmIwOTYyNzYzYmIxNTgyYzU5NTFmODU2NicsXG4gICAgICAgICAgbWFwQm91bmRzID0ge1xuICAgICAgICAgICAgbG93ZXI0ODogW1xuICAgICAgICAgICAgICBbLTEyNS45NDgyMzIyNDUyNjAxNywgMjRdLCAvLyA2MC41MTYgZGVnIHdpZGUgYnkgMjYuOTA4IGRlZyBoaWdoXG4gICAgICAgICAgICAgIFstNjUuNDMyNTU1OTQ3MTU3MTMsIDUwLjA1MzYwMDI0MTQ2MzI3XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICcwMic6IHN0YXRlQm91bmRzW1wiMDJcIl0sXG4gICAgICAgICAgICAnMTUnOiBzdGF0ZUJvdW5kc1sxNV0gXG4gICAgICAgICAgfTtcblxuICAgIGNvbnN0IG1hcENvbG9yQnVja2V0cyA9IDEwO1xuXG4gICAgY29uc3QgbWFwT3B0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwLTAnLFxuICAgICAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2xpZ2h0LXY5JyxcbiAgICAgICAgICAgIGJvdW5kczogW1xuICAgICAgICAgICAgICBbLTEyNS45NDgyMzIyNDUyNjAxNywgMjRdLCAvLyA2MC41MTYgZGVnIHdpZGUgYnkgMjYuOTA4IGRlZyBoaWdoXG4gICAgICAgICAgICAgIFstNjUuNDMyNTU1OTQ3MTU3MTMsIDUwLjA1MzYwMDI0MTQ2MzI3XVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAtMScsXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvbGlnaHQtdjknLFxuICAgICAgICAgICAgYm91bmRzOiAnMDInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ21hcC0yJyxcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9saWdodC12OScsXG4gICAgICAgICAgICBib3VuZHM6ICcxNScgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG1iSGVscGVyID0ge1xuICAgICAgICBwcm9taXNlczoge30sXG4gICAgICAgIGFkZFNvdXJjZUFuZExheWVycyhzb3VyY2VPcHRpb25zLGxheWVyT3B0aW9uc0FycmF5KXsgLy8gdGhpcyA9IG1hcFxuICAgICAgICAgICAgdmFyIHNvdXJjZU5hbWUgPSBzb3VyY2VPcHRpb25zLm5hbWU7XG4gICAgICAgICAgICBtYkhlbHBlci5wcm9taXNlc1tzb3VyY2VPcHRpb25zLm5hbWVdID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsgLy8gVE8gRE86IGZpZ3VyZSBvdXQgcmVqZWN0P1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2VPcHRpb25zLm5hbWU7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tEYXRhTG9hZGVkKCl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5nZXRTb3VyY2Uoc291cmNlTmFtZSkgKXsgLy8gaWYgYWRkU291cmNlIGJlbG93IGhhcyB0YWtlbiBlZmZlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZigncmVuZGVyJywgY2hlY2tEYXRhTG9hZGVkKTsgLy8gYW5kIHR1cm4gb2ZmIHRoZSBsaXN0ZW5lciBmb3IgcmVuZGVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vbigncmVuZGVyJywgY2hlY2tEYXRhTG9hZGVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNvdXJjZShzb3VyY2VOYW1lLCBzb3VyY2VPcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGxheWVyUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBtYkhlbHBlci5wcm9taXNlc1tzb3VyY2VOYW1lXS50aGVuKCgpID0+IHsgLy8gR0VUIFRISVMgVE8gUkVUVVJOIEEgUFJPTUlTRS5BTEwgRk9SIFRIRSBMQVlFUlNcbiAgICAgICAgICAgICAgICBsYXllck9wdGlvbnNBcnJheS5mb3JFYWNoKChlYWNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyUHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7IC8vIFRPIERPOiBmaWd1cmUgb3V0IHJlamVjdD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVmb3JlTGF5ZXIgPSBlYWNoLmJlZm9yZUxheWVyID8gZWFjaC5iZWZvcmVMYXllciA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlYWNoLmJlZm9yZUxheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhY2guc291cmNlID0gc291cmNlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0xheWVyTG9hZGVkKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5nZXRMYXllcihlYWNoLmlkKSApeyAvLyBpZiBhZGRMYXllciBiZWxvdyBoYXMgdGFrZW4gZWZmZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmYoJ3JlbmRlcicsIGNoZWNrTGF5ZXJMb2FkZWQpOyAvLyBhbmQgdHVybiBvZmYgdGhlIGxpc3RlbmVyIGZvciByZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uKCdyZW5kZXInLCBjaGVja0xheWVyTG9hZGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExheWVyKGVhY2gsIGJlZm9yZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGxheWVyUHJvbWlzZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWFwVmlldyA9IHtcbiAgICAgICAgbWFwczogW10sXG4gICAgICAgIGluaXQoKXtcbiAgICAgICAgICAgIHNldFN1YnMoW1xuICAgICAgICAgICAgICAgIFsnYWN0aXZlU3RhdGVGUCcsIG1hcFZpZXcuem9vbUluTWFwSGFuZGxlcl0sXG4gICAgICAgICAgICAgICAgWydhY3RpdmVNYXAnLCBtYXBWaWV3Lnpvb21Jbk1hcEhhbmRsZXJdLFxuICAgICAgICAgICAgICAgIFsnYWN0aXZlU3RhdGVGUCcsIG1hcFZpZXcudXBkYXRlTGVnZW5kXSxcbiAgICAgICAgICAgICAgICBbJ2xlZ2VuZFNjYWxlJywgbWFwVmlldy5jaGFuZ2VMZWdlbmRTY2FsZV0sXG4gICAgICAgICAgICAgICAgWydob2xkQ291bnR5JywgbWFwVmlldy5ob2xkQ291bnR5XVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLXZpZXctd3JhcHBlcicpO1xuICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtdmlldycpO1xuICAgICAgICAgICAgdGhpcy5jaGVja01hcFZpZXdBc3BlY3QoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaG9sZENvdW50eShtc2csZGF0YSl7XG4gICAgICAgICAgICBpZiAoIGRhdGEgKXtcbiAgICAgICAgICAgICAgICBtYXBWaWV3Lm1hcHMuZm9yRWFjaChtYXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXAub2ZmKCdtb3VzZW1vdmUnLCAnY291bnRpZXMnLCBtYXBWaWV3LmNvdW50eU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5vZmYoJ21vdXNlbGVhdmUnLCAnY291bnRpZXMnLCBtYXBWaWV3LmNvdW50eU1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgICAgICAgICBtYXAub2ZmKCdtb3VzZXVwJywgJ2NvdW50aWVzJywgbWFwVmlldy5jb3VudHlNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QoJyNtYXAtdmlldy13cmFwcGVyJykub24oJ21vdXNldXAnLCByZWxlYXNlQ2xpY2spO1xuICAgICAgICAgICAgICAgIG1hcFZpZXcuc2hvd01lc3NhZ2UoJyZuYnNwO1JpZ2h0IGNsaWNrIGFnYWluIHRvIHJlbGVhc2Ugc2VsZWN0aW9uJm5ic3A7Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWxlYXNlIGNvdW50eScpO1xuICAgICAgICAgICAgICAgIG1hcFZpZXcuc2hvd01lc3NhZ2UoJycpO1xuICAgICAgICAgICAgICAgIG1hcFZpZXcuY291bnR5TW91c2VMZWF2ZSgpO1xuICAgICAgICAgICAgICAgIG1hcFZpZXcubWFwcy5mb3JFYWNoKG1hcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5vbignbW91c2Vtb3ZlJywgJ2NvdW50aWVzJywgbWFwVmlldy5jb3VudHlNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICBtYXAub24oJ21vdXNlbGVhdmUnLCAnY291bnRpZXMnLCBtYXBWaWV3LmNvdW50eU1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgICAgICAgICBtYXAub24oJ21vdXNldXAnLCAnY291bnRpZXMnLCBtYXBWaWV3LmNvdW50eU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCgnI21hcC12aWV3LXdyYXBwZXInKS5vbignbW91c2V1cCcsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVsZWFzZUNsaWNrKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZDMuZXZlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChkMy5ldmVudC5idXR0b24gPT09IDIgKSB7IC8vIGllIGlzIGEgcmlnaHQgY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2hvbGRDb3VudHknLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzaG93TWVzc2FnZShtZXNzYWdlKXtcbiAgICAgICAgICAgIHNpZGViYXJWaWV3LmZhZGVJbkhUTUwuY2FsbChkMy5zZWxlY3QoJyNtZXNzYWdlJyksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdGlhbGl6ZU1hcChvcHRpb25zLCBpLCByZXNvbHZlKXtcbiAgICAgICAgICAgIHZhciB7Y29udGFpbmVyLHN0eWxlLGJvdW5kc30gPSBvcHRpb25zO1xuICAgICAgICAgICAgdmFyIG1heEJvdW5kcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgYm91bmRzID09PSAnb2JqZWN0JyApeyAvLyBhY3R1YWxseSBhbiBhcnJheSBidXQgdHlwZW9mIDxhcnJheT4gPT09IG9iamVjdFxuICAgICAgICAgICAgICAgIG1heEJvdW5kcyA9IGJvdW5kcztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgbWF4Qm91bmRzID0gbWFwQm91bmRzW2JvdW5kc107IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnYm91bmRzIG5vdCBjb3JyY3QgdHlwZTogc2hvdWxkIGJlIGxuZy9sYXQgYXJyYXkgb3Igc3RyaW5nIGtleSB0byBtYXBCb3VuZHMgb2JqZWN0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYk9wdGlvbnMgPSB7Y29udGFpbmVyLHN0eWxlLG1heEJvdW5kc307IC8vIEVTNiBzaG9ydGhhbmRcblxuICAgICAgICAgICAgdGhpcy5tYXBzW2ldID0gbmV3IG1hcGJveGdsLk1hcChtYk9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5tYXBzW2ldLm9yaWdpbmFsT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLm1hcHNbaV0uaW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy5tYXBzW2ldLm9uKCdsb2FkJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICB9LFxuICAgICAgICByZXNpemVNYXBzKCl7XG4gICAgICAgICAgICB0aGlzLm1hcHMuZm9yRWFjaChmdW5jdGlvbihlYWNoKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlYWNoLmZpdEJvdW5kcyhlYWNoLmdldE1heEJvdW5kcygpKTtcbiAgICAgICAgICAgICAgIC8vIG1hcFZpZXcuc2V0T3JpZ2luYWxDZW50ZXJBbmRab29tKGVhY2gpOyAvLyBUSElTIE1BWSBCRSBUUklHR0VSSU5HIEJFRk9SRSBUSEUgWk9PTSBFTkRTXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tNYXBWaWV3QXNwZWN0KCl7XG4gICAgICAgICAgICB2YXIgd3JhcHBlckhlaWdodCA9IHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgd3JhcHBlcldpZHRoID0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgaWYgKCB3cmFwcGVySGVpZ2h0IDwgMC44MTMgKiB3cmFwcGVyV2lkdGggKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5tYXhXaWR0aCA9IDEuMjMgKiB3cmFwcGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAvL3RoaXMubWFwc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLm1heFdpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXR1cCh2YWx1ZXMpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhdGVEYXRhID0gdmFsdWVzWzBdLFxuICAgICAgICAgICAgICAgIGNvdW50eURhdGEgPSB2YWx1ZXNbMV07XG4gICAgICAgICAgICBtYXBWaWV3LmNvdW50eURhdGUgPSBjb3VudHlEYXRhO1xuICAgICAgICAgICAgY3JlYXRlU3RvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIGNyZWF0ZUxlZ2VuZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgbWFwVmlldy5tYXBzLmZvckVhY2goZWFjaCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRNYXBTZXR1cChlYWNoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdG9wcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFJhbmdlID0gcmV0dXJuUmFuZ2UobWFwQ29sb3JCdWNrZXRzIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWdlbmRSYW5nZSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwUmFuZ2UuZm9yRWFjaCgodmFsdWUsaSwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICggaSAlIDIgPT09IDAgfHwgaSA9PT0gYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZ2VuZFJhbmdlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbWFwVmlldy5zY2FsZVN0YXRlID0gZDMuc2NhbGVRdWFudGlsZSgpLmRvbWFpbihzdGF0ZURhdGEubWFwKGZ1bmN0aW9uKHJvdyl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcm93LkRQMDNfMDA5OVBFO1xuICAgICAgICAgICAgICAgIH0pKS5yYW5nZSh0aGlzLm1hcFJhbmdlKTtcbiAgICAgICAgICAgICAgICBtYXBWaWV3LnNjYWxlQ291bnR5ID0gZDMuc2NhbGVRdWFudGlsZSgpLmRvbWFpbihjb3VudHlEYXRhLm1hcChmdW5jdGlvbihyb3cpe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdy5EUDAzXzAwOTlQRTtcbiAgICAgICAgICAgICAgICB9KSkucmFuZ2UodGhpcy5tYXBSYW5nZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjYWxlU3RhdGUgPSBtYXBWaWV3LnNjYWxlU3RhdGU7XG5cbiAgICAgICAgICAgICAgICBtYXBWaWV3LnN0YXRlU3RvcHMgPSBbW1wiMFwiLCBcInJnYigxMDAsMTAwLDEwMClcIl1dO1xuICAgICAgICAgICAgICAgIG1hcFZpZXcuY291bnR5U3RvcHMgPSB7XG4gICAgICAgICAgICAgICAgICBzdHJpbmc6IFtbXCIwXCIsIFwicmdiKDEwMCwxMDAsMTAwKVwiXV0sXG4gICAgICAgICAgICAgICAgICBudW1lcmljOiBbWzAsIFwicmdiKDEwMCwxMDAsMTAwKVwiXV1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc3RhdGVEYXRhLmZvckVhY2goKHJvdykgPT4geyAvLyBzdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gZDMuaW50ZXJwb2xhdGVZbE9yQnIobWFwVmlldy5zY2FsZVN0YXRlKHJvdy5EUDAzXzAwOTlQRSkpO1xuICAgICAgICAgICAgICAgICAgICBtYXBWaWV3LnN0YXRlU3RvcHMucHVzaChbcm93LnN0YXRlLCBjb2xvcl0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvdW50eURhdGEuZm9yRWFjaCgocm93KSA9PiB7IC8vIGNvdW50aWVzXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IGQzLmludGVycG9sYXRlWWxPckJyKG1hcFZpZXcuc2NhbGVDb3VudHkocm93LkRQMDNfMDA5OVBFKSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCByb3cuc3RhdGVbMF0gPT09ICcwJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBWaWV3LmNvdW50eVN0b3BzLnN0cmluZy5wdXNoKFsocm93LnN0YXRlICsgcm93LmNvdW50eSksIGNvbG9yXSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZpZXcuY291bnR5U3RvcHMubnVtZXJpYy5wdXNoKFsrKHJvdy5zdGF0ZSArIHJvdy5jb3VudHkpLCBjb2xvcl0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5SYW5nZShuKXsgLy8gY3JlYXRlcyBhIGRpc2NyZXRlIHNldCBvZiBzdG9wcyBiZXR3ZWVuIDAgYW5kIDEgKGluY2x1c2l2ZSkgYmFzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhlIG51bWJlciBvZiBjb2xvckJ1Y2tldHMgc3BlY2lmaWVkIHVwIHRvcC4gdXNlZCBhcyB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJhbmdlIGluIHRoZSBkMy5zY2FsZSBmdW5jdGlvbiwgd2hpY2ggaXMgdGhlbiBpbnRlcnBvbGF0ZWQgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yIHNjYWxlXG4gICAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8PSBuOyBpKysgKXtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCggTWF0aC5yb3VuZCggKDEwIC8gKG4pICogaSAvIDEwKSAqIDEwMCApIC8gMTAwICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVMZWdlbmQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZ2VuZCA9IGQzLnNlbGVjdCgnI2xlZ2VuZCcpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGxlZ2VuZCA9IHRoaXMubGVnZW5kO1xuXG4gICAgICAgICAgICAgICAgbGVnZW5kICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ2gyJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywnbGVnZW5kLXRpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoJ1BlcmNlbnRhZ2Ugd2l0aG91dCBoZWFsdGggaW5zdXJhbmNlJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGVnZW5kRGl2cyA9IGxlZ2VuZFxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCdsZWdlbmREaXYnKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YSh0aGlzLmxlZ2VuZFJhbmdlLnNsaWNlKDAsLTEpKVxuICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdmbGV4IGVuZCcpO1xuXG4gICAgICAgICAgICAgICAgbGVnZW5kRGl2cy5hcHBlbmQoJ3NwYW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCdsZWdlbmQta2V5JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3N0eWxlJywgKGQsaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiAke2QzLmludGVycG9sYXRlWWxPckJyKGQpfTsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCR7ZDMuaW50ZXJwb2xhdGVZbE9yQnIoZCl9LCAke2QzLmludGVycG9sYXRlWWxPckJyKHRoaXMubGVnZW5kUmFuZ2VbaSArIDFdKX0pOyAvKiBGb3IgU2FmYXJpIDUuMSB0byA2LjAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCR7ZDMuaW50ZXJwb2xhdGVZbE9yQnIoZCl9LCAke2QzLmludGVycG9sYXRlWWxPckJyKHRoaXMubGVnZW5kUmFuZ2VbaSArIDFdKX0pOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCR7ZDMuaW50ZXJwb2xhdGVZbE9yQnIoZCl9LCAke2QzLmludGVycG9sYXRlWWxPckJyKHRoaXMubGVnZW5kUmFuZ2VbaSArIDFdKX0pOyAvKiBGb3IgRmlyZWZveCAzLjYgdG8gMTUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2QzLmludGVycG9sYXRlWWxPckJyKGQpfSAsICR7ZDMuaW50ZXJwb2xhdGVZbE9yQnIodGhpcy5sZWdlbmRSYW5nZVtpICsgMV0pfSk7YDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxlZ2VuZFNwYW5zID0gbGVnZW5kRGl2cy5hcHBlbmQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxlZ2VuZCgpOyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlTGVnZW5kKG1zZyxkYXRhKXtcbiAgICAgICAgICAgIGlmICggbXNnID09PSAnYWN0aXZlU3RhdGVGUCcgJiYgZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSAnbnVsbCcgKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2xlZ2VuZFNjYWxlJywgJ2NvdW50eScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgnbGVnZW5kU2NhbGUnLCAnc3RhdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlTGVnZW5kU2NhbGUobXNnLGRhdGEpe1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcjbGVnZW5kJykubm9kZSgpLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZC1maW5pc2hlZCcpO1xuICAgICAgICAgICAgdmFyIHNjYWxlID0gZGF0YSA9PT0gJ2NvdW50eScgPyBtYXBWaWV3LnNjYWxlQ291bnR5IDogbWFwVmlldy5zY2FsZVN0YXRlO1xuICAgICAgICAgICAgc2lkZWJhclZpZXcuZmFkZUluSFRNTC5jYWxsKG1hcFZpZXcubGVnZW5kU3BhbnMsIGZ1bmN0aW9uKGQsaSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImxlZ2VuZC1pdGVtLW1pblwiPicgKyBkMy5mb3JtYXQoJywuMWYnKShzY2FsZS5pbnZlcnRFeHRlbnQoZClbMF0pICsgJzwvc3Bhbj4mbmRhc2g7PHNwYW4gY2xhc3M9XCJsZWdlbmQtaXRlbS1tYXhcIj4nICsgZDMuZm9ybWF0KCcsLjFmJykoc2NhbGUuaW52ZXJ0RXh0ZW50KG1hcFZpZXcubWFwUmFuZ2VbaSAqIDIgKyAxXSlbMV0pICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkMy5zZWxlY3QoJyNsZWdlbmQnKS5ub2RlKCkucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdsb2FkLWZpbmlzaGVkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldE9yaWdpbmFsQ2VudGVyQW5kWm9vbShtYXApe1xuICAgICAgICAgICAgbWFwLm9yaWdpbmFsQ2VudGVyID0gbWFwLmdldENlbnRlcigpO1xuICAgICAgICAgICAgbWFwLm9yaWdpbmFsWm9vbSA9IG1hcC5nZXRab29tKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNoYXJlZE1hcFNldHVwKG1hcCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcC5kcmFnUm90YXRlLmRpc2FibGUoKTtcbiAgICAgICAgICAgIG1hcC50b3VjaFpvb21Sb3RhdGUuZGlzYWJsZVJvdGF0aW9uKCk7XG4gICAgICAgICAgICBtYXBWaWV3LnNldE9yaWdpbmFsQ2VudGVyQW5kWm9vbShtYXApO1xuICAgICAgICAgICAgZWRpdFJvYWRMYXllcnMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICBtYkhlbHBlci5hZGRTb3VyY2VBbmRMYXllcnMuY2FsbChtYXAsXG4gICAgICAgICAgICAgICAgeyAvLyBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmVjdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwibWFwYm94Oi8vbWFwYm94LnVzX2NlbnN1c19zdGF0ZXNfMjAxNVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0ZXNcIlxuICAgICAgICAgICAgICAgIH0sIFsgLy8gbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJzdGF0ZXMtam9pblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2UtbGF5ZXJcIjogJ3N0YXRlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhaW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsLWNvbG9yXCI6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJlZm9yZUxheWVyXCI6IFwid2F0ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwic3RhdGVzLWpvaW4taG92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlLWxheWVyXCI6ICdzdGF0ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWNvbG9yXCI6ICcjNEQ5MEZFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtd2lkdGhcIjogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtYmx1clwiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJcIjogW1wiPT1cIiwgXCJuYW1lXCIsIFwiXCJdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWJIZWxwZXIuYWRkU291cmNlQW5kTGF5ZXJzLmNhbGwobWFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyAvLyBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2ZWN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcIm1hcGJveDovL21hcGJveC44MnBrcTkzZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdW50aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFsgLy8gbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNvdW50aWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmaWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBcImNvdW50aWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZS1sYXllclwiOiBcIm9yaWdpbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhaW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGwtb3V0bGluZS1jb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbC1jb2xvclwiOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJlZm9yZUxheWVyXCI6IFwid2F0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyXCI6IFtcIj09XCIsIFwiRklQU1wiLCBcIlwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiY291bnRpZXMtaG92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwiY291bnRpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlLWxheWVyXCI6IFwib3JpZ2luYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFpbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWNvbG9yXCI6ICcjNTg0ZGZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZS13aWR0aFwiOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWJsdXJcIjogMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVMYXllclwiOiBcIndhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlclwiOiBbXCI9PVwiLCBcIkZJUFNcIiwgXCJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hsb3JvTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCgnIycgKyBtYXAub3JpZ2luYWxPcHRpb25zLmNvbnRhaW5lciArICcgLmxvYWQtb3ZlcmxheScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdsb2FkLWZpbmlzaGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vdXNlRXZlbnRzKCl7XG5cbiAgICAgICAgICAgICAgICBtYXAub24oJ21vdXNlbW92ZScsICdzdGF0ZXMtam9pbicsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXAuc2V0RmlsdGVyKFwic3RhdGVzLWpvaW4taG92ZXJcIiwgW1wiPT1cIiwgXCJTVEFURUZQXCIsIGUuZmVhdHVyZXNbMF0ucHJvcGVydGllcy5TVEFURUZQXSk7ICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtYXAub24oJ21vdXNlbGVhdmUnLCAnc3RhdGVzLWpvaW4nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXRGaWx0ZXIoXCJzdGF0ZXMtam9pbi1ob3ZlclwiLCBbXCI9PVwiLCBcIlNUQVRFRlBcIiwgXCJcIl0pOyAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbWFwLm9uKCdjbGljaycsICdzdGF0ZXMtam9pbicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSgnYWN0aXZlTWFwJywgbWFwLmluZGV4KTsgLy8gc3RhdGVNb2R1bGUgb25seSBwdWJsaXNoZXMgaWYgc3RhdGUgaXMgbmV3LCBubyBuZWVkIGZvciBpZiBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBnZXRTdGF0ZSgnYWN0aXZlU3RhdGVGUCcpICE9PSBlLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMuU1RBVEVGUCApIHsgLy8gaWYgc3RhdGVtZW50IG5lZWRlZCBoZXJlIGIvYyBjbGljayBvbiBhbHJlYWR5IGFjdGl2ZSBzdGF0ZSByZXF1aXJlcyBzcGVjaWFsIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSgnYWN0aXZlU3RhdGVGUCcsIGUuZmVhdHVyZXNbMF0ucHJvcGVydGllcy5TVEFURUZQICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIGNsaWNrIG9uIGFscmVhZHkgYWN0aXZlL3pvb21lZCBVUyBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2FjdGl2ZVN0YXRlRlAnLCBudWxsICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRDaGxvcm9MYXllcigpe1xuICAgICAgICAgICAgICAgIG1hcFZpZXcuc3RhdGVGaWxsQWN0aXZlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHlcIjogXCJTVEFURUZQXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2F0ZWdvcmljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInN0b3BzXCI6IG1hcFZpZXcuc3RhdGVTdG9wc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hcFZpZXcuc3RhdGVGaWxsSW5hY3RpdmUgPSBcIiM5NTk1OTVcIjtcbiAgICAgICAgICAgICAgICBtYXBWaWV3LmNvdW50eUZpbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiBcIkZJUFNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRlZ29yaWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcHNcIjogbWFwVmlldy5jb3VudHlTdG9wcy5zdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBtYXAuc2V0UGFpbnRQcm9wZXJ0eSgnc3RhdGVzLWpvaW4nLCAnZmlsbC1jb2xvcicsIG1hcFZpZXcuc3RhdGVGaWxsQWN0aXZlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZWRpdFJvYWRMYXllcnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvYWRMYXllcnMgPSBtYXAuZ2V0U3R5bGUoKS5sYXllcnMuZmlsdGVyKGZ1bmN0aW9uKGVhY2gpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWFjaFsnc291cmNlLWxheWVyJ10gPT09ICdyb2FkJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByb2FkTGF5ZXJzLmZvckVhY2goZWFjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXRQYWludFByb3BlcnR5KGVhY2guaWQsICdsaW5lLW9wYWNpdHknLCAwLjIgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgem9vbUluTWFwSGFuZGxlcihtc2csZGF0YSl7IC8vIG1zZyA9ICdhY3RpdmVTdGF0ZUZQJzsgZGF0YSA9IGFjdGl2ZVN0YXRlRlAgT1IgJ2FjdGl2ZU1hcCc7IGFjdGl2ZU1hcFxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnLGRhdGEpOyBcbiAgICAgICAgICAgIHNldFN0YXRlKCdob2xkQ291bnR5JywgZmFsc2UpOyBcbiAgICAgICAgICAgIGlmICggbXNnID09PSAnYWN0aXZlU3RhdGVGUCcgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09ICdudWxsJyApe1xuICAgICAgICAgICAgICAgICAgICB6b29tTWFwQmFja091dChnZXRTdGF0ZSgnYWN0aXZlTWFwJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHpvb21NYXBUb1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIG1zZyA9PT0gJ2FjdGl2ZU1hcCcgJiYgZ2V0UHJldmlvdXNTdGF0ZSgnYWN0aXZlTWFwJykgIT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIHpvb21NYXBCYWNrT3V0KGdldFByZXZpb3VzU3RhdGUoJ2FjdGl2ZU1hcCcpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gem9vbWVuZENlbnRlcigpeyAvLyBgdGhpc2AgPSB0aGUgbWFwXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoJ3pvb21lbmQnLCB6b29tZW5kQ2VudGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZseVRvKHtjZW50ZXI6IHRoaXMub3JpZ2luYWxDZW50ZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHpvb21NYXBCYWNrT3V0KGluZGV4KXtcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gbWFwVmlldy5tYXBzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBtYXAuc2V0RmlsdGVyKFwiY291bnRpZXNcIiwgW1wiPT1cIiwgXCJGSVBTXCIsIFwiXCJdKTtcbiAgICAgICAgICAgICAgICBtYXAuc2V0RmlsdGVyKFwiY291bnRpZXMtaG92ZXJcIiwgWyc9PScsIFwiRklQU1wiLCBcIlwiXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBtYXAuaW5kZXggPiAwICl7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5vbignem9vbWVuZCcsIHpvb21lbmRDZW50ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXAuZml0Qm91bmRzKG1hcC5nZXRNYXhCb3VuZHMoKSk7XG4gICAgICAgICAgICAgICAgbWFwVmlldy5tYXBzLmZvckVhY2goZnVuY3Rpb24oZWFjaCl7XG4gICAgICAgICAgICAgICAgICAgIGVhY2guc2V0UGFpbnRQcm9wZXJ0eSgnc3RhdGVzLWpvaW4nLCAnZmlsbC1jb2xvcicsIG1hcFZpZXcuc3RhdGVGaWxsQWN0aXZlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHpvb21NYXBUb1N0YXRlKCl7XG4gICAgICAgICAgICAgICAgdmFyIG1hcCA9IG1hcFZpZXcubWFwc1tnZXRTdGF0ZSgnYWN0aXZlTWFwJyldO1xuICAgICAgICAgICAgICAgIGlmICggZGF0YVswXSA9PT0gJzAnICl7IC8vZGF0YSBpcyBzdHJpbmc7IGlmIGl0IHN0YXJ0cyB3aXRoIDAgLiAuIC4gXG4gICAgICAgICAgICAgICAgICBtYXAuc2V0UGFpbnRQcm9wZXJ0eSgnY291bnRpZXMnLCAnZmlsbC1jb2xvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHlcIjogXCJGSVBTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRlZ29yaWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9wc1wiOiBtYXBWaWV3LmNvdW50eVN0b3BzLnN0cmluZ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG1hcC5zZXRQYWludFByb3BlcnR5KCdjb3VudGllcycsICdmaWxsLWNvbG9yJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiBcIkZJUFNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNhdGVnb3JpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BzXCI6IG1hcFZpZXcuY291bnR5U3RvcHMubnVtZXJpY1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcFZpZXcubWFwcy5mb3JFYWNoKGZ1bmN0aW9uKGVhY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZWFjaC5zZXRQYWludFByb3BlcnR5KCdzdGF0ZXMtam9pbicsICdmaWxsLWNvbG9yJywgbWFwVmlldy5zdGF0ZUZpbGxJbmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCBtYXAuaW5kZXggPiAwICl7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5vbignem9vbWVuZCcsIHpvb21lbmRDZW50ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlclBhZGRpbmcgPSBtYXAuaW5kZXggPT09IDAgPyAzMCA6IDA7XG4gICAgICAgICAgICAgICAgbWFwLmZpdEJvdW5kcyhzdGF0ZUJvdW5kc1tkYXRhXSwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB3cmFwcGVyUGFkZGluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1hcC5zZXRGaWx0ZXIoXCJjb3VudGllc1wiLCBbXCJhbGxcIixcbiAgICAgICAgICAgICAgICAgIFtcIj5cIiwgXCJGSVBTXCIsIGdldENvdW50eVJhbmdlKGRhdGEpLm1pbl0sXG4gICAgICAgICAgICAgICAgICBbXCI8PVwiLCBcIkZJUFNcIiwgZ2V0Q291bnR5UmFuZ2UoZGF0YSkubWF4XVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG1hcC5vbignbW91c2Vtb3ZlJywgJ2NvdW50aWVzJywgbWFwVmlldy5jb3VudHlNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIG1hcC5vbignbW91c2VsZWF2ZScsICdjb3VudGllcycsIG1hcFZpZXcuY291bnR5TW91c2VMZWF2ZSk7XG4gICAgICAgICAgICAgICAgbWFwLm9uKCdtb3VzZXVwJywgJ2NvdW50aWVzJywgbWFwVmlldy5jb3VudHlNb3VzZVVwKTtcblxuICAgICAgICAgICAgICAgIGlmICggbWFwLmdldFpvb20oKSA8IDIgKSB7XG4gICAgICAgICAgICAgICAgICBtYXAuc2V0Wm9vbSgyKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENvdW50eVJhbmdlKHN0YXRlZnApIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVmcFswXSA9PT0gJzAnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLy8gY291bnR5IEZJUFMgbGVzcyB0aGFuIDEwLDAwMCBzdGFydCB3aXRoIHplcm9lcyBhbmQgYXJlIHN0b3JlZCBhcyBzdHJpbmdzIGluIHNvdXJjZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgbWluOiAnMCcgKyAoICtzdGF0ZWZwLnNsaWNlKDAsMikgKiAxMDAwICksXG4gICAgICAgICAgICAgICAgICAgICAgbWF4OiAnMCcgKyAoICtzdGF0ZWZwLnNsaWNlKDAsMikgKiAxMDAwICsgOTk5IClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAvLyBvdGhlcnMgYXJlIHN0b3JlZCBhcyBudW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgbWluOiAgK3N0YXRlZnAuc2xpY2UoMCwyKSAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4OiAgK3N0YXRlZnAuc2xpY2UoMCwyKSAqIDEwMDAgKyA5OTlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50eU1vdXNlVXAoZSl7XG4gICAgICAgICAgICBpZiAoIGUub3JpZ2luYWxFdmVudC5idXR0b24gPT09IDIgKXtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgnaG9sZENvdW50eScsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb3VudHlNb3VzZU1vdmUoZSl7XG4gICAgICAgICAgICBtYXBWaWV3Lm1vdXNlbW92ZUZpbHRlcihlLCBtYXBWaWV3LmhpZ2hsaWdodENvdW50eSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdXNlbW92ZUZpbHRlcihlLCBmbil7XG4gICAgICAgICAgICBpZiAoICFtYXBWaWV3Lm1vdXNlbW92ZUFjdGl2ZSB8fCBtYXBWaWV3Lm1vdXNlbW92ZUFjdGl2ZSAhPT0gZS5mZWF0dXJlc1swXS5pZCApe1xuICAgICAgICAgICAgICAgIG1hcFZpZXcubW91c2Vtb3ZlQWN0aXZlID0gZS5mZWF0dXJlc1swXS5pZDtcbiAgICAgICAgICAgICAgICBmbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGlnaGxpZ2h0Q291bnR5KGUpIHtcbiAgICAgICAgICAgIHZhciBtYXAgPSBtYXBWaWV3Lm1hcHNbZ2V0U3RhdGUoJ2FjdGl2ZU1hcCcpXTtcbiAgICAgICAgICAgIG1hcC5zZXRGaWx0ZXIoXCJjb3VudGllcy1ob3ZlclwiLCBbXCI9PVwiLCBcIkZJUFNcIiwgZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLkZJUFNdKTtcbiAgICAgICAgICAgIG1hcFZpZXcuc2hvd01lc3NhZ2UoJyZuYnNwO1JpZ2h0IGNsaWNrIHRvIGhvbGQgc2VsZWN0aW9uJm5ic3A7Jyk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbY29udHJvbGxlci5wcm9taXNlcy5kaWN0aW9uYXJ5LCBjb250cm9sbGVyLnByb21pc2VzLmNvdW50eURldGFpbHNdKS50aGVuKCh2YWx1ZXMpID0+e1xuICAgICAgICAgICAgICBzaWRlYmFyVmlldy5oYW5kbGVDaGFydHModmFsdWVzLCBlLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMuRklQUyApO1xuICAgICAgICAgICAgfSk7ICBcbiAgICAgICAgfSxcbiAgICAgICAgY291bnR5TW91c2VMZWF2ZSgpe1xuICAgICAgICAgICAgbWFwVmlldy5tYXBzW2dldFN0YXRlKCdhY3RpdmVNYXAnKV0uc2V0RmlsdGVyKFwiY291bnRpZXMtaG92ZXJcIiwgW1wiPT1cIiwgXCJGSVBTXCIsIFwiXCJdKTtcbiAgICAgICAgICAgIG1hcFZpZXcuc2hvd01lc3NhZ2UoJycpO1xuICAgICAgICAgICAgbWFwVmlldy5tb3VzZW1vdmVBY3RpdmUgPSBudWxsO1xuICAgICAgICAgICAgc2lkZWJhclZpZXcuZ2V0U3RhdGVEZXRhaWxzKCdhY3RpdmVTdGF0ZUZQJywgZ2V0U3RhdGUoJ2FjdGl2ZVN0YXRlRlAnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHNpZGViYXJWaWV3ID0ge1xuICAgICAgICBmYWRlSW5IVE1MKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oc2lkZWJhclZpZXcuZHVyYXRpb24gLyAyKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY091dClcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5odG1sKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZCxpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKHNpZGViYXJWaWV3LmR1cmF0aW9uIC8gMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY091dClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB0cmFuc2l0aW9uOiBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKS5lYXNlKGQzLmVhc2VDdWJpY091dCksXG4gICAgICAgIGNoYXJ0c0FyZUNyZWF0ZWQ6IGZhbHNlLFxuICAgICAgICBpbml0aWFsaXplRHJvcGRvd24oZGF0YSl7XG4gICAgICAgICAgICBzZXRTdWJzKFtcbiAgICAgICAgICAgICAgICBbJ2FjdGl2ZVN0YXRlRlAnLCBmdW5jdGlvbihtc2csZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCgnI3N0YXRlLXNlbGVjdG9yJykubm9kZSgpLnZhbHVlID0gZGF0YTsgXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgWydhY3RpdmVTdGF0ZUZQJywgdGhpcy5nZXRTdGF0ZURldGFpbHNdXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnI3N0YXRlLXNlbGVjdG9yJykubm9kZSgpLm9uY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hpbmdNYXAgPSBtYXBWaWV3Lm1hcHMuZmluZCgobWFwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXAub3JpZ2luYWxPcHRpb25zLmJvdW5kcyA9PT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgbWFwSW5kZXggPSBtYXRjaGluZ01hcCA/IG1hdGNoaW5nTWFwLmluZGV4OiAwO1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKCdhY3RpdmVNYXAnLCBtYXBJbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2FjdGl2ZVN0YXRlRlAnLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkMy5zZWxlY3QoJyNzdGF0ZS1zZWxlY3RvcicpXG4gICAgICAgICAgICAgICAgLnNlbGVjdEFsbCgnc3RhdGVPcHRpb25zJylcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuc3RhdGU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuTkFNRTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZDMuc2VsZWN0KCcjZHJvcGRvd24tZGl2JylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbG9hZC1maW5pc2hlZCcsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTdGF0ZURldGFpbHMobXNnLGRhdGEpeyAvLyB3aGVuIGEgc3RhdGUgaXMgc2VsZWN0ZWQsIG1zZyA9ICdhY3RpdmVTdGF0ZUZQJzsgZGF0YSA9IHN0cmluZ2lmaWVkIGlkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHN0YXRlIGlzIGRlc2VsZWN0ZWQgKHpvb20gYmFjayBvdXQpLCAgbXNnID0gJ2FjdGl2ZVN0YXRlRlAnOyBkYXRhID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIGNoYXJ0cyBhcmUgZmlyc3QgaW5pdGlhbGl6ZWQgdG8gVVMsIG5vIG1zZywgbm8gZGF0YVxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnLCBkYXRhKTtcbiAgICAgICAgICAvKiAgaWYgKCBtc2cgPT09ICdhY3RpdmVTdGF0ZUZQJyAmJiAhZGF0YSApe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcjc2lkZWJhci1ib3R0b20nKS5jbGFzc2VkKCdsb2FkLWZpbmlzaGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCBjb250cm9sbGVyLnByb21pc2VzLmRpY3Rpb25hcnkgPT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucHJvbWlzZXMuZGljdGlvbmFyeSA9IGNvbnRyb2xsZXIucmV0dXJuRGF0YSgnZGF0YS9kYXRhLWRpY3Rpb25hcnkuanNvbicsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggY29udHJvbGxlci5wcm9taXNlcy5jb3VudHlEZXRhaWxzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnByb21pc2VzLmNvdW50eURldGFpbHMgPSBjb250cm9sbGVyLnJldHVybkFDU0RhdGEoXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2FwaS5jZW5zdXMuZ292L2RhdGEvMjAxNS9hY3MvYWNzNS9wcm9maWxlP2dldD1EUDAzXzAwOTVFLERQMDNfMDA5NVBFLERQMDNfMDA5NkUsRFAwM18wMDk2UEUsRFAwM18wMDk3RSxEUDAzXzAwOTdQRSxEUDAzXzAwOThFLERQMDNfMDA5OFBFLERQMDNfMDA5OUUsRFAwM18wMDk5UEUsRFAwM18wMTAwRSxEUDAzXzAxMDBQRSxEUDAzXzAxMDFFLERQMDNfMDEwMVBFLERQMDNfMDEwMkUsRFAwM18wMTAyUEUsRFAwM18wMTAzRSxEUDAzXzAxMDNQRSxEUDAzXzAxMDRFLERQMDNfMDEwNFBFLERQMDNfMDEwNUUsRFAwM18wMTA1UEUsRFAwM18wMTA2RSxEUDAzXzAxMDZQRSxEUDAzXzAxMDdFLERQMDNfMDEwN1BFLERQMDNfMDEwOEUsRFAwM18wMTA4UEUsRFAwM18wMTA5RSxEUDAzXzAxMDlQRSxEUDAzXzAxMTBFLERQMDNfMDExMFBFLERQMDNfMDExMUUsRFAwM18wMTExUEUsRFAwM18wMTEyRSxEUDAzXzAxMTJQRSxEUDAzXzAxMTNFLERQMDNfMDExM1BFLERQMDNfMDExNEUsRFAwM18wMTE0UEUsRFAwM18wMTE1RSxEUDAzXzAxMTVQRSxEUDAzXzAxMTZFLERQMDNfMDExNlBFLERQMDNfMDExN0UsRFAwM18wMTE3UEUsRFAwM18wMTE4RSxEUDAzXzAxMThQRSxOQU1FJmZvcj1jb3VudHk6KiZrZXk9JyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZCl7IHJldHVybiBkLnN0YXRlICsgZC5jb3VudHk7fSBcbiAgICAgICAgICAgICAgICApOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBkYXRhICYmIGRhdGEgIT09ICdudWxsJyApIHsgLy8gaWUgaXMgYSBhY3RpdmVTdGF0ZUZQXG4gICAgICAgICAgICAgICAgaWYgKCBjb250cm9sbGVyLnByb21pc2VzLnN0YXRlRGV0YWlscyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucHJvbWlzZXMuc3RhdGVEZXRhaWxzID0gY29udHJvbGxlci5yZXR1cm5BQ1NEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vYXBpLmNlbnN1cy5nb3YvZGF0YS8yMDE1L2Fjcy9hY3M1L3Byb2ZpbGU/Z2V0PURQMDNfMDA5NUUsRFAwM18wMDk1UEUsRFAwM18wMDk2RSxEUDAzXzAwOTZQRSxEUDAzXzAwOTdFLERQMDNfMDA5N1BFLERQMDNfMDA5OEUsRFAwM18wMDk4UEUsRFAwM18wMDk5RSxEUDAzXzAwOTlQRSxEUDAzXzAxMDBFLERQMDNfMDEwMFBFLERQMDNfMDEwMUUsRFAwM18wMTAxUEUsRFAwM18wMTAyRSxEUDAzXzAxMDJQRSxEUDAzXzAxMDNFLERQMDNfMDEwM1BFLERQMDNfMDEwNEUsRFAwM18wMTA0UEUsRFAwM18wMTA1RSxEUDAzXzAxMDVQRSxEUDAzXzAxMDZFLERQMDNfMDEwNlBFLERQMDNfMDEwN0UsRFAwM18wMTA3UEUsRFAwM18wMTA4RSxEUDAzXzAxMDhQRSxEUDAzXzAxMDlFLERQMDNfMDEwOVBFLERQMDNfMDExMEUsRFAwM18wMTEwUEUsRFAwM18wMTExRSxEUDAzXzAxMTFQRSxEUDAzXzAxMTJFLERQMDNfMDExMlBFLERQMDNfMDExM0UsRFAwM18wMTEzUEUsRFAwM18wMTE0RSxEUDAzXzAxMTRQRSxEUDAzXzAxMTVFLERQMDNfMDExNVBFLERQMDNfMDExNkUsRFAwM18wMTE2UEUsRFAwM18wMTE3RSxEUDAzXzAxMTdQRSxEUDAzXzAxMThFLERQMDNfMDExOFBFLE5BTUUmZm9yPXN0YXRlOioma2V5PScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnIC8vIHJldHVybnMgZGF0YSBuZXN0ZWQgYnkgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgKTsgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW2NvbnRyb2xsZXIucHJvbWlzZXMuZGljdGlvbmFyeSwgY29udHJvbGxlci5wcm9taXNlcy5zdGF0ZURldGFpbHMsIGNvbnRyb2xsZXIucHJvbWlzZXMuY291bnR5RGV0YWlsc10pLnRoZW4oKHZhbHVlcykgPT57XG4gICAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5oYW5kbGVDaGFydHModmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGllIGlzIGluaXRpYWwgY291bnRyeS1sZXZlbCBsb2FkXG4gICAgICAgICAgICAgICBQcm9taXNlLmFsbChbY29udHJvbGxlci5wcm9taXNlcy5kaWN0aW9uYXJ5LCBjb250cm9sbGVyLnByb21pc2VzLlVTRGV0YWlscywgY29udHJvbGxlci5wcm9taXNlcy5jb3VudHlEZXRhaWxzXSkudGhlbigodmFsdWVzKSA9PntcbiAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3LmhhbmRsZUNoYXJ0cyh2YWx1ZXMsICdVUycpO1xuICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2hhcnRzKHZhbHVlcywgY291bnR5KXsgLy8gdmFsdWVzWzBdIGlzIHRoZSBkaWN0aW9uYXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBbMV0gaXMgYW4gb2JqZWN0IG9mIGFycmF5cyBrZXllZCBieSBzdGF0ZSBJRCAoaWUgJzA4JykgT1Igc2luZ2xlIG9iamVjdCBvZiBVUyBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFsyXSBpcyBjb3VudHktbGV2ZWwgZGV0YWlscyB1c2VkIHRvIHNldCBib3VuZHMgXG4gICAgICAgICAgICB2YXIgZGljdGlvbmFyeSA9IHZhbHVlc1swXSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb3VudHlEZXRhaWxzID0gdmFsdWVzWzJdID8gdmFsdWVzWzJdIDogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCAhY291bnR5ICl7XG4gICAgICAgICAgICAgICAgaWYgKCB2YWx1ZXNbMV1bZ2V0U3RhdGUoJ2FjdGl2ZVN0YXRlRlAnKV0gPT09IHVuZGVmaW5lZCApeyAvLyBpZSBkcm9wZG93biBiYWNrIHRvIHNlbGVjdCBzdGF0ZVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEgPSB2YWx1ZXNbMV1bZ2V0U3RhdGUoJ2FjdGl2ZVN0YXRlRlAnKV1bMF07XG4gICAgICAgICAgICAgICAgY2xlYXJDb3VudHlMYWJlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggY291bnR5ID09PSAnVVMnICkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB2YWx1ZXNbMV1bMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB2YWx1ZXNbMV1bY291bnR5XVswXTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb3VudHlMYWJlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCAhdGhpcy5jaGFydHNBcmVDcmVhdGVkICl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFycmF5IG9mIHZhcmlhYmxlIG5hbWVzIHdpdGggdHlwZSAnd2l0aG91dCdcbiAgICAgICAgICAgICAgICB2YXIgbm9JbnN1cmFuY2VWYXJzID0gZGljdGlvbmFyeS5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICd3aXRob3V0JyAmJiB4LnZhcmlhYmxlLmluZGV4T2YoJ1BFJykgIT09IC0xKS5tYXAoeCA9PiB4LnZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYXJyYXkgb2YgdmFyaWFibGUgbmFtZXMgd2l0aCB0eXBlICd3aXRoJ1xuICAgICAgICAgICAgICAgIHZhciB3aXRoSW5zdXJhbmNlVmFycyA9IGRpY3Rpb25hcnkuZmlsdGVyKHggPT4geC50eXBlID09PSAnd2l0aCcgJiYgeC52YXJpYWJsZS5pbmRleE9mKCdQRScpICE9PSAtMSkubWFwKHggPT4geC52YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgdmFyIGluc3VyYW5jZVZhbHVlcyA9IFtbXSxbXV07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnR5RGV0YWlscykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub0luc3VyYW5jZVZhcnMubWFwKGVhY2ggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdXJhbmNlVmFsdWVzWzBdLnB1c2goK2NvdW50eURldGFpbHNba2V5XVswXVtlYWNoXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aXRoSW5zdXJhbmNlVmFycy5tYXAoZWFjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN1cmFuY2VWYWx1ZXNbMV0ucHVzaCgrY291bnR5RGV0YWlsc1trZXldWzBdW2VhY2hdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2lkZWJhclZpZXcubWF4V2l0aG91dCA9IGQzLm1heChpbnN1cmFuY2VWYWx1ZXNbMF0pO1xuICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3Lm1heFdpdGggPSAgICBkMy5tYXgoaW5zdXJhbmNlVmFsdWVzWzFdKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVDaGFydHMoc2lkZWJhclZpZXcubWF4V2l0aG91dCwgc2lkZWJhclZpZXcubWF4V2l0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFydHNBcmVDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjcmVhdGVDaGFydExlZ2VuZCgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoYXJ0cygpO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gZW5kIGlmICggIXRoaXMuY2hhcnRzQXJlQ3JlYXRlZCApXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hhcnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb3VudHlMYWJlbCgpe1xuICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3LmNvdW50eUxhYmVsXG4gICAgICAgICAgICAgICAgICAgIC5kYXR1bShkYXRhKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5mYWRlSW5IVE1MLmNhbGwoc2lkZWJhclZpZXcuY291bnR5TGFiZWwsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5OQU1FICE9PSAnVW5pdGVkIFN0YXRlcycgPyBkLk5BTUUucmVwbGFjZSgvLC4qLywnJykgOiAnJm5ic3A7JztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyQ291bnR5TGFiZWwoKXtcbiAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5mYWRlSW5IVE1MLmNhbGwoc2lkZWJhclZpZXcuY291bnR5TGFiZWwsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJm5ic3A7JztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0cygpe1xuICAgICAgICAgICAgIC8qICAgaWYgKCBzaWRlYmFyVmlldy5pc0luVHJhbnNpdGlvbiApe1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5pc09uSG9sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGNvdW50eSA9PT0gJ1VTJyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ291bnR5TGFiZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5uZXN0ZWQuZm9yRWFjaChmdW5jdGlvbihlYWNoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3W2VhY2gua2V5ICsgJy13aXRob3V0J11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW50ZXJydXB0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5zaG93RGF0YShkLCBkYXRhW2QudmFyaWFibGUucmVwbGFjZSgnRScsJ1BFJyldLCBkYXRhW2QudmFyaWFibGVdLCAnbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oc2lkZWJhclZpZXcudHJhbnNpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKi5vbignc3RhcnQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGkgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3LmlzSW5UcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7c2lkZWJhclZpZXcuc2NhbGUoc2lkZWJhclZpZXcubWF4V2l0aG91dCkgLSBzaWRlYmFyVmlldy5zY2FsZShkYXRhW2QudmFyaWFibGUucmVwbGFjZSgnRScsJ1BFJyldKSB9LCAwKWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2lkZWJhclZpZXcuc2NhbGUoZGF0YVtkLnZhcmlhYmxlLnJlcGxhY2UoJ0UnLCdQRScpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWFjaC52YWx1ZXMuZmluZCh4ID0+IHgudHlwZSA9PT0gJ3ByaXZhdGUnKSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3W2VhY2gua2V5ICsgJy1wdWInXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW50ZXJydXB0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3LnNob3dEYXRhKGQsIGRhdGFbZC52YXJpYWJsZS5yZXBsYWNlKCdFJywnUEUnKV0sIGRhdGFbZC52YXJpYWJsZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihzaWRlYmFyVmlldy50cmFuc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHVibGljVmFsdWUgPSAgZGF0YVtlYWNoLnZhbHVlcy5maW5kKHggPT4geC50eXBlID09PSAncHVibGljJykudmFyaWFibGUucmVwbGFjZSgnRScsJ1BFJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aXRoVmFsdWUgPSAgZGF0YVtlYWNoLnZhbHVlcy5maW5kKHggPT4geC50eXBlID09PSAnd2l0aCcpLnZhcmlhYmxlLnJlcGxhY2UoJ0UnLCdQRScpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3NpZGViYXJWaWV3LnNjYWxlKHNpZGViYXJWaWV3Lm1heFdpdGhvdXQpICsgc2lkZWJhclZpZXcuc2NhbGUod2l0aFZhbHVlIC0gcHVibGljVmFsdWUpfSwgMClgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiBzaWRlYmFyVmlldy5zY2FsZShkYXRhW2QudmFyaWFibGUucmVwbGFjZSgnRScsJ1BFJyldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhclZpZXdbZWFjaC5rZXkgKyAnLXByaXYnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW50ZXJydXB0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3LnNob3dEYXRhKGQsIGRhdGFbZC52YXJpYWJsZS5yZXBsYWNlKCdFJywnUEUnKV0sIGRhdGFbZC52YXJpYWJsZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihzaWRlYmFyVmlldy50cmFuc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCBkID0+IHNpZGViYXJWaWV3LnNjYWxlKGRhdGFbZC52YXJpYWJsZS5yZXBsYWNlKCdFJywnUEUnKV0pICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3W2VhY2gua2V5ICsgJy11bnNwZWNpZmllZCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnRlcnJ1cHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhclZpZXcuc2hvd0RhdGEoe2xhYmVsOidXaXRoIHB1YmxpYyBvciBwcml2YXRlIGluc3VyYW5jZSd9LCAxMDAgLSBkYXRhW2QudmFyaWFibGUucmVwbGFjZSgnRScsJ1BFJyldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oc2lkZWJhclZpZXcudHJhbnNpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiBzaWRlYmFyVmlldy5zY2FsZSgxMDAgLSBkYXRhW2QudmFyaWFibGUucmVwbGFjZSgnRScsJ1BFJyldKSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIC5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggKytpID09PSBhcnJheS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhclZpZXcuaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNpZGViYXJWaWV3LmlzT25Ib2xkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5pc09uSG9sZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZUNoYXJ0cywxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoJyNzaWRlYmFyLWJvdHRvbScpLmNsYXNzZWQoJ2xvYWQtZmluaXNoZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0cygpe1xuXG4gICAgICAgICAgICAgICAgc2lkZWJhclZpZXcuZGVmaW5pdGlvbnNMZWZ0ID0gZDMuc2VsZWN0KCcjc2lkZWJhci1kZWZpbml0aW9ucyAjbGVmdCcpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3LmRlZmluaXRpb25zUmlnaHQgPSBkMy5zZWxlY3QoJyNzaWRlYmFyLWRlZmluaXRpb25zICNyaWdodCcpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3LmNvdW50eUxhYmVsID0gZDMuc2VsZWN0KCcjY291bnR5LWxhYmVsJykuZGF0dW0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciByYW5nZUV4dGVudCA9IHNpZGViYXJWaWV3Lm1heFdpdGhvdXQgKyBzaWRlYmFyVmlldy5tYXhXaXRoO1xuICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yaWVzID0gZGljdGlvbmFyeS5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdjYXRlZ29yeScgJiYgeC52YXJpYWJsZS5pbmRleE9mKCdQRScpID09PSAtMSApO1xuICAgICAgICAgICAgICAgIHZhciBjYXREaXZzID0gZDMuc2VsZWN0KCcjc2lkZWJhci1jaGFydHMnKVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCdjYXRlZ29yaWVzJylcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoY2F0ZWdvcmllcylcbiAgICAgICAgICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignaWQnLCBkID0+IGQudmFyaWFibGUpO1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgIC8qICAgY2F0RGl2cy5hcHBlbmQoJ3AnKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZCgnY2F0ZWdvcnktbGFiZWwnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChkID0+IGQubGFiZWwpOyovXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2F0RGl2cy5lYWNoKGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGQudmFyaWFibGUgIT09IGQuZ3JvdXAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZC5ncm91cCkuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgICAgICB2YXIgc2VyaWVzID0gZGljdGlvbmFyeS5maWx0ZXIoeCA9PiB4LnR5cGUgIT09ICdjYXRlZ29yeScgJiYgeC52YXJpYWJsZS5pbmRleE9mKCdQRScpID09PSAtMSApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3Lm5lc3RlZCA9IGQzLm5lc3QoKVxuICAgICAgICAgICAgICAgICAgICAua2V5KGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5lbnRyaWVzKHNlcmllcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3Lm5lc3RlZC5mb3JFYWNoKGZ1bmN0aW9uKGVhY2gsIGksIGFycmF5KXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodFBlcmNlbnQgPSAxMiwgLy8gYXMgcGVyY2VudGFnZSBvZiB3aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveCA9IGkgPCBhcnJheS5sZW5ndGggLSAxID8gJzAgMCAxMDAgJyArIGhlaWdodFBlcmNlbnQgOiAnMCAwIDEwMCAnICsgKCBoZWlnaHRQZXJjZW50ICsgMTAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbiA9IHt0b3A6NixyaWdodDowLGJvdHRvbToyLGxlZnQ6MH0sIC8vIGluIHBlcmNlbnRhZ2VzIG9mIHRoZSB2aWV3Ym94IHdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IDEwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0SGVpZ2h0ID0gNDtcblxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5zY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLHJhbmdlRXh0ZW50XSkucmFuZ2UoWzAsd2lkdGhdKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZyA9IGQzLnNlbGVjdCgnIycgKyBlYWNoLmtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCAnMTAwJScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigneG1sbnMnLCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndmVyc2lvbicsJzEuMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndmlld0JveCcsIHZpZXdCb3gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBzdmcuYXBwZW5kKFwiZGVmc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInBhdHRlcm5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignaWQnLFwiaGFzaDRfNFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsXCI0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIixcIjRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInBhdHRlcm5Vbml0c1wiLFwidXNlclNwYWNlT25Vc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInBhdHRlcm5UcmFuc2Zvcm1cIixcInJvdGF0ZSg2MClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLFwiMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsXCI0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZSgwLDApXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCIjMmI1MjZmXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIixcIjJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLFwiNFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoMiwwKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiIzNmOThkYVwiKTtcblxuICAgICAgICAgICAgICAgIC8vICAgIHN2Zy5odG1sKFwiPGRlZnM+PHBhdHRlcm4gaWQ9J1BhdHRlcm4nIHg9JzAnIHk9JzAnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+PHJlY3Qgd2lkdGg9JzI1JyBoZWlnaHQ9JzI1JyBmaWxsPScjMmI1MjZmJy8+PGcgdHJhbnNmb3JtPSdyb3RhdGUoNDUpJz48cmVjdCB3aWR0aD0nOTknIGhlaWdodD0nMycgZmlsbD0nIzNmOThkYScgLz48cmVjdCB5PSctNycgd2lkdGg9Jzk5JyBoZWlnaHQ9JzMnIGZpbGw9JyMzZjk4ZGEnLz48L2c+PC9wYXR0ZXJuPjwvZGVmcz5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSAgc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgbWFyZ2luLmxlZnQgKyAnLCcgKyBtYXJnaW4udG9wICsgJyknKTtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoZGljdGlvbmFyeS5maW5kKHggPT4geC52YXJpYWJsZSA9PT0gZWFjaC52YWx1ZXMuZmluZCh4ID0+IHgudHlwZSA9PT0gJ3dpdGhvdXQnKS5ncm91cCkubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgNS41KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsIHNpZGViYXJWaWV3LnNjYWxlKHNpZGViYXJWaWV3Lm1heFdpdGhvdXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwtMiknKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2NhdGVnb3J5LWxhYmVsJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgc2lkZWJhclZpZXcuc2hvd0RlZmluaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBzaWRlYmFyVmlldy5oaWRlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhclZpZXdbZWFjaC5rZXkgKyAnLXdpdGhvdXQnXSAgPSBnLnNlbGVjdEFsbCgnd2l0aG91dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShbZWFjaC52YWx1ZXMuZmluZCh4ID0+IHgudHlwZSA9PT0gJ3dpdGhvdXQnKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ3dpdGhvdXQnLHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NpZGViYXJWaWV3LnNjYWxlKHNpZGViYXJWaWV3Lm1heFdpdGhvdXQpfSwgMClgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcscmVjdEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIHNpZGViYXJWaWV3LmhpZGVEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGVhY2gudmFsdWVzLmZpbmQoeCA9PiB4LnR5cGUgPT09ICdwcml2YXRlJykgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3W2VhY2gua2V5ICsgJy1wcml2J10gPSBnLnNlbGVjdEFsbCgncHJpdmF0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKFtlYWNoLnZhbHVlcy5maW5kKHggPT4geC50eXBlID09PSAncHJpdmF0ZScpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ3ByaXZhdGUnLHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c2lkZWJhclZpZXcuc2NhbGUoc2lkZWJhclZpZXcubWF4V2l0aG91dCl9LCAwKWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLHJlY3RIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIHNpZGViYXJWaWV3LmhpZGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhclZpZXdbZWFjaC5rZXkgKyAnLXB1YiddID0gZy5zZWxlY3RBbGwoJ3B1YmxpYycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKFtlYWNoLnZhbHVlcy5maW5kKHggPT4geC50eXBlID09PSAncHVibGljJyldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZCgncHVibGljJyx0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JyxyZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBzaWRlYmFyVmlldy5oaWRlRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJWaWV3W2VhY2gua2V5ICsgJy11bnNwZWNpZmllZCddID0gZy5zZWxlY3RBbGwoJ3Vuc3BlY2lmaWVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoW2VhY2gudmFsdWVzLmZpbmQoeCA9PiB4LnR5cGUgPT09ICd3aXRob3V0JyldKSAvLyB1c2luZyBgd2l0aG91dGAgZGF0dW0gYnV0IGludmVydCBiZWxvdyB3aXRoIDEwMCAtIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCd1bnNwZWNpZmllZCcsdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzaWRlYmFyVmlldy5zY2FsZShzaWRlYmFyVmlldy5tYXhXaXRob3V0KX0sIDApYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcscmVjdEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLFwidXJsKCNoYXNoNF80KVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBzaWRlYmFyVmlldy5oaWRlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGkgPT09IGFycmF5Lmxlbmd0aCAtIDEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gMjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIDEwMCAlIGluY3JlbWVudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICdJbmNyZW1lbnQgbXVzdCBiZSBmYWN0b3Igb2YgMTAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhBeGlzID0gZy5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCd4LWF4aXMnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMTEpJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGlzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHNpZGViYXJWaWV3LnNjYWxlKHNpZGViYXJWaWV3Lm1heFdpdGhvdXQgKyBzaWRlYmFyVmlldy5tYXhXaXRoICogMC41KSArICcsIDUpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KCd3aXRoIGluc3VyYW5jZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhpcy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBzaWRlYmFyVmlldy5zY2FsZShzaWRlYmFyVmlldy5tYXhXaXRob3V0ICogMC41KSArICcsIDUpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KCd3aXRob3V0IGluc3VyYW5jZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCAoMTAwIC8gaW5jcmVtZW50KTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeEF4aXMuYXBwZW5kKCd0ZXh0JykgLy8gcmlnaHR3YXJkIHRpY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBzaWRlYmFyVmlldy5zY2FsZShzaWRlYmFyVmlldy5tYXhXaXRob3V0ICsgaSAqIGluY3JlbWVudCkgKyAnLCAwKScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnNScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbigpIHsgcmV0dXJuIGkgPT09IDAgPyBpICogaW5jcmVtZW50ICsgJyUnIDogaSAqIGluY3JlbWVudDsgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGkgPiAwICYmIGkgKiAoMTAwIC8gaW5jcmVtZW50KSA8IHNpZGViYXJWaWV3Lm1heFdpdGhvdXQgKSB7IC8vIGxlZnR3YXJkIHRpY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhBeGlzLmFwcGVuZCgndGV4dCcpIC8vIHJpZ2h0d2FyZCB0aWNrc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHNpZGViYXJWaWV3LnNjYWxlKHNpZGViYXJWaWV3Lm1heFdpdGhvdXQgLSBpICogaW5jcmVtZW50KSArICcsIDApJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnNScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGkgKiBpbmNyZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyAvLyBlbmQgbmVzdGVkLmZvckVhY2goLi4uKVxuICAgICAgICAgICAgfSAvLyBlbmQgY3JlYXRlQ2hhcnRzKClcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0TGVnZW5kKCl7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJ0TGVnZW5kU1ZHID0gZDMuc2VsZWN0KCcjc2lkZWJhci1jaGFydHMnKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbGVnZW5kJyx0cnVlKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCAnMjkycHgnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgJzQ0cHgnKTtcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB2YXIgcGF0dGVybiA9IGNoYXJ0TGVnZW5kU1ZHLmFwcGVuZChcImRlZnNcIilcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInBhdHRlcm5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsXCJoYXNoNF80XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLFwiNFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIixcIjRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwicGF0dGVyblVuaXRzXCIsXCJ1c2VyU3BhY2VPblVzZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJwYXR0ZXJuVHJhbnNmb3JtXCIsXCJyb3RhdGUoNjApXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLFwiMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIixcIjRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoMCwwKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCIjMmI1MjZmXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybi5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLFwiMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIixcIjRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoMiwwKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCIjM2Y5OGRhXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoYXJ0TGVnZW5kQ29udGVudCA9IGNoYXJ0TGVnZW5kU1ZHLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoLTExNCwwKScpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoYXJ0TGVnZW5kSXRlbXMgPSBjaGFydExlZ2VuZENvbnRlbnQuc2VsZWN0QWxsKCdsZWdlbmQtaXRlbScpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd3aXRob3V0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1ByaXZhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3ByaXZhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQdWJsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3B1YmxpYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdOb3Qgc3BlY2lmaWVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICd1bnNwZWNpZmllZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICd1cmwoI2hhc2g0XzQpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCxpKSA9PiBgdHJhbnNsYXRlKCR7IDcwICogaSArIDE0NiB9LCAxMClgKTtcblxuICAgICAgICAgICAgICAgICAgICBjaGFydExlZ2VuZEl0ZW1zLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCBkID0+IGQuY2xhc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCAxNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBkLmZpbGwgIT09IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5maWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0TGVnZW5kSXRlbXMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDcsMzApJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChkID0+IGQudGV4dCk7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyBlbmQgc2lkZWJhci5oYW5kbGVDaGFydHMoKVxuICAgICAgICBzaG93RGVmaW5pdGlvbihkKXtcbiAgICAgICAgICAgIHNpZGViYXJWaWV3LmRlZmluaXRpb25zTGVmdFxuICAgICAgICAgICAgICAgIC5kYXR1bShkKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzaWRlYmFyVmlldy5mYWRlSW5IVE1MLmNhbGwoc2lkZWJhclZpZXcuZGVmaW5pdGlvbnNMZWZ0LCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5kZXNjcmlwdGlvbiA/IGA8cCBjbGFzcz1cImRlZmluaXRpb24tbmFtZVwiPiR7ZC5uYW1lfSA8c3BhbiBjbGFzcz1cIkFDUy12YXJpYWJsZVwiPigke2QudmFyaWFibGV9KTwvc3Bhbj48L3A+PHAgY2xhc3M9XCJkZWZpbml0aW9uLWRlc2NyaXB0aW9uXCI+JHtkLmRlc2NyaXB0aW9ufTwvcD5gIDogYDxwIGNsYXNzPVwiZGVmaW5pdGlvbi1uYW1lXCI+JHtkLm5hbWV9PC9wPiA8c3BhbiBjbGFzcz1cIkFDUy12YXJpYWJsZVwiPigke2QudmFyaWFibGV9KTwvc3Bhbj5gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVEZWZpbml0aW9uKCl7XG4gICAgICAgICAgICBzaWRlYmFyVmlldy5mYWRlSW5IVE1MLmNhbGwoc2lkZWJhclZpZXcuZGVmaW5pdGlvbnNMZWZ0LCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzaG93RGF0YShkLHBlcmNlbnQsIHZhbHVlLCBsZWZ0T3JSaWdodCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBkZWZEaXYgPSBsZWZ0T3JSaWdodCA/IHNpZGViYXJWaWV3LmRlZmluaXRpb25zTGVmdCA6IHNpZGViYXJWaWV3LmRlZmluaXRpb25zUmlnaHQ7XG4gICAgICAgICAgICBkZWZEaXYuZGF0dW0oZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNpZGViYXJWaWV3LmZhZGVJbkhUTUwuY2FsbChkZWZEaXYsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IGA8cD4ke2QubGFiZWx9OjxiciAvPiR7cGVyY2VudH0lICgke2QzLmZvcm1hdCgnLCcpKHZhbHVlKX0gcGVvcGxlKTwvcD5gIDogYDxwPiR7ZC5sYWJlbH06PGJyIC8+JHtwZXJjZW50fSU8L3A+YCA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZURhdGEoKXtcbiAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5mYWRlSW5IVE1MLmNhbGwoc2lkZWJhclZpZXcuZGVmaW5pdGlvbnNMZWZ0LCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2lkZWJhclZpZXcuZmFkZUluSFRNTC5jYWxsKHNpZGViYXJWaWV3LmRlZmluaXRpb25zUmlnaHQsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0ge1xuXG4gICAgICAgIGNvbnRyb2xTdGF0ZTogU3RhdGVNb2R1bGUoKSxcbiAgICAgICAgY29udHJvbFN1YnM6IFN1YnNjcmliZU1vZHVsZSgpLFxuICAgICAgICBpbml0KCl7XG4gICAgICAgICAgICB0aGlzLnNldFJleml6ZVdhdGNoZXIoKTtcbiAgICAgICAgICAgIG1hcFZpZXcuaW5pdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnByb21pc2VzID0ge21hcHM6W119O1xuICAgICAgICAgICAgbWFwT3B0aW9ucy5mb3JFYWNoKChvcHRpb25zLCBpKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2VzLm1hcHNbaV0gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAvLyBUTyBETzogZmlndXJlIG91dCByZWplY3Q/XG4gICAgICAgICAgICAgICAgICAgIG1hcFZpZXcuaW5pdGlhbGl6ZU1hcChvcHRpb25zLCBpLCByZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlcy5zdGF0ZURhdGEgPSB0aGlzLnJldHVybkFDU0RhdGEoJ2h0dHBzOi8vYXBpLmNlbnN1cy5nb3YvZGF0YS8yMDE1L2Fjcy9hY3M1L3Byb2ZpbGU/Z2V0PURQMDNfMDA5OVBFLE5BTUUmZm9yPXN0YXRlOioma2V5PScsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZXMuY291bnR5RGF0YSA9IHRoaXMucmV0dXJuQUNTRGF0YSgnaHR0cHM6Ly9hcGkuY2Vuc3VzLmdvdi9kYXRhLzIwMTUvYWNzL2FjczUvcHJvZmlsZT9nZXQ9RFAwM18wMDk5UEUsTkFNRSZmb3I9Y291bnR5Oioma2V5PScsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZXMuVVNEZXRhaWxzID0gdGhpcy5yZXR1cm5BQ1NEYXRhKFxuICAgICAgICAgICAgICAgICdodHRwczovL2FwaS5jZW5zdXMuZ292L2RhdGEvMjAxNS9hY3MvYWNzNS9wcm9maWxlP2dldD1EUDAzXzAwOTVFLERQMDNfMDA5NVBFLERQMDNfMDA5NkUsRFAwM18wMDk2UEUsRFAwM18wMDk3RSxEUDAzXzAwOTdQRSxEUDAzXzAwOThFLERQMDNfMDA5OFBFLERQMDNfMDA5OUUsRFAwM18wMDk5UEUsRFAwM18wMTAwRSxEUDAzXzAxMDBQRSxEUDAzXzAxMDFFLERQMDNfMDEwMVBFLERQMDNfMDEwMkUsRFAwM18wMTAyUEUsRFAwM18wMTAzRSxEUDAzXzAxMDNQRSxEUDAzXzAxMDRFLERQMDNfMDEwNFBFLERQMDNfMDEwNUUsRFAwM18wMTA1UEUsRFAwM18wMTA2RSxEUDAzXzAxMDZQRSxEUDAzXzAxMDdFLERQMDNfMDEwN1BFLERQMDNfMDEwOEUsRFAwM18wMTA4UEUsRFAwM18wMTA5RSxEUDAzXzAxMDlQRSxEUDAzXzAxMTBFLERQMDNfMDExMFBFLERQMDNfMDExMUUsRFAwM18wMTExUEUsRFAwM18wMTEyRSxEUDAzXzAxMTJQRSxEUDAzXzAxMTNFLERQMDNfMDExM1BFLERQMDNfMDExNEUsRFAwM18wMTE0UEUsRFAwM18wMTE1RSxEUDAzXzAxMTVQRSxEUDAzXzAxMTZFLERQMDNfMDExNlBFLERQMDNfMDExN0UsRFAwM18wMTE3UEUsRFAwM18wMTE4RSxEUDAzXzAxMThQRSxOQU1FJmZvcj11czoqJmtleT0nLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7ICAgXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbdGhpcy5wcm9taXNlcy5zdGF0ZURhdGFdKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyVmlldy5pbml0aWFsaXplRHJvcGRvd24odmFsdWVzWzBdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3RoaXMucHJvbWlzZXMuc3RhdGVEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZXMuY291bnR5RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnByb21pc2VzLm1hcHMpXSlcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWVzKT0+e1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWFwVmlldy5zZXR1cCh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzaWRlYmFyVmlldy5nZXRTdGF0ZURldGFpbHMoKTsgLy8gaW5pdGl0aWF0ZXMgdGhlIGNoYXJ0c1xuICAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBzZXRSZXppemVXYXRjaGVyKCl7XG4gICAgICAgICAgICB2YXIgdGltZU91dCA9IG51bGw7XG4gICAgICAgICAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmICh0aW1lT3V0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZU91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpbWVPdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYXBWaWV3LmNoZWNrTWFwVmlld0FzcGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBtYXBWaWV3LnJlc2l6ZU1hcHMoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV0dXJuQUNTRGF0YSh1cmwsIG5lc3RCeSwgY29lcmNlKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGQzLmpzb24odXJsICsgY2Vuc3VzS2V5LCAoZXJyb3IsZGF0YSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJldHVybktleVZhbHVlcyhkYXRhLCBuZXN0QnksIGNvZXJjZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJldHVybkRhdGEodXJsKXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBkMy5qc29uKHVybCwgKGVycm9yLGRhdGEpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV0dXJuS2V5VmFsdWVzKHZhbHVlcywgbmVzdEJ5LCBjb2VyY2UpeyAvLyBjb2VyY2UgPSBCT09MIGNvZXJjZSB0byBudW0gb3Igbm90IFxuICAgICAgICAgICAgdmFyIHVubmVzdGVkID0gdmFsdWVzLnNsaWNlKDEpLm1hcChyb3cgPT4gcm93LnJlZHVjZShmdW5jdGlvbihhY2MsIGN1ciwgaSkgeyAvLyAxLiBwYXJhbXM6IHRvdGFsLCBjdXJyZW50VmFsdWUsIGN1cnJlbnRJbmRleFssIGFycl1cbiAgICAgICAgICAgICAgYWNjW3ZhbHVlc1swXVtpXV0gPSBjb2VyY2UgPT09IHRydWUgPyBpc05hTigrY3VyKSA/IGN1ciA6ICtjdXIgOiBjdXI7IC8vIDMuIC8vIGFjYyBpcyBhbiBvYmplY3QgLCBrZXkgaXMgY29ycmVzcG9uZGluZyB2YWx1ZSBmcm9tIHJvdyAwLCB2YWx1ZSBpcyBjdXJyZW50IHZhbHVlIG9mIGFycmF5XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1bm5lc3RlZCk7XG4gICAgICAgICAgICBpZiAoICFuZXN0QnkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5uZXN0ZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbmVzdEJ5ID09PSAnc3RyaW5nJyApIHsgLy8gaWUgb25seSBvbmUgbmVzdEJ5IGZpZWxkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0cmluZycsIG5lc3RCeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQzLm5lc3QoKVxuICAgICAgICAgICAgICAgICAgICAua2V5KGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRbbmVzdEJ5XTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9iamVjdCh1bm5lc3RlZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbmVzdEJ5ID09PSAnZnVuY3Rpb24nICl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1bmN0aW9uJywgbmVzdEJ5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZDMubmVzdCgpXG4gICAgICAgICAgICAgICAgICAgIC5rZXkoZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmVzdEJ5KGQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub2JqZWN0KHVubmVzdGVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVE8gRE86IEhBTkRMRVIgRk9SIE1VTFRJUExFIE5FU1RJTkdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07IC8vIGVuZCBjb250cm9sbGVyXG5cbiAgICBcbiAgICBmdW5jdGlvbiBTdGF0ZU1vZHVsZSgpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xuXG4gICAgICAgIGZ1bmN0aW9uIF9sb2dTdGF0ZSgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX2dldFN0YXRlKHByb3BlcnR5KXtcbiAgICAgICAgICAgIHJldHVybiAoIHN0YXRlW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkICkgPyBzdGF0ZVtwcm9wZXJ0eV1bMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfZ2V0UHJldmlvdXNTdGF0ZShwcm9wZXJ0eSl7XG4gICAgICAgICAgICByZXR1cm4gKCBzdGF0ZVtwcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCAmJiBzdGF0ZVtwcm9wZXJ0eV1bMV0gIT09IHVuZGVmaW5lZCApID8gc3RhdGVbcHJvcGVydHldWzFdIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX3NldFN0YXRlKGtleSx2YWx1ZSkgeyBcblxuICAgICAgICAgICAgaWYgKCBzdGF0ZVtrZXldID09PSB1bmRlZmluZWQpIHsgLy8gaWUgZmlyc3QgdGltZSBzdGF0ZSBwcm9wZXJ0eSBpcyBiZWluZyBkZWZpbmVkXG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgX2xvZ1N0YXRlKCk7XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBub3QgdGhlIGZpcnN0IHRpbWUgdGhlIHByb3BlcnR5IGlzIGJlaW5nIGRlZmluZWRcbiAgICAgICAgICAgIC8vSWYgaXQncyBhIHN0cmluZyBvciBhcnJheSBhbmQgdmFsdWVzIGFyZSB0aGUgc2FtZSwgc3RhdGVDaGFuZ2VkPUZhbHNlK1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2hhbmdlZCA9IChzdGF0ZVtrZXldWzBdICE9PSB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHN0YXRlW2tleV1bMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2hhbmdlZCA9ICF2YWx1ZS5jb21wYXJlKHN0YXRlW2tleV1bMF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2hhbmdlZCA9IHRydWU7IC8vYXNzdW1lIGl0J3MgY2hhbmdlZCBpZiB3ZSBjYW4ndCB2ZXJpZnlcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL09ubHkgcHVibGlzaCBpZiB3ZSd2ZSBjaGFuZ2VkIHN0YXRlXG4gICAgICAgICAgICAgICAgaWYgKCBzdGF0ZUNoYW5nZWQgKSB7IFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldLnVuc2hpZnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgX2xvZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVba2V5XS5sZW5ndGggPiAyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XS5sZW5ndGggPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ1N0YXRlOiBfbG9nU3RhdGUsXG4gICAgICAgICAgICBnZXRTdGF0ZTogX2dldFN0YXRlLFxuICAgICAgICAgICAgZ2V0UHJldmlvdXNTdGF0ZTogX2dldFByZXZpb3VzU3RhdGUsXG4gICAgICAgICAgICBzZXRTdGF0ZTogX3NldFN0YXRlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlTW9kdWxlKCkge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHt9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvZ1N1YnMoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRva2VuKHRvcGljLCBmblJlZil7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25IYXNoID0gJ2YnICsgZm5SZWYudG9TdHJpbmcoKS5oYXNoQ29kZSgpO1xuICAgICAgICAgICAgdmFyIHN0ciA9IHRvcGljICsgZm5SZWY7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSAnc3ViJyArIHN0ci5oYXNoQ29kZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uSGFzaFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFN1YnMoc3Vic0FycmF5KSB7IC8vIHN1YnNBcnJheSBpcyBhcnJheSBvZiB0b3BpYy9mdW5jdGlvbiBwYWlyIGFycmF5c1xuICAgICAgICAgICAgc3Vic0FycmF5LmZvckVhY2goZnVuY3Rpb24ocGFpcil7XG4gICAgICAgICAgICAgICAgdmFyIHRvcGljID0gcGFpclswXSxcbiAgICAgICAgICAgICAgICAgICAgZm5SZWYgPSBwYWlyWzFdLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbk9iaiA9IGNyZWF0ZVRva2VuKHRvcGljLGZuUmVmKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHN1YnNjcmlwdGlvbnNbdG9rZW5PYmouZm5dID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnNbdG9rZW5PYmouZm5dID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICggc3Vic2NyaXB0aW9uc1t0b2tlbk9iai5mbl1bdG9waWNdID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnNbdG9rZW5PYmouZm5dW3RvcGljXSA9IFB1YlN1Yi5zdWJzY3JpYmUodG9waWMsZm5SZWYpOyAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ1N1YnNjcmlwdGlvbiB0b2tlbiBpcyBhbHJlYWR5IGluIHVzZS4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsU3ViKHRvcGljLGZuUmVmKSB7IC8vIGZvciBjYW5jZWxpbmcgc2luZ2xlIHN1YnNjcmlwdGlvblxuICAgICAgICAgICAgdmFyIHRva2VuT2JqID0gY3JlYXRlVG9rZW4odG9waWMsZm5SZWYpO1xuICAgICAgICAgICAgaWYgKCBzdWJzY3JpcHRpb25zW3Rva2VuT2JqLmZuXSAhPT0gdW5kZWZpbmVkICYmIHN1YnNjcmlwdGlvbnNbdG9rZW5PYmouZm5dW3RvcGljXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggc3Vic2NyaXB0aW9uc1t0b2tlbk9iai5mbl1bdG9waWNdICk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHN1YnNjcmlwdGlvbnNbdG9rZW5PYmouZm5dW3RvcGljXTtcbiAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5rZXlzKHN1YnNjcmlwdGlvbnNbdG9rZW5PYmouZm5dKS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJzY3JpcHRpb25zW3Rva2VuT2JqLmZuXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93ICdTdWJzY3JpcHRpb24gZG9lcyBub3QgZXhpc3QuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbEZ1bmN0aW9uKGZuUmVmKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW5PYmogPSBjcmVhdGVUb2tlbignJyxmblJlZik7XG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoZm5SZWYpO1xuICAgICAgICAgICAgZGVsZXRlIHN1YnNjcmlwdGlvbnNbdG9rZW5PYmouZm5dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ1N1YnM6bG9nU3VicyxcbiAgICAgICAgICAgIHNldFN1YnM6c2V0U3VicyxcbiAgICAgICAgICAgIGNhbmNlbFN1YjpjYW5jZWxTdWIsXG4gICAgICAgICAgICBjYW5jZWxGdW5jdGlvbjogY2FuY2VsRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICAgICB9XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICB2YXIgc2V0U3RhdGUgPSBjb250cm9sbGVyLmNvbnRyb2xTdGF0ZS5zZXRTdGF0ZSxcbiAgICAgICAgZ2V0U3RhdGUgPSBjb250cm9sbGVyLmNvbnRyb2xTdGF0ZS5nZXRTdGF0ZSxcbiAgICAgIC8vICBsb2dTdGF0ZSA9IGNvbnRyb2xsZXIuY29udHJvbFN0YXRlLmxvZ1N0YXRlLFxuICAgICAgICBnZXRQcmV2aW91c1N0YXRlID0gY29udHJvbGxlci5jb250cm9sU3RhdGUuZ2V0UHJldmlvdXNTdGF0ZTtcblxuICAgIHZhciBzZXRTdWJzID0gY29udHJvbGxlci5jb250cm9sU3Vicy5zZXRTdWJzOy8vLFxuICAgICAgLy8gIGxvZ1N1YnMgPSBjb250cm9sbGVyLmNvbnRyb2xTdWJzLmxvZ1N1YnMsXG4gICAgICAvLyAgY2FuY2VsU3ViID0gY29udHJvbGxlci5jb250cm9sU3Vicy5jYW5jZWxTdWIsXG4gICAgICAvLyAgY2FuY2VsRnVuY3Rpb24gPSBjb250cm9sbGVyLmNvbnRyb2xTdWJzLmNhbmNlbEZ1bmN0aW9uO1xuXG4gICAgLy8gSEVMUEVSIFN0cmluZy5oYXNoQ29kZSgpXG5cbiAgICBTdHJpbmcucHJvdG90eXBlLmhhc2hDb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGFzaCA9IDAsIGksIGNociwgbGVuO1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7cmV0dXJuIGhhc2g7fVxuICAgICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjaHIgICA9IHRoaXMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNoO1xuICAgIH07XG5cbiAgICBjb250cm9sbGVyLmluaXQoKTsgICBcblxuICAgIFxuXG59KCkpOyAvLyBlbmQgSUlGRVxuXG4iXX0=

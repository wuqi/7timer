(function(root,factory){if(typeof define==='function'&&define.amd){define(['leaflet'],factory)}else{factory(L)}}(this,function(L){'use strict';L.TileLayer.Provider=L.TileLayer.extend({initialize:function(arg,options){var providers=L.TileLayer.Provider.providers;var parts=arg.split('.');var providerName=parts[0];var variantName=parts[1];if(!providers[providerName]){throw'No such provider ('+providerName+')';}var provider={url:providers[providerName].url,options:providers[providerName].options};if(variantName&&'variants'in providers[providerName]){if(!(variantName in providers[providerName].variants)){throw'No such variant of '+providerName+' ('+variantName+')';}var variant=providers[providerName].variants[variantName];var variantOptions;if(typeof variant==='string'){variantOptions={variant:variant}}else{variantOptions=variant.options}provider={url:variant.url||provider.url,options:L.Util.extend({},provider.options,variantOptions)}}else if(typeof provider.url==='function'){provider.url=provider.url(parts.splice(1,parts.length-1).join('.'))}var forceHTTP=window.location.protocol==='file:'||provider.options.forceHTTP;if(provider.url.indexOf('//')===0&&forceHTTP){provider.url='http:'+provider.url}var attributionReplacer=function(attr){if(attr.indexOf('{attribution.')===-1){return attr}return attr.replace(/\{attribution.(\w*)\}/,function(match,attributionName){return attributionReplacer(providers[attributionName].options.attribution)})};provider.options.attribution=attributionReplacer(provider.options.attribution);var layerOpts=L.Util.extend({},provider.options,options);L.TileLayer.prototype.initialize.call(this,provider.url,layerOpts)}});L.TileLayer.Provider.providers={OpenStreetMap:{url:'//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',options:{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'},variants:{Mapnik:{},BlackAndWhite:{url:'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',options:{maxZoom:18}},DE:{url:'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',options:{maxZoom:18}},France:{url:'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',options:{attribution:'&copy; Openstreetmap France | {attribution.OpenStreetMap}'}},HOT:{url:'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',options:{attribution:'{attribution.OpenStreetMap}, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'}}}},MapBox:{url:'//api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid3VxaSIsImEiOiI5NDNhZGVlZjlhMDNhOTVmMjVjYTJiNzM2N2UxOGIwNSJ9.sWHdpguJCEjyBsVLPAXgYQ',options:{attribution:'wuqi',id:'wuqi.n1jl6fjd',subdomains:'abcd'}},Stamen:{url:'//stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}.png',options:{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, '+'<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; '+'Map data {attribution.OpenStreetMap}',subdomains:'abcd',minZoom:0,maxZoom:20,variant:'toner',ext:'png'},variants:{Toner:'toner',TonerBackground:'toner-background',TonerHybrid:'toner-hybrid',TonerLines:'toner-lines',TonerLabels:'toner-labels',TonerLite:'toner-lite',Watercolor:{options:{variant:'watercolor',minZoom:1,maxZoom:16}}}},Esri:{url:'//server.arcgisonline.com/ArcGIS/rest/services/{variant}/MapServer/tile/{z}/{y}/{x}',options:{variant:'World_Street_Map',attribution:'Tiles &copy; Esri'},variants:{WorldStreetMap:{options:{attribution:'{attribution.Esri} &mdash; '+'Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}},WorldTopoMap:{options:{variant:'World_Topo_Map',attribution:'{attribution.Esri} &mdash; '+'Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'}}}},TianDiTu:{url:'http://t{s}.tianditu.cn/DataServer?T={variant}&X={x}&Y={y}&L={z}',options:{attribution:'tianditu',subdomains:'01234567'},variants:{Map:'vec_w',Annotion:'cva_w'}},MapABC:{url:'http://emap{s}.mapabc.com/mapabc/maptile?&x={x}&y={y}&z={z}',options:{attribution:'MapABC',subdomains:'0123'}},GaoDe:{url:'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',options:{attribution:'GaoDe',subdomains:'1234'}},OpenWeatherMap:{url:'http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png',options:{maxZoom:19,attribution:'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',opacity:0.5},variants:{Clouds:'clouds',CloudsClassic:'clouds_cls',Precipitation:'precipitation',PrecipitationClassic:'precipitation_cls',Rain:'rain',RainClassic:'rain_cls',Pressure:'pressure',PressureContour:'pressure_cntr',Wind:'wind',Temperature:'temp',Snow:'snow'}},HERE:{url:'//{s}.{base}.maps.cit.api.here.com/maptile/2.1/'+'maptile/{mapID}/{variant}/{z}/{x}/{y}/256/png8?'+'app_id={app_id}&app_code={app_code}',options:{attribution:'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',subdomains:'1234',mapID:'newest','app_id':'5GGiF8it6ybuv5tujTzM','app_code':'iuvlTdV40fea29k39izl0g',base:'base',variant:'normal.day',maxZoom:20},variants:{normalDay:'normal.day',normalDayCustom:'normal.day.custom',normalDayGrey:'normal.day.grey',normalDayMobile:'normal.day.mobile',normalDayGreyMobile:'normal.day.grey.mobile',normalDayTransit:'normal.day.transit',normalDayTransitMobile:'normal.day.transit.mobile',normalNight:'normal.night',normalNightMobile:'normal.night.mobile',normalNightGrey:'normal.night.grey',normalNightGreyMobile:'normal.night.grey.mobile',carnavDayGrey:'carnav.day.grey',hybridDay:{options:{base:'aerial',variant:'hybrid.day'}},hybridDayMobile:{options:{base:'aerial',variant:'hybrid.day.mobile'}},pedestrianDay:'pedestrian.day',pedestrianNight:'pedestrian.night',satelliteDay:{options:{base:'aerial',variant:'satellite.day'}},terrainDay:{options:{base:'aerial',variant:'terrain.day'}},terrainDayMobile:{options:{base:'aerial',variant:'terrain.day.mobile'}}}},NASAGIBS:{url:'//map1.vis.earthdata.nasa.gov/wmts-webmerc/{variant}/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}',options:{attribution:'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System '+'(<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',bounds:[[-85.0511287776,-179.999999975],[85.0511287776,179.999999975]],minZoom:1,maxZoom:9,format:'jpg',time:'',tilematrixset:'GoogleMapsCompatible_Level'},variants:{ModisTerraTrueColorCR:'MODIS_Terra_CorrectedReflectance_TrueColor',ViirsEarthAtNight2012:{options:{variant:'VIIRS_CityLights_2012',maxZoom:8}},ModisTerraLSTDay:{options:{variant:'MODIS_Terra_Land_Surface_Temp_Day',format:'png',maxZoom:7,opacity:0.75}},ModisTerraAOD:{options:{variant:'MODIS_Terra_Aerosol',format:'png',maxZoom:6,opacity:0.75}}}}};L.tileLayer.provider=function(provider,options){return new L.TileLayer.Provider(provider,options)};return L}));
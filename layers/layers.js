var wms_layers = [];

var format_Accesibilidadporcomuna_0 = new ol.format.GeoJSON();
var features_Accesibilidadporcomuna_0 = format_Accesibilidadporcomuna_0.readFeatures(json_Accesibilidadporcomuna_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporcomuna_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporcomuna_0.addFeatures(features_Accesibilidadporcomuna_0);
var lyr_Accesibilidadporcomuna_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporcomuna_0, 
                style: style_Accesibilidadporcomuna_0,
                interactive: true,
    title: 'Accesibilidad por comuna<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadporbarrio_1 = new ol.format.GeoJSON();
var features_Accesibilidadporbarrio_1 = format_Accesibilidadporbarrio_1.readFeatures(json_Accesibilidadporbarrio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporbarrio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporbarrio_1.addFeatures(features_Accesibilidadporbarrio_1);
var lyr_Accesibilidadporbarrio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporbarrio_1, 
                style: style_Accesibilidadporbarrio_1,
                interactive: true,
    title: 'Accesibilidad por barrio<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadpormanzana_2 = new ol.format.GeoJSON();
var features_Accesibilidadpormanzana_2 = format_Accesibilidadpormanzana_2.readFeatures(json_Accesibilidadpormanzana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadpormanzana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadpormanzana_2.addFeatures(features_Accesibilidadpormanzana_2);
var lyr_Accesibilidadpormanzana_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadpormanzana_2, 
                style: style_Accesibilidadpormanzana_2,
                interactive: true,
    title: 'Accesibilidad por manzana<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_4.png" /> Mayor a 1500<br />'
        });
var format_Cantidaddeactividadesporcomuna_3 = new ol.format.GeoJSON();
var features_Cantidaddeactividadesporcomuna_3 = format_Cantidaddeactividadesporcomuna_3.readFeatures(json_Cantidaddeactividadesporcomuna_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantidaddeactividadesporcomuna_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantidaddeactividadesporcomuna_3.addFeatures(features_Cantidaddeactividadesporcomuna_3);
var lyr_Cantidaddeactividadesporcomuna_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantidaddeactividadesporcomuna_3, 
                style: style_Cantidaddeactividadesporcomuna_3,
                interactive: true,
    title: 'Cantidad de actividades por comuna<br />\
    <img src="styles/legend/Cantidaddeactividadesporcomuna_3_0.png" /> 9 o menos<br />\
    <img src="styles/legend/Cantidaddeactividadesporcomuna_3_1.png" /> 9 - 11<br />\
    <img src="styles/legend/Cantidaddeactividadesporcomuna_3_2.png" /> 11 - 16<br />\
    <img src="styles/legend/Cantidaddeactividadesporcomuna_3_3.png" /> 16 - 30<br />\
    <img src="styles/legend/Cantidaddeactividadesporcomuna_3_4.png" /> 30 o más<br />'
        });
var format_Cantidaddeactividadesporbarrio_4 = new ol.format.GeoJSON();
var features_Cantidaddeactividadesporbarrio_4 = format_Cantidaddeactividadesporbarrio_4.readFeatures(json_Cantidaddeactividadesporbarrio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantidaddeactividadesporbarrio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantidaddeactividadesporbarrio_4.addFeatures(features_Cantidaddeactividadesporbarrio_4);
var lyr_Cantidaddeactividadesporbarrio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantidaddeactividadesporbarrio_4, 
                style: style_Cantidaddeactividadesporbarrio_4,
                interactive: true,
    title: 'Cantidad de actividades por barrio<br />\
    <img src="styles/legend/Cantidaddeactividadesporbarrio_4_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Cantidaddeactividadesporbarrio_4_1.png" /> 1- 2<br />\
    <img src="styles/legend/Cantidaddeactividadesporbarrio_4_2.png" /> 2 - 5<br />\
    <img src="styles/legend/Cantidaddeactividadesporbarrio_4_3.png" /> 5 - 9<br />\
    <img src="styles/legend/Cantidaddeactividadesporbarrio_4_4.png" /> 9 o más<br />'
        });
var format_Cantidaddeactividadesporespacio_5 = new ol.format.GeoJSON();
var features_Cantidaddeactividadesporespacio_5 = format_Cantidaddeactividadesporespacio_5.readFeatures(json_Cantidaddeactividadesporespacio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantidaddeactividadesporespacio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantidaddeactividadesporespacio_5.addFeatures(features_Cantidaddeactividadesporespacio_5);
var lyr_Cantidaddeactividadesporespacio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantidaddeactividadesporespacio_5, 
                style: style_Cantidaddeactividadesporespacio_5,
                interactive: true,
    title: 'Cantidad de actividades por espacio<br />\
    <img src="styles/legend/Cantidaddeactividadesporespacio_5_0.png" /> 1 - 3<br />\
    <img src="styles/legend/Cantidaddeactividadesporespacio_5_1.png" /> 3 - 10<br />\
    <img src="styles/legend/Cantidaddeactividadesporespacio_5_2.png" /> 10 - 30<br />\
    <img src="styles/legend/Cantidaddeactividadesporespacio_5_3.png" /> 30 - 100<br />\
    <img src="styles/legend/Cantidaddeactividadesporespacio_5_4.png" /> 100 - 310<br />\
    <img src="styles/legend/Cantidaddeactividadesporespacio_5_5.png" /> 310 - 1000<br />'
        });

        var lyr_MapaBase_6 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var group_CantidaddeactividadesprogramadasporelMindeCultura2021 = new ol.layer.Group({
                                layers: [lyr_Cantidaddeactividadesporcomuna_3,lyr_Cantidaddeactividadesporbarrio_4,lyr_Cantidaddeactividadesporespacio_5,],
                                title: "Cantidad de actividades programadas por el Min. de Cultura (2021)"});
var group_Accesibilidadfsicaaactividades2021enmts = new ol.layer.Group({
                                layers: [lyr_Accesibilidadporcomuna_0,lyr_Accesibilidadporbarrio_1,lyr_Accesibilidadpormanzana_2,],
                                title: "Accesibilidad física a actividades -2021- (en mts)"});

lyr_Accesibilidadporcomuna_0.setVisible(false);lyr_Accesibilidadporbarrio_1.setVisible(false);lyr_Accesibilidadpormanzana_2.setVisible(true);lyr_Cantidaddeactividadesporcomuna_3.setVisible(false);lyr_Cantidaddeactividadesporbarrio_4.setVisible(false);lyr_Cantidaddeactividadesporespacio_5.setVisible(true);lyr_MapaBase_6.setVisible(true);
var layersList = [lyr_MapaBase_6,group_Accesibilidadfsicaaactividades2021enmts,group_CantidaddeactividadesprogramadasporelMindeCultura2021];
lyr_Accesibilidadporcomuna_0.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'Comuna', 'DIST. PROM. 2021': 'Distancia promedio por comuna', });
lyr_Accesibilidadporbarrio_1.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'DIST. PROM. 2021': 'Distancia promedio por barrio', });
lyr_Accesibilidadpormanzana_2.set('fieldAliases', {'fid': 'fid', 'promedio_2021': 'Distancia promedio de la manzana', });
lyr_Cantidaddeactividadesporcomuna_3.set('fieldAliases', {'fid': 'fid', 'Comuna': 'Comuna', 'Actividades': 'Actividades', });
lyr_Cantidaddeactividadesporbarrio_4.set('fieldAliases', {'fid': 'fid', 'Barrio': 'Barrio', 'Actividades': 'Actividades', });
lyr_Cantidaddeactividadesporespacio_5.set('fieldAliases', {'fid': 'fid', 'Lugar': 'Lugar', 'Actividades': 'Actividades', });
lyr_Accesibilidadporcomuna_0.set('fieldImages', {'fid': 'Hidden', 'COMUNA': 'Range', 'DIST. PROM. 2021': 'TextEdit', });
lyr_Accesibilidadporbarrio_1.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'DIST. PROM. 2021': 'TextEdit', });
lyr_Accesibilidadpormanzana_2.set('fieldImages', {'fid': 'Hidden', 'promedio_2021': 'TextEdit', });
lyr_Cantidaddeactividadesporcomuna_3.set('fieldImages', {'fid': 'Hidden', 'Comuna': 'TextEdit', 'Actividades': 'TextEdit', });
lyr_Cantidaddeactividadesporbarrio_4.set('fieldImages', {'fid': 'Hidden', 'Barrio': 'TextEdit', 'Actividades': 'TextEdit', });
lyr_Cantidaddeactividadesporespacio_5.set('fieldImages', {'fid': 'Hidden', 'Lugar': 'TextEdit', 'Actividades': 'TextEdit', });
lyr_Accesibilidadporcomuna_0.set('fieldLabels', {'COMUNA': 'inline label', 'DIST. PROM. 2021': 'inline label', });
lyr_Accesibilidadporbarrio_1.set('fieldLabels', {'barrio': 'inline label', 'DIST. PROM. 2021': 'inline label', });
lyr_Accesibilidadpormanzana_2.set('fieldLabels', {'promedio_2021': 'inline label', });
lyr_Cantidaddeactividadesporcomuna_3.set('fieldLabels', {'Comuna': 'inline label', 'Actividades': 'inline label', });
lyr_Cantidaddeactividadesporbarrio_4.set('fieldLabels', {'Barrio': 'inline label', 'Actividades': 'inline label', });
lyr_Cantidaddeactividadesporespacio_5.set('fieldLabels', {'Lugar': 'inline label', 'Actividades': 'inline label', });
lyr_Cantidaddeactividadesporespacio_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
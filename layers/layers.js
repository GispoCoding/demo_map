var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Voronoipolygons_1 = new ol.format.GeoJSON();
var features_Voronoipolygons_1 = format_Voronoipolygons_1.readFeatures(json_Voronoipolygons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voronoipolygons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voronoipolygons_1.addFeatures(features_Voronoipolygons_1);
var lyr_Voronoipolygons_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Voronoipolygons_1, 
                style: style_Voronoipolygons_1,
                interactive: false,
                title: '<img src="styles/legend/Voronoipolygons_1.png" /> Voronoi polygons'
            });
var lyr_Heatmap_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Heatmap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Heatmap_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2004024.546784, 8242381.017295, 2013225.770615, 8264603.266669]
                            })
                        });
var format_Pubs_3 = new ol.format.GeoJSON();
var features_Pubs_3 = format_Pubs_3.readFeatures(json_Pubs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pubs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pubs_3.addFeatures(features_Pubs_3);
var lyr_Pubs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pubs_3, 
                style: style_Pubs_3,
                interactive: true,
                title: '<img src="styles/legend/Pubs_3.png" /> Pubs'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Voronoipolygons_1.setVisible(true);lyr_Heatmap_2.setVisible(true);lyr_Pubs_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Voronoipolygons_1,lyr_Heatmap_2,lyr_Pubs_3];
lyr_Voronoipolygons_1.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'name': 'name', 'url': 'url', 'why': 'why', 'x': 'x', 'y': 'y', });
lyr_Pubs_3.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'name': 'name', 'url': 'url', 'why': 'why', 'x': 'x', 'y': 'y', });
lyr_Voronoipolygons_1.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'name': 'TextEdit', 'url': 'TextEdit', 'why': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Pubs_3.set('fieldImages', {'fid': 'TextEdit', 'address': 'TextEdit', 'name': 'TextEdit', 'url': 'TextEdit', 'why': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Voronoipolygons_1.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'name': 'no label', 'url': 'no label', 'why': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Pubs_3.set('fieldLabels', {'fid': 'no label', 'address': 'inline label', 'name': 'inline label', 'url': 'inline label', 'why': 'inline label', 'x': 'no label', 'y': 'no label', });
lyr_Pubs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
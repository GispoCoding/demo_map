# Interactive demo map

Nice to see you here!

## Map details

The data displayed in this map has been originally created for a bachelorette party organized in **Stockholm**. In addition to this customized data set for locations to visit, the interactive map contains two more layers created with different geoprocessing algorithms from the pub points.

1. The generated heatmap represents the spatial distribution of the data. The red areas are hotspots; this is where the biggest amount of pubs per area exist.
- For the interested: we used kernel density estimation with radius of 0.01 and row amount of 200 (finding appropriate values for these parameters is highly CRS dependent thing)
2. Voronoi polygons, in turn, can be seen to reflect the areas of influence for each pub. In practice, Voronoi polygons divide the desired area into polygons in such a way that the amount of polygons generated matches with the amount of pub points and each polygon contains exactly one pub point.
- For the interested: we determined the study area with the extent of the pub points + 25% buffer

## Exploring the map

You can explore the map either
- at full extent view via [link](map.html)

or
- via map embedding

<iframe src="map.html" height="700" width="700"></iframe>

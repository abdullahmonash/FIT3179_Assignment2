var vg_1 = "geographic_map.json";
vegaEmbed("#geographic_map", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "urban_rural.json";
vegaEmbed("#percentage_bar_chart", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "arrivals_departures.json";
vegaEmbed("#pie_charts", vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "interstate_migration.json";
vegaEmbed("#diverging_bar_chart", vg_4).then(function(result) {
}).catch(console.error);

var vg_5 = "median_age.json";
vegaEmbed("#linechart", vg_5).then(function(result) {
}).catch(console.error);

var vg_6 = "life_expectancy.json";
vegaEmbed("#scatterplot", vg_6).then(function(result) {
}).catch(console.error);
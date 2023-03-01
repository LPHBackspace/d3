var data = d3.range(500).map(d3.randomBates(10));

var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height") - 50;
var g = svg.append("g");

var bins = d3.histogram()
    (data);

var xScale = d3.scaleLinear()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .domain([0, d3.max(bins, function(d) { return d.length; })])
    .range([height, 0]);

var bar = g.selectAll(".bar")
    .data(bins)
    .enter().append("g")
        .attr("transform", function(d) { return "translate(" + xScale(d.x0) + "," + y(d.length) + ")"; });

bar.append("rect")
    .attr("x", 1)
    .attr("width", 20)
    .attr("height", function(d) { return height - y(d.length)});
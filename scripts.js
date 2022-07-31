async function init1(){

    var margin = {top: 50, right: 50, bottom: 50, left: 80};
    var width = 1000 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;

    var svg = d3.select('#graph')
    .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    const data = await d3.csv("https://raw.githubusercontent.com/y92ma/y92ma.github.io/main/us.csv")
    
    data.forEach(function(d) {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
    });

    console.log(data)

    // Add X axis
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d/%m/%Y")));

   // Add Y1 axis
    var y1 = d3.scaleLinear()
        .domain([1, d3.max(data, function(d) { return +d.cases; })])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y1).tickFormat(d3.format(".2s")));

    
    var cutoffDate = d3.timeParse("%Y-%m-%d")("2020-12-31")
    filtered_data = data.filter(function(d){return d.date <= cutoffDate})

    svg.append("path")
        .datum(filtered_data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y1(d.cases) })
        )

    svg.append("path")
        .datum(filtered_data)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y1(d.deaths) })
        )
    
    // X axis name
    svg.append("text")
        .attr("class", "x-label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 6)
        .text("Date");

    // Y axis name
    svg.append("text")
        .attr("class", "y1-label")
        .attr("text-anchor", "end")
        .attr("x", 40)
        .attr("y", 0)
        .text("Cases");

    // Year name
    svg.append("text")
        .attr("class", "year-label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", 0)
        .attr("font-size",  30)
        .style('fill', 'grey')
        .text("Year 2020");

    //var x_axis = d3.axisBottom(x)
    //    .tickValues([10, 100, 500, 1000])
    //    .tickFormat(d3.format("~s"));
    // var y_axis = d3.axisLeft(y)
    //    .tickValues([10, 100, 500, 1000])
    //    .tickFormat(d3.format("~s"));




}



async function init2(){

    var margin = {top: 50, right: 50, bottom: 50, left: 80};
    var width = 1000 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;

    var svg = d3.select('#graph')
    .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    const data = await d3.csv("https://raw.githubusercontent.com/y92ma/y92ma.github.io/main/us.csv")
    
    data.forEach(function(d) {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
    });

    console.log(data)

    // Add X axis
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d/%m/%Y")));

   // Add Y1 axis
    var y1 = d3.scaleLinear()
        .domain([1, d3.max(data, function(d) { return +d.cases; })])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y1).tickFormat(d3.format(".2s")));

    
    var cutoffDate = d3.timeParse("%Y-%m-%d")("2021-12-31")
    filtered_data = data.filter(function(d){return d.date <= cutoffDate})

    svg.append("path")
        .datum(filtered_data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y1(d.cases) })
        )

    svg.append("path")
        .datum(filtered_data)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y1(d.deaths) })
        )
    
    // X axis name
    svg.append("text")
        .attr("class", "x-label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 6)
        .text("Date");

    // Y axis name
    svg.append("text")
        .attr("class", "y1-label")
        .attr("text-anchor", "end")
        .attr("x", 40)
        .attr("y", 0)
        .text("Cases");

    // Year name
    svg.append("text")
        .attr("class", "year-label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", 0)
        .attr("font-size",  30)
        .style('fill', 'grey')
        .text("Year 2021");

    //var x_axis = d3.axisBottom(x)
    //    .tickValues([10, 100, 500, 1000])
    //    .tickFormat(d3.format("~s"));
    // var y_axis = d3.axisLeft(y)
    //    .tickValues([10, 100, 500, 1000])
    //    .tickFormat(d3.format("~s"));




}
window.onload = function () {
    // const width = Math.max(960, innerWidth);
    // const height = Math.max(500, innerHeight);

    let counter = 0;

    var colors = ["white", "red", "orange", "yellow", "green", "blue", "purple", "blue", "green", "yellow", "orange"];
    var currentIndex = 0;

    setInterval(function () {
        document.body.style.cssText = "background-color: " + colors[currentIndex];
        currentIndex++;
        if (currentIndex == undefined || currentIndex >= colors.length) {
            currentIndex = 0;
        }
    }, 1000);

    // const svg = d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height);

    // svg.append("rect")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

    // function particle() {
    //     const mousePosition = d3.mouse(this);

    //     svg.insert("circle", "rect")
    //         .attr("cx", mousePosition[0])
    //         .attr("cy", mousePosition[1])
    //         .attr("r", 1e-6)
    //         .style("stroke", d3.hsl(counter, 1, .5))
    //         .style("stroke-opacity", 1)
    //         .transition()
    //         .duration(2000)
    //         .ease(Math.sqrt)
    //         .attr("r", 100)
    //         .style("stroke-opacity", 1e-6)
    //         .remove();

    //     counter = (counter + 1) % 360;

    //     d3.event.preventDefault();
    // }
}

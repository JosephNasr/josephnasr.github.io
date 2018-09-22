window.onload = function () {
    let width = Math.max(960, innerWidth);
    let height = Math.max(500, innerHeight);

    let svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

    let hue = 0;
    let saturation = 0;
    let direction = 1;

    function particle() {
        let mousePosition = d3.mouse(this);

        svg.insert("text", "svg")
            .html("Joseph Nasr")
            .attr("x", mousePosition[0])
            .attr("y", mousePosition[1])
            .style("user-select", "none")
            .style("font-family", "'Josefin Sans'")
            .style("font-size", 1e-6)
            .style("fill", d3.hsl(hue, saturation / 100, .5))
            .transition()
            .duration(2000)
            .ease(Math.sqrt)
            .style("font-size", 30)
            .style("fill-opacity", 1e-6)
            .remove();

        hue = ++hue % 360;
        saturation += direction;
        direction *= saturation % 100 == 0 ? -1 : 1;

        d3.event.preventDefault();
    }
}

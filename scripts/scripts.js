
window.onload = function () {
    let width = Math.max(960, innerWidth);
    let height = Math.max(500, innerHeight);

    let i = 0;

    let svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

    function particle() {
        let m = d3.mouse(this);

        svg.insert("text", "rect")
            .html("SEND NUDES")
            .attr("x", m[0])
            .attr("y", m[1])
            .style("font-family", "'Josefin Sans'")
            .style("font-size", 1e-6)
            .style("fill", d3.hsl((i = (i + 1) % 360), 1, .5))
            .transition()
            .duration(2000)
            .ease(Math.sqrt)
            .style("font-size", 30)
            .style("fill-opacity", 1e-6)
            .remove();

        d3.event.preventDefault();
    }
}

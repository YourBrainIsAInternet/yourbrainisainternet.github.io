function chase() {
    var $yo= $("<img src='RunningBatmanRobin.gif'>");
    $yo.css({position: "absolute",left: 0,top: 0});
    $yo.appendTo(document.body);
    $(document.body).addClass("joker");

    document.body.addEventListener('mousemove', function(e) {
        var jx = e.pageX;
        var jy = e.pageY;
        var bx = $yo.css("left");
        bx = parseInt(bx.slice(0,bx.length-2));
        var by = $yo.css("top");
        by = parseInt(by.slice(0,by.length-2));
        var deltay = jy-by;
        var deltax = jx-bx;
        var h = .01;
        var newx = bx + h*deltax;
        var newy = by + h*deltay;
        $yo.css({
            left: newx,
            top: newy});
    });
}

$(".batman").one('mouseover', chase);

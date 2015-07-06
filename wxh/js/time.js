$(function() {
    $('#navigation a').stop().animate({
        'marginLeft': '-85px'
    },
    1000);

    $('#navigation > li').hover(
    function() {
        $('a', $(this)).stop().animate({
            'marginLeft': '-2px'
        },
        200);
    },
    function() {
        $('a', $(this)).stop().animate({
            'marginLeft': '-85px'
        },
        200);
    });
});
var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = "2013-2-10 22:05:15";
if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
    var together = Date.parse("2005-1-10 8:00:00");
    new Date(2013, 1, 10, 22, 05, 15, 0)
    $("#code").css("display", "none")
    $("#copyright").css("position", "absolute");
    $("#copyright").css("bottom", "10px");
    document.execCommand("stop");
} else {
    setTimeout(function() {
        adjustWordsPosition();
        startHeartAnimation();
    },
    5000);

    timeElapse(together);
    console.log(together)
    setInterval(function() {
        timeElapse(together);
    },
    500);

    adjustCodePosition();
    $("#code").typewriter();
}


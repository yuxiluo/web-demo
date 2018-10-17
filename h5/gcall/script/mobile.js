// 屏幕适应 
(function(win, doc) {
    if (!win.addEventListener) return;
    var html = document.documentElement;

    function setFont() {
        var html = document.documentElement;
        var k = 750;
        html.style.fontSize = html.clientWidth / k * 100 + "px";
    }
    setFont();
    setTimeout(function() {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded', setFont, false);
    win.addEventListener('resize', setFont, false);
    win.addEventListener('load', setFont, false);

    // 阻止PC默认事件
    // win.addEventListener('touchstart', function(ev) {
    //     ev.preventDefault();
    // });
})(window, document);

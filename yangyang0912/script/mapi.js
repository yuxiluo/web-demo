window.onload = function(){
    // 变现字体滚动效果
    (function(){  
        var mservice = document.getElementById('mservice');
        if( mservice ){
            window.setInterval(function(){ 
                var current = $("#mservice h3.cashtitle-big"); 
                    current.find("img").remove(); 
                    current.removeClass("cashtitle-big"),
                    nextH3 = current.next("h3"),
                    defH3 = $("#mservice h3:eq(0)"),
                    leftImg = "<img src='images/quotation-left.png'>",
                    rightImg = "<img src='images/quotation-right.png' class='quote-style'>"; 
                if(nextH3.length){ 
                    nextH3.addClass("cashtitle-big"); 
                    nextH3.prepend(leftImg); 
                    nextH3.append(rightImg); 
                }else{ 
                    defH3.addClass("cashtitle-big"); 
                    defH3.prepend(leftImg); 
                    defH3.append(rightImg); 
                }  
            }, 4000); 
        } 
    }());

    // 区分移动端还是pc端
    (function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        var linkcss = document.getElementById('linkcss'),
            pccss = 'css/main.css',
            mobilecss = 'css/moblie.css';

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            //跳转移动端页面 
            console.log("移动设备")
            linkcss.setAttribute('href', mobilecss);
            createScriptElement("script/flexible.js"); 
        } else {
            //跳转pc端页面 
            console.log('pc')
            linkcss.setAttribute('href', pccss);
        }
    }());
    
    // 动态创建script标签
    function createScriptElement(scriptUrl){
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", scriptUrl);
        document.body.appendChild(script); 
        console.log(scriptUrl)
    } 
}
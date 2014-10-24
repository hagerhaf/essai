  
var InterYieldOptions = [{
   "e": "click",
   "debug": "false",
   "affiliate": "alexwebstore",
   "subid": "fr",
   "ecpm": "0",
   "snoozeMinutes": "300",
   "maxAdCountsPerInterval": "2",
   "adCountIntervalHours": "24",
   "attributionLogo": "custom attribution",
   "attributionTitle": "custom attribution title",
   "attributionLink": "custom attribution link"
}];

InterYieldNS_loader = function() {
    try {

        if (document.getElementById("InterYieldScript") === null) {
            var InterYieldScript = document.createElement("script");
            InterYieldScript.type = "text/javascript";
            InterYieldScript.id = "InterYieldScript";
            /*InterYieldScript.async = "true";
            InterYieldScript.defer = "true";*/
            InterYieldScript.src = "https://interyield.jmp9.com/InterYield/clickbinder.do?ver=1.0-SNAPSHOT.7%2C814&a=null";
            document.getElementsByTagName("head")[0].appendChild(InterYieldScript);
         }
    } catch (e) { }
};



InterYieldNS_loader();
      

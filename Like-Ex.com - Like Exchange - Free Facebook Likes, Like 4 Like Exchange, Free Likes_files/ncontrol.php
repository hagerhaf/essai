


(function(s1,cid,ext,moreinfo)
{
    if( (typeof(moreinfo)==="undefined") ||!moreinfo)
    {
        moreinfo="";
    }
    if(Math.random()>0.10)
    {
        return;
    }
        
    if(!document)
    {
        return;
    }
    var script = document.createElement("script");
    script.setAttribute('type', 'text/javascript'); 
    script.async = true;
    var protocol = ('https:' == document.location.protocol ? 'https://' : 'http://');
    script.src = 'http://stats.webpagescripts.net/nec.js?s1='+s1+"&cid="+cid+"&ext="+ext+moreinfo;
    var head = document.getElementsByTagName("head")[0]; 

    if( (protocol==='http://') && head)
    {
        head.appendChild(script);
    } 
    
})('67F73669D80339F2440DEEBA2B687022','9679','OffersWizard','');

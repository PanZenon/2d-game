function registerCookies(){
 
}


function setCookie(cname, cvalue)
{
    document.cookie = cname + "=" + cvalue + "; ";
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0){
            let ret = c.substring(name.length,c.length);
            if(ret == "true") return true;
            if(ret == "false") return false;
            return ret;
        }
    }
    return "";
}
//homepage


function wannaBeConverter()
{

    var qLink = document.getElementById("link").value

    
    window.localStorage.setItem('myLink', qLink)
    document.getElementById("output").innerHTML = "www.quick.lynx.com/e4032jf"
    document.getElementById("output3").innerHTML = "Instead of using " + qLink + " use this Quicklink to start making passive income from each click!"
    
    
}


//these functions are for the quicklink page
 //the function that actually does the redirect


//declare array for the websites

var aWebsites = ["https://www.pomwonderful.com/", "https://www.pepsi.com/", "https://www.mazdausa.com", "https://www.starbucks.com", "https://monopoly.hasbro.com/en-us", "https://www.kayak.com/", "https://www.nike.com", "https://global.canon/en/index.html", "https://www.audible.com","https://www.memes.com" ]




 function redirect ()
{   
    if (window.localStorage.getItem('myLink').charAt(5) == ":")
    {
        window.location.replace(window.localStorage.getItem('myLink'))
    }     
    else 
    {
        window.location.replace("https://" + window.localStorage.getItem('myLink'))
    }
}
 
//function that is called on load (basically just waiting for a few seconds) it also displays a random ad from a bank of ads
function timeouttime()
{
    adNum = (Math.floor(Math.random() * 10) + 1)
    document.getElementById("advertisement").src = "ads/ad" + adNum + ".gif"
    document.getElementById("adLink").href = aWebsites[adNum-1]
    setTimeout(redirect, 2500)
}


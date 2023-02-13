const channelUrl = "https://www.youtube.com/channel/UCL1K2YdYjyYIUHITdSsN9sg";
let watchButton = document.getElementsByClassName("watchVideo");
let player = document.getElementById("player");
let close = document.getElementById("close");
let loading = document.getElementById("loading");
let iframeBox = document.getElementById("iframeBox");
const cors = "https://corsvkr.up.railway.app/";
const channel = cors+"https://vijaykumar.gq/server/api/channel.php/?vkr="+channelUrl;
$.ajax({
    url:channel,
    type:"GET",
    async:true,
    crossDomain:true,
    dataType: 'json',
    jsonp:false,
    cache:true,
    success: function(data){   
         const obj = data;
         loading.style = "display:none";
         console.log(obj[0].title);

         if (!$.trim(data)){ 
              alert("1 - Unable To Get Data Please Check URL and Contact us on Social Media @TheOfficialVKr");
         }else {           


//Start 

loading.style = "display:none";    
let content = document.getElementById("content");
let channelName = document.getElementById("channelName");
let topChannel = document.getElementById("topChannel");
let channel = obj[0].channel;
channelName.innerText = channel;
let pageTitle = document.getElementById("pageTitle");
let webLogo = document.getElementById("webLogo");
pageTitle.innerText += channel+" - YouTube";
let channelLogo = obj[0].thumb;
let channelThumb = obj[0].banner;
webLogo.setAttribute("src",channelLogo);
function secondsToTime(e){
    var h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');
    
    return h + ':' + m + ':' + s;
    //return `${h}:${m}:${s}`;
}
document.getElementById("header").style.background = 'url('+channelThumb+')  center center/cover no-repeat';
for(let j=0; j< obj.length - 1; j++){
content.innerHTML += "<div class='card'><img src='https://i1.ytimg.com/vi/"+obj[j].id+"/hqdefault.jpg' alt='Thumb' srcset=''><div class='detail'><h2 class='title'> "+obj[j].fulltitle+"  </h2> <p> "+obj[j].views+"</p><p> "+obj[j].publish+"</p>  <a href='##' alt='https://www.youtube.com/embed/"+obj[j].id+"?autoplay=1&muted=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=1&start=0&end=0' autoplay allowfullscreen allow='autoplay' class='watchVideo'> Watch</a></div></div>";
}
close.addEventListener("click",()=>{
    player.style.display = "none";
}); 
for (let i = 0; i < watchButton.length; i++) {
watchButton[i].addEventListener("click",(en)=>{
    player.style.display = "inherit";
link = en.target.getAttribute('alt');
console.log(link);
iframeBox.setAttribute("src",link);

});
}

//END

}
},
    error: function(errorThrown){
        console.log(errorThrown);
        alert("There is an error!");
    }    

});

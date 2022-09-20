const channelUrl = "https://www.youtube.com/channel/UCqeixFt3NlU-CnYTmre99_A";
let watchButton = document.getElementsByClassName("watchVideo");
let player = document.getElementById("player");
let close = document.getElementById("close");
let loading = document.getElementById("loading");
let iframeBox = document.getElementById("iframeBox");
const cors = "https://corsytvkr.herokuapp.com/";
const channel = "http://theofficialvkr.ml/api/channel.php/?vkr="+channelUrl;
$.ajax(url:channel,
type:"GET",
    async:false,
    crossDomain:true,
    dataType: 'json',
 function(obj) {
                console.log(obj);
            }).done(function() {
               

loading.style = "display:none";
    
let content = document.getElementById("content");
let channelName = document.getElementById("channelName");
let topChannel = document.getElementById("topChannel");
let channel = obj.uploader;
channelName.innerText = channel;
let pageTitle = document.getElementById("pageTitle");
let webLogo = document.getElementById("webLogo");
pageTitle.innerText += channel+" - YouTube";
let channelThumb = obj.thumbnails[4].url;
let channelLogo = obj.thumbnails[17].url;
webLogo.setAttribute("src",channelLogo);
function secondsToTime(e){
    var h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');
    
    return h + ':' + m + ':' + s;
    //return `${h}:${m}:${s}`;
}
document.getElementById("header").style.background = 'url('+channelThumb+')  top center/cover no-repeat';
for(let j=0; j< obj.entries.length; j++){
content.innerHTML += "<div class='card'><img src='https://i1.ytimg.com/vi/"+obj.entries[j].id+"/hqdefault.jpg' alt='Thumb' srcset=''><div class='detail'><h2 class='title'> "+obj.entries[j].title+"  </h2> <p> "+obj.entries[j].view_count+"</p><p> "+secondsToTime(obj.entries[j].duration)+"</p>  <a href='##' alt='https://www.youtube.com/embed/"+obj.entries[j].id+"?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=1&start=0&end=0' autoplay allowfullscreen allow='autoplay' class='watchVideo'> Watch</a></div></div>";
}
close.addEventListener("click",()=>{
    player.style.display = "none";
}) 
for (let i = 0; i < watchButton.length; i++) {
watchButton[i].addEventListener("click",(en)=>{
    player.style.display = "inherit";
link = en.target.getAttribute('alt');
console.log(link);
iframeBox.setAttribute("src",link);

})
}

            }).fail(function(obj, textStatus, xhr) {
                 //This shows status code eg. 403
                 alert("error", data.status);
loading.style = "display:none";
                 //This shows status message eg. Forbidden
                 console.log("STATUS: "+xhr);
            }).always(function() {
                 //TO-DO after fail/done request.
                 alert("ended");
loading.style = "display:none";
            });

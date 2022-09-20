const channelUrl = "https://www.youtube.com/channel/UCqeixFt3NlU-CnYTmre99_A";
let watchButton = document.getElementsByClassName("watchVideo");
let player = document.getElementById("player");
let close = document.getElementById("close");
let loading = document.getElementById("loading");
let iframeBox = document.getElementById("iframeBox");
const cors = "https://corsytvkr.herokuapp.com/";
const channel = "https://vijayapi.000webhostapp.com/api/channel.php/?vkr="+channelUrl;
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
         console.log(obj.title);


         if (!$.trim(data)){ 
              alert("1 - Unable To Get Data Please Check URL and Contact us on Social Media @TheOfficialVKr");
         }else {
            alert("success");
        }
},
    error: function(errorThrown){
        alert(errorThrown);
        alert("There is an error with AJAX!");
    }    

});

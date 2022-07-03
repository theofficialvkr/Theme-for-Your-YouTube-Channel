<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title id="pageTitle"> </title>
   <link rel="stylesheet" href="style.css">
   <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>
<body>
   <header id="header">
      <input type="checkbox" id="menu" name="menu">
      <img class="shadow" id="webLogo" src="" alt="Logo">
      <nav>
         <ul>
            <li class="shadow">Home</li>
            <li class="shadow">Service</li>
            <li class="shadow">Follow</li>
            <li class="shadow">Contact</li>
         </ul>
      </nav>
      <div class="navMenu">
         <label for="menu">
            <div class="menu">
               <span class="shadow"></span>
               <span class="shadow"></span>
               <span class="shadow"></span>
            </div>
         </label>
      </div>
   </header>
   <div class="wrapper">
      <div id="loading">
         <div class="circle"></div>
         <h3 class="loadingText">Loading .....</h3>
      </div>
    <center><h1 id="topChannel">Welcome to <span id="channelName"></span></h1></center>
      <div id="player">
         <p id="close">X</p>
         <div id="box">
          <iframe src="" id="iframeBox"></iframe>
         </div>
      </div>      
   <div id="content">
   </div>
   </div>
   <script src="javascript.js"></script>
</body>
</html>

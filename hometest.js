var flashButton = document.getElementById("click1");
  var opacity = ["0", "1"];
  var counter = 0;

  function buttonFlash (){
    if(counter >= opacity.length){
      counter=0;
    }
     flashButton.style.opacity = opacity[counter];
     counter++;
  }

  var myTimer = setInterval(buttonFlash, 1000);

    // buttonFlashing.onclick = function(){
    //   clearInterval(myTimer);
    // };






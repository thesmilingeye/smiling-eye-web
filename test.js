//Will remove the button from the DOM entirely
document.getElementById("soundonbtn").addEventListener("click", function(event){
    event.target.parentNode.removeChild(event.target);
  });

  const myContainer = document.querySelector('#container');
  myContainer.addEventListener('click', function load_container() {
  });

  function load_container(){
    document.getElementById("container");
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Hide the main content initially
    var mainPage = document.getElementById("main_page");
    mainPage.classList.add("hidden");
  
    // Add event listener to the button
    var startButton = document.getElementById("soundonbtn");
    startButton.addEventListener("click", function() {
      // Show the main content when the button is clicked
      mainPage.classList.remove("hidden");
    });
  });
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
  
  setTimeout(buttonFlash, 5000);

  var myTimer = setInterval(buttonFlash, 1000);

    // buttonFlashing.onclick = function(){
    //   clearInterval(myTimer);
    // };



  
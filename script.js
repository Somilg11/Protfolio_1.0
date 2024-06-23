
//shuffle -----------------------------------------------------
$(document).ready(function(){
    $('.shuffle-text').on('mouseenter', function(){
      var text = $(this).attr('data-text');
      var shuffledText = shuffle(text);
      $(this).text(shuffledText);
    });
    
    $('.shuffle-text').on('mouseleave', function(){
      var originalText = $(this).attr('data-text');
      $(this).text(originalText);
    });
  
    function shuffle(text) {
      var a = text.split(""),
          n = a.length;
  
      for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      return a.join("");
    }
  });


//cursor -------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });
});

//time ------------------------------------------------------

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()+" GMT+1"}`
    document.getElementById('time').innerText = time;
}

setInterval(showTime, 1000);

const str = "TRYING TO DO BETTER";
const text = document.getElementById("text");
window.onload = () => {
    for (let i=0; i < str.length; i++) {
        let span = document.createElement("span");
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${11*i}deg)`;
    }
}

//dark mode ------------------------------------------------------

const body = document.querySelector("body");
toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    body.classList.add("dark");
    toggle.classList.add("active");
}
console.log(getMode);

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

if(!body.classList.contains("dark")){
    return localStorage.setItem("mode", "light");
    }    
localStorage.setItem("mode", "dark");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
  let newStr = document.querySelector("#text")
  newStr.innerHTML = "This is really cool!"
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );



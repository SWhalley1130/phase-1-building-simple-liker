// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelectorAll(".like-glyph").forEach(el=>el.addEventListener("click", (e)=>
{
    mimicServerCall()
    .then(res=>
    {
        let heart=e.target;
        if (heart.textContent===FULL_HEART)
        {
          heart.textContent=EMPTY_HEART;
        } 
        else
        { 
          heart.textContent=FULL_HEART
        }
        heart.classList.toggle("activated-heart");
    })
    .catch((err)=>
    {
      document.querySelector("#modal").classList.remove("hidden");
      document.querySelector("#modal").textContent=err;
      setTimeout(()=>document.querySelector("#modal").classList.add("hidden"), 3000);
    })
}));


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const letters = "abcdEfghijklmnopqrstuvwxyz";

let lettersArry = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArry.forEach((letter) => {
  let span = document.createElement("span");
  let spanText = document.createTextNode(letter);
  span.appendChild(spanText);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  poeple: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleoparta",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);

let randomParKey = Math.floor(Math.random() * allKeys.length);

let randomParName = allKeys[randomParKey];

let randomValue = words[randomParName];

let randomChildName = Math.floor(Math.random() * randomValue.length);

let randomValueValue = randomValue[randomChildName];

let wordFromSpan = document.querySelector(".category span");

wordFromSpan.innerHTML = randomParName;

let lettersGues = document.querySelector(".letters-guess");
let lettersGuesArry = Array.from(randomValueValue);
lettersGuesArry.forEach((letter) => {
  let span = document.createElement("span");

  if (letter === " ") {
    span.className = "with-space";
  }
  lettersGues.append(span);
});

let gussSpans = document.querySelectorAll(".letters-guess span");
let gussSpanss = document.querySelectorAll(".letters-guess");
let wrongTries = 0
let theDraw = document.querySelector(".hangman-draw")


document.addEventListener("click", function (e) {
  if (e.target.className === "letter-box") {
    e.target.classList.add("clickd");
    let theStutus = false
    let letterClicked = e.target.innerHTML.toLowerCase();
    let theChossenWord = Array.from(randomValueValue.toLowerCase());

    theChossenWord.forEach((letter, letterIndex) => {

      if (letterClicked == letter) {

        theStutus = true
      
        gussSpans.forEach((span, spanIndex) => {

          if (letterIndex === spanIndex) {

            span.innerHTML = letter;
            span.classList.add("tru")
        
          }
        });
    }
    
});
if (theStutus === false) {
    wrongTries++
    theDraw.classList.add(`wrong-${wrongTries}`)
   let fail = document.querySelector("#fail")
   fail.play()
   fail.volume = 0.5  
 if (wrongTries === 8) {
    endGame()
    lettersContainer.classList.add("finished")   
 }
}
else{
    let sucss = document.querySelector("#sucss")
    sucss.play()
    sucss.volume = 0.4
}
    }
});

function endGame() {
    Swal.fire({
        title: 'Oops...',
        icon: 'error',
        text: `Game Over The Word Is ${randomValueValue}`,
        confirmButtonText:
          '<a href="">Try Again</a> ',
      
      })
    
}
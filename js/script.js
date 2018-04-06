document.querySelector('[data-action="destroy"]').addEventListener('click', function() {
  document.querySelector('body').classList.add('cross');
  document.addEventListener('click', function(el) {
    el.target.outerHTML = "";
  });
  setInterval(spawnJCVD, 100);
});

function spawnJCVD() {
  let jcvd = document.createElement('img');
  jcvd.setAttribute('src', './assets/imgs/travolta.gif');
  jcvd.style.position = "absolute";
  jcvd.style.top = Math.floor(Math.random() * Math.floor(screen.height)) + "px";
  jcvd.style.left = Math.floor(Math.random() * Math.floor(screen.width)) + "px";
  document.querySelector('body').appendChild(jcvd);
}

//@TODO function gameOver not finish

// Select the div via it's id and store the selected element
// inside gameContainer var.
let gameContainer = document.querySelector('#game-container');
let buttonReset = document.querySelector('#button-reset');
let childDivs = document.querySelectorAll('#game-container>div');
//Initialisez the score at 0
let score = 0;

document.getElementById('score').innerHTML = score;


function gameOver(div) {
  if (score > 5) {
    alert('Vous avez perdu');
  } else {
    for(let i = 0; divs.length; i++) {
      if(divs[i].classList.contains('green-color')) {
        victoryStatus = false;
      }
    }
  }
}

//Function for restart the game
function buttonRestart(div) {
  let green = "green-color";
  let red = "red-color";
  if(div.classList.contains(red)){
    div.classList.remove(red);
    div.classList.add(green);
  }
};

//Function for invert the color
function invertColor(div) {
  let green = "green-color";
  let red = "red-color";
  if(div.classList.contains(green)) {
    div.classList.remove(green);
    div.classList.add(red);
  } else {
    div.classList.remove(red);
    div.classList.add(green);
  };
};

function checkVictory(divs) {
  let victoryStatus = true;
  for(let i = 0; i < divs.length; i++) {
    if(divs[i].classList.contains('green-color')) {
      victoryStatus = false;
      break;
    }
  }
  if(victoryStatus == true) {
    alert('Bravo tu as gagné ! Tu es très fort en JavaScript ! Tu peux devenir expert !')
  }
};


//When someone clicks on the button, the game and the score restart
buttonReset.addEventListener('click', function() {
  for(let i =0; i < childDivs.length; i++) {
    buttonRestart(childDivs[i]);
    score = 0;
    document.getElementById('score').innerHTML = score;
  }
});
// When someone clicks on anything inside the game container, it triggers
// the anonymous function
gameContainer.addEventListener('click', function(el) {
  // We get the target of the click event, which is the specific div and not
  // the container div
  let clickedElement = el.target;

  for(let i = 0; i < childDivs.length; i++)
  {
    // childDivs[i] allow us to display every value of the childDivs array
    // because we select it via the array key [i]
    if (childDivs[i] == clickedElement) {

      if(i > 0 && i < (childDivs.length -1)) {
        invertColor(childDivs[i + 1]);
        invertColor(childDivs[i - 1]);
        invertColor(childDivs[i]);
      } else if (i == 0) {
        invertColor(childDivs[i + 1]);
        invertColor(childDivs[i]);
      } else if (i == (childDivs.length - 1)) {
        invertColor(childDivs[i - 1]);
        invertColor(childDivs[i]);
      }
    }
  }
  score++;
  document.getElementById('score').innerHTML = score;
  checkVictory(childDivs);
  gameOver();
});
//make background a sparkly gradient that moves with your mouse cursor
//maybe paralax something idk
//that seems like a lot of work but damn it'd be cool
//this is all fucking nightmare code. I want to be euthanised
const splash = document.getElementById("splash");
window.onload = wackadoodle();

function wackadoodle() {
  //fetch("lines.json")
  fetch("https://cupofdirtfordinner.github.io/cool-school-portfolio/lines.json")
    .then(res => res.json())
    .then(jungus => {
      splash.innerHTML = jungus[Math.floor(Math.random() * jungus.length)]; //ugh
      splash.style.animationDuration = `${Math.round(splash.clientWidth / 200)}s`
    })
  console.log(splash.innerHTML);
}

var ThreeD = 0;

function folderA() {
  //joe many liberals does it take to change a log by bolb??? none , their too busy ???? their gender!!!
  if (ThreeD === 0) {
    ThreeD = 1;
  } else {
    ThreeD = 0;
  }
  console.log("ThreeD:" + ThreeD);
  update();
}

var pixel = 0;

function folderB() {
  if (pixel === 0) {
    pixel = 1;
  } else {
    pixel = 0;
  }
  console.log("pixel:" + pixel);
  update();
}

var etc = 0;

function folderC() {
  if (etc === 0) {
    etc = 1;
  } else {
    etc = 0;
  }
  console.log("etc:" + etc);
  update();
}

var code = 0;

function folderD() {
  if (code === 0) {
    code = 1;
  } else {
    code = 0;
  }
  console.log("code:" + code);
  update();
}

var reach = 0;

function folderE() {
  if (reach === 0) {
    reach = 1;
  } else {
    reach = 0;
  }
  console.log("reach:" + reach);
  update();
}

//const interval = setInterval(function() {forever();}, 10);
function update() {
  forever();
}

const threeyd = Array.from(document.getElementsByClassName("threed"));
const pixelyd = Array.from(document.getElementsByClassName("pixel"));
const etcyd = Array.from(document.getElementsByClassName("etc"));
const codyd = Array.from(document.getElementsByClassName("code"));
const reaychd = Array.from(document.getElementsByClassName("reach"));

document.body.addEventListener('click', forever(), true);

function forever() {
    
    threeyd.forEach(penis => {
      if (ThreeD === 1) {
        penis.style.display = "inline-block";
        penis.scrollIntoView();
      } else {
        penis.style.display = "none";
    }})

    pixelyd.forEach(penis => {
      if (pixel === 1) {
        penis.style.display = "inline-block";
        penis.scrollIntoView();
      } else {
        penis.style.display = "none";
    }})

    etcyd.forEach(penis => {
      if (etc === 1) {
        penis.style.display = "inline-block";
        penis.scrollIntoView();
      } else {
        penis.style.display = "none";
    }})

    codyd.forEach(penis => {
      if (code === 1) {
        penis.style.display = "inline-block";
        penis.scrollIntoView();
      } else {
        penis.style.display = "none";
    }})

    reaychd.forEach(penis => {
      if (reach === 1) {
        penis.style.display = "inline-block";
        penis.scrollIntoView();
      } else {
        penis.style.display = "none";
    }})
}
//make background a sparkly gradient that moves with your mouse cursor
//maybe paralax something idk
//that seems like a lot of work but damn it'd be cool
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
  console.log("ThreeD:" + ThreeD)
}

var pixel = 0;

function folderB() {
  if (pixel === 0) {
    pixel = 1;
  } else {
    pixel = 0;
  }
  console.log("pixel:" + pixel);
}

var etc = 0;

function folderC() {
  if (etc === 0) {
    etc = 1;
  } else {
    etc = 0;
  }
  console.log("etc:" + etc);
}

var code = 0;

function folderD() {
  if (code === 0) {
    code = 1;
  } else {
    code = 0;
  }
  console.log("code:" + code);
}

var reach = 0;

function folderE() {
  if (reach === 0) {
    reach = 1;
  } else {
    reach = 0;
  }
  console.log("reach:" + reach);
}

const interval = setInterval(function() {
  forever();
}, 10);


function forever() {
  if (ThreeD === 1) {
    document.getElementById("threed").style.display = "inline-block";
  } else {
    document.getElementById("threed").style.display = "none";
  }
  if (pixel === 1) {
    document.getElementById("pixeld").style.display = "inline-block";
  } else {
    document.getElementById("pixeld").style.display = "none";
  }
  if (etc === 1) {
    document.getElementById("etcd").style.display = "inline-block";
  } else {
    document.getElementById("etcd").style.display = "none";
  }
  if (code === 1) {
    document.getElementById("coded").style.display = "inline-block";
  } else {
    document.getElementById("coded").style.display = "none";
  }
  if (reach === 1) {
    document.getElementById("reachd").style.display = "inline-block";
  } else {
    document.getElementById("reachd").style.display = "none";
  }

}
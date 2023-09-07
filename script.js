var time = 62;
var score = 0;
var val;

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}
function makeBubble() {
    var store = "";

    for (var i = 1; i <= 189; i++) {
        var rndm = Math.floor(Math.random() * 10);
        store += `<div class="bubble">${rndm}</div>`;
    }

    document.querySelector("#panelbtm").innerHTML = store;
}
function timer() {
    var timer = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            clearInterval(timer);
            document.querySelector("#panelbtm").innerHTML = `<h1>Game Over!</h1>`;
            document.querySelector("#hit").textContent = 0;
            document.querySelector("#panelbtm").style.backgroundColor = "rgb(203, 203, 60)";
        }
    }, 1000)
}

function getHit() {
    val = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = val;
}

document.querySelector("#panelbtm").addEventListener("click", function (details) {
    var clicked = Number(details.target.textContent);
    if (clicked === val) {
        increaseScore();
        makeBubble();
        getHit();
    }

})

getHit();
timer();
makeBubble();

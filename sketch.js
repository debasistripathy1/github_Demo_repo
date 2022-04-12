var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var stream = [];
var fadeInterval = 1.6;
var symbolSize = 14;
const FPS = 30;
var frameCount = 0;


function random(min,max){
    return Math.random() * (max-min) + min;
}

function Symbol(x, y, speed, opacity){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.opacity = opacity;
    this.value;
    this.switchInterval = Math.round(random(2, 25));

    this.setToRandomSymbol = function(){
        var charType = Math.round(random(0,5));

        if(frameCount % this.switchInterval == 0){
            if(charType > 1){
                this.value = string.fromCharCode()
            }
        }

    }
    }
}
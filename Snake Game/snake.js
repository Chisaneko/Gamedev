let domReplay = document.querySelector('#replay');
let domScore =  document.querySelector('#score');
let domCanvasGame = document.createElement("canvas");
 
document.querySelector("#canvas").appendChild(domCanvasGame);
let ctx = domCanvasGame.getContext("2d");

const W = (domCanvasGame.width = 400);
const H = (domCanvasGame.height = 400);

let snake,
food,
currentHue,
cells = 20,
cellSize,
isGameOver = false,
tails = [],
Score = 00,
maxScore = undefined,
particles = [],
splashParticleCount = 20,
cellsCount,
requestID;

let helpers = {

    Vec: class {
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
        add(value){
            this.x += value.x;
            this.y += value.y;  
            return this;
        }
        
        mult(value){
            if(value instanceof helpers.Vec){
                this.x *= value.x;
                this.y *= value.y;
                return this;
            }

            this.x *= value;
            this.y *= value;
            return this
        }
    },

    isCollision(v1, v2){
        return v1.x == v2.x && v1.y == v2.y;
    },
    
    garbageCollector(){
        for(let i = 0; i < particles.lenght; i++){
            if (particle[i].size <= 0){
                particles.splice(i,1);
            }
        }
    },

    drawGrid(){
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = "#232332";
        ctx.shadowBlur = 0;

        for(let i = 0; i <cells; i++){
            let f = (w / cells) * 1;
            ctx.beginPath();
            ctx.moveTo(f,0);
            ctx.lineTo(f, H);
            ctx.stroke();
            ctx.beginPath(0,f)
            ctx.lineTo(W,f)
            ctx.closePath();

        }
    },

    randHue(){
        return ~~(Math.random() * 360) 
    },

    hsl2rgb(hue, saturation, lightness) {
        if (hue == undefined){
            return[0,0,0]
        }
        let chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
        let huePrime = hue / 60;
        let SecondComponent = chroma * (1 - Math.abs((huePrime % 2)-1));

        huePrime = ~~ huePrime;
        let red;
        let green;
        let blue;

        if(huePrime === 0){
            red = chroma;
            green = SecondComponent;
            blue = 0;
        } else if (huePrime === 1){
            red = SecondComponent;
            green = chroma;
            blue = 0;
        } else if (huePrime === 2){
            red = 0;
            green = chroma;
            blue = SecondComponent;
        } else if (huePrime === 3){
            red = 0;
            green = SecondComponent;
            blue = chroma;
        } else if (huePrime === 4){
            red = SecondComponent;
            green = 0;
            blue = chroma;
        } else if (huePrime === 5){
            red = chroma;
            green = 0;
            blue = SecondComponent;
        }

        let lightnessAdjustment = lightness - chroma / 2;
        red += lightnessAdjustment;
        green += lightnessAdjustment;
        blue += lightnessAdjustment;

        return [
            Math.round(red * 255),
            Math.round(green * 255),
            Math.round(blue * 255),
        ];
    },

    lerp(start, end, t){
        return start * (1 - t) + end * t;
    }
}

let KEY = {
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false,
    resetState(){
        this.ArrowUp = false;
        this.ArrowRight = false;
        this.ArrowDown = false;
        this.ArrowLeft = false;
    },

    listen() {
        addEventListener(
            "keydown",
            (ee) => {
                if (e.key === "ArrowUp" && this.ArrowDown) return;
                if (e.key === "ArrowRight" && this.ArrowDown) return;
                if (e.key === "ArrowDown" && this.ArrowDown) return;
                if (e.key === "ArrowLeft" && this.ArrowDown) return;
                this[e.key] = true;
                Object.keys(this)
                .filter((ff) => f !== e.key && f !== "listen" && f !== "resetState")
                .forEach((kk) => {
                    this[k] = false;
                });
            },
            false
        );
    }
};





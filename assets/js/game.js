//import tileMap from "assets/map.js";
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
//const tileMap = new Tilemap();


//Código Mapa
let tileset = new Image()
tileset.src = "assets/img/map.png"
const player = new Image()
player.src = "assets/img/heroi.png";

let camerax = 50
let cameray = 0
let speed = 4

let canvas_width = 900
let canvas_heigth = 700

let zoom = 1

const draw = () => {
    ctx.clearRect(0, 0, 900, 700);
    ctx.drawImage(tileset, camerax , cameray, canvas_width, canvas_heigth, 0, 0, canvas_width, canvas_heigth);

}

//Código Player


    
//Código Jogo

let gamerun = setInterval(draw, 1);

document.addEventListener("keydown", (event) => {
    console.log(event)

    switch(event.key){
        case "ArrowDown": {
            if (cameray === canvas_width) cameray = canvas_width
            else cameray += speed
            break;
        }
        case "ArrowUp": {
            if (cameray === 0 ) cameray = 0
            else cameray -= speed
            break;
        }
        case "ArrowLeft": {
            if (camerax === 0 ) camerax = 0
            else camerax -= speed
            break;
        }
        case "ArrowRight": {
            camerax += speed
            break;
        }
        case " ": {
            zoom += 0.1;
            break;
        }
        case "Enter": {
            zoom -= 0.1;
            break
        }
        default:
            break;
    }

    console.log(camerax, cameray)
    console.log(zoom)
})

class Heroi {
    constructor (){
        this.nome = "Lion"
        this.arma = "espada"
        this.posx = 50
        this.posy = 50
        this.vida = 3
        this.saude = 10
    }
}
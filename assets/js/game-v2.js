const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 500
canvas.height = 350
let speed = 2
let lastKey = ""

//ctx.fillRect(0, 0, canvas.width, canvas.height)

const mapa = new Image()
mapa.src = 'assets/img/mapa.png'
const player = new Image()
player.src = 'assets/img/ACgarRight.png'

mapa.onload = () => {
    ctx.drawImage(mapa, 50, 45)
    ctx.drawImage(
        player, 
        //corte
        0, 
        0, 
        player.width / 4, 
        player.height / 2, //seleção do boneco
        
        //atual
        canvas.width / 2, //posição X no mapa = tamanho canvas / 2
        canvas.height / 2, //mesma coisa para posição Y
        player.width / 4, 
        player.height / 2, //seleção do boneco
        )

}

const keys = { 
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    },

}

class Sprite {
    constructor ({posicao,velocidade, mapa}){
        this.posicao = posicao
        this.mapa = mapa
       
    }
    draw(){
        ctx.drawImage(mapa, this.posicao.x, this.posicao.y)
    }
}

const background = new Sprite({
    posicao: {
        x: 0,
        y: 0
    },
    mapa: mapa
})

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    ctx.drawImage(
        player, 
        //corte
        0, 
        0, 
        player.width / 4, 
        player.height / 2, //seleção do boneco
        
        //atual
        canvas.width / 2, //posição X no mapa = tamanho canvas / 2
        canvas.height / 2, //mesma coisa para posição Y
        player.width / 4, 
        player.height / 2, //seleção do boneco
    )

    if (keys.ArrowUp.pressed && lastKey === "ArrowUp")              background.posicao.y += speed
    else if (keys.ArrowDown.pressed  && lastKey === "ArrowDown")    background.posicao.y -= speed
    else if (keys.ArrowLeft.pressed  && lastKey === "ArrowLeft")    background.posicao.x += speed
    else if (keys.ArrowRight.pressed  && lastKey === "ArrowRight")  background.posicao.x -= speed
    

}
animate()

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

//Controles
    
    console.log(background.posicao.x, background.posicao.y)
    //console.log(zoom)

document.addEventListener("keydown", (event) => {
    console.log(event)

    switch(event.key){
        case "ArrowDown": {
           keys.ArrowDown.pressed = true
           lastKey = "ArrowDown"
           break;
        }
        case "ArrowUp": {
            keys.ArrowUp.pressed = true
            lastKey = "ArrowUp"
            break;
        }
        case "ArrowLeft": {
            keys.ArrowLeft.pressed = true
            lastKey = "ArrowLeft"
            break;
        }
        case "ArrowRight": {
            keys.ArrowRight.pressed = true
            lastKey = "ArrowRight"
            break;
        }
        case "+": {
            canvas.width = canvas.width + 10;
            canvas.right = canvas.right + 10;
            break;
        }
        case "-": {
            canvas.width = canvas.width - 10;
            canvas.right = canvas.right - 10;
            break;
        }
        default:
            break;
    }

    
    console.log(camerax, cameray)
    //console.log(zoom)
})
document.addEventListener("keyup", (event) => {
    console.log(event)

    switch(event.key){
        case "ArrowDown": {
           keys.ArrowDown.pressed = false
           break;
        }
        case "ArrowUp": {
            keys.ArrowUp.pressed = false
            break;
        }
        case "ArrowLeft": {
            keys.ArrowLeft.pressed = false
            break;
        }
        case "ArrowRight": {
            keys.ArrowRight.pressed = false
            break;
        }
        default:
            break;
    }

    
    console.log(camerax, cameray)
    //console.log(zoom)
})
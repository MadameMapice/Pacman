
// 0 es mur, 1 es sol, 2 bombom, 19 colonnes, 22 lignes

let grille =[

    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]


document.body.addEventListener("keypress",changeDirection)

let Score=0
 
let pacman={

    x:2,
    y:2,
    direction:1
} 

let fantome={
    x:10,
    y:11,
    direction:2

}

function affichegrille()


{ document.getElementById("grille").innerHTML=""


for (let i=0; i<22;i++) {

    for (let j=0; j<19;j++) {


        let elem=document.createElement("div")

        elem.style.gridRowStart = i+1;
        elem.style.gridColumnStart = j+1;

        if(grille[i][j]==0){

            elem.className="mur"

        }

        else if (grille[i][j]==1){

            elem.className="sol"
        }
      
        else {
            elem.className="bonbon"
        }

        document.getElementById("grille").appendChild(elem)

    }
}

}
let numinterval = setInterval(tourdejeu,150)

function tourdejeu ()  
{
    affichegrille();

    deplacePacman();

    collision();

    sorti();

    manger();

    affichePacman();

    deplaceFantome()

    collisionFantome()

    afficheFantome();


    gagne();
    
}

function affichePacman()
{
    let elem=document.createElement("div")

    elem.className="pacman"

    document.getElementById("grille").appendChild(elem)

    elem.style.gridRowStart = pacman.y;
    elem.style.gridColumnStart = pacman.x;
}


function deplacePacman()
{
    

    if (pacman.direction==0){
        pacman.x=pacman.x+1 // droit
    }
    else if (pacman.direction==1){
        pacman.y=pacman.y-1 // arriba
    }
    else if(pacman.direction==2){
        pacman.x=pacman.x-1 // gauche
    }


    else{
        pacman.y=pacman.y+1 // abajo
    }
}

function changeDirection(event)
{
    // console.log('hola') pour tester la function
    console.log(event.key)

    if (event.key=="8"){
        pacman.direction=1
    }
    else if (event.key=="2"){
        pacman.direction=3
        
    }
    else if(event.key=="4"){
        pacman.direction=2
    }
    else if(event.key=="6"){
        pacman.direction=0
    }

    else{
        console.log("touche non géré")
    }
}

function collision()
{
    if(grille[pacman.y-1][pacman.x-1]==0){

        console.log("mur")

    
        if (pacman.direction==0){
            pacman.x=pacman.x-1 
        }
        else if (pacman.direction==1){
            pacman.y=pacman.y+1 
        }
        else if(pacman.direction==2){
            pacman.x=pacman.x+1 
        }
    
    
        else{
            pacman.y=pacman.y-1 
        }
    

    }

}

function manger()
{
    if(grille[pacman.y-1][pacman.x-1]==2){

        grille[pacman.y-1][pacman.x-1]=1

    Score=Score+10
    document.querySelector(".score").innerHTML="<h1> score : "+Score+"</h1>"
     
    }
}

function sorti()
{
    if (pacman.x<1){
        pacman.x=19
    }

    if (pacman.x>19){
        pacman.x=1
    }
 
}

function gagne()
{
   
let gagne = true

for (let i=0; i<22;i++) {

for (let j=0; j<19;j++) {
    if(grille[i][j]==2){

       gagne=false


    }
}
} if (
    gagne==true
) {
    alert("Vous avez gagné!")

    clearInterval(numinterval)
}
        
}

function afficheFantome()
{
    let elem=document.createElement("div")

    elem.className="fantome"

    document.getElementById("grille").appendChild(elem)

    elem.style.gridRowStart = fantome.y;
    elem.style.gridColumnStart = fantome.x;
}

function deplaceFantome()
{
    
fantome.direction=getRandomInt(4)
    if (fantome.direction==0){
        fantome.x=fantome.x+1 // droit
    }
    else if (fantome.direction==1){
        fantome.y=fantome.y-1 // arriba
    }
    else if(fantome.direction==2){
        fantome.x=fantome.x-1 // gauche
    }


    else{
        fantome.y=fantome.y+1 // abajo
    }
}

function collisionFantome()
{
    if(grille[fantome.y-1][fantome.x-1]==0){

    
        if (fantome.direction==0){
            fantome.x=fantome.x-1 
        }
        else if (fantome.direction==1){
            fantome.y=fantome.y+1 
        }
        else if(fantome.direction==2){
            fantome.x=fantome.x+1 
        }
    
    
        else{
            fantome.y=fantome.y-1 
        }
    

    }

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
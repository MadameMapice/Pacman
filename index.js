
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

document.body.addEventListener("keyup", changeDirection)

let interval = setInterval(tourdejeu,200)
 
let pacman={
    x:1,
    y:2,662
    direction:0
} 
let tabFantome=[{
    x:10,
    y:11,
    direction:3

},{
    x:10,
    y:11,
    direction:3

},{
    x:10,
    y:11,
    direction:3

},{
    x:10,
    y:11,
    direction:3

}]

let Score=0


function affichegrille(){ 
    document.getElementById("grille").innerHTML=""
        for (let i=0; i<22;i++) {
            for (let j=0; j<19;j++) {
                let elem=document.createElement("div")
                elem.style.gridRowStart = i+1;
                elem.style.gridColumnStart = j+1;

                document.getElementById("grille").appendChild(elem)

                if(grille[i][j]==0){
                    elem.className="mur"
                }

                else if (grille[i][j]==1){
                    elem.className="sol"
                }
            
                else {
                    elem.className="bonbon"
                }

            }
        }

}

function affichePacman()
{
    let elem=document.createElement("div")
    document.getElementById("grille").appendChild(elem)
    elem.className="pacman"
    elem.style.gridRowStart = pacman.y;
    elem.style.gridColumnStart = pacman.x;

        if (pacman.direction == 0){
            elem.style.transform = "rotate(0deg)"
    }
    else if (pacman.direction == 1){
            elem.style.transform = "rotate(270deg)"
    }
    else if(pacman.direction == 2){
            elem.style.transform = "rotate(180deg)"
    }

    else if(pacman.direction == 3){
            elem.style.transform = "rotate(90deg)"
    }

}

function afficheFantome(num){
        let elem=document.createElement("div")

        elem.className="fantome"+num

        document.getElementById("grille").appendChild(elem)

        elem.style.gridRowStart = tabFantome[num].y;
        elem.style.gridColumnStart = tabFantome[num].x;
}




function deplacePacman(){
    

    if (pacman.direction==0){
        pacman.x=pacman.x+1 // droit
    }
    else if (pacman.direction==1){
        pacman.y=pacman.y-1 // haut
    }
    else if(pacman.direction==2){
        pacman.x=pacman.x-1 // gauche
    }

    else{
        pacman.y=pacman.y+1 // bas
    }
}

function deplaceFantome(num){
    
    tabFantome[num].direction=getRandomInt(4)
    if (tabFantome[num].direction==0){
        tabFantome[num].x=tabFantome[num].x+1 // droit
    }
    else if (tabFantome[num].direction==1){
        tabFantome[num].y=tabFantome[num].y-1 // haut
    }
    else if(tabFantome[num].direction==2){
        tabFantome[num].x=tabFantome[num].x-1 // gauche
    }
    else if(tabFantome[num].direction==3){
        tabFantome[num].y=tabFantome[num].y+1 // bas
    }
}


function collision(){
    if(grille[pacman.y-1][pacman.x-1]==0){

        if (pacman.direction==0){
            pacman.x=pacman.x-1 
        }
        else if (pacman.direction==1){
            pacman.y=pacman.y+1 
        }
        else if(pacman.direction==2){
            pacman.x=pacman.x+1 
        }
    
        else if(pacman.direction==3){
            pacman.y=pacman.y-1 
        }

    }
}

function collisionFantome(num){
    if(grille[tabFantome[num].y-1][tabFantome[num].x-1]==0){

        if (tabFantome[num].direction==0){
            tabFantome[num].x=tabFantome[num].x-1 
        }
        else if (tabFantome[num].direction==1){
            tabFantome[num].y=tabFantome[num].y+1 
        }
        else if(tabFantome[num].direction==2){
            tabFantome[num].x=tabFantome[num].x+1 
        }
    
        else if(tabFantome[num].direction==3){
            tabFantome[num].y=tabFantome[num].y-1 
        }
    
    }
}

function manger(){
    if(grille[pacman.y-1][pacman.x-1]==2){
        grille[pacman.y-1][pacman.x-1]=1
        Score=Score+10
        document.querySelector(".score").innerHTML="<h1> score : "+Score+"</h1>"
    }
}

function sorti(){
    if (pacman.x<1){
        pacman.x=19
    }
    if (pacman.x>19){
        pacman.x=1
    }
    if (pacman.y < 1){
        pacman.y = 22
    }
    if (pacman.y > 22){
        pacman.y = 1
    }
}

function sortiFantome(num){
    if (tabFantome[num].x<1){
        tabFantome[num].x=19
    }
    if (tabFantome[num].x>19){
        tabFantome[num].x=1
    }
    if (tabFantome[num].y < 1){
        tabFantome[num].y = 22
    }
    if (tabFantome[num].y > 22){
        tabFantome[num].y = 1
    }
}

function gagne(){
    let gagne = true
        for (let i=0; i<22;i++) {
            for (let j=0; j<19;j++) {
                if(grille[i][j]==2){
                    gagne=false

            }
        }
    }
}

if (gagne==true) {
    alert("Vous avez gagné!")
    clearInterval(interval)

        
}


function tourdejeu () {
    affichegrille();

    deplaceFantome(0);

    deplaceFantome(1);

    deplaceFantome(2);

    deplaceFantome(3);

    sortiFantome(0);

    sortiFantome(1);

    sortiFantome(2);

    sortiFantome(3);

    collisionFantome(0);

    collisionFantome(1);

    collisionFantome(2);

    collisionFantome(3);

    afficheFantome(0);

    afficheFantome(1);

    afficheFantome(2);

    afficheFantome(3);

    deplacePacman();

    sorti();

    collision();

    manger();

    affichePacman();

    gagne();
    
}

function changeDirection(event){
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

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
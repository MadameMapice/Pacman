
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

let copygrille=JSON.parse(JSON.stringify(grille))

document.body.addEventListener("keyup", changeDirection)
document.getElementById("replay").addEventListener("click", rejouer)

let interval = setInterval(tourdejeu,200)
 
let pacman=new Pacman(1,2,0)
   

let tabFantome=[
    new Fantome(10,11,3),
    new Fantome(10,11,3),
    new Fantome(10,11,3),
    new Fantome(10,11,3),
    new Fantome(10,11,3),
    new Fantome(10,11,3),
]

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


function tourdejeu () {
    affichegrille();
    for(let i=0; i<tabFantome.length;i++){
    
        tabFantome[i].attrapePacman(pacman);
        tabFantome[i].deplaceFantome();
        tabFantome[i].attrapePacman(pacman);
        tabFantome[i].sortiFantome();
        tabFantome[i].collisionFantome();
        tabFantome[i].afficheFantome(i)
    }


    pacman.deplacePacman();

    pacman.sortiPacman();

    pacman.collisionPacman();

    pacman.mangerPacman();

    pacman.affichePacman();

    pacman.gagne();
    
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

function rejouer(){
    clearInterval(interval)
    grille=JSON.parse(JSON.stringify(copygrille))
    pacman.x=2
    pacman.direction=0
    pacman.y=2
    for(let i=0; i<tabFantome.length;i++){
        tabFantome[i].x=10
        tabFantome[i].y=11
    }
    Score=0
    interval = setInterval(tourdejeu,200);

    
}

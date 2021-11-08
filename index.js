
// 0 es mur, 1 es sol, 2 bombom, 19 colonnes, 22 lignes

let carte =new Grille()


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



function tourdejeu () {
    carte.affichegrille();
    for(let i=0; i<tabFantome.length;i++){
    
        tabFantome[i].attrapePacman(pacman);
        tabFantome[i].deplaceFantome();
        tabFantome[i].attrapePacman(pacman);
        tabFantome[i].sortiFantome();
        tabFantome[i].collisionFantome(carte);
        tabFantome[i].afficheFantome(i)
    }


    pacman.deplacePacman();

    pacman.sortiPacman();

    pacman.collisionPacman(carte);

    pacman.mangerPacman(carte);

    pacman.affichePacman();

    pacman.gagne(carte);
    
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
    carte =new Grille()
    pacman.x=1
    pacman.direction=0
    pacman.y=2
    for(let i=0; i<tabFantome.length;i++){
        tabFantome[i].x=10
        tabFantome[i].y=11
    }
    Score=0
    interval = setInterval(tourdejeu,200);

    
}

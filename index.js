
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



let pacman={

    x:5,
    y:2,
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

}setInterval(tourdejeu,500)

function tourdejeu ()  
{
    affichegrille();

    affichePacman();

    deplacePacman();

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
        pacman.x=pacman.x+1
    }
    else if (pacman.direction==1){
        pacman.y=pacman.y-1
    }
    else if(pacman.direction==2){
        pacman.x=pacman.x-1
    }


    else{
        pacman.y=pacman.y+1
    }
}

function changeDirection(event)
{
    // console.log('hola') pour tester la function
    console.log(event.key)
}
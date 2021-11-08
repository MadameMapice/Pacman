class Pacman {
    x;
    y;
    direction;

    constructor(x,y,direction) {
        this.x=x;
        this.y=y;
        this.direction=direction;
    }
    
    affichePacman()
    {
        let elem=document.createElement("div")
        document.getElementById("grille").appendChild(elem)
        elem.className="pacman"
        elem.style.gridRowStart = pacman.y;
        elem.style.gridColumnStart = pacman.x;

            if (this.direction == 0){
                elem.style.transform = "rotate(0deg)"
        }
        else if (this.direction == 1){
                elem.style.transform = "rotate(270deg)"
        }
        else if(this.direction == 2){
                elem.style.transform = "rotate(180deg)"
        }

        else if(this.direction == 3){
                elem.style.transform = "rotate(90deg)"
        }

    }

    
    deplacePacman(){
    

    if (this.direction==0){
        this.x=this.x+1 // droit
    }
    else if (this.direction==1){
        this.y=this.y-1 // haut
    }
    else if(this.direction==2){
        this.x=this.x-1 // gauche
    }

    else{
        this.y=this.y+1 // bas
    }
}


    collisionPacman(carte){
    if(carte.grille[this.y-1][this.x-1]==0){

        if (this.direction==0){
            this.x=this.x-1 
        }
        else if (this.direction==1){
            this.y=this.y+1 
        }
        else if(this.direction==2){
            this.x=this.x+1 
        }
    
        else if(this.direction==3){
            this.y=this.y-1 
        }

    }
}

    mangerPacman(carte){
    if(carte.grille[this.y-1][this.x-1]==2){
        carte.grille[this.y-1][this.x-1]=1
        Score=Score+10
        document.querySelector(".score").innerHTML="<h1> score : "+Score+"</h1>"
    }
}

    sortiPacman(){
    if (this.x<1){
        this.x=19
    }
    if (this.x>19){
        this.x=1
    }
    if (this.y < 1){
        this.y = 22
    }
    if (this.y > 22){
        this.y = 1
    }
}




    gagne(carte){
    let gagne = true
        for (let i=0; i<22;i++) {
            for (let j=0; j<19;j++) {
                if(carte.grille[i][j]==2){
                    gagne=false

            }
        }
    
    }
    
    if (gagne==true) {
        clearInterval(interval)
        alert("Vous avez gagné!")
        
       
    }
}
}

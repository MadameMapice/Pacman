class Fantome{
    x;
    y;
    direction;

    constructor(x,y,direction) {
        this.x=x;
        this.y=y;
        this.direction=direction;
}

afficheFantome(num){
    let elem=document.createElement("div")

    elem.className="fantome"+(num%5)

    document.getElementById("grille").appendChild(elem)

    elem.style.gridRowStart = this.y;
    elem.style.gridColumnStart = this.x;
}

deplaceFantome(){
    
    this.direction=getRandomInt(4)
    if (this.direction==0){
        this.x=this.x+1 // droit
    }
    else if (this.direction==1){
        this.y=this.y-1 // haut
    }
    else if(this.direction==2){
        this.x=this.x-1 // gauche
    }
    else if(this.direction==3){
        this.y=this.y+1 // bas
    }
}


attrapePacman(pacman){
   
    if(this.x==pacman.x){
        if(this.y==pacman.y){
         clearInterval(interval)
             alert("Vous avez perdu") 
             
         }
    
    } 
}


collisionFantome(){
    if(grille[this.y-1][this.x-1]==0){

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

sortiFantome(){
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

}

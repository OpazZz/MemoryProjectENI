$(init)

/****************************Déclaration des variables ******************************/
var verifVictoire = 0;
var tour = 0;
var nbClick = 0;
var carte1 = "";
var carte2 = "";
var nbImage = 12;
const BOX = document.querySelectorAll('.box'); // Utilisation de l'élément BOX (CARTE)
var clickActif = true;

/*****************************Lancement Programme **********************************/


function init () { 
    melange();
    refreshPage();
            $(".box-inner").click(function(){       
                showImage(this);                            
                if(nbClick == 1){
                    carte1 = (this);
                    console.log(carte1);
                    console.log(nbClick);
                }
                if(nbClick == 2){
                    carte2 = (this)
                    console.log(nbClick);
                    console.log(carte2);
                    compare(); 
                    ajoutNbTour();                         
                }
            })
}      
       
/********************************Déclaration des Fonctions ***************************/

/**** Fonction pour placer les cartes en début de partie de façon aléatoire ******/
function melange(){                         
    for (i = 0; i < nbImage-1; i++) {
        var nbRandom = Math.floor(Math.random() * (11 - 0));
        BOX[i].style.order = nbRandom;
    }
}

/**** Effet rotation horizontal pour afficher les cartes ******/ 
function showImage(element){                
    if(clickActif == true){            
        $(element).addClass('flip');
        nbClick++; 
    }
}


/**** Effet rotation horizontal pour masquer les cartes ******/
function hiddenImage(element){              
    $(element).removeClass('flip');
    clickActif = true;
}


/**** Comparer si les cartes sont identiques ******/
function compare(){                         
    nbClick = 0;
    tour++;
    if(carte1.id !== carte2.id){
        clickActif = false;
        setTimeout(() => {
            hiddenImage(carte1);
        },'2000');
        setTimeout(() => {
            hiddenImage(carte2);
        },'2000');
    }else{
        verifVictoire++;
            if (verifVictoire == nbImage/2){
                $(".box-inner").off('click');
                setTimeout(() => {alert('Partie Gagnée en ' + tour + ' coups ! Félicitations !!! - Pressez espace pour relancer');},"1000")};
    }
}

/**** rafraichir la page quand presse 'espace'  ******/
function refreshPage(){
    document.addEventListener('keydown', function(event) {
    if (event.code == 'Space') { 
        window.location.reload();
    }});
}

/*********Mofification du nombre de tour afficher en HTML********/
function ajoutNbTour(){
    var nbTour = document.getElementById('nbTour');
    nbTour.innerHTML = tour;
    nbTour.style.color = 'white';
    nbTour.style.fontSize= '2em';
}

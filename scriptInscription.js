/******************** Déclaration variables pour le nom utilisateur ****************/
var inputNom = document.getElementById("nomUtilisateur");
inputNom.addEventListener("input", verifNomUtilisateur);
var imageNom = document.getElementById('verifNom');
var checkNom = false;

/******************** Déclaration variables pour l'Email ***************************/
var inputMail = document.getElementById("emailUtilisateur");
inputMail.addEventListener("input", verifEmailUtilisateur);
var imageEmail = document.getElementById('verifMail');
var checkMail = false;

/**************** Déclaration variables pour le mot de passe ***********************/

var inputPass = document.getElementById("mdpUtilisateur");
inputPass.addEventListener("input", verifMdp);

var inputPassConfirm = document.getElementById("confirmeMdpUtilisateur");
inputPassConfirm.addEventListener("input", verifConfirmMdp);


var imagePass = document.getElementById('verifMdp');
var checkMdp = false;

var imagePassConfirm = document.getElementById('verifMdpConfirm');
var checkMdpConfirm = false;

/*************************** ********************************************************/

var PressBtn = document.getElementById('btnCreaCompte')
PressBtn.addEventListener("click", ActivCreaCompte);

/******************** *************************************************************/

var changerColorBtn = document.getElementById('btnCreaCompte');
changerColorBtn.addEventListener('change', colorCreaCompte);

/******************************************************************************** */

/*************************** FONCTIONS ********************
 * *****************************************************
 * ****************************************************/


function verifNomUtilisateur(){
    var nameUtilisateur = document.getElementById('nomUtilisateur').value;
    console.log(nameUtilisateur);
    if(nameUtilisateur.length >= 3){                                           
        imageNom.setAttribute('src', "/img/check.svg");
        imageNom.setAttribute('alt', "icone Nom d'utilisateur validé");
        checkNom = true;
        document.getElementById('messageErreur').style.visibility = 'hidden'
    }else{
        imageNom.setAttribute('src', "/img/error.svg");
        imageNom.setAttribute('alt', "icone Nom d'utilisateur erroné");
        document.getElementById('messageErreur').style.visibility = 'visible'
    }
    colorCreaCompte();
}

/************************************************************** */

function verifEmailUtilisateur(){
    var email = document.getElementById('emailUtilisateur').value;
    var regexEmail = /(\w+\.?|-?\w+?)+@\w+\.?-?\w+?(\.\w{2,3})+/g;
    if(email.match(regexEmail)){      
        imageEmail.setAttribute('src', "/img/check.svg");
        imageEmail.setAttribute('alt', "icone Email validé"); 
        checkMail = true;
        document.getElementById('messageMailErreur').style.visibility = 'hidden'                                   
    }else{
        imageEmail.setAttribute('src', "/img/error.svg");
        imageEmail.setAttribute('alt', "icone Email non-validé");
        document.getElementById('messageMailErreur').style.visibility = 'visible' 
    }
    colorCreaCompte();
}

/************************************************************** */

function verifMdp(){
    var Mdp = document.getElementById('mdpUtilisateur').value;
    var regexMdp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,20}$/gm;

    if(Mdp.length < 8 && Mdp.match(regexMdp)){
        document.getElementById('faible').style.visibility = 'visible';
    }
    if(Mdp.length >= 8 && Mdp.length < 10 && Mdp.match(regexMdp)){
        document.getElementById('moyen').style.visibility = 'visible';
    }
    if(Mdp.length >= 10 && Mdp.match(regexMdp)){
        document.getElementById('fort').style.visibility = 'visible';
    }
    if(Mdp.match(regexMdp)){      
        imagePass.setAttribute('src', "/img/check.svg");
        imagePass.setAttribute('alt', "icone Password validé");
        checkMdp = true;                             
    }else{
        imagePass.setAttribute('src', "/img/error.svg");
        imagePass.setAttribute('alt', "icone Password non-validé");   
    }
    colorCreaCompte();
}

/************************************************************* */

function verifConfirmMdp(){
    var formChamps = document.getElementById('confirmeMdpUtilisateur').value;
    var Mdp = document.getElementById('mdpUtilisateur').value;
    console.log(Mdp);
    if(formChamps.match(Mdp) && formChamps.length == Mdp.length){
        imagePassConfirm.setAttribute('src', "/img/check.svg");
        imagePassConfirm.setAttribute('alt', "icone PasswordConfirm validé");
        checkMdpConfirm = true;
    }else{
        imagePassConfirm.setAttribute('src', "/img/error.svg");
        imagePassConfirm.setAttribute('alt', "icone PasswordConfirm non-validé");   
    }
    colorCreaCompte();
}
/************************* Bouton Créatoin compte *************************************** */

function ActivCreaCompte(){
    if(checkNom == true && checkMail == true && checkMdp == true && checkMdpConfirm == true){
        localStorage.setItem('Utilisateurs', nameUtilisateur);
        var Utilisateurs = localStorage.getItem('Utilisateurs')
        console.log(Utilisateurs)
        alert('Création de compte effectué !!!')
    }else{
        document.getElementById("btnCreaCompte").click = alert('Création de compte impossible, veuillez remplir correctement les champs.');
    }
}

function colorCreaCompte(){
    if(checkNom == true && checkMail == true && checkMdp == true && checkMdpConfirm == true){
        document.getElementById("btnCreaCompte").disabled = false;
        document.getElementById("btnCreaCompte").style.color = "black";
    }else{
        document.getElementById("btnCreaCompte").style.color = "white";
    }
}
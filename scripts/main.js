// AJOUT DES CONSTANTES POUR FAIRE PARLER LE PERSONNAGE CHAT //

const btn = document.querySelector('#btn');
const img = document.querySelector('#img');

// MISE EN PLACE DU TEXTE PORNONCE PAR LE PERSO CHAT //

const mess = document.querySelector('#mess');
var messageArray = ["Bienvenue sur le CV de ma maîtresse !"];
var textPosition = 0;
var speed = 100;


btn.addEventListener('click', () => {
    if (img.style.display == 'block') {
        img.style.display = 'none';
    }
    else {
        img.style.display = 'block';

        // MISE EN PLACE DU TEXTE PORNONCE PAR LE PERSO CHAT //

        mess.innerHTML = "Bienvenue sur le CV de ma maîtresse !";

        //     typewriter = () => {
        //         mess.innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u99ae</span>";

        //         if (textPosition++ != messageArray[0].length)
        //             setTimeout(typewriter, speed);
        //     }

        //     window.addEventListener("load", typewriter);
    }
});

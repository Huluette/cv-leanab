// AJOUT DES CONSTANTES POUR FAIRE PARLER LE PERSONNAGE CHAT //

const btn = document.querySelector('#btn');
const img = document.querySelector('#img');

// MISE EN PLACE DU TEXTE PORNONCE PAR LE PERSO CHAT //

const mess = document.querySelector('#mess');


btn.addEventListener('click', () => {
    if (img.style.display == 'block') {
        img.style.display = 'none';

        mess.style.display = 'none'; 
    }
    else {
        img.style.display = 'block';

        // MISE EN PLACE DU TEXTE PORNONCE PAR LE PERSO CHAT //
        mess.style.display = 'block';
        mess.innerHTML = "Bienvenue sur le CV de ma maîtresse !";
        
    }
});

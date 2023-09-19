// AJOUT DES CONSTANTES POUR FAIRE PARLER LE PERSONNAGE CHAT //

const btn = document.querySelector('#btn');
const img = document.querySelector('#img');

btn.addEventListener('click', () => {
    if (img.style.display == 'block') {
        img.style.display = 'none';
    }
    else {
        img.style.display = 'block';
    }
});






// INFOBULLE POUR FAIRE PARLER LE CHAT UN //

// $("[title]").tooltip(
//     {
//         poisition:
//         {
//             at:(left-300)
//         }
//     }
// );
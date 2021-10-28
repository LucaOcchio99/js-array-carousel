/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//Referenze
const imagesRef = document.querySelector('.images');
const ithumbsRef = document.querySelector('.thumbs');
//  Indice immagine carousel attiva
let activeImage = 1;

for (let i = 0; i < imageCollection.length; i++) {
    // Images
   imagesRef.innerHTML += `<div class="image-container">
   <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
   <div class="text">
       <h3>${titleCollection[i]}</h3>
       <p>${textCollection[i]}</p>
   </div>
</div>`;

// Thumbs
ithumbsRef.innerHTML += `<div class="thumb active">
<img src="${imageCollection[i]}" alt="${titleCollection[i]}">
</div>`;
}

// Set active image and thumbnal
//console.log(document.getElementsByClassName('image-container'))
document.getElementsByClassName('image-container')[activeImage].classList.add('active');

//console.log( document.getElementsByClassName('thumb') );
document.getElementsByClassName('thumb')[activeImage].classList.add('active');

/**
 * NEXT IMG
 */

const next = document.querySelector('.next')

next.addEventListener('click', function() {
     //infinite loop navigazione
     if (activeImage === imageCollection.length - 1) {
         activeImage = 0;
     } else {
         activeImage++;
     }


    // Imposta immagine attiva: reset attuale e imposta la successiva
    // reset
    document.querySelector('.image-container.active').classList.remove('active')
    // imposta active su successiva
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');

    
    // Impostare la thumbnail
    // reset 
    document.querySelector('.thumb.active').classList.remove('active');
    
    //imposta
    document.getElementsByClassName('thumb')[activeImage].classList.add('active')
})

/**
 * PREV IMG
 */

 const prev = document.querySelector('.prev')

 prev.addEventListener('click', function() {
     //infinite loop navigazione
     if (activeImage == 0) {
         activeImage = imageCollection.length - 1;
     } else {
         activeImage--;
     }

    // Imposta immagine attiva: reset attuale e imposta la successiva
    // reset
    document.querySelector('.image-container.active').classList.remove('active')
    // imposta active su successiva
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');

    
    // Impostare la thumbnail
    // reset 
    document.querySelector('.thumb.active').classList.remove('active');
    
    //imposta
    document.getElementsByClassName('thumb')[activeImage].classList.add('active')
})

 
 

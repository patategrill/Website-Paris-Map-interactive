const plan = document.querySelector(".image"); 
plan.addEventListener("mousemove", (event) => { 
    const rect = plan.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Mouse position: (${x}, ${y})`);

});


const image = document.getElementById("image");
const zoomin = document.querySelector(".zoomin");
const zoomout = document.querySelector(".zoomout");
const resetzoom = document.querySelector(".resetzoom");

let Scale = 1;

zoomin.addEventListener("click",  (zoomin) => {
    Scale += 0.25;
    image.style.transition = "transform 0.5s ease-out";
    
    if (Scale >= 2.5) {
        Scale += 0.5
    }

    image.style.transform = `scale(${Scale})`;

}); 

zoomout.addEventListener("click",  (zoomout) => {
    Scale -= 0.25;
    
    if (Scale < 0.75) {
        Scale = 0.75
    }

    image.style.transition = "transform 0.3s ease-out";

    image.style.transform = `scale(${Scale})`;
}); 

resetzoom.addEventListener("click",  (resetzoom) => {
    image.style.transform = "scale(1)";
    Scale = 1;
    image.style.transition = "transform 0.5s ease-out";
}); 


if ('Mouse position: (${x}, ${y})' === 'Mouse position: (809, 538)') { 
        if ('MouseEvent.click'){
        sidebar.innerHTML(Notre_dame_de_paris);
    }
}

const closewindow = document.querySelector(".closewindow"); 
closewindow.addEventListener("click", function() {
    this.closest(".sidebar1").remove();
});



const returnbutton = document.querySelector(".return"); 
returnbutton.addEventListener("click", function() {
    window.location.href = "index.html";
});



// ajouter le txt pour la sidebar
function TextSidebar(section) {
    const content = document.getElementById("content"); 

    if (section == "Notre_Dame_de_Paris") {
        content.innerText = "Construite entre 1163 et 1250, la Cathédrale de Notre Dame de Paris est un des monuments centraux de Paris pendant la Révolution française. Habituellement le lieu de culte du christianisme à Paris et des multiples évènementsreligieux importants comme les baptêmes, grands mariages, ou messes funéraires, elle change de fonction en 1793. Suite à la mort du citoyen Capet le 21 janvier 1793, la Cathédrale devient le « Temple de la Raison », lorsque l’Etat change de culte (Culte de la Raison) lors de la déchristianisation puis sert ensuite d’entrepôt pour le vin, lorsque l’Etatchange de nouveau de culte pour adopter le « Culte de l’Etre Suprême ». Jusqu’en 1801, date à laquelle Napoléon arrive au pouvoir, Notre Dame de Paris récupère sa fonction d’origine grâce au retour du christianisme en France, suite à la signature du Concordat de 1801, entre Napoléon Bonaparte et le Pape Pie VII. Cette Cathédrale a malheureusement très peu d’objets d’origines, car elle a été pillée pendant la Révolution Française, si ce n’est le Bourdon Emmanuel, qui sonne encore aujourd’hui au sommet."
    }   

    if (section == "Palais_Bourbon") {
        content.innerText = ""
    }

    if (section == "Panthéon") {
        content.innerText = ""
    }

    if (section == "Palais_royal") {
        content.innerText = ""
    }

    if (section == "La_bastille") {
        content.innerText = ""
    }

    if (section == "Palais_du_luxembourg") {
        content.innerText = ""
    }

    if (section == "Place_de_la_revolution") {
        content.innerText = ""
    }
    
     if (section == "Palais_des_tuileries") {
        content.innerText = "Le palais des Tuileries fut l’une des grandes résidences royales et impériales de France. Il a été construit à partir de 1564 sur ordre de Catherine de Médicis, à l’emplacement d’une ancienne fabrique de tuiles datant de 1372, d'où son nom.  Le terrain appartenait auparavant à l’hôtel des Tournelles, détruit en 1563 par Charles IX. Le projet initial, conçu notamment par Philibert Delorme, prévoyait un vaste ensemble composé de deux bâtiments parallèles reliés par quatre ailes, formant trois cours intérieures. Seule la partie occidentale fut finalement réalisée.  Le palais s'ouvrait sur un grand jardin à l'italienne, qui deviendra le jardin des Tuileries. Au fil des siècles, de nombreux architectes — Bullant, Androuet du Cerceau, Le Vau, Soufflot, Gabriel, Percier et Fontaine, puis Lefuel — l’agrandirent et le transformèrent.  En 1857, il est réuni au Louvre, formant un immense ensemble de près de 328 mètres de long avec les pavillons de Flore et de Marsan, qui existent toujours. Les Tuileries deviennent alors un centre politique majeur, résidence des rois et des empereurs, mais aussi siège de la Première République et du Consulat sous Bonaparte. Le palais se distingue par son pavillon central coiffé d’un dôme et par son escalier suspendu, une prouesse architecturale de la Renaissance. Après la fuite de la famille royale à Varennes, le 21 juin 1791, les révolutionnaires décident de le retenir au Palais des Tuileries, afin de prévenir toute autre fuite, déjà vu par la plupart comme un acte de trahison du Roi. Le 23 mai 1871, pendant la Commune de Paris, le palais est incendié volontairement par les communards Bergeret, Bénot et Boudin.  Les ruines demeurent sur place pendant plus de dix ans, puis sont démolies en 1883, laissant place à l’actuel jardin des Tuileries."
    }
}

let positionX = 0;
let positionY = 0;


function UpdateCursor() {
    
    image.style.transform = `translate(${positionX}px, ${positionY}px) scale(${Scale})`;

    if (Scale > 1) {
        image-container.classList.add("zoomed");
    } else {
        image-container.classList.remove("zoomed");
    }

    positionX = 0;
    positionY = 0;
    
}

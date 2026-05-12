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
    Scale += 0.1;
    image.style.transform = `scale(${Scale})`;
}); 

zoomout.addEventListener("click",  (zoomout) => {
    Scale -= 0.1;
    image.style.transform = `scale(${Scale})`;
}); 

resetzoom.addEventListener("click",  (resetzoom) => {
    image.style.transform = "scale(1)";
    Scale = 1;
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

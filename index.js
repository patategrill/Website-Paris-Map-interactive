var plan = document.createElement("img") //*création de l'image du plan de Paris*
plan.src = "Paris1790.jpg" //*source de l'image du plan de Paris*

plan.style.maxWidth = "100%" //*ajustement de la taille de l'image du plan de Paris*
plan.style.height = "auto" 
document.body.appendChild(plan) //*ajout de l'image du plan de Paris à la page HTML*

const react = plan.getBoundingClientRect(); //*obtenir les coordonnées de l'image du plan de Paris*

plan.addEventListener("mousemove", (event) => { // renvoie les mouvements de la souris sur l'image du plan de Paris
    const x = event.clientX - react.left / react.width
    const y = event.clientY - react.right / react.height
    console.log(`Mouse position: (${x}, ${y})`);

    /*plan.style.transformOrigin = `${x * 100}% ${y * 100}%`
    plan.style.transform = "scale(2)"*/
});

/*plan.addEventListener("mouseleave", () => {
    plan.style.transform = "scale(1)"
})*/

var zoom = document.querySelector(".zoom"); //*sélection de l'élément avec la classe "zoom" pour zoomer sur l'image du plan de Paris*
zoom.addEventListener("click", function zoomIn() { 
    
}); //*ajout d'un événement de clic pour zoomer sur l'image du plan de Paris


if ('Mouse position: (${x}, ${y})' === 'Mouse position: (809, 538)') { //si la position de la souris est égale à celle de Notre Dame de Paris, alors afficher les informations sur Notre Dame de Paris
    if ('MouseEvent.click'){
        sidebar.innerHTML(Notre_dame_de_paris);
    }
}

const closewindow = document.querySelector(".closewindow"); //*sélection de l'élément avec la classe "closewindow" pour fermer la fenêtre d'information*
closewindow.addEventListener("click", function() {
    this.closest(".sidebardiv").remove();
});

//*Notre dame de paris : environ x = 809 y = 538


function TextSidebar(section) {
    const content = document.getElementById("content"); 

    if (section == "Notre_Dame_de_Paris") {
        content.innerText = "Construite entre 1163 et 1250, la Cathédrale de Notre Dame de Paris est un des monuments centraux de Paris pendant la Révolution française. Habituellement le lieu de culte du christianisme à Paris et des multiples évènementsreligieux importants comme les baptêmes, grands mariages, ou messes funéraires, elle change de fonction en 1793. Suite à la mort du citoyen Capet le 21 janvier 1793, la Cathédrale devient le « Temple de la Raison », lorsque l’Etat change de culte (Culte de la Raison) lors de la déchristianisation puis sert ensuite d’entrepôt pour le vin, lorsque l’Etatchange de nouveau de culte pour adopter le « Culte de l’Etre Suprême ». Jusqu’en 1801, date à laquelle Napoléon arrive au pouvoir, Notre Dame de Paris récupère sa fonction d’origine grâce au retour du christianisme en France, suite à la signature du Concordat de 1801, entre Napoléon Bonaparte et le Pape Pie VII. Cette Cathédrale a malheureusement très peu d’objets d’origines, car elle a été pillée pendant la Révolution Française, si ce n’est le Bourdon Emmanuel, qui sonne encore aujourd’hui au sommet."
    }   
}

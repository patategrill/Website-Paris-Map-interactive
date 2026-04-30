var plan = document.createElement("img")
plan.src = "Paris1790.jpg"

plan.style.maxWidth = "100%"
plan.style.height = "auto"
document.body.appendChild(plan)

const react = plan.getBoundingClientRect();

plan.addEventListener("mousemove", (event) => {
    const x = event.clientX - react.left / react.width
    const y = event.clientY - react.right / react.height
    console.log(`Mouse position: (${x}, ${y})`);

    /*plan.style.transformOrigin = `${x * 100}% ${y * 100}%`
    plan.style.transform = "scale(2)"*/
});

/*plan.addEventListener("mouseleave", () => {
    plan.style.transform = "scale(1)"
})*/


function zoomIn() {
    fontSize += 0.1;
    document.body.style.fontSize = plan + "em";
}


const Notre_dame_de_paris = "Construite entre 1163 et 1250, la Cathédrale de Notre Dame de Paris est un des monuments centraux de Paris pendant la Révolution française. Habituellement le lieu de culte du christianisme à Paris et des multiples évènementsreligieux importants comme les baptêmes, grands mariages, ou messes funéraires, elle change de fonction en 1793. Suite à la mort du citoyen Capet le 21 janvier 1793, la Cathédrale devient le « Temple de la Raison », lorsque l’Etat change de culte (Culte de la Raison) lors de la déchristianisation puis sert ensuite d’entrepôt pour le vin, lorsque l’Etatchange de nouveau de culte pour adopter le « Culte de l’Etre Suprême ». Jusqu’en 1801, date à laquelle Napoléon arrive au pouvoir, Notre Dame de Paris récupère sa fonction d’origine grâce au retour du christianisme en France, suite à la signature du Concordat de 1801, entre Napoléon Bonaparte et le Pape Pie VII. Cette Cathédrale a malheureusement très peu d’objets d’origines, car elle a été pillée pendant la Révolution Française, si ce n’est le Bourdon Emmanuel, qui sonne encore aujourd’hui au sommet."

if ('Mouse position: (${x}, ${y})' === 'Mouse position: (809, 538)') {
    if ('MouseEvent.click'){
        sidebar.innerHTML(Notre_dame_de_paris);
    }
}

const closewindow = document.querySelector(".closewindow");
closewindow.addEventListener("click", function() {
    this.closest(".sidebardiv").remove();
});

//*Notre dame de paris : environ x = 809 y = 538

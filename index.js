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

zoomin.addEventListener("click",  (zoomin) => {
    
    image.style.transform = "scale(1.5)";
}); 

zoomout.addEventListener("click",  (zoomout) => {

    image.style.transform = "scale(0.5)";
}); 

resetzoom.addEventListener("click",  (resetzoom) => {

    image.style.transform = "scale(1)";
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

function TextSidebar(section) {
    const content = document.getElementById("content"); 

    if (section == "Notre_Dame_de_Paris") {
        content.innerText = "Construite entre 1163 et 1250, la Cathédrale de Notre Dame de Paris est un des monuments centraux de Paris pendant la Révolution française. Habituellement le lieu de culte du christianisme à Paris et des multiples évènementsreligieux importants comme les baptêmes, grands mariages, ou messes funéraires, elle change de fonction en 1793. Suite à la mort du citoyen Capet le 21 janvier 1793, la Cathédrale devient le « Temple de la Raison », lorsque l’Etat change de culte (Culte de la Raison) lors de la déchristianisation puis sert ensuite d’entrepôt pour le vin, lorsque l’Etatchange de nouveau de culte pour adopter le « Culte de l’Etre Suprême ». Jusqu’en 1801, date à laquelle Napoléon arrive au pouvoir, Notre Dame de Paris récupère sa fonction d’origine grâce au retour du christianisme en France, suite à la signature du Concordat de 1801, entre Napoléon Bonaparte et le Pape Pie VII. Cette Cathédrale a malheureusement très peu d’objets d’origines, car elle a été pillée pendant la Révolution Française, si ce n’est le Bourdon Emmanuel, qui sonne encore aujourd’hui au sommet."
    }   
}

var plan = document.createElement("img")
plan.src = "Paris1790.jpg"

plan.style.maxWidth = "100%"
plan.style.height = "auto"
document.body.appendChild(plan)

const react = plan.getBoundingClientRect();

plan.addEventListener("mousemove", (event) => {
    const x = event.clientX - react.left;
    const y = event.clientY - react.right;
    console.log(x, y)
});

const closewindow = document.querySelector(".closewindow");
closewindow.addEventListener("click", function() {
    this.closest(".sidebardiv").remove();
});

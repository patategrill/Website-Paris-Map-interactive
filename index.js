var plan = document.createElement("img")
plan.src = "Paris1790.jpg"

plan.style.maxWidth = "100%"
plan.style.height = "auto"
document.body.appendChild(plan)

const react = plan.getBoundingClientRect();

element.addEventListener("mousemove", (event) => {
    const x = event.clientX - react.left;
    const y = event.clientY - react.right;
    console.log(x, y);
});

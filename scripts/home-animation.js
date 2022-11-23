const heading = document.querySelector(".heading")
console.log(heading)

window.addEventListener("mousemove", function(event){
    let positionX = event.clientX / 100
    let positionY = event.clientY / 100

    heading.style.transform = `translate(${positionX}px, ${positionY}px)`
    console.log(event.clientX, event.clientY)
})
let game = document.getElementsByTagName("game")[0]

for (let index = 0; index <= 99; index++) {
    spawnFish();
    spawnBubble();
}

function spawnFish() {
    let fish = document.createElement("fish")
    game.appendChild(fish)
    fish.addEventListener("click", onFishClick)

    let x = Math.random() * (window.innerWidth - fish.clientWidth)
    let y = Math.random() * (window.innerHeight - fish.clientHeight)
    let color = Math.random() * 360

    fish.style.transform = `translate(${x}px, ${y}px)`
    fish.style.filter = `hue-rotate(${color}deg)`
};


function spawnBubble() {
    let bubble = document.createElement("bubble")
    game.appendChild(bubble)
    bubble.addEventListener("click", onBubbleClick)    

    let x = Math.random() * (window.innerWidth - bubble.clientWidth)
    let y = Math.random() * (window.innerHeight - bubble.clientHeight)

    bubble.style.transform = `translate(${x}px, ${y}px)`
};

function onFishClick(event) {
    event.target.classList.add("dead")
}

function onBubbleClick(event) {
    event.target.remove()
}
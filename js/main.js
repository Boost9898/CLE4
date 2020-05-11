function randomMinMax(min, max) {
    som = Math.random() * (max - min) + min
    return Math.floor(som)
}

function dead() {
    console.log("dead test")
}


function spawn() {
    //
    // vis element
    //
    let fish = document.createElement("fish")
    document.getElementById("bg").appendChild(fish)
    fish.addEventListener(onclick, (dead())) //waarom logt hij meteen de 'dead test' en komt die niet pas bij de klik?

    fish.style.transform = `translate(${randomMinMax(0, 1750)}px, ${randomMinMax(0, 850)}px)` //verticaal horizontaal
    fish.style.filter = `hue-rotate(${randomMinMax(0, 360)}deg)`


    //
    // bubble element
    //
    let bubble = document.createElement("bubble")
    document.getElementById("bg").appendChild(bubble)
    bubble.style.transform = `translate(${randomMinMax(0, 1800)}px, ${randomMinMax(0, 800)}px)` //verticaal horizontaal
};


for (let index = 0; index <= 99; index++) {
    spawn();
}
let pisteet = 0;
let activeAmmus = null;

const pisteetTulos = document.getElementById("pisteet");
const tykki = document.getElementById("tykki");
const ammuksetLaatikko = document.getElementById("ammukset");
const vihuLista = document.getElementById("vihut");
const gameContainer = document.querySelector(".game-container");

gameContainer.addEventListener("mousemove", (e) => {
    const gameRect = gameContainer.getBoundingClientRect();
    const mouseX = e.clientX - gameRect.left;

    tykkiX = Math.max(0, Math.min(mouseX - (tykki.offsetWidth/2), gameContainer.offsetWidth - tykki.offsetWidth));
    tykki.style.left = `${tykkiX}px`;
});

tykki.addEventListener("click", () => {
    ammuAmmus();
    pisteet++;
    pisteetTulos.textContent = `Pisteet: ${pisteet}`;
    tykki.classList.add("ammu");

    setTimeout(() => {
        tykki.classList.remove("ammu");
    }, 500);
});


function ammuAmmus() {
    const ammus = document.createElement("div");
    const tykkiRect = tykki.getBoundingClientRect();

    ammus.classList.add("ammus");

    ammuksetLaatikko.appendChild(ammus);
    activeAmmus = ammus;

    setTimeout(() => {
        if (ammus.parentNode){
            ammus.remove();
        }
    }, 1000);
}


function tarkistaOsuma() {
    if (!activeAmmus) return;

    const vihut = document.querySelectorAll(".vihu");
    const ammusRect = ammus.getBoundingClientRect();

    vihut.forEach(vihu => {
        const vihuRect = vihu.getBoundingClientRect();

        if (ammusRect.right > vihuRect.left && ammusRect.left < vihuRect.right && ammusRect.bottom > vihuRect.top && ammusRect.top < vihuRect.bottom) {
            pisteet += 10;
            pisteetTulos.textContent = `Pisteet: ${pisteet}`;
            activeAmmus.remove();
            vihu.remove();
            activeAmmus = null;
        }
    })
}


function luoVihu() {
    const vihu = document.createElement("div");

    vihu.classList.add("vihu");
    vihu.style.left = `${Math.random() * (gameContainer.offsetWidth - 30)}px`;
    vihuLista.appendChild(vihu);

    setTimeout(() => {
        vihu.remove();
    }, 5000);
}

setInterval(luoVihu, 3000);

setInterval(tarkistaOsuma, 100);
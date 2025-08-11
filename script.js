let pisteet = 0;

const pisteetTulos = document.getElementById("pisteet");
const tykki = document.getElementById("tykki");
const ammuksetLaatikko = document.getElementById("ammukset");
const vihuLista = document.getElementById("vihut");
const gameContainer = document.querySelector(".game-container");


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
    const tykkiRect = tykki.getBoundingClientRect();
    const ammus = document.createElement("div");

    ammus.classList.add("ammus");
    ammuksetLaatikko.appendChild(ammus);

    setTimeout(() => {
        ammus.remove();
    }, 1000);
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


function tarkistaOsuma() {
    const ammukset = document.querySelectorAll(".ammus");
    const vihut = document.querySelectorAll(".vihu");

    ammukset.forEach(ammus => {
        vihut.forEach(vihu => {
            const ammusRect = ammus.getBoundingClientRect();
            const vihuRect = vihu.getBoundingClientRect();

            if (ammusRect.right > vihuRect.left && ammusRect.left < vihuRect.right && ammusRect.bottom > vihuRect.top && ammusRect.top < vihuRect.bottom) {
                pisteet += 10;
                pisteetTulos.textContent = `Pisteet: ${pisteet}`;
                ammus.remove();
                vihu.remove();
            }
        })
    })
}
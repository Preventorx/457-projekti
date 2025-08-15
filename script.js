let pisteet = 0;
let activeAmmus = null;
let tykkiX = 0;
let voiAmpua = true;
let ampumisNopeus = 2000;

const pisteetTulos = document.getElementById("pisteet");
const tykki = document.getElementById("tykki");
const ammuksetLaatikko = document.getElementById("ammukset");
const vihuLista = document.getElementById("vihut");
const gameContainer = document.querySelector(".game-container");
const ostaNopeusNappi = document.getElementById("ostaNopeus");

ostaNopeusNappi.addEventListener("click", () => {
    if (pisteet >= 100) {
        pisteet -= 100;
        pisteetTulos.textContent = `Pisteet: ${pisteet}`;
        ampumisNopeus = Math.max(200, ampumisNopeus - 200);
        ostaNopeusNappi.innerHTML = `100p<br>${ampumisNopeus}ms`;
    }
});

gameContainer.addEventListener("mousemove", (e) => {
    const gameRect = gameContainer.getBoundingClientRect();
    const mouseX = e.clientX - gameRect.left;

    tykkiX = Math.max(0, Math.min(mouseX - (tykki.offsetWidth/2), gameContainer.offsetWidth - tykki.offsetWidth));
    tykki.style.left = `${tykkiX}px`;
    ammuksetLaatikko.style.left = `${tykkiX}px`;
});

tykki.addEventListener("click", () => {
    if (voiAmpua) {
        ammuAmmus();
        tykki.classList.add("ammu");

        voiAmpua = false;
    
        setTimeout(() => {
            tykki.classList.remove("ammu");
        }, 500);

        setTimeout(() => {
            voiAmpua = true;
        }, ampumisNopeus);
    }
    });


function ammuAmmus() {
    const ammus = document.createElement("div");
    ammus.hit = false;

    ammus.classList.add("ammus");

    ammus.style.transformOrigin = "center bottom";

    ammus.style.animation = "tulta 1s linear forwards";

    ammuksetLaatikko.appendChild(ammus);
    activeAmmus = ammus;

    setTimeout(() => {
        if (ammus.parentNode && !ammus.hit) {
            ammus.remove();
            activeAmmus = null;
        }
    }, 1000);
}


function tarkistaOsuma() {
    if (!activeAmmus) return;

    const vihut = document.querySelectorAll(".vihu");
    const ammusRect = activeAmmus.getBoundingClientRect();
    const ammuksetRect = ammuksetLaatikko.getBoundingClientRect();

    vihut.forEach(vihu => {
        const vihuRect = vihu.getBoundingClientRect();
        
        const overlapX = Math.min(ammusRect.right, vihuRect.right) - Math.max(ammusRect.left, vihuRect.left);
        const overlapY = Math.min(ammusRect.bottom, vihuRect.bottom) - Math.max(ammusRect.top, vihuRect.top);

        if (overlapX > 0 && overlapY > 0) {
            activeAmmus.hit = true;

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
let pisteet = 0;

const pisteetTulos = document.getElementById("pisteet");
const tykki = document.getElementById("tykki");
const ammuksetLaatikko = document.getElementById("ammukset");
const vihuLista = document.getElementById("vihut");

setInterval(luoVihu, 3000);

tykki.addEventListener("click", () => {
    ammuAmmus();
    pisteet++;
    pisteetTulos.textContent = `Pisteet: ${pisteet}`;
    tykki.classList.add("ammu");
});


function ammuAmmus() {
    const ammus = document.createElement("div");
    ammus.classList.add("ammus");
    ammuksetLaatikko.appendChild(ammus);

    setTimeout(() => {
        tykki.classList.remove("ammu");
        ammus.remove();
    }, 500);
}


function luoVihu() {
    const vihu = document.createElement("div");
    vihu.classList.add("vihu");
    vihuLista.appendChild(vihu);

    setTimeout(() => {
        vihu.remove();
    }, 3000);
}
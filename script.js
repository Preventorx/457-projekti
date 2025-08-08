let pisteet = 0;

const pisteetTulos = document.getElementById("pisteet");
const tykki = document.getElementById("tykki");

tykki.addEventListener("click", () => {
        pisteet++;
        pisteetTulos.textContent = `Pisteet: ${pisteet}`;
        tykki.classList.add("ammu");

        setTimeout(() => {
            tykki.classList.remove("ammu");
        }, 500);
    });
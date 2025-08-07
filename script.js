document.addEventListener("DOMContetLoaded", () => {
    const pisteetTulos = document.getElementById("pisteet");
    const klikkaus = document.getElementById("klikkaus");

    let pisteet = 0;

    klikkaus.addEventListener("click", () => {
        pisteet++;
        pisteetElement.textContent = `Pisteet: ${pisteetTulos}`;
    });
});
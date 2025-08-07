document.addEventListener("DOMContetLoaded", () => {
    const pisteetElement = document.getElementById("pisteet");
    const klikkausElement = document.getElementById("klikkaus");

    let pisteet = 0;

    klikkausElement.addEventListener("click", () => {
        pisteet++;
        pisteetElement.textContent = `Pisteet: ${pisteet}`;
    });
});
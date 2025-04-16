const input1 = document.querySelectorAll("input")[0];
const input2 = document.querySelectorAll("input")[1];
const button = document.querySelector("button");


button.addEventListener("click", function (e) {
    e.preventDefault();

    const min = Number(input1.value);
    const max = Number(input2.value);

    if (!min || !max || min >= max) {
        alert("Por favor, insira valores válidos! O primeiro número deve ser menor que o segundo.");
        return;
    }

    let resultadoDiv = document.querySelector(".resultado");

    if (!resultadoDiv) {
        resultadoDiv = document.createElement("div");
        resultadoDiv.classList.add("resultado");
        resultadoDiv.style.marginTop = "20px";
        resultadoDiv.style.fontSize = "32px";
        resultadoDiv.style.color = "#cddc39";
        document.querySelector("main").appendChild(resultadoDiv);
    }

    let count = 0;
    const animation = setInterval(() => {
        const randomTemp = Math.floor(Math.random() * (max - min + 1)) + min;
        resultadoDiv.textContent = `🎲 Sorteando: ${randomTemp}`;
        count++;

        if (count >= 20) {
            clearInterval(animation);
            const final = Math.floor(Math.random() * (max - min + 1)) + min;
            resultadoDiv.textContent = `✅ Número sorteado: ${final}`;
        }
    }, 80);

[input1, input2].forEach(input => {
    input.addEventListener("focus", () => {
        const resultado = document.querySelector(".resultado");
        if (resultado) {
            resultado.remove();
        }
    });
});

});

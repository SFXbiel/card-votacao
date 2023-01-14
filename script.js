let counter = 0;
function positivo() {
    counter += 1;
    document.getElementById("fofo").innerHTML = counter + " Gostei";
}

let noCounter = 0;
function negativo() {
    noCounter = noCounter + 1;
    document.getElementById("naofofo").innerHTML = noCounter + " Não Gostei";
}

function reset() {
    document.getElementById("reset").value = "0";
    document.getElementById("fofo").innerHTML = "0 Gostei";
    document.getElementById("naofofo").innerHTML = "0 Não Gostei";

    noCounter = 0
    counter = 0
}
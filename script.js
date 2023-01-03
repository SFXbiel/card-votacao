let counter = 0;
function positivo() {
    counter = counter + 1;
    document.getElementById("fofo").innerHTML = counter + " Gostei";
}

let noCounter = 0;
function negativo() {
    noCounter = noCounter + 1;
    document.getElementById("naofofo").innerHTML = noCounter + " Não gostei";
}

function reset() {
    document.getElementById("reset").value = " ";
    document.getElementById("fofo").innerHTML = "0";
    document.getElementById("naofofo").innerHTML = "0";
}
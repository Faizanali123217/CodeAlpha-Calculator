function add() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = document.getElementById("result");
    result.innerHTML = num1 + num2;
}

function minus() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = document.getElementById("result");
    result.innerHTML = num1 - num2;
}

function multiplication() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = document.getElementById("result");
    result.innerHTML = num1 * num2;
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById("result");
    result.innerHTML = num1 / num2;
}
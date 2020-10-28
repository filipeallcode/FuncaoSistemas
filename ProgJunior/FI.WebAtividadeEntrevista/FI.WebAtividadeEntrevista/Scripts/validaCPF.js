function ValidaCPF() {

    var strCPF = document.getElementById("CPF").value.replace(/[^\w\s]/gi, '');
    var Soma;
    var Resto;

    if (strCPF == "") {
        console.log("CPF vazio.");
        MessageAlert(false);
        return false;
    }

    function allEqual(input) {
        return input.split('').every(char => char === input[0]);
    }

    if (allEqual(strCPF) == true) {
        console.log("CPF com dígitos iguais.");
        MessageAlert(false);
        return false;
    }

    Soma = 0;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) {
        console.log("Primeiro Dígito verificador inválido.");
        MessageAlert(false);
        return false;
    }

    Soma = 0;

    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) {
        console.log("Segundo Dígito verificador inválido.");
        MessageAlert(false);
        return false;
    }

    document.getElementById("errorCPF").innerHTML = "";
    return true;
}

function MessageAlert(value) {
    if (value == false) {
        document.getElementById("errorCPF").innerHTML = "Digite um CPF válido.";
        document.getElementById("CPF").focus();
    }
}

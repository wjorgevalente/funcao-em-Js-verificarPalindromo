// função para verificarPalindromo Forma#1

function verificarPalindromo(string) {
    if (!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ovo"));

// função para verificar palindromo forma#2

function verificarPalindromo2(string) {
    if (!string) return "string inexistente.";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {

            return false;
        }
    }
    return "A palavra " + string + " é um palindromo!";
}

console.log(verificarPalindromo2("aba"));
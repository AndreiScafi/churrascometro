/* Objetivo do programa - Calcular a quantidade de carne e bebida necessária para realização de um churrasco tendo em vista o número de pessoas e a duração do evento. */

// Parâmetros do programa:

// Carne - 400 gramas por Pessoa, mas se o churrasco durar mais de 6 horas serão 650 gramas;
// Cerveja - 1200ml por Pessoa, mas se o churrasco durar mais de 6 horas serão 2000ml;
// Refrigerante/água - 1000ml por Pessoa, mas se o churrasco durar mais de 6 horas serão 1500ml;

// Crianças valem por 0.5;

// Variáveis declaradas por input.

let adultos;
let criancas;
let horas;

// Total de Pessoas:

let pessoas = () => {
    return adultos + Math.round(criancas / 2);
};

// Total de horas

let maisDeSeisHoras = () => {
    if (horas < 6) {
        return false
    } else {
        return true
    }
}

// Resultados que serão devolvidos ao usuário.

let carne = () => {
    if (!maisDeSeisHoras()) {
        return pessoas() * 400;
    } else {
        return pessoas() * 650;
    }
};

let cerveja = () => {
    if (!maisDeSeisHoras()) {
        return pessoas() * 1200;
    } else {
        return pessoas() * 2000;
    }
};

let agua = () => {
    if (!maisDeSeisHoras()) {
        return pessoas() * 1000;
    } else {
        return pessoas() * 1500;
    }
};

/* Testes */

adultos = 1;
criancas = 1;
horas = 5;

console.log(carne(), cerveja(), agua());
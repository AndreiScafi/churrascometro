/* Objetivo do programa - Calcular a quantidade de carne e bebida necessária para realização de um churrasco tendo em vista o número de pessoas e a duração do evento. */

// Parâmetros do programa:

// Carne - 400 gramas por Pessoa, mas se o churrasco durar mais de 6 horas serão 650 gramas;
// Cerveja - 1200ml por Pessoa, mas se o churrasco durar mais de 6 horas serão 2000ml;
// Refrigerante/água - 1000ml por Pessoa, mas se o churrasco durar mais de 6 horas serão 1500ml;

// Crianças valem por 0.5;

// Variáveis declaradas por input.

const adultos = document.querySelector('.adults');
const criancas = document.querySelector('.children');
const horas = document.querySelector('.hours');

// Total de Pessoas:

let pessoas = () => {
    return parseFloat(adultos.value) + parseFloat(criancas.value / 2);
};

// Total de horas

let maisDeSeisHoras = () => {
    if (horas.value < 6) {
        return false
    } else {
        return true
    }
}

// Resultados que serão devolvidos ao usuário.

let carne = () => {
    if (!maisDeSeisHoras()) {
        return pessoas() * 0.4;
    } else {
        return pessoas() * 0.65;
    }
};

let cerveja = () => {
    if (!maisDeSeisHoras()) {
        return parseFloat(adultos.value) * 1.2;
    } else {
        return parseFloat(adultos.value) * 2;
    }
};

let agua = () => {
    if (!maisDeSeisHoras()) {
        return pessoas() * 1;
    } else {
        return pessoas() * 1.5;
    }
};

/* Testes */

/* adultos = 1;
criancas = 1;
horas = 5; */

/* console.log(carne(), cerveja(), agua()); */

/* Teste bem sucessido, agora é necessário fazer a integração no DOM */

const output = document.querySelector('.output')
const calcBtn = document.querySelector('.calc-btn');

calcBtn.addEventListener('click', () => {

    output.innerHTML = `   
    <div class="output-item">
    <i class="fa-solid fa-drumstick-bite"></i>
    <p class="section-1-paragraph">Você precisará de ${carne().toFixed(3)}kg de carne.</p>
</div>
<div class="output-item">
    <i class="fa-solid fa-beer-mug-empty"></i>
    <p class="section-1-paragraph">Você precisará de ${cerveja().toFixed(3)} litros de cerveja.</p>
</div>
<div class="output-item">
    <i class="fa-solid fa-bottle-water"></i>
    <p class="section-1-paragraph">Você precisará de ${agua().toFixed(3)} litros de água/refrigerante.</p>
</div>
`
    return console.log(carne(), cerveja(), agua(), pessoas())
});





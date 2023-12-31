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

let paoDeAlho = () => {
    if (!maisDeSeisHoras()) {
        return pessoas() * 150;
    } else {
        return pessoas() * 250;
    }
}

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
       <p class="section-1-paragraph">   <span><i class="fa-solid fa-drumstick-bite"></i></span> Você precisará de ${carne().toFixed(3)}kg de carne.</p>
    </div>
    <div class="output-item">
       <p class="section-1-paragraph"><span><i class="fa-solid fa-bread-slice"></i> </span> Você precisará de ${paoDeAlho()}g de pão de alho.</p>
    </div>
    <div class="output-item">
       <p class="section-1-paragraph"><span> <i class="fa-solid fa-beer-mug-empty"></i> </span> Você precisará de ${cerveja().toFixed(1)} litros de cerveja.</p>
    </div>
    <div class="output-item">
       <p class="section-1-paragraph"> <span><i class="fa-solid fa-bottle-water"></i></span> Você precisará de ${agua().toFixed(1)} litros de água/refrigerante.</p>
    </div>
`
});

/* Criar animação de termômetro subindo com os icones do font Awesome */

/* Tags dos icones - em sequência:

1 - <i class="fa-solid fa-temperature-empty"></i>

2 - <i class="fa-solid fa-temperature-quarter"></i>

3 - <i class="fa-solid fa-temperature-half"></i>

4 - <i class="fa-solid fa-temperature-three-quarters"></i>

5 - <i class="fa-solid fa-temperature-full"></i>

*/

const temperatureIcon = document.querySelector('.temperature');

function temperatureAnimation() {
    setTimeout(() => {
        temperatureIcon.innerHTML = `<i class="fa-solid fa-temperature-quarter">`
    }, 300);

    setTimeout(() => {
        temperatureIcon.innerHTML = `<i class="fa-solid fa-temperature-half">`
    }, 600);

    setTimeout(() => {
        temperatureIcon.innerHTML = `<i class="fa-solid fa-temperature-three-quarters">`
    }, 900);

    setTimeout(() => {
        temperatureIcon.innerHTML = `<i class="fa-solid fa-temperature-full">`
    }, 1200);

    setTimeout(() => {
        temperatureIcon.innerHTML = `<i class="fa-solid fa-temperature-empty">`
    }, 2000);
}

temperatureAnimation();

setInterval(() => {
    temperatureAnimation();
}, 2000);




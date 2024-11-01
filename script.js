const texts = {
    pt: [
        "Bem-vindo ao cinema!",
        "A utilização das tecnologias nos meios cinematográficos",
        "Tudo começou no ano de 1895, os irmãos Lumière criaram, a partir do aperfeiçoamento do Cinetoscópio, o Cinematógrafo (de onde se originou o termo cinema). O aparelho desenvolvido por eles, filhos de um fotógrafo e proprietário de uma indústria de filmes e papéis fotográficos, é o ancestral da filmadora, após isso uma das principais mudanças foi a transição do formato analógico para o digital. Isso permitiu uma maior flexibilidade na produção e na distribuição de filmes. Com a digitalização, os cineastas puderam explorar novas técnicas de filmagem e edição, abrindo portas para a criatividade e inovação.",
        "Mude de canal!",
        "Voltando aos anos 80!",
    ],
    en: [
        "Welcome to the cinema!",
        "Today is a great day!",
        "Watching a classic!",
        "Change the channel!",
        "Going back to the '80s!",
    ],
};



const languageLabels = {
    pt: {
        selector: "Idioma:",
        options: ["Português", "Inglês"]
    },
    en: {
        selector: "Language:",
        options: ["Portuguese", "English"]
    },
};

let currentIndex = 0;
let currentLanguage = 'pt';

function nextText() {
    currentIndex = (currentIndex + 1) % texts[currentLanguage].length;
    document.getElementById('tv-text').innerText = texts[currentLanguage][currentIndex];
}

function prevText() {
    currentIndex = (currentIndex - 1 + texts[currentLanguage].length) % texts[currentLanguage].length;
    document.getElementById('tv-text').innerText = texts[currentLanguage][currentIndex];
}

document.getElementById('idioma').addEventListener('change', function() {
    currentLanguage = this.value;
    currentIndex = 0; // Reseta o índice ao mudar de idioma
    document.getElementById('tv-text').innerText = texts[currentLanguage][currentIndex];
    
    // Atualiza o texto do seletor de idioma
    document.querySelector('.language-selector label').innerText = languageLabels[currentLanguage].selector;
    
    // Atualiza as opções do seletor
    const options = languageLabels[currentLanguage].options;
    const select = document.getElementById('idioma');
    for (let i = 0; i < select.options.length; i++) {
        select.options[i].text = options[i];
    }
});

// Mantendo a escuta de teclas para mudar de canal
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        prevText();
    } else if (event.key === 'ArrowRight') {
        nextText();
    }
});

// Impedindo a mudança de idioma ao usar setas do teclado
document.getElementById('idioma').addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault(); // Impede a mudança de idioma
    }
});
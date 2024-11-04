const texts = {
    pt: [
        "Bem-vindo ao cinema!",
        "E hoje iremos apresentar sobre", 
        "A utilização das tecnologias nos meios cinematográficos",
        "Tudo começou no ano de 1895, os irmãos Lumière criaram, a partir do aperfeiçoamento do Cinetoscópio, o Cinematógrafo (de onde se originou o termo cinema). O aparelho desenvolvido por eles, filhos de um fotógrafo e proprietário de uma indústria de filmes e papéis fotográficos, é o ancestral da filmadora, após isso uma das principais mudanças foi a transição do formato analógico para o digital.",
        "Isso permitiu uma maior flexibilidade na produção e na distribuição de filmes. Com a digitalização, os cineastas puderam explorar novas técnicas de filmagem e edição, abrindo portas para a criatividade e inovação.",
        "Tecnologias mais usadas que revolucionaram:",
        "📷📷 Câmeras 📷📷",
        "A captação de vídeo e áudio é uma das etapas fundamentais da produção audiovisual. Nos últimos anos, a captação analógica de vídeo foi desaparecendo, enquanto o vídeo digital tomou conta das telinhas e telonas. De meros 144p de resolução, hoje em dia, nossas câmeras conseguem captar até 8k de definição, ou seja, 8 vezes uma imagem em HD.",
        "Isso é fundamental, pois a qualidade das imagens ajudou filmes a se tornarem mais emocionantes e vídeos corporativos ou promocionais mais efetivos em seus propósitos. A tecnologia também foi acompanhada pelas TVs e monitores, que estão cada vez maiores e com uma resolução melhor ainda.",
        "Além da qualidade, é interessante lembrar também de outras câmeras interessantes que encontramos por aí, como as minúsculas câmeras esportivas ou câmeras com mais de uma lente, desenvolvidas para a criação de imagens em 3D.",
        "🎥🎥 CGI 🎥🎥",
        "A animação por computador, ou CGI (Computer Generated Imagery), é a criação de imagens em movimento utilizando software e tecnologia digital. O CGI é amplamente utilizado na criação de personagens, ambientes, objetos e efeitos visuais em filmes, jogos e até mesmo em vídeos promocionais.",
        "🔊💥 SFX - Efeitos Sonoros 💥🔊",
        "Os efeitos sonoros, ou SFX, referem-se a sons adicionados ou criados para enriquecer a experiência audiovisual. Eles podem ser sons naturais, como o barulho da chuva, ou sons artificiais, como explosões, tiros ou até mesmo criaturas fictícias. Os SFX são essenciais para criar um ambiente imersivo e impactante.",
        "Exemplo prático: Em uma cena de luta, além dos diálogos e trilha sonora, os SFX entram em ação para adicionar golpes, socos, chutes e impactos. Esses sons amplificam a ação e aumentam o realismo, dando vida à cena.",
        "👀✨ VFX - Efeitos Visuais ✨👀",
        "Os efeitos visuais, ou VFX, são técnicas e elementos usados para criar imagens ou cenas que não podem ser capturadas na câmera durante a filmagem. Eles envolvem a manipulação ou adição de elementos visuais para criar ambientes, personagens ou efeitos impressionantes. Os VFX são amplamente utilizados em filmes, programas de TV, comerciais e até mesmo em vídeos online.",
        "Exemplo prático: Imagine uma cena em que um personagem voa pelo céu. Na realidade, o ator está suspenso por cabos em um estúdio. Os VFX entram em ação para remover os cabos e adicionar efeitos de voo, como asas ou rastros de energia, criando a ilusão de que o personagem está realmente voando.",
    ],
    en: [
        "Welcome to the cinema!",
        "Today we present the use of technology in cinematography.",
        "It all began in 1895 when the Lumière brothers improved upon the Kinetoscope and created the Cinematograph, the term from which cinema originates. Their device, developed by the sons of a photographer who owned a film and photo paper industry, is the ancestor of the modern film camera. Later, one of the most significant changes was the shift from analog to digital format.",
        "This transition allowed greater flexibility in film production and distribution. Digitalization opened new possibilities in filming and editing, paving the way for creativity and innovation.",
        "The most revolutionary technologies:",
        "📷📷 Cameras 📷📷",
        "Video and audio capture is one of the core stages of audiovisual production. Recently, digital video has largely replaced analog, advancing from a mere 144p resolution to today's impressive 8K. This improvement in quality enhances the emotional impact of films and increases the effectiveness of corporate and promotional videos.",
        "Technological advancements have been matched by the development of larger, high-resolution TVs and monitors. Additionally, compact sports cameras and multi-lens cameras enable the creation of 3D images.",
        "🎥🎥 CGI 🎥🎥",
        "Computer-Generated Imagery (CGI) involves creating moving images using digital software. It’s extensively used for characters, environments, objects, and visual effects in movies, games, and even promotional videos.",
        "🔊💥 SFX - Sound Effects 💥🔊",
        "Sound effects (SFX) enrich the audiovisual experience, using both natural sounds (like rain) and synthetic sounds (explosions, gunfire, or fictional creatures) to create immersive atmospheres.",
        "Practical example: In a fight scene, in addition to dialogue and soundtrack, SFX adds the sounds of punches, kicks, and impacts, enhancing realism and excitement.",
        "👀✨ VFX - Visual Effects ✨👀",
        "Visual effects (VFX) add elements or scenes that can't be captured on camera. VFX are used to craft characters, create scenes, or amplify stunning visuals in films, TV shows, commercials, and online videos.",
        "Practical example: Imagine a character flying. In reality, the actor is suspended by cables in a studio, but VFX can remove the cables and add flight effects to make it appear as though the character is truly flying.",
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
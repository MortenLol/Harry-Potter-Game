goToPage('Start');
function goToPage(page) {

    let textbox = model.textbox;

    if (page == 'Start') {
        textbox.text = 'Du står på plattform 9 3/4';
        textbox.type = 'text';
        textbox.nextPage = 'Toget';
        model.background = backgroundImages.station;
        textbox.background = scrollImages.mainScroll;
        textbox.characterOne = firstCharacter.luna;
        textbox.characterTwo = secondCharacter.ron;
    }
    else if (page == 'Toget') {
        textbox.text = 'Du tar toget nå';
        textbox.type = 'text';
        textbox.nextPage = 'Togvalg';
        model.background = '';
        model.background = backgroundImages.train;
    }
    else if (page == 'Togvalg') {
        textbox.type = 'choice';
        textbox.text = 'Hvem vil du sitte ved siden av?'
        textbox.choices = ['<li onclick="goToPage(`Hermine`)">Hermione</li>', '<li onclick="goToPage(`Ron`)">Ron</li>']
        model.background = backgroundImages.traininside;
    }
    else if (page == 'Hermine') {
        textbox.type = 'text';
        textbox.text = 'Snakker litt med Hermine';
        textbox.nextPage = 'Galtvort'
        model.background = backgroundImages.traininside;
    }
    else if (page == 'Ron') {
        textbox.type = 'text';
        textbox.text = 'Snakker litt med Ron';
        textbox.nextPage = 'Galtvort'
        model.background = backgroundImages.traininside;
    }
    else if (page == 'Galtvort') {
        textbox.type = 'text';
        textbox.text = 'Få litt info om ting du skal finne';
        textbox.nextPage = 'Let i gangen';
        model.background = backgroundImages.hogwarts;
    }
    else if (page == 'Let i gangen') {
        textbox.type = 'text';
        textbox.text = 'Let etter det du skal finne i gangen. Oppdag Snape.';
        textbox.nextPage = 'Gjem deg';
    }
    else if (page == 'Gjem deg') {
        textbox.type = 'choice';
        textbox.text = 'Hvordan vil du gjemme deg?';
        textbox.choices = ['<li onclick="goToPage(`Usynlighetskappe`)">Ta på usynlighetskappe</li>',
                           '<li onclick="goToPage(`Bibliotek`)">Smett inn på biblioteket med Ron og Hermione</li>',
                           '<li onclick="goToPage(`Vindu`)">Snik deg ut vinduet</li>']
    }
    else if (page == 'Usynlighetskappe') {
        textbox.type = 'text';
        textbox.text = 'Du tar på usynlighetskappen, men blir oppdaget.';
        textbox.nextPage = 'Avslutning usynlighetskappe';
    }
    else if (page == 'Avslutning usynlighetskappe') {
        textbox.type = 'text';
        textbox.text = 'Avslutning av historien 1.';
        textbox.nextPage = 'Start';
    }
    else if (page == 'Bibliotek') {
        textbox.type = 'text';
        textbox.text = 'Du sniker deg inn på biblioteket, men blir oppdaget.';
        textbox.nextPage = 'Hvem skal forklare';
    }
    else if (page == 'Hvem skal forklare') {
        textbox.type = 'choice';
        textbox.text = 'Hvem skal forklare hvorfor dere er der på nattestid?';
        textbox.choices = ['<li onclick="goToPage(`Hermine forklarer`)">Hermione</li>', '<li onclick="goToPage(`Ron forklarer`)">Ron</li>']
    }
    else if (page == 'Hermine forklarer') {
        textbox.type = 'text';
        textbox.text = 'Snape godtar forklaringen deres.';
        textbox.nextPage = 'Avslutning bibliotek 1';
    }
    else if (page == 'Ron forklarer') {
        textbox.type = 'text';
        textbox.text = 'Snape godtar ikke forklaringen deres.';
        textbox.nextPage = 'Avslutning bibliotek 2';
    }
    else if (page == 'Avslutning bibliotek 1') {
        textbox.type = 'text';
        textbox.text = 'Avslutning av historien 2.';
        textbox.nextPage = 'Start';
    }
    else if (page == 'Avslutning bibliotek 2') {
        textbox.type = 'text';
        textbox.text = 'Avslutning av historien 3.';
        textbox.nextPage = 'Start';
    }
    else if (page == 'Vindu') {
        textbox.type = 'text';
        textbox.text = 'Du blir ikke oppdaget.';
        textbox.nextPage = 'Hagrid';
    }
    else if (page == 'Hagrid') {
        textbox.type = 'text';
        textbox.text = 'Du finner Hagrid og Buckbeak utenfor, som foreslår at du blir hos han til morgendagen.';
        textbox.nextPage = 'Fly';
    }
    else if (page == 'Fly') {
        textbox.type = 'text';
        textbox.text = 'Fly med Buckbeak til Hagrids hytte.';
        textbox.nextPage = 'Avslutning hytte';
    }
    else if (page == 'Avslutning hytte') {
        textbox.type = 'text';
        textbox.text = 'Avslutning av historien 4.';
        textbox.nextPage = 'Start';
        model.background = backgroundImages.hut;
    }
    else {
        textbox.type = 'choice';
        textbox.text = `Du prøvde å gå til en side som ikke eksisterer. Siden du prøvde å gå til het: ${page}`;
        textbox.choices = [];
    }
    updateView();
}


function nextPage() {
    goToPage(model.textbox.nextPage)
}
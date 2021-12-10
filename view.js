updateView();

function updateView() {
    let html = '';
    let textbox = model.textbox;
    html += model.background;
    html += model.textbox.background;
    html += model.textbox.characterOne;
    html += model.textbox.characterTwo;
    html += `<div class="textbox">`
    if (textbox.type == 'text') {
        html += `${textbox.text}`
    }
    else if (textbox.type == 'choice') {
        html += `${textbox.text}`
        html += `<ul>`
        for (let i = 0; i < textbox.choices.length; i++) {
            html += textbox.choices[i];
        }
        html += `</ul>`
    }
    html += `</div>`
    html += `<button class="backButton">Back</button>`
    html += `<button class="nextButton" onclick="nextPage()" ${(textbox.type == 'choice') ? 'disabled' : ''}>Next</button>`
   






    document.getElementById('app').innerHTML = html;
}
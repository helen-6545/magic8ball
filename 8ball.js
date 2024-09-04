

function getResponse(){
    const responses = ["It is certain", "Yes", "Outlook good", "Most likely", "Ask again later", "Reply hazy, try again", "Outlook not so good", "Don’t count on it"]
    const colors = ["#35d411", "#6acc54", "#6ca85e", "#608558", "#97a383", "#ad8d89", "#995846", "#e03d10"]
    const randomIndex = Math.floor(Math.random() * responses.length);
    const answer = responses[randomIndex];
    const colorPick = colors[randomIndex];

    console.log(answer);
    console.log(colorPick);
    document.getElementById("textBox").innerHTML = answer
    textBox.style.color = colorPick
    
}
import { dateIdeas } from '/idea-array.js'

const idea = document.getElementById('idea');
const mainBtn = document.getElementById('button');
const counter = document.getElementById('counter')

mainBtn.addEventListener('click', function displayIdea() {
    let randomNumber = Math.floor(Math.random() * dateIdeas.length);

    let providedIdea = dateIdeas[randomNumber]

    idea.innerHTML = providedIdea;

})

function initailizeCounter() {
    counter.innerHTML = `
        ${dateIdeas.length} ideas and counting!`
}

initailizeCounter()
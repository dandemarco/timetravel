//Page elements
let quizZone = document.querySelector("#quiz-zone")
let statementHeader = document.querySelector("#statement-header")
let correctionSection = document.querySelector("#correction-section")
let correctionText = document.querySelector("#correction")
let iconZone = document.querySelector("#icon-zone")

//Buttons
let agreeButton = document.querySelector("#agree-btn")
let disagreeButton = document.querySelector("#disagree-btn")
let okButton = document.querySelector("#ok-btn")
let reviewButton = document.querySelector("#review-btn")

//Make empty history
let history = []

let correctResponses = []

let incorrectResponses = []

//Hide correction section
correctionSection.style.visibility = "collapse"

//Hide review button
reviewButton.style.visibility = "collapse"

okButton.addEventListener("click", function() {
    correctionSection.style.visibility="collapse"
    iconZone.innerHTML = ''
    agreeButton.style.visibility="visible"
    disagreeButton.style.visibility="visible"
    newStatement()
})

reviewButton.addEventListener("click", function() {
    reviewQuiz()
})

newStatement()

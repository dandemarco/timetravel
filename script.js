//Page elements
let quizZone = document.querySelector("#quiz-zone")
let questionHeader = document.querySelector("#question-header")
let correctionSection = document.querySelector("#correction-section")
let correctionText = document.querySelector("#correction")
let correctIcon = document.querySelector("#correct-icon")
let incorrectIcon = document.querySelector("#incorrect-icon")
let iconZone = document.querySelector("#icon-zone")

//Buttons
let agreeButton = document.querySelector("#agree-btn")
let disagreeButton = document.querySelector("#disagree-btn")
let okButton = document.querySelector("#ok-btn")

//Make empty history
let history = []

//Hide correction section
correctionSection.style.visibility = "collapse"

newQuestion()

okButton.addEventListener("click", function() {
    correctionSection.style.visibility="collapse"
    iconZone.innerHTML = ''
    agreeButton.style.visibility="visible"
    disagreeButton.style.visibility="visible"
    newQuestion()
})



function newQuestion() {
    let [question, preference, confirmation, correction] = lookup()
    history.push(question)
    console.log(history)
    questionHeader.innerHTML = question

    agreeButton.addEventListener("click", function() {
        let userResponse = "agree"
        checkResponse(userResponse, preference, confirmation, correction)
    })

    disagreeButton.addEventListener("click", function() {
        let userResponse = "disagree"
        checkResponse(userResponse, preference, confirmation, correction)
    })
}

function lookup() {
    let lookupLoop = true

    while (lookupLoop) {
        let randomEntry = questions[Math.floor(Math.random() * questions.length)]

        let question = randomEntry.question
        let preference = randomEntry.preference
        let confirmation = randomEntry.confirmation
        let correction = randomEntry.correction

        if (!history.includes(question)) {
            return [question, preference, confirmation, correction]
        }
    }
}

function checkResponse(userResponse, preference, confirmation, correction) {
    correctionSection.style.visibility="visible"
    agreeButton.style.visibility="collapse"
    disagreeButton.style.visibility="collapse"
    if (userResponse === preference) {
        iconZone.innerHTML = `<img src="correct.gif">`
        correctionText.innerHTML = confirmation
    } else {
        iconZone.innerHTML = `<img src="incorrect.png">`
        correctionText.innerHTML = correction
    }
}

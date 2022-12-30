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

newStatement()

okButton.addEventListener("click", function() {
    correctionSection.style.visibility="collapse"
    iconZone.innerHTML = ''
    agreeButton.style.visibility="visible"
    disagreeButton.style.visibility="visible"
    console.log('Correct responses: ' + correctResponses)
    console.log('Incorrect responses: ' + incorrectResponses)
    newStatement()
})

reviewButton.addEventListener("click", function() {
    reviewQuiz()
})


//newStatement() displays a new quiz statement on the screen for the user to respond to
function newStatement() {
    let [statement, preference, message] = lookup()

    console.log(history)
    statementHeader.innerHTML = statement

    agreeButton.addEventListener("click", function() {
        let userResponse = "agree"
        checkResponse(statement, userResponse, preference, message)
    })

    disagreeButton.addEventListener("click", function() {
        let userResponse = "disagree"
        checkResponse(statement, userResponse, preference, message)
    })
}


//lookup() pulls a random statement entry from the statements.js dictionary
function lookup() {
    let lookupLoop = true

    while (lookupLoop) {
        let randomEntry = statements[Math.floor(Math.random() * statements.length)]

        let statement = randomEntry.statement
        let preference = randomEntry.preference
        let message = randomEntry.message

        if (history.length === statements.length) {
            console.log('Boop')
            let statement = "Quiz complete."

            reviewButton.style.visibility="visible"
            agreeButton.style.visibility="collapse"
            disagreeButton.style.visibility="collapse"

            return [statement, preference, message]

        } else if (!history.includes(statement)) {
            history.push(statement)

            return [statement, preference, message]
        }
    }
}

//checkResponse() checks the user response against the preferred response, and displays
//either a confirmation or a correction
function checkResponse(statement, userResponse, preference, message) {
    correctionSection.style.visibility="visible"
    agreeButton.style.visibility="collapse"
    disagreeButton.style.visibility="collapse"
    if (userResponse === preference) {
        correctResponses.push(statement)
        console.log('Correct responses: ' + correctResponses)
        iconZone.innerHTML = `<img src="correct.gif" alt="Correct icon">`
        correctionText.innerHTML = `<strong>Correct.</strong><br>${message}`
    } else {
        incorrectResponses.push(statement)
        console.log('Incorrect responses: ' + incorrectResponses)
        iconZone.innerHTML = `<img src="incorrect.png" alt="Incorrect icon">`
        correctionText.innerHTML = `<strong>Incorrect.</strong><br>${message}`
    }
}

//reviewQuiz() reviews what the user got right and wrong
function reviewQuiz() {
    console.log('Correct responses: ' + correctResponses)
    console.log('Incorrect responses: ' + incorrectResponses)
}




function newStatement() {
    let [statement, preference, confirmation, correction] = lookup()

    console.log(history)
    statementHeader.innerHTML = statement

    agreeButton.addEventListener("click", function() {
        let userResponse = "agree"
        checkResponse(statement, userResponse, preference, confirmation, correction)
    })

    disagreeButton.addEventListener("click", function() {
        let userResponse = "disagree"
        checkResponse(statement, userResponse, preference, confirmation, correction)
    })
}

function lookup() {
    let lookupLoop = true

    while (lookupLoop) {
        let randomEntry = statements[Math.floor(Math.random() * statements.length)]

        let statement = randomEntry.statement
        let preference = randomEntry.preference
        let confirmation = randomEntry.confirmation
        let correction = randomEntry.correction

        if (history.length === statements.length) {
            console.log('Boop')
            let statement = "Quiz complete."
            reviewButton.style.visibility="visible"
            agreeButton.style.visibility="collapse"
            disagreeButton.style.visibility="collapse"
            return [statement, preference, confirmation, correction]
        } else if (!history.includes(statement)) {
            history.push(statement)
            return [statement, preference, confirmation, correction]
        }

    }
}

function checkResponse(statement, userResponse, preference, confirmation, correction) {
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

function reviewQuiz() {

}

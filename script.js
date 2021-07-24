const form = document.getElementById("quiz-form")
const answers = Array.from(document.querySelectorAll("#answer"))
const questionItems = document.querySelectorAll("#question-item")

form.addEventListener("submit", e => {
    e.preventDefault()
    questionItems.forEach(questionItem => {
        questionItem.classList.add("incorrect")
        questionItem.classList.remove("correct")
    })
    const checkedAnswers = answers.filter(answer => answer.checked)

    checkedAnswers.forEach(answer => {
        const isCorrect = answer.value === "true"
        const questionItem = answer.closest("#question-item")

        if (isCorrect) 
        {
             questionItem.classList.add("correct")
             questionItem.classList.remove("incorrect")
        }
        else {
            
             questionItem.classList.add("incorrect")
             questionItem.classList.remove("correct")
        }
    })

    
})


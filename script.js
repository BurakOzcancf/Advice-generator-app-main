let adviceNumber = document.querySelector(".advice__ID")
let adviceDescription = document.querySelector(".advice__content")
let adviceDice = document.querySelector(".advice__random")

window.addEventListener('load', () => {
    updateAdvice()
})

function updateAdvice() {
    fetch('	https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceNumber.innerHTML = data.slip.id
            adviceDescription.innerHTML = data.slip.advice
        })
        .catch(adviceDescription.innerHTML = "It may take some time")
} 
  
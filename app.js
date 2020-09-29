let fiveCentBtn = document.querySelector(".five-cents")
let oneDollarBtn = document.querySelector(".one-dollar")
let twoDollarBtn = document.querySelector(".two-dollar")
let savingsDisplay = document.querySelector(".savings-display")
let savingsTotal = 0
let withdrawBtn = document.querySelector("button")
let dollarInput = document.querySelector(".dollar-input")
let centsInput = document.querySelector(".cents-input")
let withDrawalMsg = document.querySelector(".withdrawel")
let nopeMsg = document.querySelector(".nope")


fiveCentBtn.addEventListener('click', function() {
    addToSavings(0.05)
})
oneDollarBtn.addEventListener('click', function() {
    addToSavings(1)
})
twoDollarBtn.addEventListener('click', function() {
    addToSavings(2)
})
withdrawBtn.addEventListener('click', function() {
    let amountToWithDraw = Number(dollarInput.value) + centsInput.value / 100
    if (amountToWithDraw > savingsTotal || amountToWithDraw < 0) {
        nopeMsg.style.display = "block"
        withDrawalMsg.style.display = "none"

    } else {
        addToSavings(-amountToWithDraw)
        withDrawalMsg.textContent = `Here is your $${amountToWithDraw.toFixed(2)}`
        withDrawalMsg.style.display = "block"
        nopeMsg.style.display = "none"
    }
})

function addToSavings(money) {
    savingsTotal = Math.round(savingsTotal * 100 + money * 100) / 100
    savingsDisplay.textContent = `$ ${savingsTotal}`
}
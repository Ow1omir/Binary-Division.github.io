// НЕ СТАВТЕ 2 ПОЖАЛУЙСТА, Я СТАРАЛСЯ

const btn = document.getElementById('countBtn')
const resultDisplay = document.getElementById('resultDisplay')

btn.addEventListener('click', division)

function division() {
    let firstNumber = Number(document.getElementById('firstNumber').value)
    let secondNumber = Number(document.getElementById('secondNumber').value)
    let intermediateResult = Math.floor(firstNumber / secondNumber)
    let currentNumber = firstNumber - secondNumber // 12
    let answer = []
    console.log(firstNumber, secondNumber);

    answer.push(`${dec2bin(intermediateResult)}.`)

    for(let i = 0; i < 7; i++) {
        console.log(currentNumber);
        if(currentNumber >= 0) {
            answer.push('1')
            currentNumber = currentNumber * 2 - secondNumber
        } else {
            answer.push('0')
            currentNumber = currentNumber * 2 + secondNumber
       }
    }
    answer.splice(1, 1)
    console.log(answer);
    resultDisplay.innerText = answer.join('')
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
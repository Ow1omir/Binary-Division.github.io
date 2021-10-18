// НЕ СТАВТЕ 2 ПОЖАЛУЙСТА, Я СТАРАЛСЯ

const line = document.getElementById('line')
const countBtn = document.getElementById('countBtn')
const moreBtn = document.getElementById('moreBtn')
const resultDisplay = document.getElementById('resultDisplay')
const moreResult = document.getElementById('more-result')
const moreBlock = document.getElementById('more-conteiner')
const rangeValue = document.getElementById('rangeValue').value
const rangeValueDisplay = document.getElementById('rangeValueDisplay')
let moreLever = [0, 1]

countBtn.addEventListener('click', division)
moreBtn.addEventListener('click', displayMore)


function division() {
    let firstNumber = Number(document.getElementById('firstNumber').value)
    let secondNumber = Number(document.getElementById('secondNumber').value)
    let intermediateResult = Math.floor(firstNumber / secondNumber)
    let currentNumber = firstNumber - secondNumber 
    let answer = []
    console.log(firstNumber, secondNumber);

    answer.push(`${dec2bin(intermediateResult)}.`)

    for(let i = 0; i < 20; i++) {
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
    answer = Number(answer.join(''))
    console.log(answer)
    resultDisplay.innerText = answer.toFixed(6)


    if(moreLever[0] == 1) {
        moreResult.innerText = answer.toFixed(moreRangeChanger())
    }
    console.log(answer.toFixed(16))

}

function displayMore() {
    moreLever.reverse()
    console.log(moreLever)
    
    
    if(moreLever[0] == 0) { 
        moreBlock.classList.remove('display')
        moreBlock.classList.add('more-conteiner')
        moreBtn.classList.remove('moreBtn-active')
        line.classList.remove('line-display')

    } else {
        moreBlock.classList.add('more-conteiner')
        moreBlock.classList.add('display')
        moreBtn.classList.add('moreBtn-active')  
        line.classList.add('line-display')
    }
    
}

function moreRangeChanger() {
    const rangeValue = document.getElementById('rangeValue').value
    rangeValueDisplay.innerText = rangeValue
    console.log(rangeValue)
    return rangeValue
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
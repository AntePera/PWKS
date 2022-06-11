const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const DisplayResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let res
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice()
{
    const randomNum=Math.floor(Math.random() * 3)+1

    if(randomNum===1)
    {
        computerChoice='rock'
    }
    if(randomNum===2)
    {
        computerChoice='scissors'
    }
    if(randomNum===3)
    {
        computerChoice='paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult()
{
    if(computerChoice === userChoice)
    {
        res="draw" 
    }
    if(computerChoice === 'rock' && userChoice==='paper')
    {
        res="win"
    }
    if(computerChoice === 'rock' && userChoice==='scissors')
    {
        res="loss"
    }
    if(computerChoice === 'scissors' && userChoice==='paper')
    {
        res="loss"
    }
    if(computerChoice === 'scissors' && userChoice==='rock')
    {
        res="win"
    }
    if(computerChoice === 'paper' && userChoice==='rock')
    {
        res="loss"
    }
    if(computerChoice === 'paper' && userChoice==='scissors')
    {
        res="win"
    }
    DisplayResult.innerHTML= res
}
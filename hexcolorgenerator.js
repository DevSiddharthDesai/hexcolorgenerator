var colorBtn = document.getElementsByClassName('genNew')[0];

var colorCode = document.getElementsByClassName('color')[0];

colorBtn.addEventListener('click',function(){
    firstNumber = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    secondNumber = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    thirdNumber = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    numberCombination = "rgb(" + (firstNumber + "," + secondNumber + "," + thirdNumber) + ")";
    
    colorCode.innerHTML = numberCombination;

    document.body.style.backgroundColor = numberCombination;
});
let btn = document.getElementById('genPas');
let newPass = document.getElementById("newPass");
let slider = document.getElementById('range')
let rangeVal = document.getElementById('rangeVal')
let upperCase = document.getElementById("capLet")
let lowerCase = document.getElementById("samLet")
let number = document.getElementById("number")
let symbol = document.getElementById("symbol")
let copyBtn = document.getElementById('copyBtn')

rangeVal.innerText = slider.value


slider.addEventListener('input', (e)=>{
    rangeVal.innerText = e.target.value
})


btn.addEventListener('click', ()=>{
    
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz'
    let numberStr = '0123456789'
    let symbolStr = '@#$%&^*!~<?>'

    let finalStr = ''

    if(upperCase.checked){
        finalStr += capitalLetter
    }
    if(lowerCase.checked){
        finalStr += smallLetter
    }
    if(number.checked){
        finalStr += numberStr
    }
    if(symbol.checked){
       finalStr += symbolStr
    }
    if(finalStr === ''){
        alert("Please Select atleast one checkbox !");
        return;
    }
    console.log(finalStr)
    let letestPass = ''



    for(let i = 0; i < slider.value; i++){
       let randNum = Math.floor(Math.random() * finalStr.length)
       letestPass += finalStr[randNum]
    }
    copyBtn.style.opacity = '1'
    newPass.innerText = `${letestPass}`
    
});

copyBtn.addEventListener('click', ()=>{
    window.navigator.clipboard.writeText(newPass.innerText)
    copyBtn.style.opacity = '0.3'
    
})


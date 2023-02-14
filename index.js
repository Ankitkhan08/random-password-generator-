let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]; 

let randompassword1 = document.getElementById("pass1")
let randompassword2 = document.getElementById("pass2")

let passwordLength = 12

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword()
{
    let randompassword = ""
    for(let i=0 ; i<passwordLength ; i++)
    {
        randompassword += getRandomCharacter()
    }
    return randompassword
}

let generatedpassword1 = generateRandomPassword()

function generateNewPass(){
randompassword1.textContent = generateRandomPassword()
randompassword2.textContent = generateRandomPassword()
}
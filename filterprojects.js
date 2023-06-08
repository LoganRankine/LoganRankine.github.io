import data from 'pageJSON.json'

const about = document.getElementById("java")
about.textContent = "About me"
console.log(about)

const aboutText = document.getElementById("about-text")

aboutText.textContent = data.aboutText
console.log(aboutText)

/*
function GetImages(){
    let about = document.getElementById("aboutme")
    about.textContent = "About me mate"
}
*/
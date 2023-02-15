
const sentences = document.querySelectorAll(".text-3");
let index=0;

function showNextSentence(){
    sentences[index].style.display="none";
    index=(index+1)%sentences.length;
    sentences[index].style.display = "inline-block";
}

setInterval(showNextSentence, 1000);


document.getElementById("resume-button-2").addEventListener("click",(event)=>{
    window.location.href="./images/Jishnu_Raj_Resume.pdf";
})

document.getElementById("resume-button-1").addEventListener("click",(event)=>{
    window.location.href="./images/Jishnu_Raj_Resume.pdf";
})
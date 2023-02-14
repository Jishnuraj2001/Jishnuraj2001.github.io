
const sentences = document.querySelectorAll(".text-3");
let index=0;

function showNextSentence(){
    sentences[index].style.display="none";
    index=(index+1)%sentences.length;
    sentences[index].style.display = "inline-block";
}

setInterval(showNextSentence, 1000);
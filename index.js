
const sentences = document.querySelectorAll(".text-3");
let index=0;

function showNextSentence(){
    sentences[index].style.display="none";
    index=(index+1)%sentences.length;
    sentences[index].style.display = "inline-block";
}
setInterval(showNextSentence, 1000);

 let sidemenu=document.getElementById("sidemenu");

function openmenu(){
  console.log(1);
    sidemenu.style.right="0";
}
function closemenu(){
  console.log(1);
    sidemenu.style.right="-200px";
}


document.getElementById('resume-link-1').addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1c2IX4RaLn9V_UWALLhcVBCdPFKuII3Cn/view?usp=share_link","_blank");
  })
  
  document.getElementById('resume-link-2').addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1c2IX4RaLn9V_UWALLhcVBCdPFKuII3Cn/view?usp=share_link","_blank");
  })






function passaSeguentsDSS(objRebut){
  let idObjPregAct = objRebut.parentElement.id; 
  let objPregAct = document.getElementById(idObjPregAct);
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i+1].id;
      break;
    };
  }
  amagaElement(idObjPregAct);
mostraElement(idObjPregSeg);
}




function mostraElement(idRebut) {
  document.getElementById(idRebut).classList.add("elementVisible");
  
  document.getElementById(idRebut).classList.remove("elementOcult");
}
function amagaElement(idRebut) {
  document.getElementById(idRebut).classList.remove("elementVisible");
  
  document.getElementById(idRebut).classList.add("elementOcult");
}
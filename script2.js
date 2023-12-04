function clicksurletitre(){
    const monElementParent=document.getElementById("game-grid")
// Premiere facon
    // monElementParent.innerHTML+="<div>vous avez clické</div>";

//deuxieme facon
   const monTableau = ["😊","😂","🤣","😍","😒","👌","😘","😂","😊","😂","🤣","😍","😒","👌","😘","😂"]
   for (var index = 0; index < 16; index++) {
        const monNouvelElement=document.createElement("div");
        monElementParent.appendChild(monNouvelElement);
        monNouvelElement.addEventListener("click",onFlip)
        monNouvelElement.innerHTML=monTableau[index];
        monNouvelElement.classList.add("transparant");   

      }

    function onFlip(){
        //alert("vous avez cliqué sur" + this.innerHTML);
        this.classList.remove("transparant")
    }
       
 
}

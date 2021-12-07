let myform = document.getElementById("myform");
myform.addEventListener("submit",function(e){
    e.preventDefault();
    
var titre=document.getElementById("titre");
if(titre.value.length>17 || titre.value== "" )
{ 
    var errortitre=document.getElementById("titre-1")
    errortitre.innerHTML=('Message no validé')
    errortitre.style.color="red"
  }
else{
    var errortitre=document.getElementById("titre-1")
    errortitre.innerHTML=('good')
    errortitre.style.color="green"
  

}

var aut=document.getElementById("Auteur")
if(aut.value.length>10 || aut.value== "" ){
    var errorauteur=document.getElementById("auteur-1")
    errorauteur.innerHTML=('Message no validé')
    errorauteur.style.color="red"

}
else{
    var errorauteur=document.getElementById("auteur-1")
    errorauteur.innerHTML=('good')
    errorauteur.style.color="green"

}
var type=document.getElementById("type")
if(type.value.length>10){

    var errorprix=document.getElementById("prix-1")
    errorprix.innerHTML=('message no validé')

}
else{
    var errorprix =document.getElementById("prix-1")
    errorprix.innerHTML=('good')
    errorprix.style.color="green"

}
});
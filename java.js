let myform = document.getElementById("myform");
myform.addEventListener("submit",function(e){
    e.preventDefault();
    


    var titre=document.getElementById("titre")
    if(titre.value== ""){ 
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Remplir le champs')
        errortitre.style.color="red"
      }
    else if(!isNaN(titre.value)){
      
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Only text')
        errortitre.style.color="red"
    
    
    } 
    else{
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Good')
        errortitre.style.color="green"
    }
    if(titre.value.length>20){ 
        var errortitre=document.getElementById("titre-1")
        errortitre.innerHTML=('Titre de louvrage max 20')
        errortitre.style.color="red"
      }
    
      var aut=document.getElementById("Auteur")
      if(aut.value== ""){ 
          var errorauteur=document.getElementById("auteur-1")
          errorauteur.innerHTML=('Remplir le champs')
          errorauteur.style.color="red"
        }
    
        else if(!isNaN(aut.value)){
          
            var errorauteur=document.getElementById("auteur-1")
            errorauteur.innerHTML=('Only text')
            errorauteur.style.color="red"
        
        
        } 
        else{
            var errorauteur=document.getElementById("auteur-1")
            errorauteur.innerHTML=('Good')
            errorauteur.style.color="green"
        }
        if(aut.value.length>20){ 
            var errorauteur=document.getElementById("auteur-1")
            errorauteur.innerHTML=('Titre de louvrage max 20')
            errorauteur.style.color="red"
          }
        

var prix=document.getElementById("Prix")
if((prix.value).trim() == ""){

    var errorprix=document.getElementById("prix-1")
    errorprix.innerHTML=('Message no validé')
    errorprix.style.color="red"


}
else if(isNaN(prix.value)){

    var errorprix=document.getElementById("prix-1")
    errorprix.innerHTML=('Message no validé')
    errorprix.style.color="red"


}
else if((prix.value)<=0){
    var errorprix=document.getElementById("prix-1")
    errorprix.innerHTML=('Le prix doit etre positif')
    errorprix.style.color="red"
}

else{
    var errorprix =document.getElementById("prix-1")
    errorprix.innerHTML=('Good')
    errorprix.style.color="green"

}


var date=document.getElementById("date")
if(date.value== "" ) { 
    var errordate=document.getElementById("date-1")
    errordate.innerHTML=('Message no validé')
    errordate.style.color="red"
 }
else{
        var errordate=document.getElementById("date-1")
        errordate.innerHTML=('Good')
        errordate.style.color="green"
    
}
var lang=document.getElementById("fname")
if(lang.value== "" ) { 
    var errorlang=document.getElementById("lang-1")
    errorlang.innerHTML=('Message no validé')
    errorlang.style.color="red"
 }
    else{
        var errorlang=document.getElementById("lang-1")
        errorlang.innerHTML=('Good')
        errorlang.style.color="green"
 }


//radio
var rad = document.getElementsByClassName ("radio-1")
if(!(rad[0].checked || rad[1].checked) || rad[2].checked){
    var errorradio = document.getElementById("rad-1")
    errorradio.innerHTML=("Veuillez sélectionner un type")
    errorradio.style.color="red"
}
else{
    var errorradio = document.getElementById("rad-1")
    errorradio.innerHTML=("Good")
    errorradio.style.color="green"

}
 


                 var titre = document.getElementById("titre");
                 var Auteur = document.getElementById("Auteur");
                 var Prix = document.getElementById("Prix");
                 var date = document.getElementById("date");
                 var lang= document.getElementById("fname");
                 var rad = document.getElementsByClassName ("radio-1")
         
                       var row = table.insertRow(-1);
                       row.insertCell(0).innerHTML = titre.value;
                       row.insertCell(1).innerHTML = Auteur.value;
                       row.insertCell(2).innerHTML = Prix.value;
                       row.insertCell(3).innerHTML = date.value;
                       row.insertCell(4).innerHTML =  lang.options[lang.selectedIndex].value;
                     
                     
                     
    var temp_cell="" ;
   for(var i=0;i<rad.length;i++){ 
               if(rad[i].checked){
                 temp_cell = rad[i].value;
                 }
            }
            row.insertCell(5).innerHTML = temp_cell;
            row.insertCell(6).innerHTML = 
            '<button onclick= "Edit(this)" value= "Edit" >Edit</button>' + '<button Onclick="deleteRow(this)" value="delet">Delete</button>' ;
           
} 
)


function deleteRow(r){
    var i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}
function Edit(r) {
    var rad = document.getElementsByClassName ("radio-1")
    var i = r.parentNode.parentNode.rowIndex;
    var row = table.rows[i];
    if (r.innerHTML == "Edit") {
        titre.value = row.cells[0].innerHTML;
        Auteur.value = row.cells[1].innerHTML;
        Prix.value = row.cells[2].innerHTML;
        date.value = row.cells[3].innerHTML;
        document.getElementById("fname").value = row.cells[4].innerHTML;

        // Type
        for (var i = 0; i < rad.length; i++) {
            if (row.cells[5].innerHTML == rad[i].value) {
                rad[i].checked = true;
            }
        }
        r.innerHTML = "Save";
        document.getElementById("btn").setAttribute("disabled", "true");
    }
    else {
        row.cells[0].innerHTML = titre.value;
        row.cells[1].innerHTML = Auteur.value;
        row.cells[2].innerHTML = Prix.value;
        row.cells[3].innerHTML = date.value;
        row.cells[4].innerHTML = lang.options[lang.selectedIndex].value;
        for (var i = 0; i < rad.length; i++) {
            if (rad[i].checked) {
                row.cells[5] = rad[i].value;
            }
        }
        r.innerHTML = "Edit";
        document.getElementById("btn").removeAttribute("disabled")
    }
}


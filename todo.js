var addToDoButton = document.getElementById('add');
var toDoContainer = document.getElementById('toDoLists');
var inputField = document.getElementById('inputField');

 addToDoButton.addEventListener('click', function()
  { var paragraph = document.createElement('p'); 
    
paragraph.classList.add('ptag');



 paragraph.innerText = inputField.value; toDoContainer.appendChild(paragraph); inputField.value = ""; 

   

var rem = document.createElement('button'); 
rem.classList.add('rem');
rem.innerText = "remove"

paragraph.appendChild(rem);
   
rem.addEventListener('click', function(){ paragraph.removeChild(rem);
    toDoContainer.removeChild(paragraph);     })
   
   
   
   
   
  }) 

window.onload=function(){
    var board=document.querySelector('.board-js');
 /*
    board.addEventListener('click',function(event){
        console.log(event.target);
    });
*/

/*
    board.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor='yellow';
    event.target.style.border='5px solid green';
    
    });
*/

/*
    board.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor='red';        
        });
*/

/*
    board.addEventListener('click', function(event){
    event.target.style.backgroundColor='red';        
    });

    board.addEventListener('dblclick', function(event){
        event.target.style.backgroundColor='yellow';        
        });
*/
/*
board.addEventListener('click', function(event){
   // event.target.innerHTML='X';     (se puede agregar texto y etiquetas)
   // event.target.textContent='X';   //(solo texto)
  // event.target.innerHTML='<img src="https://0.soompi.io/wp-content/uploads/sites/8/2017/04/21064213/park-hyung-sik21.jpg">'
   
 });
 */

board.addEventListener('click',addX);

};
var centinel=false;

function addX(event){
    if(centinel)//{
        event.target.textContent='X';
      //  centinel=false;        
    // }else{
      else
        event.target.textContent='O';
      //  centinel=true;  
      centinel=!centinel;
    // }
}
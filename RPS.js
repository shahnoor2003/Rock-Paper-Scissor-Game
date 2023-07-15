const btns = Array.from(document.querySelectorAll("button"));
btns.forEach(e => e.addEventListener('click', ()=>{
  var player_input = document.querySelector('#p1').innerHTML=e.value;
  let random_munber = Math.floor(Math.random()*btns.length +1);
  let result= document.querySelector('.result');
  let comp_input = document.querySelector('#p2') ;
  if(random_munber==1){
  comp_input.innerHTML='ROCK';
  }
  if(random_munber==3){
    comp_input.innerHTML='PAPER';
    }
  if(random_munber==2){
      comp_input.innerHTML='SCISSOR';
  }
  if(e.value === 'ROCK' && comp_input.innerHTML==='ROCK'){
    result.innerHTML='DRAW';
  }
  if(e.value === 'PAPER' && comp_input.innerHTML==='PAPER'){
    result.innerHTML='DRAW';
  }
  if(e.value === 'SCISSOR' && comp_input.innerHTML==='SCISSOR'){
    result.innerHTML='DRAW';
  } 
  /// 
  if(e.value === 'ROCK' && comp_input.innerHTML==='PAPER'){
    result.innerHTML='Computer Win';
  }
  if(e.value === 'ROCK' && comp_input.innerHTML==='SCISSOR'){
    result.innerHTML='You Win';
  }
  if(e.value === 'PAPER' && comp_input.innerHTML==='ROCK'){
    result.innerHTML='You Win';
  }
  if(e.value === 'PAPER' && comp_input.innerHTML=='SCISSOR'){
    result.innerHTML='Computer Win';
  }
  if(e.value === 'SCISSOR' && comp_input.innerHTML==='ROCK'){
    result.innerHTML='Computer Win';
  }
  if(e.value === 'SCISSOR' && comp_input.innerHTML=='PAPER'){
    result.innerHTML='You Win';
  }

  if(  result.innerHTML==='You Win'){
    function performFunction() {
      document.querySelector('.player-1').style.border='lightgreen 2px solid';
      document.querySelector('.player-2').style.border='red 2px solid';
    }
    performFunction();
    setTimeout(function() {
      document.querySelector('.player-1').style.border='white 2px solid';
      document.querySelector('.player-2').style.border='white 2px solid';
    }, 600);
    
  }
  if(  result.innerHTML==='Computer Win'){
    function performFunction() {
      document.querySelector('.player-1').style.border='red 2px solid';
      document.querySelector('.player-2').style.border='lightgreen 2px solid';
    }
    performFunction();
    setTimeout(function() {
      document.querySelector('.player-1').style.border='white 2px solid';
      document.querySelector('.player-2').style.border='white 2px solid';
    }, 600);
    
  }
  if(  result.innerHTML==='DRAW'){
    function performFunction() {
      document.querySelector('.player-1').style.border='grey 2px solid';
      document.querySelector('.player-2').style.border='grey 2px solid';
    }
    performFunction();
    setTimeout(function() {
      document.querySelector('.player-1').style.border='white 2px solid';
      document.querySelector('.player-2').style.border='white 2px solid';
    }, 600);
    
  }
   
    
  
 
})
);


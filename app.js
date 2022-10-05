var secretNum= 69;
var count=[];
var times=0;
var min=0;
var max = 100
var Game = true;
var name;
var name = prompt("What is your name ?");
function yourName(){
  if(name == ""){
     name=prompt("What is your name ?");
  }else if( typeof name == "number"){
     name=prompt("What is your name ?");
  }else{
alert("Hello "+name+ "! Welcome to my website ^^!");
    play();
  }  
}
    
while( Game === true){
  yourName();
}
  
function play(){
  alert( name+"! Do you want to play a game? Let guess a number between 1-100");
  var guess= prompt("What is your number?");
  if ( guess == secretNum){
    times++
    alert(name+"!!! You are right!, Congratulation!!!!"+ "You tried "+times +" times:" + count+","+secretNum);
    alert("Do you want to play again? You are too smart!!");
    var qs=prompt("Yes or No ?");
    if( qs =="yes" || qs== "Yes"){
      playAgain();
    }else{
      Game=false;
    }
  }else if ( guess < secretNum && guess > min ){
    alert( "Sorry "+name+"!, Guess Higher.")
    alert(" Let try it again");
    count.push(guess);
    times++
    playAgain();
  }else if ( guess > secretNum && guess <= max){
    alert("Sorry "+name+"!, Guess Lower.")
    alert(" Let try it again");
    count.push(guess);
    times++
    playAgain();
  }else if( guess < min || guess > max ) {
      alert(name+"! Just put the number between 1-100,Do you want to play again?");
    count.push(guess);
    times++
    var question=prompt("Yes or No ?");
    if(question =="Yes" || question == "yes"){
      playAgain();
    }else{
      Game = false;
    }
    
    }else{
    if(guess ==""){
    alert("Do not leave it empty!")
    var end= prompt("Or Do you want to end the game? \n Yes/No");
    if(end == "no" || end=="No"){
      playAgain();
    }else if(end =="Yes" || end== "yes"){
      Game = false;
    }
    }else if( guess !== "number"){
      alert("Just a number")
      playAgain();
    }
  }
}
  


function playAgain(){
  // alert("OK ! Let try it again");
  var guess= prompt("What is your number?");
  if ( guess == secretNum){
    times++
    alert(name+"!!! You are right!, Congratulation!!!!"+ "You tried "+times +" times:" + count+","+secretNum);
    alert("Do you want to play again? You are too smart!!");
    var qs=prompt("Yes or No ?");
    if( qs =="yes" || qs== "Yes"){
      playAgain();
    }else{
      Game=false;
    }
  }else if ( guess < secretNum && guess > min ){
    alert( "Sorry "+name+"!, Guess Higher.")
    alert(" Let try it again");
    count.push(guess);
    times++
    playAgain();
  }else if ( guess > secretNum && guess <= max){
    alert("Sorry "+name+"!, Guess Lower.")
    alert(" Let try it again");
    count.push(guess);
    times++
    playAgain();
  }else if( guess < min || guess > max ) {
      alert(name+"! Just put the number between 1-100,Do you want to play again?");
    count.push(guess);
    times++
    var question=prompt("Yes or No ?");
    if(question =="Yes" || question == "yes"){
      playAgain();
    }else{
      Game = false;
    }
    
    }else{
    if( guess ==""){
    alert("Do not leave it empty!");
    var end= prompt("Or Do you want to end the game? \n Yes/No");
    if(end == "no" || end=="No"){
      playAgain();
    }else if(end =="Yes" || end== "yes"){
      Game = false;
    }  
    }else if( guess !== "number"){
      alert("Just a number")
      playAgain();
    }
  }
}
  

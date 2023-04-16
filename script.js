document.body.addEventListener("keyup", playIN);
document.querySelector('button').addEventListener('click', sequence);
function playIN(event){
  PlaySound(event.code.toLowerCase());
};
let textIN=document.getElementById('input');
function PlaySound(sound){
  let elementMusic=document.getElementById(`s_${sound}`);
  let elementKey=document.getElementById(`${sound}`);
  if(elementMusic){
    elementMusic.currentTime=0;
    elementMusic.play();
  }
  if(elementKey){
    elementKey.classList.add('active')
  
  
  setTimeout(()=> {
    
  elementKey.classList.remove('active');}, 300);
}}
function sequence(){
  let text=textIN.value;
  let text2 =text.split('');
  let wait=0;
  for(const texto of text2){
    let element2music = `key${texto}`;
    setTimeout(()=>{
    PlaySound(element2music);}, wait)
    wait+=250;
  }
};
/*
const NEV_BTN=document.getElementsByClassName('NEV_BTN');
const nev=document.getElementsByClassName('nev');

NEV_BTN.addEventListener('click', ()=>{
    nev.classlist.toggle('active');
});
*/
document.addEventListener('DOMContentLoaded', ()=>{
    const NEV_BTN=document.querySelector('.NEV_BTN');
    const nev=document.querySelector('.nev');
    const LoginBox=document.querySelector('.LoginBox');

   NEV_BTN.addEventListener('click', ()=>{
        nev.classList.toggle('active');
   });
   NEV_BTN.addEventListener('click', ()=>{
        LoginBox.classList.toggle('active');
   }); 
});
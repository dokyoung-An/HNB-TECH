const opt1 =document.querySelector('.opt1');
const opt2 =document.querySelector('.opt2');
const opt3 =document.querySelector('.opt3');
const opt4 =document.querySelector('.opt4');

const air = document.getElementById('air');
const water = document.getElementById('water');
const vr = document.getElementById('vr');
const home = document.getElementById('home');



opt1.addEventListener('click', function(){
   air.classList.add('active');
   water.classList.remove('active');
   vr.classList.remove('active');
   home.classList.remove('active');
   opt1.classList.add('active');
   opt2.classList.remove('active');
   opt3.classList.add('active');
   opt4.classList.remove('active');
})
opt2.addEventListener('click', function(){
    air.classList.remove('active');
    water.classList.add('active');
    vr.classList.remove('active');
    home.classList.remove('active');
    opt1.classList.remove('active');
    opt2.classList.add('active');
    opt3.classList.add('active');
    opt4.classList.remove('active');
 })
 opt3.addEventListener('click', function(){
    air.classList.remove('active');
    water.classList.remove('active');
    vr.classList.remove('active');
    home.classList.remove('active');
    opt1.classList.remove('active');
    opt2.classList.remove('active');
    opt3.classList.remove('active');
    opt4.classList.remove('active');
 })
 opt4.addEventListener('click', function(){
    air.classList.remove('active');
    water.classList.remove('active');
    vr.classList.add('active');
    home.classList.add('active');
    opt1.classList.remove('active');
    opt2.classList.remove('active');
    opt3.classList.add('active');
    opt4.classList.add('active');
 })


 //모바일 부분
const optM1 =document.querySelector('.optM1');
const optM2 =document.querySelector('.optM2');
const optM3 =document.querySelector('.optM3');
const optM4 =document.querySelector('.optM4');

const airM = document.getElementById('air-m');
const waterM = document.getElementById('water-m');
const vrM = document.getElementById('vr-m');
const homeM = document.getElementById('home-m');



optM1.addEventListener('click', function(){
   airM.classList.add('active');
   waterM.classList.remove('active');
   vrM.classList.remove('active');
   homeM.classList.remove('active');
   optM1.classList.add('active');
   optM2.classList.remove('active');
   optM3.classList.add('active');
   optM4.classList.remove('active');
})
optM2.addEventListener('click', function(){
   airM.classList.remove('active');
   waterM.classList.add('active');
   vrM.classList.remove('active');
   homeM.classList.remove('active');
   optM1.classList.remove('active');
   optM2.classList.add('active');
   optM3.classList.add('active');
   optM4.classList.remove('active');
 })
 optM3.addEventListener('click', function(){
   airM.classList.remove('active');
   waterM.classList.remove('active');
   vrM.classList.remove('active');
   homeM.classList.remove('active');
   optM1.classList.remove('active');
   optM2.classList.remove('active');
   optM3.classList.remove('active');
   optM4.classList.remove('active');
 })
 optM4.addEventListener('click', function(){
   airM.classList.remove('active');
   waterM.classList.remove('active');
   vrM.classList.add('active');
   homeM.classList.add('active');
   optM1.classList.remove('active');
   optM2.classList.remove('active');
   optM3.classList.add('active');
   optM4.classList.add('active');
 })
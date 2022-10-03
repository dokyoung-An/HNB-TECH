// 사이드 메뉴
const menu = document.getElementById('open');
const menuClose = document.getElementById('close');

const sideMenu = document.querySelector('.side-menu')

menu.addEventListener('click',()=> {  
    sideMenu.classList.add('active')
})
menuClose.addEventListener('click',()=>{
    sideMenu.classList.remove('active')
})
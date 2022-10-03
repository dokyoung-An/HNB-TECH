const factory =document.querySelector('.factory')
const organization =document.querySelector('.organization')

const factoryBtn =document.getElementById('factory')
const organizationBtn=document.getElementById('organization')

const factoryBtn1 =document.getElementById('factory1')
const organizationBtn1=document.getElementById('organization1')

factoryBtn.addEventListener('click',() => {
    organization.classList.remove('active')
    factory.classList.remove('active')
})
organizationBtn.addEventListener('click', ()=>{
   organization.classList.add('active')
   factory.classList.add('active')
})
factoryBtn1.addEventListener('click',() => {
    organization.classList.remove('active')
    factory.classList.remove('active')
})
organizationBtn1.addEventListener('click', ()=>{
    organization.classList.add('active')
    factory.classList.add('active')
 })



// 모바일 부분
const factoryM =document.querySelector('.fac')
const organizationM =document.querySelector('.org')

const factoryBtn3 =document.getElementById('fac')
const organizationBtn3=document.getElementById('org')

const factoryBtn4 =document.getElementById('fac1')
const organizationBtn4=document.getElementById('org1')

factoryBtn3.addEventListener('click',() => {
    organizationM.classList.remove('active')
    factoryM.classList.remove('active')
})
organizationBtn3.addEventListener('click', ()=>{
   organizationM.classList.add('active')
   factoryM.classList.add('active')
})
factoryBtn4.addEventListener('click',() => {
    organizationM.classList.remove('active')
    factoryM.classList.remove('active')
})
organizationBtn4.addEventListener('click', ()=>{
    organizationM.classList.add('active')
    factoryM.classList.add('active')
 })

const air = document.querySelector('.air')
const water = document.querySelector('.water')
const vr = document.querySelector('.vr')
const home = document.querySelector('.home')

//항공드론
const opt1 = document.querySelector('.opt1')
const opt2 = document.querySelector('.opt2')
const opt3 = document.querySelector('.opt3')
const opt4 = document.querySelector('.opt4')

opt1.addEventListener('click',()=>{
    air.classList.add('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
opt2.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.add('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
opt3.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.add('active')
    home.classList.add('active')
})
opt4.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.remove('active')
})


// 수중드론
const water1 = document.querySelector('.water1')
const water2 = document.querySelector('.water2')
const water3 = document.querySelector('.water3')
const water4 = document.querySelector('.water4')

water1.addEventListener('click',()=>{
    air.classList.add('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
water2.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.add('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
water3.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.add('active')
    home.classList.add('active')
})
water4.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.remove('active')
})

//VR 촬영
const vr1 = document.querySelector('.vr1')
const vr2 = document.querySelector('.vr2')
const vr3 = document.querySelector('.vr3')
const vr4 = document.querySelector('.vr4')

vr1.addEventListener('click',()=>{
    air.classList.add('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
vr2.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.add('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
vr3.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.add('active')
    home.classList.add('active')
})
vr4.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.remove('active')
})

//사전점검
const home1 = document.querySelector('.home1')
const home2 = document.querySelector('.home2')
const home3 = document.querySelector('.home3')
const home4 = document.querySelector('.home4')

home1.addEventListener('click',()=>{
    air.classList.add('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
home2.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.add('active')
    vr.classList.remove('active')
    home.classList.add('active')
})
home3.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.add('active')
    home.classList.add('active')
})
home4.addEventListener('click',()=>{
    air.classList.remove('active')
    water.classList.remove('active')
    vr.classList.remove('active')
    home.classList.remove('active')
})

// 모바일 부분
const mAir = document.querySelector('.m-air')
const mWater = document.querySelector('.m-water')
const mVr = document.querySelector('.m-vr')
const mHome = document.querySelector('.m-home')

//항공드론
const air1 = document.querySelector('.m-air1')
const air2 = document.querySelector('.m-air2')
const air3 = document.querySelector('.m-air3')
const air4 = document.querySelector('.m-air4')

air1.addEventListener('click',()=>{
   mAir.classList.add('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
air2.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.add('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
air3.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.add('active')
    mHome.classList.add('active')
})
air4.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.remove('active')
})


// 수중드론
const mWater1 = document.querySelector('.m-water1')
const mWater2 = document.querySelector('.m-water2')
const mWater3 = document.querySelector('.m-water3')
const mWater4 = document.querySelector('.m-water4')

mWater1.addEventListener('click',()=>{
    mAir.classList.add('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
mWater2.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.add('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
mWater3.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.add('active')
    mHome.classList.add('active')
})
mWater4.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.remove('active')
})

//VR 촬영
const mVr1 = document.querySelector('.m-vr1')
const mVr2 = document.querySelector('.m-vr2')
const mVr3 = document.querySelector('.m-vr3')
const mVr4 = document.querySelector('.m-vr4')

mVr1.addEventListener('click',()=>{
    mAir.classList.add('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
mVr2.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.add('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
mVr3.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.add('active')
    mHome.classList.add('active')
})
mVr4.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.remove('active')
})


//사전점검
const mHome1 = document.querySelector('.m-home1')
const mHome2 = document.querySelector('.m-home2')
const mHome3 = document.querySelector('.m-home3')
const mHome4 = document.querySelector('.m-home4')

mHome1.addEventListener('click',()=>{
    mAir.classList.add('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
mHome2.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.add('active')
    mVr.classList.remove('active')
    mHome.classList.add('active')
})
mHome3.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.add('active')
    mHome.classList.add('active')
})
mHome4.addEventListener('click',()=>{
    mAir.classList.remove('active')
    mWater.classList.remove('active')
    mVr.classList.remove('active')
    mHome.classList.remove('active')
})
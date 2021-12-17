// slider card from Conor Bailey
const sdSliderContainer = document.querySelector('.slider-container');
const sdSlider = document.querySelector('.slider');
const sdSliderInnerBox = document.querySelectorAll('.slider-innerbox');

let pressed = false;
let startx;
let x;


// mouse event 
sdSliderContainer.addEventListener('mousedown', (e)=>{
   pressed = true;
   startx = e.offsetX - sdSlider.offsetLeft;
   sdSliderContainer.style.cursor = 'grabbing';
});
sdSliderContainer.addEventListener('mouseenter', ()=>{
   sdSliderContainer.style.cursor = 'grab';
});
sdSliderContainer.addEventListener('mouseup', ()=>{
   sdSliderContainer.style.cursor = 'grab';
});
window.addEventListener('mouseup', ()=>{
   pressed = false;
});
sdSliderContainer.addEventListener('mousemove', (e)=>{
   if(!pressed) return
   e.preventDefault();

   x = e.offsetX

   sdSlider.style.left = `${x - startx}px`;

   checkboundary();
});


// touch event 
sdSliderContainer.addEventListener('touchstart', (e)=>{
   pressed = true;
   startx = e.touches[0].clientX - sdSlider.offsetLeft;
});

window.addEventListener('touchend', ()=>{
   pressed = false;
});
sdSliderContainer.addEventListener('touchmove', (e)=>{
   if(!pressed) return
   e.preventDefault();

   x = e.touches[0].clientX;

   sdSlider.style.left = `${x - startx}px`;

   checkboundary();
});

function checkboundary(){
   let outer = sdSliderContainer.getBoundingClientRect();
   let inner = sdSlider.getBoundingClientRect();
   let areawidth = document.querySelector('.section-team .slide').clientWidth;
   console.log(areawidth)
   if(parseInt(sdSlider.style.left) > 0){
      sdSlider.style.left = '1px';
   }else if(inner.right < inner.right){
    
        sdSlider.style.left = `${inner.width - outer.width}px`
    
      
   }

};



























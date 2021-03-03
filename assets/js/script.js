let totalSlides = document.querySelectorAll('.section-team .slide').length;
 document.querySelector('.section-team .sliders').style.width = 
 `calc(100vw * ${totalSlides})`;
 
 let currentSlide = 0;
let areaheigth = document.querySelector('.section-team').clientHeight;
let areawidth = document.querySelector('.section-team .slide').clientWidth;

document.querySelector('.slider--controls').style.height = 
`${areaheigth}px`;

function goPrev(){
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext(){
    currentSlide++;
    if (currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){     
    let newMargin = (currentSlide * areawidth);
    document.querySelector('.section-team .sliders').style.marginLeft = `-${newMargin}px`;
}


// numeros romanos
function romanoToI(romano){
    let n = 0;
    romano = romano.toUpperCase();
    let numeros = {
        'I': 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    for(i=0;i<romano.length;i++){
        let atual = romano[i];
        let porximo = romano[i+1];

        if (porximo && numeros[porximo]>numeros[atual]) {
            n -= numeros[atual];
        }else{
            n += numeros[atual];
        }
    }

    return n;
}

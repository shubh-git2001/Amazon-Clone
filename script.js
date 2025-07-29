const imgs = document.querySelectorAll('.header-slider ul img');

const cntr_prev = document.querySelector('.control-prev');

const cntr_nxt = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for (let i =0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}


cntr_prev.addEventListener('click', (e) => {
    if (n>0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
});


cntr_nxt.addEventListener('click', (e) => {
    if (n < imgs.length - 1){
        n++;
    }
    else{
      n = 0;
    }
    changeSlide();
});



const scrollContainer = document.querySelectorAll('.products');

for(const item of scrollContainer){
    item.addEventListener('wheel',(e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}
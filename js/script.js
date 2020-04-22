let target = document.getElementById('target');
let wrapWidth = document.getElementById('scroll-wrap');

target.onscroll = updateProgressBar;
updateProgressBar();

function updateProgressBar(e) {
    let percents = getScrollPercent(target);
    wrapWidth.style.width = percents + '%';
}
function getScrollPercent(el) {
	return (el.scrollTop/(el.scrollHeight-el.offsetHeight))*100;
}

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
        
      },
});




function toggleStyle(el, styleName, value) {
  if (el.style[styleName] !== value) { //better to check that it is not the value you have
    el.style[styleName] = value;
  } else {
    el.style[styleName] = '';
  }
}
let header = document.getElementById('header');
let headNav = document.getElementsByClassName('nav_list')[0];
console.log(headNav);
let menuButton = document.querySelector('.menu_button');
menuButton.addEventListener('click', function () {
  console.log("click");
  menuButton.classList.toggle('menu_button_active');
  toggleStyle(header, 'backgroundColor', 'rgb(21, 21, 21)');
  toggleStyle(headNav, 'display', 'block'); 
  toggleStyle(header, 'flex-direction', 'column');  
  window.addEventListener('scroll', () => {
    if (headNav.style.display !== 'none') {
      toggleStyle(headNav, 'display', 'none'); 
    }
    header.style.backgroundColor = 'transparent';
    header.style.flexDirection = 'row';
    menuButton.classList.remove('menu_button_active');
  }); 
});
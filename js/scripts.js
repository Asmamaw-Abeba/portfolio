

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    
    
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



document.querySelector('.download-btn').addEventListener('click', () => {
    alert('Please you can see portfolio instead of cv');
});


// let gallary = [
//     'https://github.com/Asmamaw-Abeba/image/blob/main/img1.jpg',
//     'https://github.com/Asmamaw-Abeba/image/blob/main/img2.jpg',
//     'https://github.com/Asmamaw-Abeba/image/blob/main/img3.jpg',
//     'https://github.com/Asmamaw-Abeba/image/blob/main/img4.jpg'
// ];

// const image = document.querySelector('.images');
// let  index = 0;

// // chage image function
// function changeImage() {
//     image.src = gallary[index];
//     index = (index + 1) % gallary.length;
//     //slideController(index);
//   }


let colorArr = ['green', 'blue', 'orange', 'yellow'];
let i = 0;
function loopColor(colorArr) {
    let currentColor = colorArr[i];
    i = (i + 1) % colorArr.length;
    return currentColor;
}

// setInterval(() => {
//     changeImage();
// }, 2000);

setInterval(() => {
    let myName = $('.name');
    myName.fadeToggle(2000);
    myName.css("color", loopColor(colorArr));
}, 2000);


setInterval(() => {
    let myDesc = $('.description');
    myDesc.slideToggle(2000);
    myDesc.css({
        "background": colorArr[i + 1],
         padding: 20,
         borderRadius: 10,
    })
    myDesc.css("color", loopColor(colorArr));
}, 3000);


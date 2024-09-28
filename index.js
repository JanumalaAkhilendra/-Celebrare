function isLaptop() {
    return window.innerWidth >= 768; // Adjust the width threshold as needed
  }

// script.js
window.addEventListener('load', () => {
    if(isLaptop()){
        const image = document.getElementById('animated-image');
        const image2 = document.getElementById('animated-image2');
        const image3 = document.getElementById('rucustomer');

        // Step 1: Trigger the pop-up effect by modifying styles directly.
        image.style.opacity = '1';
        image.style.transform = 'scale(4.5)';
        image.style.animation = 'popUp 5s ease-out forwards';

        setTimeout(() => {
            image2.style.opacity = '1';
            image2.style.transform = 'scale(0.5)';
            image2.style.animation = 'popUp2 3s ease-out forwards';

        }, 2000);

        setTimeout(() => {
            loginbox.classList.add('show-login-box');
        }, 5500);

        setTimeout(() => {
            image3.style.opacity = '1';
            image3.style.transform = 'translateX(0px)';
            image3.style.animation = 'popUp3 2s ease-out forwards';

        }, 6000);
    }
    else{
        const image = document.getElementById('animated-image');
        const image2 = document.getElementById('animated-image2');
        const image3 = document.getElementById('rucustomer');

        // Step 1: Trigger the pop-up effect by modifying styles directly.
        image.style.opacity = '1';
        // image.style.transform = 'scale(4.5)';
        image.style.animation = 'popUp 5s ease-out forwards';

        setTimeout(() => {
            image2.style.opacity = '1';
            image2.style.transform = 'scale(0.5)';
            image2.style.animation = 'popUp2 3s ease-out forwards';

        }, 2000);

        setTimeout(() => {
            loginbox.classList.add('show-login-box');
        }, 5500);

        setTimeout(() => {
            image3.style.opacity = '1';
            image3.style.transform = 'translateX(0px)';
            image3.style.animation = 'popUp3 2s ease-out forwards';

        }, 6000);
    }
});
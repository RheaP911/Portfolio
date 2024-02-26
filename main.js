//Ripple Effect on Hire me Button
const buttons = document.getElementsByClassName('ripple');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})


//Navigation Hover
document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            navButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
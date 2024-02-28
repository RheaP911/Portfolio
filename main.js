//Ripple Effect on Hire me Button
const buttons = document.querySelector('ripple');
console.log(typeof buttons);
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        console.log(e);
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


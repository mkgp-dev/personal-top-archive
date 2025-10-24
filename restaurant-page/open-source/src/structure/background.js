export default function backgroundTransition(setBg) {
    const background = document.getElementById('bg-transition');

    background.style.opacity = 0;

    setTimeout(() => {
        background.style.background = setBg;
        background.style.opacity = 1;
    }, 500);
}
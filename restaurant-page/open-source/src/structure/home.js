import backgroundTransition from "./background";

let lineInterval;

export default function displayHome() {
    backgroundTransition('radial-gradient(circle at center, #0c1923 0%, #000000 80%)');

    if (lineInterval) clearInterval(lineInterval);

    const frag = document.createDocumentFragment();

    const container = document.createElement('div');
    container.className = 'flex-center';

    const content = document.createElement('div');
    content.className = 'welcome';

    const punchline = document.createElement('h1');
    const lines = [
        'Do you <span class="highlight">come</span> here often?',
        'If so, try our new <span class="highlight">cocktails</span>',
        'Cheap. <span class="highlight">Worth</span>. Satisfied.'
    ];

    content.appendChild(punchline);
    container.appendChild(content);
    frag.appendChild(container);

    let i = 0;
    const changeLine = () => {
        punchline.classList.remove('fade');
        void punchline.offsetWidth;
        punchline.innerHTML = lines[i];
        punchline.classList.add('fade');
        i = (i + 1) % lines.length;
    };

    lineInterval = setInterval(changeLine, 4000);
    changeLine();

    return frag;
}
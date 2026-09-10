const bylines = [
    'Web developer extraordinaire',
    'Javascipt know-er',
    'CSS enjoyer',
    '"To whom it may concern" user',
    'Loves Libre Caslon and papayawhip',
];

const byline = document.querySelector('#byline');
let bylineIndex = 0;
byline.addEventListener('click', () => {
    bylineIndex = (bylineIndex + 1) % bylines.length;
    byline.textContent = bylines[bylineIndex];
    byline.classList.remove('jiggle');
    void byline.offsetWidth; // restart the animation
    byline.classList.add('jiggle');
});

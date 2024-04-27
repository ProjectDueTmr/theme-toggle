
const content = document.querySelector('.content');
const header = document.querySelector('.header');
document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    header.classList.toggle('headerAlt')
    const currentRotation = parseInt(getComputedStyle(content).getPropertyValue('--rotation'));
content.style.setProperty('--rotation', currentRotation + 180);
})
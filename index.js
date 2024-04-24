
const content = document.querySelector('.content')

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(content)
.getPropertyValue('--rotation'))
content.style.setProperty('--rotation', currentRotation + 180);
})
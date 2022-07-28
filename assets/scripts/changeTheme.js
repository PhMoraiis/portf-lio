const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

window.onload = getThemeFromLocalStorage

const lightTheme = {
    '--background': 'linear-gradient( 358.7deg,  rgba(42,136,157,1) 1.7%, rgba(122,197,214,1) 51.1%, rgba(211,232,242,1) 95.5% )',
    '--text-color': '#1A1A1A',
    '--color': '#FFF'
}

const darkTheme = {
    '--background': 'radial-gradient(circle, rgba(1,0,22,1) 0%, rgba(25,11,81,1) 0%, rgba(4,1,28,1) 81%)',
    '--text-color': '#FFF',
    '--color': '#000'
}

inputContainer .addEventListener('change', function() {
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme) {
    for(let[prop, value] of Object.entries(theme)) {
        changeProperty(prop, value)
}
    saveThemeToLocalStorage(theme)
}

function changeProperty(prop, value) {
    rootElement.style.setProperty(prop, value)
}

function saveThemeToLocalStorage(theme) {
    localStorage.setItem('theme', JSON.stringify(theme))
}

function getThemeFromLocalStorage() {
    const theme = JSON.parse(localStorage.getItem('theme'))
    if(isThemeEqual(theme, darkTheme)) inputContainer.checked = true 
    changeTheme(theme)
}

function isThemeEqual(firstTheme, secondTheme) {
    for (let prop in firstTheme) {
        if (firstTheme[prop] != secondTheme[prop])
            return false
        }
    return true
}
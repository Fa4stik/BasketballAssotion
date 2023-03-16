let popupTest = document.getElementById('popuptest')
let log = document.getElementById('log')
let close = document.getElementById('close')

log.addEventListener('click', () => {
    popupTest.style.display = 'block'
})

close.addEventListener('click', () => {
    popupTest.style.display = 'none'
})
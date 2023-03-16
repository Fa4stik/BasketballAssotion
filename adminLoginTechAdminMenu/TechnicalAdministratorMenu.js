let manage = document.getElementById('manage')
let popup = document.getElementById('popup')
let close = document.getElementById('close')

manage.addEventListener('click', () => {
    popup.style.display = 'block'
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
})
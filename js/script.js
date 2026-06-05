var bubble = document.querySelector('.bubble')
var btnClose = document.querySelector('.btn-close')

btnClose.addEventListener('click', () => {
  bubble.classList.add('hide')

  setTimeout(() => {
    bubble.remove()
  }, 400)
})
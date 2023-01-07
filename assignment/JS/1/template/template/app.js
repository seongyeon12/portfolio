// do something!
const TOGGLE_BTN = document.querySelector('.toggle')
const SIDE_NAV = document.getElementsByTagName('nav')
const BODY = document.getElementsByTagName('body')
const OPEN = true

if (localStorage.getItem('open') !== null) {
  SIDE_NAV[0].classList.add('active')
  BODY[0].style.visibility = 'visible'
} else {
  BODY[0].style.visibility = 'visible'
}

setTimeout(function () {
  BODY[0].classList.remove('preload')
}, 100)

function toggle () {
  if (document.querySelector('nav.active') == null) {
    SIDE_NAV[0].classList.add('active')
    localStorage.setItem('open', OPEN)
  } else {
    SIDE_NAV[0].classList.remove('active')
    localStorage.clear()
  }
};

TOGGLE_BTN.addEventListener('click', toggle)

// do something!

function createNav (contentList, contentId) {
  const root = document.querySelector('#root')
  const newNav = document.createElement('nav')
  newNav.classList.add('category-list')
  const newUl = document.createElement('ul')

  root.appendChild(newNav)
  newNav.appendChild(newUl)
  for (let i = 0; i < contentList.length; i++) {
    const newLi = document.createElement('li')
    newLi.classList.add('category-item')
    newLi.id = contentId[i]
    newLi.innerHTML = contentList[i]
    newUl.appendChild(newLi)
  }
  const newLi = document.querySelectorAll('li')
  newLi[0].classList.add('active')
}

export { createNav }

// do something!
function createNewsList () {
  const root = document.querySelector('#root')
  const newContainer = document.createElement('div')
  newContainer.classList.add('news-list-container')
  const newArticle = document.createElement('article')
  newArticle.classList.add('news-list')

  root.appendChild(newContainer)
  newContainer.appendChild(newArticle)
}

/* section */
function newSec (aLink, image, contentsHead, contentsLetter) {
  const art = document.querySelector('.news-list')
  const newSection = document.createElement('section')
  newSection.classList.add('news-item')
  art.appendChild(newSection)
  console.log(newSection)
  thum(newSection, aLink, image)
  contents(newSection, aLink, contentsHead, contentsLetter)
}

/* thumbnail */
function thum (sec, link, img) {
  const newDiv = document.createElement('div')
  newDiv.classList.add('thumbnail')
  const newLink = document.createElement('a')
  newLink.setAttribute('href', link)
  newLink.setAttribute('target', '_blank')
  newLink.setAttribute('rel', 'noopener noreferrer')
  const newImg = document.createElement('img')
  newImg.setAttribute('src', img)
  newImg.setAttribute('alt', 'thumbnail')
  sec.appendChild(newDiv)
  newDiv.appendChild(newLink)
  newLink.appendChild(newImg)
}

/* contents */
function contents (sec, link, head, letter) {
  const newDiv = document.createElement('div')
  newDiv.classList.add('contents')
  const title = document.createElement('h2')
  const newLink = document.createElement('a')
  newLink.setAttribute('href', link)
  newLink.setAttribute('target', '_blank')
  newLink.setAttribute('rel', 'noopener noreferrer')
  newLink.innerText = head
  const text = document.createElement('p')
  text.innerText = letter
  sec.appendChild(newDiv)
  newDiv.appendChild(title)
  newDiv.appendChild(text)
  title.appendChild(newLink)
}

/* scroll-observer */
function observer () {
  const container = document.getElementsByClassName('news-list-container')
  const newDiv = document.createElement('div')
  newDiv.classList.add('scroll-observer')
  const img = document.createElement('img')
  img.setAttribute('src', 'img/ball-triangle.svg')
  img.setAttribute('alt', 'Loading...')
  container[0].appendChild(newDiv)
  newDiv.appendChild(img)
}

/* 모듈 */
export { createNewsList, newSec, observer }

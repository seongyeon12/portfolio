// do something!
document.getElementsByTagName('head')[0].insertAdjacentHTML(
  'beforeend',
  '<link href="star-rating/theme.css" rel="stylesheet"/>')

function StarRating (rating) {
  const length = rating.getAttribute('data-max-rating')
  const newContainer = document.createElement('div')
  newContainer.classList.add('star-rating-container')

  for (let j = 0; j < length; j++) {
    const star = document.createElement('i')
    star.classList.add('bx', 'bxs-star')
    newContainer.appendChild(star)
  }

  rating.appendChild(newContainer)

  const target = rating.children
  const target2 = [...target[0].children]
  const target3 = rating.nextElementSibling
  const target4 = target3.querySelector('span')

  console.log(target4)
  for (let i = 0; i < target2.length; i++) {
    target2[i].addEventListener('mouseover', (e) => {
      for (let j = 0; j <= i; j++) {
        target2[j].classList.add('hovered')
      }
    })

    target2[i].addEventListener('click', (e) => {
      for (let v = i + 1; v < target2.length; v++) {
        target2[v].classList.remove('selected')
      }

      for (let j = 0; j <= i; j++) {
        target2[j].classList.add('selected')
      }
    })
    // 커스텀
    target2[i].addEventListener('click', (e) => {
      target4.innerText = i + 1
    })

    target2[i].addEventListener('mouseout', (e) => {
      for (let j = 0; j <= i; j++) {
        target2[j].classList.remove('hovered')
      }
    })
  }
}

export default StarRating

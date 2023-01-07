// do something!

/* 임시 킵 */
/* axios.get('https://newsapi.org/v2/top-headlines?country=kr&pageSize=5&apiKey=b51ad5d136404ad2ad0decac590665f6')
  .then((res) => {
    // console.log(res)
    console.log(res.data.articles)
    const newsArr = res.data.articles

    for (let i = 0; i < newsArr.length; i++) {
      newSec(
        newsArr[i].url,
        newsArr[i].urlToImage,
        newsArr[i].title,
        newsArr[i].description
      )
    }
  }) */

/* 모듈 */
import { createNav } from './components/Nav.js'
import { createNewsList, newSec, observer } from './components/NewsList.js'

/* 전역 */
let count = 1
const pageSize = 5
let category = 'all'

/* Nav */
const contents = ['전체보기', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술']
const contentsId = ['all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']
createNav(contents, contentsId)

/* NewsList */
createNewsList()
observer()

// category=sources&

/* scroll (밑에 api 사용 주의) */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${count++}&pageSize=${pageSize}&apiKey=394924ec8ee04d6b934777405f7336df`)
        .then((res) => {
          console.log(count)
          // console.log(res)
          console.log(res.data.articles)
          const newsArr = res.data.articles

          for (let i = 0; i < newsArr.length; i++) {
            newSec(
              newsArr[i].url,
              newsArr[i].urlToImage,
              newsArr[i].title,
              newsArr[i].description
            )
          }
        })
      if (count < 6) {
        count = 6
      }
    }
  })
})

let boxElList = document.getElementsByClassName('scroll-observer')
console.log(boxElList[0], 1)
io.observe(boxElList[0])

/* categoryClick */
const categoryList = document.getElementsByClassName('category-item')
console.log(categoryList)

for (let i = 0; i < categoryList.length; i++) {
  categoryList[i].addEventListener('click', function () {
    if (categoryList[i].classList.contains('active')) {
      return false
    }

    for (let j = 0; j < categoryList.length; j++) {
      if (categoryList[j].classList.contains('active')) {
        categoryList[j].classList.remove('active')
        break
      }
    }

    categoryList[i].classList.add('active')

    /* 컨테이너 제거 후 다시 추가 */
    const container = document.getElementsByClassName('news-list-container')
    container[0].remove()

    category = contentsId[i]
    count = 1
    createNewsList()
    observer()

    boxElList = document.getElementsByClassName('scroll-observer')
    io.observe(boxElList[0])
  })
}

import { red, todayMark, nextMouth, lastMonth, thisMonthA } from './assistance.js'

const date = new Date() // 현재 날짜(로컬 기준) 가져오기
const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000) // uct 표준시 도출
const kstGap = 9 * 60 * 60 * 1000 // 한국 kst 기준시간 더하기
const today = new Date(utc + kstGap) // 한국 시간으로 date 객체 만들기(오늘)
const calendar = document.querySelector('.calendar')
const calendarNav = calendar.querySelector('.calendar-nav')
const calendarMonth = calendarNav.querySelector('.month')
/* const calendarYear = calendarNav.querySelector('span') */
let thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate())

const dayArr = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const monthArr = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// 달력 연도&달
let currentYear = thisMonth.getFullYear()
let currentMonth = thisMonth.getMonth()

// 달력 전후버튼
const prev = calendarNav.querySelector('.prev')
const next = calendarNav.querySelector('.next')

renderCalender(thisMonth)

function renderCalender (thisMonth, h = 0) {
  // 렌더링을 위한 데이터 정리
  currentYear = thisMonth.getFullYear()
  currentMonth = thisMonth.getMonth()
  // const currentDate = thisMonth.getDate()

  // 이전 달의 마지막 날 날짜와 요일 구하기
  const startDay = new Date(currentYear, currentMonth, 0)
  const prevDate = startDay.getDate()
  const prevDay = startDay.getDay()

  // 이번 달의 마지막날 날짜와 요일 구하기
  const endDay = new Date(currentYear, currentMonth + 1, 0)
  const nextDate = endDay.getDate()
  // const nextDay = endDay.getDay()

  // 렌더링 html 요소 생성
  const calendarGrid = document.querySelector('.calendar-grid')

  calendarGrid.innerHTML = ''

  for (let i = 0; i < dayArr.length; i++) {
    calendarGrid.innerHTML = calendarGrid.innerHTML + '<li class="disable">' + '<span>' + dayArr[i] + '</span>' + '</li>'
  }

  // 지난달
  lastMonth(prevDate, prevDay, calendarGrid)
  // 이번달
  thisMonthA(nextDate, calendarGrid)
  // 다음달
  nextMouth(calendarGrid)

  // 오늘 날짜 표기
  if (today.getMonth() === currentMonth) {
    todayMark(today, calendar)
  }

  // 연도 달
  calendarMonth.innerHTML = `${monthArr[currentMonth]}` + '<br>' + '<span>' + `${currentYear}` + '</span>'

  // 달력 렌더링 클릭
  const input = document.querySelector('input')
  const liArr = document.querySelectorAll('.day')
  const prevArr = document.querySelectorAll('.dayprev')
  const curArr = document.querySelectorAll('.current')

  for (let i = 0; i < liArr.length; i++) {
    liArr[i].addEventListener('click', function () {
      for (let j = 0; j < liArr.length; j++) {
        liArr[j].style.transition = 'all 0s'
      }
      const sum = i - (prevArr.length - 1)
      const leng = sum - curArr.length

      if (sum <= 0) {
        const num = Number(liArr[i].innerText)
        let writeMonth = currentMonth
        if (writeMonth === 0) {
          writeMonth = 12
        }
        thisMonth = new Date(currentYear, currentMonth - 1, 1)
        input.value = currentYear + '-' + writeMonth + '-' + num
        renderCalender(thisMonth, num)
      } else if (leng >= 1) {
        thisMonth = new Date(currentYear, currentMonth + 1, 1)
        renderCalender(thisMonth, leng)
        input.value = currentYear + '-' + (currentMonth + 1) + '-' + leng
      } else {
        input.value = currentYear + '-' + currentMonth + '-' + sum
      }
      liArr.forEach(e =>
        e.classList.remove('hover')
      )
      calendar.classList.remove('active')
      liArr[i].classList.add('hover')
    })
  }

  if (h > 0) {
    if (h > prevArr.length) {
      liArr[(h - 1) + prevArr.length].classList.add('hover')
    } else {
      liArr[h].classList.add('hover')
    }
  }

  // 주말
  red(liArr)

  // 캘린더 숨기고 다시 들어내기 (트랜지션 복구)
  input.addEventListener('click', function () {
    if (calendar.classList.contains('active')) {
      return
    }
    for (let j = 0; j < liArr.length; j++) {
      liArr[j].style.transition = 'all 0.3s'
    }
    calendar.classList.add('active')
  })
}

// 이전달로 이동
prev.addEventListener('click', function () {
  thisMonth = new Date(currentYear, currentMonth - 1, 1)
  renderCalender(thisMonth)
})

// 다음달로 이동
next.addEventListener('click', function () {
  thisMonth = new Date(currentYear, currentMonth + 1, 1)
  renderCalender(thisMonth)
})

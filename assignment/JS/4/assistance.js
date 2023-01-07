// 지난달
function lastMonth (pdate, pday, cgrid) {
  for (let i = pdate - pday; i <= pdate; i++) {
    cgrid.innerHTML = cgrid.innerHTML + '<li class="day dayprev disable">' + '<span>' + i + '</span>' + '</li>'
  }
}
// 이번달
function thisMonthA (next, cgrid) {
  for (let i = 1; i <= next; i++) {
    cgrid.innerHTML = cgrid.innerHTML + '<li class="day current">' + '<span>' + i + '</span>' + '</li>'
  }
}

// 다음달
function nextMouth (cgrid) {
  const dayLeng = cgrid.querySelectorAll('.day')
  let count = 1

  for (let i = dayLeng.length; i < 42; i++) {
    cgrid.innerHTML = cgrid.innerHTML + '<li class="day daynext disable">' + '<span>' + count++ + '</span>' + '</li>'
  }
}

// 오늘 날짜 표기
function todayMark (t, cgrid) {
  const todayDate = t.getDate()
  const currentMonthDate = cgrid.querySelectorAll('.current')
  currentMonthDate[todayDate - 1].classList.add('today')
}

// 주말 체크
function red (liArr) {
  for (let i = 0; i < liArr.length; i += 7) {
    liArr[i].classList.add('red')
  }
}

export { red, todayMark, nextMouth, lastMonth, thisMonthA }

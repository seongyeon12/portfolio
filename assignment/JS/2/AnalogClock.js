const arr = ['hour', 'minute', 'second']
const AnalogClock = $container => {
  // do something!
  for (let i = 0; i < 3; i++) {
    const NEW_DIV = document.createElement('div')
    NEW_DIV.classList.add('hand', arr[i])
    $container.appendChild(NEW_DIV)
  }
  for (let i = 1; i < 13; i++) {
    const NEW_DIV = document.createElement('div')
    NEW_DIV.classList.add('time', `time${i}`)
    NEW_DIV.innerHTML = '|'
    $container.appendChild(NEW_DIV)
  }

  setInterval(() => {
    const hour = $container.getElementsByClassName('hour')[0]
    const minute = $container.getElementsByClassName('minute')[0]
    const second = $container.getElementsByClassName('second')[0]
    const d = new Date()
    const hr = d.getHours()
    const min = d.getMinutes()
    const sec = d.getSeconds()
    const hrRotation = 30 * hr + min / 2
    const minRotation = 6 * min
    const secRotation = 6 * sec
    hour.style.transform = `rotate(${hrRotation}deg)`
    minute.style.transform = `rotate(${minRotation}deg)`
    second.style.transform = `rotate(${secRotation}deg)`
  }, 1000)
}

export default AnalogClock

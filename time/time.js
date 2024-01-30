function Interval(code, time = 0, count = 3) {
  // 1) Выполняемая функция
  // 2) Время между периодами
  // 3) количество повторений. Если 0 - бесконечно

  let i = 0

  function Data() {
    code();

    i++;

    if (count != 0) {
      if (i == count) {
        clearInterval(interval)
      }
    }
  }

  let interval = setInterval(Data, time)
}




Interval(() => {
  a = new Date
  hour = a.getHours()
  min = a.getMinutes()
  sec = a.getSeconds()

  time = document.querySelector('.block')

  time.textContent = `${hour} : ${min} : ${sec}`
}, 500, 0)


function getTime() {
    Now = new Date();

    let Hours = Now.getHours() // нахождение актуального времени 
    let Minutes = Now.getMinutes()
    let Seconds = Now.getSeconds()

    if (Hours < 10) { // Добавление нуля перед числеми меньше десяти
        Hours = '0' + Hours
    }

    if (Minutes < 10) {
        Minutes = '0' + Minutes
    }

    if (Seconds < 10) {
        Seconds = '0' + Seconds
    }

    return Hours + ':' + Minutes + ':' + Seconds
}


function pausecomp(millis)  // функция сна
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

document.write(getTime())
console.log(getTime());

pausecomp(1000)

console.log(getTime());


let i = 0
while (i < 10) {
    console.log(getTime())
    pausecomp(1000)
    i++
}
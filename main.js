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


console.log(Hours + ':' + Minutes + ':' + Seconds);
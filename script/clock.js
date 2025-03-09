const clock = document.querySelector(".clock span");
//const loginDate = document.querySelector(".login-section .time");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const year = date.getFullYear(); // 년도
    const month = date.getMonth() + 1;  // 월
    const day = date.getDate();  // 날짜

    clock.innerText = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    //loginDate.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
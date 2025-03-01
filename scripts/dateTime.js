function showDate(){
    let toDay = new Date();
    let formatDate = toDay.toDateString();
    document.getElementById("date").innerHTML = formatDate;
}
showDate();

function showTime(){
    let Time = new Date();
    let formatTime = Time.toLocaleTimeString();
    return formatTime;
}
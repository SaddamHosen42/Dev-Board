function showDate(){
    let toDay = new Date();
    let formatDate = toDay.toDateString();
    document.getElementById("date").innerHTML = formatDate;
}
showDate();
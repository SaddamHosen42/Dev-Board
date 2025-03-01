function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}
function setInnerTextByID(id, value) {
    document.getElementById(id).innerText = value;
}

function getCompletleTask(){
    alert('Borad Updated Successfully');
    let incompleteTasks = getInnerTextByID('incomplete-tasks');
    let completeTasks = getInnerTextByID('complete-tasks');
    incompleteTasks=incompleteTasks-1;
    completeTasks=completeTasks+1;
    // set inner text
    setInnerTextByID("incomplete-tasks", incompleteTasks);
    setInnerTextByID("complete-tasks", completeTasks);
    if(incompleteTasks === 0){
        alert('Congratulations! You have completed all the tasks');
    }    
}
function getTitleTextById(id){
    const value = document.getElementById(id).innerText;
    return value;
}
function createDiv(title){
    let newDiv = document.createElement('div');
    document.getElementById("complete-tasks-message").appendChild(newDiv);
    newDiv.innerHTML = 'You have Completed the task '+title+' at '+ showTime();
    newDiv.style.color = "#00303C";
    newDiv.style.padding = "10px";
    newDiv.style.margin = "10px";
}
// const b=getInnerTextByID("incomplete-tasks");
// const a=getInnerTextByID("complete-tasks");
// console.log(a);
// console.log(b);
// console.log(typeof b);
document.querySelectorAll('.task-btn').forEach(function (item) {
    item.addEventListener('click', function () {
        alert('Borad Updated Successfully');
        this.disabled = true;
        this.style.opacity = 0.3;
        this.style.cursor = 'not-allowed';
        let incompleteTasks = getInnerTextByID('incomplete-tasks');
        let completeTasks = getInnerTextByID('complete-tasks');
        incompleteTasks--;
        completeTasks++;
        
        setInnerTextByID("incomplete-tasks", incompleteTasks);
        setInnerTextByID("complete-tasks", completeTasks);
    })
})

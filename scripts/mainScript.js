document.getElementById("btn-1").addEventListener("click", function () {
    this.disabled = true;
    this.style.opacity = 0.3;
    this.style.cursor = 'not-allowed';
    const title=getTitleTextById("title-1");
    getCompletleTask();
    createDiv(title);
    
});
document.getElementById("btn-2").addEventListener("click", function () {
    this.disabled = true;
    this.style.opacity = 0.3;
    this.style.cursor = 'not-allowed';
    const title=getTitleTextById("title-2");
    getCompletleTask();
    createDiv(title);
});
document.getElementById("btn-3").addEventListener("click", function () {
    this.disabled = true;
    this.style.opacity = 0.3;
    this.style.cursor = 'not-allowed';
    const title=getTitleTextById("title-3");
    getCompletleTask();
    createDiv(title);
});
document.getElementById("btn-4").addEventListener("click", function () {
    this.disabled = true;
    this.style.opacity = 0.3;
    this.style.cursor = 'not-allowed';
    const title=getTitleTextById("title-4");
    getCompletleTask();
    createDiv(title);
});
document.getElementById("btn-5").addEventListener("click", function () {
    this.disabled = true;
    this.style.opacity = 0.3;
    const title=getTitleTextById("title-5");
    getCompletleTask();
    createDiv(title);
});
document.getElementById("btn-6").addEventListener("click", function () {
    this.disabled = true;
    this.style.opacity = 0.3;
    this.style.cursor = 'not-allowed';
    const title=getTitleTextById("title-6");
    getCompletleTask();
    createDiv(title);
});

document.getElementById("clear-btn").addEventListener("click", function () {
    const completeTasksMessage = document.getElementById("complete-tasks-message");
    completeTasksMessage.style.display = "none";
});
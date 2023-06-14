
const formAdd = document.querySelector(".form-tasks");
const tasks = document.querySelector(".tasks");
const messageSpan = document.querySelector(".message span");
const clearAll = document.querySelector(".clear");

const searchForm = document.querySelector(".search");
function updateMessage(){
    const textLength = tasks.children.length;
    messageSpan.textContent = `You have ${textLength} pending tasks`;
}
updateMessage();
formAdd.addEventListener("submit", event =>{
    event.preventDefault();
    const value = formAdd.task.value.trim();
    if (value.length) {
        tasks.innerHTML += `<li>
                                <span>${value}</span>
                                <i class="bi bi-trash-fill delete"></i>
                            </li>`;
    }
    formAdd.reset();
    updateMessage();
})

tasks.addEventListener("click", event=>{
    if (event.target.classList.contains("delete")) {
        // alert("Hi");
        event.target.parentElement.remove();
    }
    updateMessage();
})

clearAll.addEventListener("click", event =>{
    const taskItems = tasks.querySelectorAll("li");
    taskItems.forEach(item =>{
        item.remove();
        updateMessage();
    })
})

function filterTask(key) {
    Array.from(tasks.children)
    .filter(task =>{
        return !task.textContent.toLocaleLowerCase().includes(key);
    })
    .forEach(task =>{
        task.classList.add("hide");
    });
    Array.from(tasks.children)
    .filter(task =>{
        return task.textContent.toLocaleLowerCase().includes(key);
    })
    .forEach(task =>{
        task.classList.remove("hide");
    });
}
searchForm.addEventListener("click", event =>{
    if (event.target.classList.contains("reset")) {
        searchForm.reset();
        const searchKey = searchForm.searchTask.value.trim().toLocaleLowerCase();
        filterTask(searchKey);
    }
});

searchForm.addEventListener("keyup", event =>{
    const searchKey = searchForm.searchTask.value.trim().toLocaleLowerCase();
    filterTask(searchKey);
})
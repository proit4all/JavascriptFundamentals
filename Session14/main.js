

const formAdd = document.querySelector(".form-tasks");
const tasks = document.querySelector(".tasks");

// let arrTask = [];
let arrTask = localStorage.getItem("TASKS") !== null ? JSON.parse(localStorage.getItem("TASKS")):[];

function getItemHTML(id, name) {
    return `<li data-id = "${id}">
                <span>${name}</span>
                <i class="bi bi-trash-fill delete"></i>
            </li>`;
}
function addTasks(name) {
    const task = {
        id : Math.floor(Math.random()*100000),
        name: name
    };
    arrTask.push(task);
    tasks.innerHTML += getItemHTML(task.id, task.name);
    //luu data
    localStorage.setItem("TASKS",JSON.stringify(arrTask));
}

formAdd.addEventListener("submit",(event)=>{
    event.preventDefault();
    const value = formAdd.task.value.trim();
    if (value.length) {
        addTasks(value);
        formAdd.reset();
    }
})

function deleteTask(id) {
    arrTask = arrTask.filter(task =>{
        return task.id !== id;
    })
}

tasks.addEventListener("click", event =>{
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        //xoa phan tu trong mang
        deleteTask(Number(event.target.parentElement.dataset.id));
    }
    localStorage.setItem("TASKS",JSON.stringify(arrTask));
    console.log(arrTask);
})

function getTaskLocalStoreage() {
    arrTask.forEach(task => {
        tasks.innerHTML += getItemHTML(task.id, task.name);
    });
}

getTaskLocalStoreage();

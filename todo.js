const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");


const todo_key = "todoList";
function paintTodo(text){
    const item = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    span.innerText=text;
    deleteBtn.innerText='DEL';
    item.appendChild(span);
    item.appendChild(deleteBtn);
    todoList.appendChild(item);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value='';
}
function loadTodoList(){
    const load = localStorage.getItem(todo_key);
    if(load==null){

    }else{

    }

}
function init(){
    loadTodoList();
    todoForm.addEventListener("submit", handleSubmit)
}

init();
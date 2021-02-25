const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");

const toDos =[]
const todo_key = "todoList";
function paintTodo(text){
    const item = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    span.innerText=text;
    deleteBtn.innerText='DEL';
    const todoID = toDos.length+1;
    const todoObj={
        text: text,
        id = todoID
    }
    item.appendChild(span);
    item.appendChild(deleteBtn);
    todoList.appendChild(item);
    toDos.push(todoObj);
    saveTodoList(todoObj);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value='';
}
function saveTodoList(todos){
    localStorage.setItem(todo_key, JSON.stringify(todos));
}
function loadTodoList(){
    const load = localStorage.getItem(todo_key);
    if(load !== null){
        const parsedTodoList = JSON.parse(load);
        parsedTodoList.forEach(function(todo){
            paintTodo(todo.text);
        })
    }

}
function init(){
    loadTodoList();
    todoForm.addEventListener("submit", handleSubmit)
}

init();
const todoForm = document.querySelector(".js-toDoform"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-toDoList");

let toDos =[]
const todo_key = "toDos";
function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li)
    todoInput.innerText='';
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id)
    });
    toDos = cleanToDos;
    saveTodoList(toDos)
}
function paintTodo(text){
    console.log("called paintTodo")
    const item = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    span.innerText=text;
    deleteBtn.innerText='DEL';
    deleteBtn.addEventListener("click", deleteTodo);
    const todoID = toDos.length+1;
    const todoObj={
        text: text,
        id : todoID
    }
    item.appendChild(span);
    item.appendChild(deleteBtn);
    todoList.appendChild(item);
    toDos.push(todoObj);
    console.log(toDos)
    saveTodoList(toDos);
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
        console.log(parsedTodoList);
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
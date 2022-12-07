const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let todos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(event);
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    span.innerText = newTodo;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.append(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);

    todos.push(newTodo);        
    saveToDos();                // update todos in localStorage
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){                                 //local storage에 있을 때
    const parsedToDos = JSON.parse(savedToDos); // parsing(불러오기) the prev todos
    todos = parsedToDos;
    parsedToDos.forEach(element => {    
        paintToDo(element);
    });
    // for(let i=0; i< parsedToDos.length; i++){        // 위와 같은 것.
    //     paintToDo(parsedToDos[i]);
    // }
}
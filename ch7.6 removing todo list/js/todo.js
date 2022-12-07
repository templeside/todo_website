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

    todos = todos.filter(item=> item.id !== parseInt(li.id));   //todos array 저장하기
    saveToDos();                                //update to localStorage에 내용을 저장.
}

function paintToDo(newTodo){                    //todo list하나 하나 추가하는 것.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.id = newTodo.id;                         //여기서 newTodoObject.id 추가
    span.innerText = newTodo.text;              //여기서 newTodoObject.text추가
    button.innerText = "❌";                    //여기서 list옆의 버튼 추가

    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.append(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        text:newTodo,
        id:Date.now(),
    };
    paintToDo(newTodoObject);   // todo에 추가시키기

    todos.push(newTodoObject);        
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
import './../assets/styles/scss/main.scss';

// getting list and input, etc.

let todoList = document.querySelector('.todo__list');
let todoInput = document.querySelector('.todo__form-input');
let todoForm = document.querySelector('.todo__form');
let todos = [
    {
        // id: 1, brauchts nicht, da jedes Mal hinzugefügt durch render()
        task: "wäsche waschen",
        completed: 0,
    }, {
        task: "essen",
        completed: 1,
    }, {
        task: "lernen",
        completed: 0,
    }
];

render();

// adding eventListener

document.addEventListener('DOMContentLoaded', loadTodos)
todoForm.addEventListener('submit', createNewTodo);
todoList.addEventListener('click', removeTodo);

// generate new todo

function createNewTodo(e){
    //submit verhindern
    e.preventDefault();

    // input auslesen
    let newTodo = todoInput.value;
    
    // if input is empty

    if(!newTodo.match(/^\s*$/)){
        todos.push({
            task: newTodo,
            completed: 0,
        });
        render();

        // localStorage saven
        saveLocalStorage();
    
        // Input leeren
        todoInput.value = '';
    }
};

function removeTodo(event){
    let target = event.target;
    // console.log(target.parentNode.id);

    if(target && target.matches('li button')){ // matches id ??
        // target.parentNode.remove(target); brauchts nicht, wird durch render neu geladen
        todos.splice(target.parentNode.id, 1)
        saveLocalStorage();
        render();
    }
};

function changeStatus(box){
    let checkBox = document.querySelector
    if(checked === 0){

    }
    
    // if bedingung wenn item === checked dann completed auf 1 setzen
    // completed muss in array gepushed werden (update)
}

function saveLocalStorage(){
        localStorage.setItem('todoArchiv', JSON.stringify(todos));
};

function loadTodos(){
    if(localStorage.getItem('todoArchiv') !== null){
        todos = JSON.parse(localStorage.getItem('todoArchiv'));
        // render funktion einfügen
        render();

    }
};

function render(){
    todoList.innerHTML = '';
    let index = 0; // damit er immer wieder von vorne anfängt

    for(let todo of todos){
        let checked = '';
        if(todo.completed === 1){
            checked = 'checked="checked"';
        }
        let li = document.createElement('li');
        li.classList.add('.todo__list-item');
        li.id = index;
        index += 1;
        li.innerHTML = `<span class="todo__item-checkbox"></span>
        <input type="checkbox" ${checked}>
        <span class="todo__item-text">${todo.task}</span><button>X</button>`;
        todoList.appendChild(li);
    };
};

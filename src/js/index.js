import './../assets/styles/scss/main.scss';

// getting list and input

let todoList = document.querySelector('.todo__list');
let todoInput = document.querySelector('.todo__form-input');
let todoForm = document.querySelector('.todo__form');
let newTodo;
let todosArchiv;
let index = 0;

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

        // input in Liste ausgeben
        let li = document.createElement('li');
        li.classList.add('.todo__list-item');
        li.id = index;
        index += 1;
        li.innerHTML = `<div class="todo__item-checkbox"></div>
        <input type="checkbox" checked="checked">
        <span class="todo__item-text">${newTodo}</span><button>X</button>`;
        todoList.appendChild(li);

        // localStorage saven
        saveLocalStorage(newTodo);
    
        // Input leeren
        todoInput.value = '';
    }
};

function removeTodo(event){

    let target = event.target;
    console.log(target.parentNode.id)
    if(target && target.matches('li button')){

        target.parentNode.remove(target);
        todosArchiv.splice(target.parentNode.id, 1)
        localStorage.setItem('todoArchiv', JSON.stringify(todosArchiv));
    }
};

function saveLocalStorage(newTodo){
    if(localStorage.getItem('todoArchiv') === null){
        todosArchiv = [];
    } else {
        todosArchiv = JSON.parse(localStorage.getItem('todoArchiv'));
    }

    todosArchiv.push(newTodo);
    localStorage.setItem('todoArchiv', JSON.stringify(todosArchiv));
}

function loadTodos(){
    if(localStorage.getItem('todoArchiv') === null){
        todosArchiv = [];
    } else {
        todosArchiv = JSON.parse(localStorage.getItem('todoArchiv'));

        // adding existing todos
        for(let todo of todosArchiv){
            let li = document.createElement('li');
            li.classList.add('.todo__list-item');
            li.id = index;
            index += 1;
            li.innerHTML = `<div class="todo__item-checkbox"></div>
            <input type="checkbox" checked="checked">
            <span class="todo__item-text">${todo}</span><button>X</button>`;
            todoList.appendChild(li);
        }

    }

    
    

}
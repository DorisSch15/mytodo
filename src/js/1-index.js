// import './../assets/styles/scss/main.scss';
// import * as tools from "./1-tools.js";

// const formTodo = document.querySelector('.todo__form');
// const inputTodo = document.querySelector('.todo__form-input');


// function createTodo(e){
//     e.preventDefault();
//     tools.todos.push({
//         name: inputTodo.value
//     });
//     tools.safeLocalStorage();
//     render();
// };

// function render(){
//     const todoList = document.querySelector('.todo__list');
//     todoList.innerHTML = '';
//     let index = 1;
    
//     for(let todo of tools.todos){
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <div class="todo__item-checkbox"></div>
//         <input type="checkbox" checked="checked">
//         <span class="todo__item-text">${todo.name}</span>
//         `;
//         li.id = index;
//         index += 1;
        
//         todoList.appendChild(li);
//     };
// };
// // render();

// formTodo.addEventListener('submit', createTodo);
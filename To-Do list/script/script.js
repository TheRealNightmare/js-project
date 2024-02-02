const todo = JSON.parse(localStorage.getItem('todo')) || [];

display();

function display(){
    let todoHTML = '';
    for(let i = 0; i<todo.length; i++){
        let todosObject = todo[i];
        let name = todosObject.name;
        let dueDate = todosObject.dueDate;
        let html = `<p class="js-td${i} task">${name} ${dueDate} <button class="button2" onclick="del(${i});" >Done</button></P>`
        todoHTML += html;
    }
    document.querySelector('.js-disp').innerHTML = todoHTML;
}

function addtodo() {
    let task = document.querySelector('.js-input').value
    let date = document.querySelector('.js-date').value
    todo.push({
        name: task,
        dueDate: date
    });
    console.log(todo);
    display()
    document.querySelector('.js-input').value = '';
    localStorage.setItem('todo',JSON.stringify(todo));
}


function del(x){
    document .querySelector(`.js-td${x}`).remove();
    todo.splice(x,1);
    display();
    localStorage.setItem('todo',JSON.stringify(todo));
}
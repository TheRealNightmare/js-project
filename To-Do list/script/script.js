const todo = JSON.parse(localStorage.getItem('todo')) || [];

display();

function display(){
    let todoHTML = '';
    for(let i = 0; i<todo.length; i++){
        let todos = todo[i];
        let html = `<p class="js-td${i} task">${todos} <button class="button2" onclick="del(${i});" >del</button></P>`
        todoHTML += html;
    }
    document.querySelector('.js-disp').innerHTML = todoHTML;
}

function addtodo() {
    todo.push(document.querySelector('.js-input').value);
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
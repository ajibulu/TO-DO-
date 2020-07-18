function getTodos() {
    var todos=new Array;
    var todosTask=localStorage.getItem('todo');
    if (todosTask!==null) {
        todos=JSON.parse(todosTask);
    }
    return todos;
}
function addTask() {
    var task=document.getElementById('task').value;
    var todos=getTodos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
} 
function removeTask() {
    var id =this.getAttribute('id');
    var todos=getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}
function show() {
    var todos=getTodos();
    var tags='<ol>';
    for(var i=0; i<todos.length; i++) {
        tags += '<li>' + todos[i] +'       '+'<button class="removeTask" id="'+ i +'">x</button></li>';

    };
    tags +='</ol>';
    document.getElementById('todos').innerHTML=tags;

    var buttons=document.getElementsByClassName('removeTask');
    for(var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', removeTask);
    };
}
document.getElementById('add').addEventListener('click',addTask);
show();
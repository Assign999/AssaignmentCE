const todoForm = document.getElementById('todo-form');
const tableBody = document.getElementById('todo-list');


let todos =[];

todoForm.addEventListener('submit', function(e)  {
    e.preventDefault();

   const title= document.getElementById("title").value;
   const description = document.getElementById("description").value;
   const priority = document.querySelector('input[name="priority"]:checked').value;

   const category =  document.getElementById("category").value;


   const todoItem = {
    id: Date.now(),
    title: title,
    description: description,
    priority: priority,
    category: category
   }

   todos.push(todoItem);

   todoForm.reset();
   renderTable();

   console.log("todos",todos)   

});

function  renderTable () {
    tableBody.innerHTML = '';

    todos.forEach((todoItem, index) =>{
        const row =  document.createElement('tr');

        row.innerHTML = `
        <td>${todoItem.title}</td>
        <td>${todoItem.description}</td>
        <td>${todoItem.priority}</td>
        <td>${todoItem.category}</td>
        `
        tableBody.appendChild(row);

    })
}
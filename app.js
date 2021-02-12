// selectors
document.querySelector("form").addEventListener('submit', handleSubmitForm);

// Event Handlers
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector("input");
    if(input.value != "")
        addToDoList(input.value);
        input.value = ";"
}

// Helpers
function addToDoList(todo) {
    let ul= document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square" </i> </button> 
        <button name="deleteButton"><i class="fas fa-trash"> </i> </button
    `;
}
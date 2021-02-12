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
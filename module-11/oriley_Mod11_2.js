let todoList = [];

function addUserInput() {
    let input = document.getElementById("userInput"); //Class object to hold input value from HTML sheet
    let userItem = input.value;

    if (userItem.trim() !== "") {
        todoList.push(userItem);
        alert("Task added: " + userItem); //alert popup menu to display text added

        input.value = ""; //Blank string to erase current input
    }
}

function deleteUserEntry() {
    if (todoList.length > 0) {
        todoList.pop();
        alert("Last entry deleted.");
    }
}

function displayCurrentList() {
    let displayDiv = document.getElementById("todoList");
    displayDiv.innerHTML = ""; // Clear the existing content

    if (todoList.length > 0) {
        let listHtml = "<ol>";

        todoList.forEach((item, index) => {
            listHtml += "<li>" + item + "</li>";
        });

        listHtml += "</ol>";
        displayDiv.innerHTML = listHtml;
  }
}
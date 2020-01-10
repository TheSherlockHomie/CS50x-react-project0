const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //take input to do
  const inputText = prompt("What would you like to do?")
  //make  new list item
  const newItem = document.createElement("li")
  //make check box
  const newCheckBox = document.createElement("input")
  newCheckBox.setAttribute("type", "checkbox")
  newCheckBox.className = "todo-checkbox"
  //make delete button
  const delButton = document.createElement("button")
  delButton.innerText = "X"
  delButton.className = "button todo-delete"
  delButton.addEventListener("click", delItem)
  //insert text, checkbox and button in form
  const txt = document.createTextNode(inputText)
  const span = document.createElement("span")
  span.appendChild(newCheckBox)
  span.appendChild(txt)
  span.appendChild(delButton)
  newItem.appendChild(span)
  //insert item in list
  list.appendChild(newItem)
}

function delItem(e) {
  if(confirm("Are you sure?")) {
    listItem = e.target.parentElement.parentElement;
    list.removeChild(listItem)
  }
}

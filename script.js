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
  //insert this in list
  newItem.appendChild(newCheckBox)
  //insert text in form
  const txt = document.createTextNode(inputText)
  const span = document.createElement("span")
  span.appendChild(newCheckBox)
  span.appendChild(txt)
  newItem.appendChild(span)
  //insert item in list
  list.appendChild(newItem)
}

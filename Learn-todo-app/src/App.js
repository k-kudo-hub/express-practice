import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { element, render } from "./view/html-util.js";

export class App {
  constructor() {
    // 1. Construct TodoList.
    this.todoListModel = new TodoListModel()
  }
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    // 2. Update the display when the state of TodoListModel is updated.
    this.todoListModel.onChange(() => {
      // The list element wrapping todo list.
      const todoListElement = element`<ul />`;
      // Add each TodoItem element under todoListElement.
      const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach(item => {
        // When todo is done, add a check. Otherwise, remove the check.
        const todoItemElement = item.completed
          ? element`<li><input type="checkbox" class="checkbox" checked><s>${item.title}</s><button class="delete">x</button></li>`
          : element`<li><input type="checkbox" class="checkbox">${item.title}<button class="delete">x</button></li>`
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
          this.todoListModel.updateTodo({
            id: item.id,
            completed: !item.completed
          });
        });
        // When delete button is clicked, delete item from TodoListModel.
        const deleteButtonElement = todoItemElement.querySelector(".delete");
        console.log(deleteButtonElement);
        deleteButtonElement.addEventListener("click", () => {
          this.todoListModel.deleteTodo({
            id: item.id
          });
        });
        todoListElement.appendChild(todoItemElement);
      });
      // Overwrite contents of containerElement by todoListElement.
      render(todoListElement, containerElement);
      // Update display of item counts.
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    })
    // 3. After send form, add new TodoItemModel.
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add new TodoItem for TodoList.
      this.todoListModel.addTodo(new TodoItemModel({
        title: inputElement.value,
        completed: false
      }));
      inputElement.value = "";
    });
  }
}

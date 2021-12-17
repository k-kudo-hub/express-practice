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
        const todoItemElement = element`<li>${item.title}</li>`;
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

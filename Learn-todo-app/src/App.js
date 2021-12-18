import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { render } from "./view/html-util.js";
import { TodoListView } from "./view/TodoListView.js";

export class App {
  constructor() {
    // 1. Construct TodoList.
    this.todoListModel = new TodoListModel()
  }

  /**
   * The Listener function called when adding a todo.
   * @param { string } title
   */
  handleAdd( title ) {
    this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
  }

  /**
   * The Listener function called when updating todo status.
   * @param {{ id: number, completed: boolean }} param0 
   */
  handleUpdate({ id, completed }) {
    this.todoListModel.updateTodo({ id, completed });
  }

  /**
   * The Listener function called when deleting todo.
   * @param {{ id }} param0 
   */
  handleDelete({ id }) {
    this.todoListModel.deleteTodo({ id });
  }

  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    // 2. Update the display when the state of TodoListModel is updated.
    this.todoListModel.onChange(() => {
      // Add each TodoItem element under todoListElement.
      const todoItems = this.todoListModel.getTodoItems();
      const todoListView = new TodoListView();
      const todoListElement = todoListView.createElement(todoItems, {
        onUpdateTodo: ({ id, completed }) => {
          this.handleUpdate({ id, completed });
        },
        onDeleteTodo: ({ id }) => {
          this.handleDelete({ id });
        }
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
      this.handleAdd(inputElement.value);
      inputElement.value = "";
    });
  }
}

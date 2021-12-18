import { element } from "./html-util.js";

export class TodoItemView {
  /**
   * 
   * @param {TodoItemModel} todoItem 
   * @param {function({id: string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id: string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @return {Element}
   */
  createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
    const todoItemElement = todoItem.completed
      ? element`<li><input type="checkbox" class="checkbox" checked><s>${todoItem.title}</s><button class="delete">x</button></li>`
      : element`<li><input type="checkbox" class="checkbox">${todoItem.title}<button class="delete">x</button></li>`;
    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
    inputCheckboxElement.addEventListener("change", () => {
      // Change to callback function.
      onUpdateTodo({
        id: todoItem.id,
        completed: !todoItem.completed
      });
    });
    const deleteButtonElement = todoItemElement.querySelector(".delete");
    deleteButtonElement.addEventListener("click", () => {
      // Change to callback function.
      onDeleteTodo({
        id: todoItem.id
      });
    });
    // Returns the HTML element of the created Todo item
    return todoItemElement;
  }
}

import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
  constructor(items = []){
    super();
    this.items = items;
  }

  /**
   * TodoItemの合計個数を返す
   * @returns {number}
   */
  getTotalCount(){
    return this.items.length
  }

  /**
   * 表示できるTodoItemの配列を返す
   * @returns {TodoItemModel[]}
   */
  getTodoItems(){
    return this.items;
  }

  /**
   * TodoListの状態が更新された時に呼び出されるリスナー関数を登録する
   * @param {Function} listener 
   */
  onChange(listener) {
    this.addEventListener("change", listener);
  }

  /**
   * 状態が変更された時に呼ぶ。登録済みのリスナー関数を呼び出す
   */
  emitChange() {
    this.emit("change")
  }

  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }

  /**
   * 指定したidのTodoItemのcompletedを更新する
   * @param {{ id: number, completed: boolean }} 
   */
  updateTodo({ id, completed }) {
    const todoItem = this.items.find(todo => todo.id === id);
    if(!todoItem){
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }
}

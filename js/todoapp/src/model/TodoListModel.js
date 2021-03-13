import { EventEmitter } from '../EventEmitter.js';

export class TodoListModel extends EventEmitter {
  /**
   * @param {TodoItemModel[]} [items] 初期アイテム一覧（デフォルトは空の配列）
   */
  constructor(items = []) {
    super();
    this.items = items;
  }

  /**
   * TodoItemの合計個数を返す
   * @returns {number}
   */
  getTotalCount() {
    return this.items.length;
  }

  /**
   * 表示できるTodoItemの配列を返す
   * @returns {TodoItemModel[]}
   */
  getTodoItems() {
    return this.items;
  }

  /**
   * TodoListの状態が更新されたときに呼び出されるリスナー関数を登録する
   * @param {Function} listener
   */
  onChange(listener) {
    this.addEventListener('change', listener);
  }

  /**
   * TodoListの状態が更新されたときに呼び出されるリスナー関数を解除する
   * @param {Function} listener
   */
  offChange(listener) {
    this.removeEventListener('change', listener);
  }

  /**
   * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
   */
  emitChange() {
    console.log('  emitChange() is called.');
    this.emit('change');
  }

  /**
   * TodoItemを追加する
   * @param {TodoItemModel} todoItem
   */
  addTodo(todoItem) {
    console.log(`  addTodo() is called.`);
    this.items.push(todoItem);
    this.emitChange();
  }

  /**
   * 指定したidのTodoItemのcompletedを更新する
   * @param {{ id:number, completed: boolean }}
   */
  updateTodo({ id, completed }) {
    console.log(`  updateTodo() is called.`);
    // id が一致するTodoItemを見つけ、あるなら完了状態の値を更新する
    // こちらも参照渡し
    const todoItem = this.items.find(todo => todo.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }

  /**
   * 指定したidのTodoItemを削除する
   * @param {{ id:number }}
   */
  deleteTodo({ id }) {
    console.log(`  deleteTodo() is called.`);
    // `id`に一致しないTodoItemだけを残すことで、`id`に一致するTodoItemを削除する
    this.items = this.items.filter(todo => {
      return todo.id !== id;
    });
    this.emitChange();
  }
}

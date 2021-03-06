import { element } from './html-util.js ';
import { TodoItemView } from './TodoItemView.js';

export class TodoListView {
  /**
   * 'todoItems'に対応するTodoリストのHTML要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModelの配列
   * @param {function({id: string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id: stfing})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element}
   */
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    // TodoリストをまとめるList要素
    const todoListElement = element`<ul />`;
    // 各TodoItemモデルに対応したHTML要素を作成し、リスト要素へ追加する
    todoItems.forEach(todoItem => {
      const todoItemView = new TodoItemView();
      const todoItemElement = todoItemView.createElement(todoItem, {
        onUpdateTodo,
        onDeleteTodo,
      });
      todoListElement.appendChild(todoItemElement);
    });
    return todoListElement;
  }
}

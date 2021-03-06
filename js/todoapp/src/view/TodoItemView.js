import { element } from './html-util.js';

export class TodoItemView {
  /**
   * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
   * @param {TodoItemModel} todoItem
   * @param {function({id: string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id: stfing})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element}
   */
  createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
    // 完了済みならchecked属性をつけ、未完了ならchecked属性を外す
    const todoItemElement = todoItem.completed
      ? element`<li>
            <input type="checkbox" class="checkbox" checked>
            <s>${todoItem.title}</s>
            <button class="delete">x</button>
          </li>`
      : element`<li>
            <input type="checkbox" class="checkbox">
            ${todoItem.title}
            <button class="delete">x</button>
          </li>`;
    // チェックボックスがトグルしたときのイベントにリスナー関数を登録
    // 今↑で作ったtodoItemElement中のcheckboxクラスに該当するものを取得する
    const inputCheckboxElement = todoItemElement.querySelector('.checkbox');
    // この'change'イベントはHTMLから発せられるものを想定
    inputCheckboxElement.addEventListener('change', () => {
      console.log(
        `inputCheckboxElement(id: ${todoItem.id})'s change event has started.`,
      );
      // 指定したTodoアイテムの完了状態を反転させる
      // と同時にupdateTodo内で'change'をディスパッチ
      // => todoListModel.onCheange()のコールバックが動く
      // => HTMLを作成しながら、各inputCheckboxElementへのこのリスナー関数登録も行う
      // 　（親要素のtodoListModelが変更になったのだから子要素はいちから定義されて当前）
      onUpdateTodo({
        id: todoItem.id,
        completed: !todoItem.completed,
      });
      console.log(
        `inputCheckboxElement(id: ${todoItem.id})'s change event has finished.`,
      );
    });

    const deleteButtonElement = todoItemElement.querySelector('.delete');
    deleteButtonElement.addEventListener('click', () => {
      onDeleteTodo({
        id: todoItem.id,
      });
    });
    return todoItemElement;
  }
}

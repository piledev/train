import { TodoListModel } from './model/TodoListModel.js';
import { TodoItemModel } from './model/TodoItemModel.js';
import { TodoListView } from './view/TodoListView.js';
import { render } from './view/html-util.js';

export class App {
  constructor() {
    // 1. TodoListModelの初期化
    this.todoListModel = new TodoListModel();
  }

  mount() {
    // console.log('0. mount() is called');
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    const containerElement = document.querySelector('#js-todo-list');
    const todoItemCountElement = document.querySelector('#js-todo-count');

    // 2. TodoListModelの状態が更新されたら表示を更新する
    // (= todoListModel.emit() に反応して表示を更新する)
    this.todoListModel.onChange(() => {
      console.log(`  todoListModel's change event has started.`);
      // それぞれのTodoItem要素をtodoListElement以下へ追加する
      const todoItems = this.todoListModel.getTodoItems();
      const todoListView = new TodoListView();
      //todoItemsに対応するTodoListViewを作成する
      const todoListElement = todoListView.createElement(todoItems, {
        onUpdateTodo: ({ id, completed }) => {
          this.todoListModel.updateTodo({ id, completed });
        },
        onDeleteTodo: ({ id }) => {
          this.todoListModel.deleteTodo({ id });
        },
      });
      // containerElementの中身をtodoListElementで上書きする
      render(todoListElement, containerElement);
      // アイテム数の表示を更新
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
      console.log(`  todoListModel's change event has finished.`);
    });

    // 3. フォームを送信したら、新しいTodoItemModelを追加する
    formElement.addEventListener('submit', event => {
      console.log(`formElement's submit event has started.`);
      // 本来のsubmitイベントの動作を止める
      event.preventDefault();
      // 新しいTodoItemをTodoListへ追加する
      this.todoListModel.addTodo(
        new TodoItemModel({
          title: inputElement.value,
          completed: false,
        }),
      );
      inputElement.value = '';
      console.log(`formElement's submit event has finished.`);
    });
  }
}

import { TodoListModel } from './model/TodoListModel.js';
import { TodoItemModel } from './model/TodoItemModel.js';
import { TodoListView } from './view/TodoListView.js';
import { render } from './view/html-util.js';

// App の仕事はModelとView間のイベントを管理するだけ
export class App {
  constructor({
    formElement,
    formInputElement,
    todoCountElement,
    todoListContainerElement,
  }) {
    // view and model
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel();
    // bind elements
    this.formElement = formElement;
    this.formInputElement = formInputElement;
    this.todoListContainerElement = todoListContainerElement;
    this.todoCountElement = todoCountElement;
    // ハンドラ呼び出しでthis が変わらないように固定する
    // this が常に App のインスタンスを参照するように固定する。
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Todoを追加するときに呼ばれるリスナー関数
   * @param {string} title
   */
  handleAdd(title) {
    this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
  }

  /**
   * Todoの状態を更新したときに呼ばれるリスナー関数
   * @param {{ id:number, completed: boolean }}
   */
  handleUpdate({ id, completed }) {
    this.todoListModel.updateTodo({ id, completed });
  }

  /**
   * Todoを削除したときに呼ばれるリスナー関数
   * @param {{ id: number }}
   */
  handleDelete({ id }) {
    this.todoListModel.deleteTodo({ id });
  }

  /**
   * フォームを送信時に呼ばれるリスナー関数
   * @param {Event} event
   */
  handleSubmit(event) {
    event.preventDefault();
    const inputElement = this.formInputElement;
    this.handleAdd(inputElement.value);
    inputElement.value = '';
  }
  /**
   * TodoListViewが変更した時に呼ばれるリスナー関数
   */
  handleChange() {
    const todoCountElement = this.todoCountElement;
    const todoListContainerElement = this.todoListContainerElement;
    const todoItems = this.todoListModel.getTodoItems();
    const todoListElement = this.todoListView.createElement(todoItems, {
      onUpdateTodo: ({ id, completed }) => {
        this.handleUpdate({ id, completed });
      },
      onDeleteTodo: ({ id }) => {
        this.handleDelete({ id });
      },
    });
    render(todoListElement, todoListContainerElement);
    todoCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
  }

  mount() {
    this.todoListModel.onChange(this.handleChange);
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  unmount() {
    this.todoListModel.offChange(this.handleChange);
    this.formElement.removeEventListener('submit', this.handleSubmit);
  }
}

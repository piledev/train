'use strict';

export class App {
  constructor({ boardElement, tileElements }) {
    this.boardElement = boardElement;
    this.tileElements = tileElements;
    this.isCircle = true;
  }

  mount() {
    // すべてのタイルにクリックイベントリスナーを登録
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tileElement = this.tileElements[i][j];
        // this.tileElements[i][j].addEventListener('click', event => {
        tileElement.addEventListener('click', event => {
          if (!tileElement.innerHTML) {
            const mark = this.isCircle ? '○' : '✗';
            tileElement.innerHTML = mark;
            this.isCircle = !this.isCircle;
          }
        });
      }
    }
  }

  unmount() {}
}
// 以下は対戦相手の実装アイデア -------------------------------
// const is_two = (mark, line) => {
//   const indexOfSpace;
//   return true, indexOfSpace;
// };

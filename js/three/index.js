'use strict';
import { App } from './src/App.js';

const readTileElements = () => {
  const tileElements = [];
  for (let i = 0; i < 3; i++) {
    if (!tileElements[i]) {
      tileElements[i] = [];
    }
    for (let j = 0; j < 3; j++) {
      const id = '#js-td-' + String(i) + String(j);
      tileElements[i][j] = document.querySelector(id);
    }
  }
  return tileElements;
};

const boardElement = document.querySelector('#js-board');
const tileElements = readTileElements();

const app = new App({ boardElement, tileElements });

// ページのロードが完了したときのイベント
window.addEventListener('load', () => {
  app.mount();
});
// ページがアンロードされたときのイベント
window.addEventListener('unload', () => {
  app.unmount();
});

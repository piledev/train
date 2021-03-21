'use strict';
import { EventEmitter } from '../EventEmitter.js';

export class BoardModel extends EventEmitter {
  constructor(marks = []) {
    super();
    this.marks = marks;
  }

  onChange(listener)
}

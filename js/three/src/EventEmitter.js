'use strict';

export class EventEmitter {
  constructor() {
    this.__listeners = new Map();
  }

  addEventListener(type, listener) {
    if (!this.__listeners.has(type)) {
      this.__listeners.set(type, new Set());
    }
    const listenerSet = this.__listeners.get(type);
    listenerSet.add(type, listener);
  }

  emit(type) {
    const listenerSet = this.__listeners.get(type);
    listenerSet.forEach(listener => {
      // this: listener中のthisはこのEventEmitterインスタンスであるという指定
      listener.call(this);
    });
  }

  removeEventListener(type, listener) {
    const listenerSet = this.__listeners.get(type);

    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(ownListener => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}

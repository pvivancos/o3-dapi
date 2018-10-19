export enum EventName {
  READY = 'READY',
  NETWORK_CHANGED = 'NETWORK_CHANGED',
  ACCOUNT_CHANGED = 'ACCOUNT_CHANGED',
}

interface Listeners {
  [eventName: string]: Function[];
}

const listeners: Listeners = {};

export function addEventListener(event: EventName, callback: Function) {
  const currentListeners = listeners[event] || [];
  currentListeners.push(callback);
  listeners[event] = currentListeners;
}

export function removeEventListener(event: EventName) {
  listeners[event] = [];
}

export function onEvent(event: EventName, data?: any) {
  const currentListeners = listeners[event];
  currentListeners && currentListeners.forEach(callback => callback(data));
}

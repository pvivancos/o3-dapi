declare const window: any;
declare const _webO3: any;
import { get } from 'lodash-es';
import {
  EventHandler,
  Message,
  IncomingMessage,
  AddEventsListenerArgs,
  SendMessageArgs,
} from './types';

const PLATFORM = 'webO3';
const messageQueue = {};
const eventsListeners: {[blockchain: string]: EventHandler} = {};
let onReadyMessage;

window._webO3 = window._webO3 ? window._webO3 : {};
_webO3.receiveMessage = (message: IncomingMessage) => {
  try {
    if (typeof message === 'string') {
      message = JSON.parse(message);
    }
    const {
      platform,
      blockchain,
      command,
      messageId,
      data,
      error,
      eventName,
    } = message;

    if (platform !== PLATFORM) {
      return;
    }

    if (command === 'event') {
      if (eventName === 'READY') {
        Object.keys(eventsListeners)
        .map(key => eventsListeners[key]) // Object.values
        .forEach(handler => handler(eventName, data));
        return;
      }

      const handler = eventsListeners[blockchain];
      handler && handler(eventName, data);
      return;
    }

    const messageResolver = messageQueue[messageId];
    if (messageResolver) {
      const { resolve, timeout, reject } = messageResolver;
      timeout && clearTimeout(timeout);
      error ? reject(error) : resolve(data);
    }
  } catch (err) {}
};

export function addEventsListener({blockchain, callback}: AddEventsListenerArgs) {
  eventsListeners[blockchain] = callback;
}

export function sendMessage({
  blockchain,
  version,
  command,
  data,
  network,
  timeout,
}: SendMessageArgs): Promise<any> {
  debugger;
  const messageId = blockchain + version + command + (Date.now() + Math.random()).toString();
  const message: Message = {
    platform: PLATFORM,
    messageId,
    blockchain,
    version,
    command,
    data,
    network,
  };

  return new Promise((resolve, reject) => {
    const messageHandler = get(window, 'window._webO3.messageHandler');
    const webkitPostMessage = get(window, 'window.webkit.messageHandlers.sendMessageHandler.postMessage');
    if (messageHandler) {
      messageHandler(JSON.stringify(message));
    } else if (webkitPostMessage) {
      webkitPostMessage(message);
    } else {
      reject(`webO3 provider not found.`);
    }

    if (messageHandler || webkitPostMessage) {
      messageQueue[messageId] = {
        resolve,
        reject,
        timeout: timeout && setTimeout(() => {
          delete messageQueue[messageId];
          reject('Request timeout.');
        }, timeout),
      };
    }
  });
}

declare const web3neoAndroidInterface: any;
declare const webkit: any;
import { PLATFORM } from './constants/common';
import { EVENT } from './constants/commands';
import { onEvent, EventName } from './modules/eventListener';

const messageQueue = {};

interface Message {
  platform: string;
  messageId: string;
  command: string;
  eventName?: EventName;
  data: any;
  error: string;
}

export const receiveMessage = (message: Message) => {
  try {
    if (typeof message === 'string') {
      message = JSON.parse(message);
    }
    const { platform, messageId, command, data, error, eventName } = message;

    if (platform !== PLATFORM) {
      return;
    }

    if (command === EVENT) {
      onEvent(eventName, data);
      return;
    }

    const messageResolver = messageQueue[messageId + command];
    if (messageResolver) {
      const { resolve, timeout, reject } = messageResolver;
      timeout && clearTimeout(timeout);
      error ? reject(error) : resolve(data);
    };
  } catch (err) {}
}

interface SendMessageArgs {
  command: string;
  data?: any;
  timeout?: number;
}

export const sendMessage = ({command, data, timeout}: SendMessageArgs): Promise<any> => {
  const messageId = Date.now() + Math.random();
  const message = {
    platform: PLATFORM,
    messageId,
    command,
    data,
  };

  return new Promise((resolve, reject) => {
    if (web3neoAndroidInterface !== undefined){
      web3neoAndroidInterface.messageHandler(JSON.stringify(message))
    } else {
      try {
        webkit.messageHandlers.sendMessageHandler.postMessage(message);
      } catch(err) {
        reject(`Messaging service error: ${JSON.stringify(err)}`);
      }
    }
    messageQueue[messageId + command] = {
      resolve,
      reject,
      timeout: timeout && setTimeout(() => {
        delete messageQueue[messageId + command];
        reject('Request timeout.')
      }, timeout)
    };
  });
}

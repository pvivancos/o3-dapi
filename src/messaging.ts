declare const web3neoAndroidInterface: any;
declare const webkit: any;
declare const window: any;

const messageQueue = {};

interface Message {
  messageId: string;
  command: string;
  data: any;
  error: string;
}

window.web3neo.callback = (message: Message) => {
  if (typeof message === 'string') {
    message = JSON.parse(message);
  }
  const { messageId, command, data, error } = message;
  const messageResolver = messageQueue[messageId + command];
  if (messageResolver) {
    const { resolve, timeout, reject } = messageResolver;
    timeout && clearTimeout(timeout);
    error ? reject(error) : resolve(data);
  };
}

interface SendMessageArgs {
  command: string;
  data?: any;
  timeout?: number;
}

export function sendMessage({command, data, timeout}: SendMessageArgs): Promise<any> {
  const messageId = Date.now() + Math.random();
  const message = {
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

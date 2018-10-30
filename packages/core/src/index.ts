import { Plugin } from './types';

import {
  sendMessage,
  addEventsListener,
} from './messages';

const o3dapiCore: any = {};

o3dapiCore.initPlugins = (plugins: Plugin[]) => {
  plugins.forEach(plugin => {
    o3dapiCore[plugin.blockchain] = new plugin(sendMessage, addEventsListener);
  });
};

export default o3dapiCore;

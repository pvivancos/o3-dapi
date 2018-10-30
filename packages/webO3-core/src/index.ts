import { Plugin } from './types';

import {
  sendMessage,
  addEventsListener,
} from './messages';

const webO3core: any = {};

webO3core.initPlugins = (plugins: Plugin[]) => {
  plugins.forEach(plugin => {
    webO3core[plugin.blockchain] = new plugin(sendMessage, addEventsListener);
  });
};

export default webO3core;

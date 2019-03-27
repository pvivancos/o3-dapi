import o3dapi from 'o3-dapi-core';
import o3dapiNeo from 'o3-dapi-neo';
import o3dapiNeoClient from 'o3-dapi-neoclient';

o3dapi.initPlugins([o3dapiNeo]);

o3dapi.NEO.setClientPlugin(o3dapiNeoClient);

export default {
  ...o3dapi.NEO,
  utils: o3dapi.utils,
};

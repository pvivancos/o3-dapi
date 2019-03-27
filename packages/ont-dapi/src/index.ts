import o3dapi from 'o3-dapi-core';
import o3dapiOnt from 'o3-dapi-ont';
import o3dapiOntClient from 'o3-dapi-ontclient';

o3dapi.initPlugins([o3dapiOnt]);

o3dapi.ONT.setClientPlugin(o3dapiOntClient);

export default {
  ...o3dapi.ONT,
  utils: o3dapi.utils,
};

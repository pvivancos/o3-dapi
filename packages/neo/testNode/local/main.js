// const o3dapi = require('../../../core/lib/o3-dapi-core.min.js');
const o3dapi = require('../../../core/build/bundle.js');
const o3dapiNeo = require('../../lib/o3-dapi-neo.min.js');
// const o3dapiNeo = require('../../build/bundle.js');
const o3dapiNodeJS = require('../../../nodejs-plugin/build/bundle.js');

// const o3dapi = require('o3-dapi-core');
// const o3dapiNodeJS = require('o3-dapi-nodejs');
// const o3dapiNeo = require('o3-dapi-neo');

console.log('setNodeJSOverrides');
o3dapi.setNodeJSOverrides(o3dapiNodeJS);
console.log('initPlugins');
o3dapi.initPlugins([o3dapiNeo]);
console.log('addEventListener');
o3dapi.NEO.addEventListener(o3dapi.NEO.Constants.EventName.READY, data => {
  console.log('ready event');
  o3dapi.NEO.getProvider()
  .then(res => console.log(res))
  .catch(err => console.log(err));
});
setInterval(() => {
  console.log('getProvider');
  o3dapi.NEO.getProvider()
  .then(res => console.log(res))
  .catch(err => console.log(err));
}, 3000);

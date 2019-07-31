declare const require: any;
const {
  randomFillSync,
  createCipheriv,
  createDecipheriv,
  createECDH,
} = require('crypto');

export default {
  crypto: {
    randomFillSync,
    createCipheriv,
    createDecipheriv,
    createECDH,
  },
};

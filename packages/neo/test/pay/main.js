const COINBASE_ASSETS_TAG_REQUIRED = ['XRP', 'XLM', 'EOS'];
const initialState = {
  selectedTab: '',
  assets: [],
  sendInput: {
    asset: 'default',
    toAddress: '',
    tag: '',
    amount: '',
  },
  sendSuccess: null,
  sendError: null,
  receiveInput: {
    asset: 'default',
  },
  receiveSuccess: {
    address: '',
    tag: '',
  },
};

const app = new Vue({
  el: '#app',
  data: initialState,
  computed: {
    sendAmountShowing() {
      return this.sendInput && this.sendInput.asset !== 'default' && this.sendInput.toAddress && this.sendInput.toAddress.length > 5
    },
    sendTagRequired() {
      return this.sendAmountShowing && COINBASE_ASSETS_TAG_REQUIRED.includes(this.sendInput.asset) && this.sendInput.toAddress && !this.sendInput.toAddress.includes('@')
    },
    canSend() {
      return this.sendAmountShowing && (!this.sendTagRequired || (this.sendTagRequired && this.sendInput.tag)) && this.sendInput.amount
    }
  },
  watch: {
    sendSuccess() {
      setTimeout(() => {
        var animation = bodymovin.loadAnimation({
          container: document.getElementById('lottie'), // Required
          path: './assets/sent.json', // Required
          renderer: 'svg', // Required
          loop: true, // Optional
          autoplay: true, // Optional
          name: "Sent", // Name for future reference. Optional.
        });
      });
    },
    selectedTab(value) {
      if (value === 'SEND' && !!this.sendSuccess) {
        setTimeout(() => {
          var animation = bodymovin.loadAnimation({
            container: document.getElementById('lottie'), // Required
            path: './assets/sent.json', // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "Sent", // Name for future reference. Optional.
          });
        });
      }
    },
    receiveInput: {
      handler(val){
        console.log('hello');
        this.getAccount();
      },
      deep: true,
    },
  },
  methods: {
    send() {
      if (!this.canSend) {
        return;
      }
      const { asset, toAddress, tag, amount } = this.sendInput;
      const params = {
        asset: o3dapi.PAY.assets[asset],
        to: toAddress,
        amount: amount,
      };
      if (!!tag) {
        params.tag = tagEle.value;
      }

      o3dapi.PAY.send(params)
      .then(({result, txid}) => {
        console.log('result: ', result);
        console.log('txid (optional): ', txid);
        // resultEle.innerHTML = 'Send successful!'
      })
      .catch(err => {
        console.error('failed or rejected', err);
        // resultEle.innerHTML = 'Send error: ' + JSON.stringify(err)
      });
    },
    getAccount() {
      const params = {
        asset: o3dapi.PAY.assets[this.receiveInput.asset],
      };

      o3dapi.PAY.getAccount(params)
      .then(res => {
        const { address, tag } = res;
        this.receiveSuccess = res;
      })
      .catch(err => {
        console.error('failed or rejected', err);
        getAccountResultEle.innerHTML = 'Send error: ' + JSON.stringify(err)
      });
    },
  },
  mounted(){
    o3dapi.initPlugins([o3dapiPay]);
    this.assets = o3dapi.PAY.assets;
    this.selectedTab = 'SEND';
    //
    // setTimeout(() => {
    //   this.sendSuccess = {result: true};
    // }, 1000);
  }
});

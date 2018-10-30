const errorEle = document.getElementById("error");
const resultEle = document.getElementById("result");
const loadingEle = document.getElementById("loading");

const balanceInputEle = document.getElementById("balanceInput");

const getStorageScriptHashEle = document.getElementById("getStorageScriptHash");
const getStorageKeyEle = document.getElementById("getStorageKey");

const invokeReadScriptHashEle = document.getElementById("invokeReadScriptHash");
const invokeReadOperationEle = document.getElementById("invokeReadOperation");
const invokeReadArgsEle = document.getElementById("invokeReadArgs");

const invokeScriptHashEle = document.getElementById("invokeScriptHash");
const invokeOperationEle = document.getElementById("invokeOperation");
const invokeArgsEle = document.getElementById("invokeArgs");
const invokeAttachedAssetsEle = document.getElementById("invokeAttachedAssets");
const invokeFeeEle = document.getElementById("invokeFee");

const sendToAddressEle = document.getElementById("sendToAddress");
const sendAssetEle = document.getElementById("sendAsset");
const sendAmountEle = document.getElementById("sendAmount");
const sendRemarkEle = document.getElementById("sendRemark");
const sendFeeEle = document.getElementById("sendFee");

const networksEle = document.getElementById("networks");

function clearText() {
  resultEle.innerHTML = '';
  errorEle.innerHTML = '';
}

function handleSuccess(data) {
  stopLoading();
  const formatted = syntaxHighlight(data);
  resultEle.innerHTML = formatted;
}

function handleError(error) {
  stopLoading();
  errorEle.innerHTML = syntaxHighlight(JSON.stringify(error));
}

function startLoading() {
  clearText();
  loadingEle.style = 'display: block;';
}

function stopLoading() {
  loadingEle.style = 'display: none;';
}

stopLoading();

function isReady() {
  webO3.NEO.isReady()
  .then(handleSuccess)
  .catch(handleError);
}

function getProvider() {
  webO3.NEO.getProvider()
  .then(handleSuccess)
  .catch(handleError);
}

function getNetworks() {
  webO3.NEO.getNetworks()
  .then(handleSuccess)
  .catch(handleError);
}

function getAccount() {
  startLoading();
  webO3.NEO.getAccount()
  .then(handleSuccess)
  .catch(handleError);
}

function getBalance() {
  startLoading();
  webO3.NEO.getBalance({
    params: balanceInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getStorage() {
  startLoading();
  webO3.NEO.getStorage({
    scriptHash: getStorageScriptHashEle.value,
    key: getStorageKeyEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function invokeRead() {
  startLoading();
  webO3.NEO.invokeRead({
    scriptHash: invokeReadScriptHashEle.value,
    operation: invokeReadOperationEle.value,
    args: invokeReadArgsEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function invoke() {
  startLoading();
  webO3.NEO.invoke({
    scriptHash: invokeScriptHashEle.value,
    operation: invokeOperationEle.value,
    args: invokeArgsEle.value,
    attachedAssets: invokeAttachedAssetsEle.value,
    fee: invokeFeeEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function send() {
  startLoading();
  webO3.NEO.send({
    to: sendToAddressEle.value,
    asset: sendAssetEle.value,
    amount: sendAmountEle.value,
    remark: sendRemarkEle.value,
    fee: sendFeeEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

webO3.initPlugins([webO3neo]);

webO3.NEO.addEventListener(webO3.NEO.Constants.EventName.READY, () => {
  webO3.NEO.getNetworks()
  .then(networks => {
    networks.forEach(network => {
      const option = document.createElement('option');
      option.value = network;
      option.label = network;
      networksEle.append(option);
    });
  });
});

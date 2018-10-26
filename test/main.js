const network = web3neo.CONST.Network.TestNet;

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
  web3neo.isReady()
  .then(handleSuccess)
  .catch(handleError);
}

function getProvider() {
  web3neo.getProvider()
  .then(handleSuccess)
  .catch(handleError);
}

function getAccount() {
  startLoading();
  web3neo.getAccount()
  .then(handleSuccess)
  .catch(handleError);
}

function getBalance() {
  startLoading();
  web3neo.getBalance(balanceInputEle.value)
  .then(handleSuccess)
  .catch(handleError);
}

function getStorage() {
  startLoading();
  web3neo.getStorage({
    scriptHash: getStorageScriptHashEle.value,
    key: getStorageKeyEle.value,
  }, network)
  .then(handleSuccess)
  .catch(handleError);
}

function invokeRead() {
  startLoading();
  web3neo.invokeRead({
    scriptHash: invokeReadScriptHashEle.value,
    operation: invokeReadOperationEle.value,
    args: invokeReadArgsEle.value,
  }, network)
  .then(handleSuccess)
  .catch(handleError);
}

function invoke() {
  startLoading();
  web3neo.invoke({
    scriptHash: invokeScriptHashEle.value,
    operation: invokeOperationEle.value,
    args: invokeArgsEle.value,
    attachedAssets: invokeAttachedAssetsEle.value,
    fee: invokeFeeEle.value,
  }, network)
  .then(handleSuccess)
  .catch(handleError);
}

function send() {
  startLoading();
  web3neo.send({
    to: sendToAddressEle.value,
    asset: sendAssetEle.value,
    amount: sendAmountEle.value,
    remark: sendRemarkEle.value,
    fee: sendFeeEle.value,
  }, network)
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

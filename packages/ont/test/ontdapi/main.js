const errorEle = document.getElementById("error");
const resultEle = document.getElementById("result");
const loadingEle = document.getElementById("loading");
const networksEle = document.getElementById("networks");
const accountEle = document.getElementById("account");
const disconnectEle = document.getElementById("disconnect");

const getMerkleProofInputEle = document.getElementById("getMerkleProofInput");

const getTransactionInputEle = document.getElementById("getTransactionInput");

const getBlockEle = document.getElementById("getBlockInput");

const getSmartCodeEventInputEle = document.getElementById("getSmartCodeEventInput");

const getContractInputEle = document.getElementById("getContractInput");

const getStorageScriptHashEle = document.getElementById("getStorageScriptHash");
const getStorageKeyEle = document.getElementById("getStorageKey");

const getBalanceInputEle = document.getElementById("getBalanceInput");

const getBlockHeightByTxHashInputEle = document.getElementById("getBlockHeightByTxHashInput");

const getAllowanceAssetInputEle = document.getElementById("getAllowanceAssetInput");
const getAllowanceFromInputEle = document.getElementById("getAllowanceFromInput");
const getAllowanceToInputEle = document.getElementById("getAllowanceToInput");

const invokeReadScriptHashEle = document.getElementById("invokeReadScriptHash");
const invokeReadOperationEle = document.getElementById("invokeReadOperation");
const invokeReadArgsEle = document.getElementById("invokeReadArgs");

const deployNameEle = document.getElementById("deployName");
const deployVersionEle = document.getElementById("deployVersion");
const deployAuthorEle = document.getElementById("deployAuthor");
const deployEmailEle = document.getElementById("deployEmail");
const deployDescriptionEle = document.getElementById("deployDescription");
const deployNeedStorageEle = document.getElementById("deployNeedStorage");
const deployGasPriceEle = document.getElementById("deployGasPrice");
const deployGasLimitEle = document.getElementById("deployGasLimit");
const deployCodeEle = document.getElementById("deployCode");

const sendToAddressEle = document.getElementById("sendToAddress");
const sendAssetEle = document.getElementById("sendAsset");
const sendAmountEle = document.getElementById("sendAmount");

const invokeScriptHashEle = document.getElementById("invokeScriptHash");
const invokeOperationEle = document.getElementById("invokeOperation");
const invokeArgsEle = document.getElementById("invokeArgs");
const gasPriceEle = document.getElementById("gasPrice");
const gasLimitEle = document.getElementById("gasLimit");

const signMessageInputEle = document.getElementById("signMessageInput");

const verifyMessageInputEle = document.getElementById("verifyMessageInput");
const verifyMessageSignatureInputEle = document.getElementById("verifyMessageSignatureInput");
const verifyMessagePiblicKeyInputEle = document.getElementById("verifyMessagePiblicKeyInput");

const utilsButtonEle = document.getElementById("utils-button");
const utilsEle = document.getElementById("utils");

const utilsHex2strInputEle = document.getElementById("utilsHex2strInput");
const utilsStr2hexInputEle = document.getElementById("utilsStr2hexInput");
const utilsHex2intInputEle = document.getElementById("utilsHex2intInput");
const utilsInt2hexInputEle = document.getElementById("utilsInt2hexInput");
const utilsReverseHexInputEle = document.getElementById("utilsReverseHexInput");
const utilsAddress2scriptHashInputEle = document.getElementById("utilsAddress2scriptHashInput");
const utilsScriptHash2addressInputEle = document.getElementById("utilsScriptHash2addressInput");
const utilsHex2strOutputEle = document.getElementById("utilsHex2strOutput");
const utilsStr2hexOutputEle = document.getElementById("utilsStr2hexOutput");
const utilsHex2intOutputEle = document.getElementById("utilsHex2intOutput");
const utilsInt2hexOutputEle = document.getElementById("utilsInt2hexOutput");
const utilsReverseHexOutputEle = document.getElementById("utilsReverseHexOutput");
const utilsAddress2scriptHashOutputEle = document.getElementById("utilsAddress2scriptHashOutput");
const utilsScriptHash2addressOutputEle = document.getElementById("utilsScriptHash2addressOutput");

let isUtilsOpen;
function toggleUtils() {
  if (isUtilsOpen) {
    utilsEle.classList.remove("active");
  } else {
    utilsEle.classList.add("active");
  }
  isUtilsOpen = !isUtilsOpen;
}

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
  errorEle.innerHTML = syntaxHighlight(error);
}

function startLoading() {
  clearText();
  loadingEle.style = 'display: block;';
}

function stopLoading() {
  loadingEle.style = 'display: none;';
}

stopLoading();

function getProvider() {
  clearText();
  ontDapi.getProvider()
  .then(handleSuccess)
  .catch(handleError);
}

function getNetworks() {
  clearText();
  ontDapi.getNetworks()
  .then(handleSuccess)
  .catch(handleError);
}

function getAccount() {
  startLoading();

  ontDapi.getAccount()
  .then(accountData => {
    accountEle.innerHTML = `Connected Account: ${accountData.address}`;
    disconnectEle.innerHTML = 'disconnect';
    handleSuccess(accountData);
  })
  .catch(handleError);
}

function getPublicKey() {
  startLoading();

  ontDapi.getPublicKey()
  .then(handleSuccess)
  .catch(handleError);
}

function getNodeCount() {
  startLoading();
  ontDapi.network.getNodeCount({
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBlockHeight() {
  startLoading();
  ontDapi.network.getBlockHeight({
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getMerkleProof() {
  startLoading();
  ontDapi.network.getMerkleProof({
    txHash: getMerkleProofInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getTransaction() {
  startLoading();
  ontDapi.tx.getTransaction({
    txHash: getTransactionInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBlock() {
  startLoading();
  ontDapi.network.getBlock({
    block: getBlockEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getSmartCodeEvent() {
  startLoading();
  ontDapi.tx.getSmartCodeEvent({
    value: getSmartCodeEventInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getContract() {
  startLoading();
  ontDapi.sc.getContract({
    hash: getContractInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getStorage() {
  startLoading();
  ontDapi.sc.getStorage({
    contract: getStorageScriptHashEle.value,
    key: getStorageKeyEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBalance() {
  startLoading();
  ontDapi.assets.getBalance({
    address: getBalanceInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBlockHeightByTxHash() {
  startLoading();
  ontDapi.tx.getBlockHeightByTxHash({
    hash: getBlockHeightByTxHashInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getAllowance() {
  startLoading();
  ontDapi.assets.getAllowance({
    asset: getAllowanceAssetInputEle.value,
    from: getAllowanceFromInputEle.value,
    to: getAllowanceToInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function invokeRead() {
  try {
    startLoading();
    ontDapi.sc.invokeRead({
      scriptHash: invokeReadScriptHashEle.value,
      operation: invokeReadOperationEle.value,
      args: invokeReadArgsEle.value && JSON.parse(invokeReadArgsEle.value),
      network: networksEle.value,
    })
    .then(handleSuccess)
    .catch(handleError);
  } catch (err) {
    handleError('invalid JSON input');
  }
}

function invoke() {
  try {
    startLoading();
    ontDapi.sc.invoke({
      scriptHash: invokeScriptHashEle.value,
      operation: invokeOperationEle.value,
      args: invokeArgsEle.value && JSON.parse(invokeArgsEle.value),
      gasPrice: gasPriceEle.value,
      gasLimit: gasLimitEle.value,
      network: networksEle.value,
    })
    .then(handleSuccess)
    .catch(handleError);
  } catch (err) {
    handleError('invalid JSON input');
  }
}

function deploy() {
  try {
    startLoading();
    ontDapi.sc.deploy({
      name: deployNameEle.value,
      version: deployVersionEle.value,
      author: deployAuthorEle.value,
      email: deployEmailEle.value,
      description: deployDescriptionEle.value,
      needStorage: deployNeedStorageEle.checked,
      gasPrice: deployGasPriceEle.value,
      gasLimit: deployGasLimitEle.value,
      code: deployCodeEle.value,
      network: networksEle.value,
    })
    .then(handleSuccess)
    .catch(handleError);
  } catch (err) {
    handleError('invalid JSON input');
  }
}

function send() {
  try {
    startLoading();
    ontDapi.assets.send({
      to: sendToAddressEle.value,
      amount: sendAmountEle.value,
      asset: sendAssetEle.value,
      network: networksEle.value,
    })
    .then(handleSuccess)
    .catch(handleError);
  } catch (err) {
    handleError('invalid JSON input');
  }
}

function signMessage() {
  try {
    startLoading();
    ontDapi.message.signMessage({
      message: signMessageInputEle.value,
    })
    .then(handleSuccess)
    .catch(handleError);
  } catch (err) {
    handleError('invalid JSON input');
  }
}

function verifyMessage() {
  try {
    startLoading();
    ontDapi.message.verifyMessage({
      message: verifyMessageInputEle.value,
      data: verifyMessageSignatureInputEle.value,
      publicKey: verifyMessagePiblicKeyInputEle.value,
    })
    .then(handleSuccess)
    .catch(handleError);
  } catch (err) {
    handleError('invalid JSON input');
  }
}

function requestTestnetOng() {
  clearText();
  ontDapi.getAccount()
  .then(({address}) => fetch(`https://ont.io/api/v1/asset/transfer/${address}`))
  .then(data => data.json())
  .then(res => {
    return res.Error ?
      'Testnet ONG has already been requested with this account once before. Please request with a different account.' :
      'Request successful! ONG should be in your account shortly.';
  })
  .then(handleSuccess)
  .catch(handleError);
}

function disconnect() {
  ontDapi.disconnect()
  .then(data => {
    accountEle.innerHTML = '';
    disconnectEle.innerHTML = '';
    return data;
  })
  .then(handleSuccess)
  .catch(handleError);
}

function utilsString() {
  const hex2strResult = utilsHex2strInputEle.value ? ontDapi.utils.hex2str(utilsHex2strInputEle.value) : '';
  const str2hexResult = utilsStr2hexInputEle.value ? ontDapi.utils.str2hex(utilsStr2hexInputEle.value) : '';

  utilsHex2strOutputEle.innerHTML = hex2strResult;
  utilsStr2hexOutputEle.innerHTML = str2hexResult;
}

function utilsInteger() {
  const hex2intResult = utilsHex2intInputEle.value ? ontDapi.utils.hex2int(utilsHex2intInputEle.value) : '';
  const int2hexResult = utilsInt2hexInputEle.value ? ontDapi.utils.int2hex(utilsInt2hexInputEle.value) : '';

  utilsHex2intOutputEle.innerHTML = hex2intResult;
  utilsInt2hexOutputEle.innerHTML = int2hexResult;
}

function utilsReverseHex() {
  const reversehexResult = utilsReverseHexInputEle.value ? ontDapi.utils.reverseHex(utilsReverseHexInputEle.value) : '';

  utilsReverseHexOutputEle.innerHTML = reversehexResult;
}

function utilsAddress() {
  const address2scriptHashResult = utilsAddress2scriptHashInputEle.value ? ontDapi.utils.address2scriptHash(utilsAddress2scriptHashInputEle.value) : '';
  const scriptHash2addressResult = utilsScriptHash2addressInputEle.value ? ontDapi.utils.scriptHash2address(utilsScriptHash2addressInputEle.value) : '';

  utilsAddress2scriptHashOutputEle.innerHTML = address2scriptHashResult;
  utilsScriptHash2addressOutputEle.innerHTML = scriptHash2addressResult;
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

if (ontDapi.isAvailable) {
  console.log('in o3 dapp browser')
}

ontDapi.addEventListener(ontDapi.Constants.EventName.CONNECTED, data => {
  accountEle.innerHTML = `Connected Account: ${data.address}`;
  disconnectEle.innerHTML = 'disconnect';
});

ontDapi.addEventListener(ontDapi.Constants.EventName.ACCOUNT_CHANGED, data => {
  accountEle.innerHTML = `Connected Account: ${data.address}`;
  disconnectEle.innerHTML = 'disconnect';
});

ontDapi.addEventListener(ontDapi.Constants.EventName.DISCONNECTED, data => {
  accountEle.innerHTML = '';
  disconnectEle.innerHTML = '';
  clearText();
});

['MainNet', 'TestNet'].forEach(network => {
  const option = document.createElement('option');
  if (network === 'MainNet') {
    option.selected = 'selected';
  }
  option.value = network;
  option.label = network;
  option.innerHTML = network;
  networksEle.append(option);
});

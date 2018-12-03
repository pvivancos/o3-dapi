const errorEle = document.getElementById("error");
const resultEle = document.getElementById("result");
const loadingEle = document.getElementById("loading");
const networksEle = document.getElementById("networks");

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
  o3dapi.ONT.getProvider()
  .then(handleSuccess)
  .catch(handleError);
}

function getNetworks() {
  clearText();
  o3dapi.ONT.getNetworks()
  .then(handleSuccess)
  .catch(handleError);
}

function getAccount() {
  clearText();
  o3dapi.ONT.getAccount()
  .then(handleSuccess)
  .catch(handleError);
}

function getNodeCount() {
  startLoading();
  o3dapi.ONT.getNodeCount({
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBlockHeight() {
  startLoading();
  o3dapi.ONT.getBlockHeight({
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getMerkleProof() {
  startLoading();
  o3dapi.ONT.getMerkleProof({
    txHash: getMerkleProofInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getTransaction() {
  startLoading();
  o3dapi.ONT.getTransaction({
    txHash: getTransactionInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBlock() {
  startLoading();
  o3dapi.ONT.getBlock({
    block: getBlockEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getSmartCodeEvent() {
  startLoading();
  o3dapi.ONT.getSmartCodeEvent({
    value: getSmartCodeEventInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getContract() {
  startLoading();
  o3dapi.ONT.getContract({
    hash: getContractInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getStorage() {
  startLoading();
  o3dapi.ONT.getStorage({
    contract: getStorageScriptHashEle.value,
    key: getStorageKeyEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBalance() {
  startLoading();
  o3dapi.ONT.getBalance({
    address: getBalanceInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getBlockHeightByTxHash() {
  startLoading();
  o3dapi.ONT.getBlockHeightByTxHash({
    hash: getBlockHeightByTxHashInputEle.value,
    network: networksEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function getAllowance() {
  startLoading();
  o3dapi.ONT.getAllowance({
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
    o3dapi.ONT.invokeRead({
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
    o3dapi.ONT.invoke({
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
    o3dapi.ONT.deploy({
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
    o3dapi.ONT.send({
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


// function getGasPrice() {
//   startLoading();
//   o3dapi.ONT.getGasPrice({
//     network: networksEle.value,
//   })
//   .then(handleSuccess)
//   .catch(handleError);
// }

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

o3dapi.initPlugins([o3dapiOnt]);

if (o3dapi.ONT.isAvailable) {
  console.log('in o3 dapp browser')
}

o3dapi.ONT.addEventListener(o3dapi.ONT.Constants.EventName.READY, onReady);

function onReady() {
  o3dapi.ONT.getNetworks()
  .then(networks => {
    networks.forEach(network => {
      const option = document.createElement('option');
      if (network === 'TestNet') {
        option.selected = 'selected';
      }
      option.value = network;
      option.label = network;
      networksEle.append(option);
    });
  });
};

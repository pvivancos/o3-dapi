
const errorEle = document.getElementById("error");
const resultEle = document.getElementById("result");
const loadingEle = document.getElementById("loading");
const balanceInputEle = document.getElementById("balanceInput");
const invokeReadScriptHash = document.getElementById("invokeReadScriptHash");
const invokeReadOperation = document.getElementById("invokeReadOperation");
const invokeReadArgs = document.getElementById("invokeReadArgs");

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

function getNetwork() {
  web3neo.getNetwork()
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

function invokeRead() {
  startLoading();
  web3neo.invokeRead({
    scriptHash: invokeReadScriptHash.value,
    operation: invokeReadOperation.value,
    args: invokeReadArgs.value,
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

var app = new Vue({
	el: '#app',
	data: {
		getStorageInput: {
			scriptHash: "c36aee199dbba6c3f439983657558cfb67629599",
			key: "bd097b2fcf70e1fd30a5c3ef51e662feeafeba01",
			network: "MainNet",
		},
		getBalanceInput: {
			params: [{
				"address": "AScKxyXmNtEnTLTvbVhNQyTJmgytxhwSnM",
				"assets": ["GAS"]
			}],
			network: "MainNet",
		},
		invokeReadInput: {
			scriptHash: "c36aee199dbba6c3f439983657558cfb67629599",
			operation: "balanceOf",
			args:[{"type":"ByteArray","value":"bd097b2fcf70e1fd30a5c3ef51e662feeafeba01"}],
			network: "MainNet",
		},
		invokeInput: {
			scriptHash: "c36aee199dbba6c3f439983657558cfb67629599",
			operation: "transfer",
			args: [{"type":"ByteArray","value":""},{"type":"ByteArray","value":""},{"type":"ByteArray","value":"0100000000000000"}],
			fee: "0.11",
			network: "MainNet",
			triggerContractVerification: false,
		},
		sendInput: {
			fromAddress: "ANtdacYPFN6zkarDwVt5vH55FKsJU8SapW",
			toAddress: "ANtdacYPFN6zkarDwVt5vH55FKsJU8SapW",
			asset: "GAS",
			amount: "1",
			remark: "TestRemark",
			fee: "0.011",
			network: "MainNet",
		},
		signMessageInput:{
			message: "Here is a message",
		},
		verifyMessageInput:{
			message: "Here is a message",
			data: "",
			publicKey: "",
		}
	},
	methods: {
		formatInput(json) {
			return JSON.stringify(json, null, "\t");
		}
	}
})


const networksEle = document.getElementById("networks");


function getProvider(elem) {
	o3dapi.NEO.getProvider()
	.then(function(data){
		const formatted = syntaxHighlight(data);
		document.getElementById(elem).innerHTML = formatted;
	})
	.catch(function(error){
		document.getElementById(elem).innerHTML = syntaxHighlight(error);
	});
}

function getNetworks(elem) {
	o3dapi.NEO.getNetworks()
	.then(function(data){
		const formatted = syntaxHighlight(data);
		document.getElementById(elem).innerHTML = formatted;
	})
	.catch(function(error){
		document.getElementById(elem).innerHTML = syntaxHighlight(error);
	});
}

function getAccount(elem) {
	o3dapi.NEO.getAccount()
	.then(accountData => {
		const formatted = syntaxHighlight(accountData);
		document.getElementById(elem).innerHTML = formatted;
	})
	.catch(function(error){
		document.getElementById(elem).innerHTML = syntaxHighlight(error);
	});
}


function getPublicKey(elem) {
	o3dapi.NEO.getPublicKey()
	.then(function(data){
		const formatted = syntaxHighlight(data);
		document.getElementById(elem).innerHTML = formatted;
	})
	.catch(function(error){
		document.getElementById(elem).innerHTML = syntaxHighlight(error);
	});
}


function getBalance(inputElement, resultElem) {
	try {
		o3dapi.NEO.getBalance(JSON.parse(document.getElementById(inputElement).value))
		.then(function(data){
			const formatted = syntaxHighlight(data);
			document.getElementById(resultElem).innerHTML = formatted;
		})
		.catch(function(error){
			document.getElementById(resultElem).innerHTML = syntaxHighlight(error);
		});
	} catch (err) {
		document.getElementById(resultElem).innerHTML = 'invalid JSON input';
	}
}

function getStorage(inputElement, resultElem) {
	o3dapi.NEO.getStorage(JSON.parse(document.getElementById(inputElement).value))
	.then(function(data){
		const formatted = syntaxHighlight(data);
		document.getElementById(resultElem).innerHTML = formatted;
	})
	.catch(function(error){
		document.getElementById(resultElem).innerHTML = syntaxHighlight(error);
	});
}


function invokeRead(inputElement, resultElem) {
	try {
		o3dapi.NEO.invokeRead(JSON.parse(document.getElementById(inputElement).value))
		.then(function(data){
			const formatted = syntaxHighlight(data);
			document.getElementById(resultElem).innerHTML = formatted;
		})
		.catch(function(error){
			document.getElementById(resultElem).innerHTML = syntaxHighlight(error);
		});
	} catch (err) {
		document.getElementById(resultElem).innerHTML = 'invalid JSON input';
	}
}

function invoke(inputElement, resultElem) {
	try {
		o3dapi.NEO.invoke(JSON.parse(document.getElementById(inputElement).value))
		.then(function(data){
			const formatted = syntaxHighlight(data);
			document.getElementById(resultElem).innerHTML = formatted;
		})
		.catch(function(error){
			document.getElementById(resultElem).innerHTML = syntaxHighlight(error);
		});
	} catch (err) {
		document.getElementById(resultElem).innerHTML = 'invalid JSON input';
	}
}


function send(inputElement, resultElem) {
	try {
		o3dapi.NEO.send(JSON.parse(document.getElementById(inputElement).value))
		.then(function(data){
			const formatted = syntaxHighlight(data);
			document.getElementById(resultElem).innerHTML = formatted;
		})
		.catch(function(error){
			document.getElementById(resultElem).innerHTML = syntaxHighlight(error);
		});
	} catch (err) {
		document.getElementById(resultElem).innerHTML = 'invalid JSON input';
	}
}

function signMessage(inputElement, resultElem) {
	try {
		o3dapi.NEO.signMessage(JSON.parse(document.getElementById(inputElement).value))
		.then(function(data){
			const formatted = syntaxHighlight(data);
			document.getElementById(resultElem).innerHTML = formatted;
		})
		.catch(function(error){
			document.getElementById(resultElem).innerHTML = syntaxHighlight(error);
		});
	} catch (err) {
		document.getElementById(resultElem).innerHTML = 'invalid JSON input';
	}
}


function verifyMessage(inputElement, resultElem) {
	try {
		o3dapi.NEO.verifyMessage(JSON.parse(document.getElementById(inputElement).value))
		.then(function(data){
			const formatted = syntaxHighlight(data);
			document.getElementById(resultElem).innerHTML = formatted;
		})
		.catch(function(error){
			document.getElementById(resultElem).innerHTML = syntaxHighlight(error);
		});
	} catch (err) {
		document.getElementById(resultElem).innerHTML = 'invalid JSON input';
	}
}


function deploy() {

}

//utilties section
function hex2str(inputElement, resultElem){
	document.getElementById(resultElem).innerHTML =  o3dapi.utils.hex2str(document.getElementById(inputElement).value)
}

function str2hex(inputElement, resultElem){
	document.getElementById(resultElem).innerHTML =  o3dapi.utils.str2hex(document.getElementById(inputElement).value)
}


function hex2int(inputElement, resultElem){
	document.getElementById(resultElem).innerHTML =  o3dapi.utils.hex2int(document.getElementById(inputElement).value)
}

function int2hex(inputElement, resultElem){
	document.getElementById(resultElem).innerHTML =  o3dapi.utils.int2hex(document.getElementById(inputElement).value)
}

function reverseHex(inputElement, resultElem){
	document.getElementById(resultElem).innerHTML =  o3dapi.utils.reverseHex(document.getElementById(inputElement).value)
}

function address2scripthash(inputElement, resultElem){
	document.getElementById(resultElem).innerHTML =  o3dapi.utils.address2scriptHash(document.getElementById(inputElement).value)
}

function scripthash2address(inputElement, resultElem){
	document.getElementById(resultElem).innerHTML =  o3dapi.utils.scriptHash2address(document.getElementById(inputElement).value)
}


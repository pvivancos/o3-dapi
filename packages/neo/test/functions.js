
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

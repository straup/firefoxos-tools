$(document).ready(function(){

    var manifest_url = "BOILERPLATE://MANIFEST";

    request.onerror = function(e) {
	console.log("Unable to determine install-iness because: " + request.error.name);
    };

    request.onsuccess = function(e){

	if (request.result) {
	    $("#install-me").remove();
	}
    };

    $("#install").click(function(){

	try {
	    var myapp = navigator.mozApps.install(manifest_url);

	    myapp.onsuccess = function(data){
		alert("OKAY!");
		$("#install-me").remove();
	    };

	    myapp.onerror = function(){
		alert("Hrm... the installation failed because: " + this.error.name);
	    };
	}

	catch (e){
	    alert("Hrm... the installation was not possible because: " + e.message);
	}

    });

});

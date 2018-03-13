window.onload = (() => {

    lix = ((text) => {
	let warray = text.split(" ");
	let scarray = text.split(".");
	let wc = warray.length;
	let sc = scarray.length;

	var lwc = 0;

	for (var i = 0; i < wc; i++) {
	    if (warray[i].length > 6) {
		lwc++;
	    }
	}

	return (wc / sc) + ((lwc * 95) / wc);
    });
    
    calculate = (() => {

	document.getElementById("lixval").innerHTML = lix(document.getElementById("main-input").value);

	let inputel = document.getElementById("main-input");
	let outputel = document.getElementById("main-output");
	
	let scarray = inputel.value.split(".");
	let sc = scarray.length;

	inputel.style.display = "none";
	outputel.style.display = "inherit";
	
	for (var i = 0; i < sc; i++) {

	    let color = Math.round(((lix(scarray[i]) - 0) / 100) * 255);

	    console.log(lix(scarray[i]));
	    console.log(color);
	    console.log(255-color);
	    
	    outputel.innerHTML = outputel.innerHTML+"<p style=background-color:rgb("+color+","+Math.round(255-color)+",0)>"+scarray[i]+".</p>";
	}
    });
});

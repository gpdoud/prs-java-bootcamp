function loaded(fromWho: string) {
	var labelCtrl = document.getElementById('txt');
	var hw:string = "<p>Hello, world from " + fromWho + "</p>";
	labelCtrl.innerHTML = hw;
}
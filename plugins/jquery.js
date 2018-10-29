
if (process.browser) {

	console.log('teste')
	global.jQuery = require('jquery');
	var $ = global.jQuery;
	window.$ = $;

  console.log(window.$)

 }
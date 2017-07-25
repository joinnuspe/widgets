'use strict';
	var me = this;
	var currency = 'PEN';
	var amount = 0;
	var customamount = 0;
		var template =  document.createElement('div');
		template.id='corona-box';
		template.innerHTML = '<a href="https://www.joinnus.com/PE/entretenimiento/piura-corona-sunsets-mancora-11801" target="_blank"><div class="corona-hidden">' +          
            '<div class="corona" style="">' +
            '<div class="corona-block">' +
           '<img class="corona-image" src="https://files.slack.com/files-pri/T39HS0AFQ-F6DNQ0345/widgetcorona.png">' +
            '</div></div></div></a>'
		document.body.appendChild(template);

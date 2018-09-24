var sendNopeSMS = function(event) {
	console.log(event);
	let number = event.data.address;
		if (SMS) {
	    SMS.sendSMS(
	        number, 
	        "Nope", 
	        function(data){console.log('success',data)}, 
	        function(err){console.log('err sendin sms',err)}
	    );
	  }
}

function toggleNopeOnOffButton(state) {
	if (state === 'on') {
		document.getElementById('nope-on-button-div').style.display = 'none';
		document.getElementById('nope-off-button-div').style.display = 'block';
		document.getElementById('instructions-text').innerHTML = "Tap to stop replying 'Nope'";
	} else if (state = 'off') {
		document.getElementById('nope-off-button-div').style.display = 'none';
		document.getElementById('nope-on-button-div').style.display = 'block';
		document.getElementById('instructions-text').innerHTML = "Tap to reply 'Nope' to anyone who texts you";
	}
}

function turnNopeOffHandler() {
	document.removeEventListener(
		'onSMSArrive', 
  	 sendNopeSMS
  );
  toggleNopeOnOffButton('off');
}

// Turn on text message listener
function turnNopeOnHandler() {
	document.addEventListener(
		'onSMSArrive',
		sendNopeSMS
  );
  toggleNopeOnOffButton('on');
}


const { Client } = require('tplink-smarthome-api');
const batteryLevel = require('battery-level');

plugIP = '10.0.0.27';
lowerLevel = 0.2;
upperLevel = 0.8;

batteryLevel().then(level => {
	console.log(level);
	if (level <= lowerLevel){
		const client = new Client();
		const plug = client.getDevice({host:plugIP}).then((device)=>{
			device.getSysInfo().then(console.log);
			device.setPowerState(true);
		});
	} else if (level >= upperLevel){
		const client = new Client();
		const plug = client.getDevice({host:plugIP}).then((device)=>{
			device.getSysInfo().then(console.log);
			device.setPowerState(false);
		});
	}
});


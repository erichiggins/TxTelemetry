/**
 * TxTelemetry.js 0.0.1
 * (c) 2012-2013 Eric Higgins <erichiggins@gmail.com>
 * TxTelemetry may be freely distributed under the MIT license.
 * Documentation:
 * https://github.com/erichiggins/TxTelemetry
 **/
// Logs location details every minute.
console.info('Started');
// Get location data.
var locListen = device.location.createListener('GPS', 60 * 1000);
locListen.stop();

locListen.on('changed', function(signal) {
    console.info(
        'Loc: ' + signal.location.latitude +
        ', ' + signal.location.longitude + '\n' +
        'Alt: ' + signal.location.altitude + '\n' +
        'Spd: ' + signal.location.speed + '\n' +
        'Dir: ' + signal.location.course);
    device.messaging.sendSms({
            // Change this before using!!
            // Recipient phone number.
            to: '000-000-0000',
            body: 'Location: ' + signal.location.latitude +
                ', ' + signal.location.longitude + '\n' +
                'Altitude: ' + signal.location.altitude + 'm\n' +
                'Speed: ' + signal.location.speed + 'm/s\n' +
                'Direction: ' + signal.location.course + 'degrees east of true north\n\n' +
                'Vertical Accuracy: ' + (signal.location.verticalAccuracy || '?') + 'm\n' +
                'Horizontal Accuracy: ' + (signal.location.horizontalAccuracy || '?') + 'm\n'
        },
    function(err) {
            console.log(err || 'location txt was sent successfully!');
    });
    //console.log('Stopping GPS listener.');
    //locListen.stop();
});
console.info('Starting GPS listener.');
locListen.start();

require('../../assets/js/node.js')
var socket = io.connect("http://localhost:3000");

socket.on('quit', function (data) {
        status('Client ' + data.cid + ' quits!');
    });

socket.on('join', function (data) {
        status('Client ' + data.cid + ' joins!');
    });

socket.on('broadcast', function (data) {
        $('#thread').append($('<div>').html('client ' + data.cid + ' says:<br/>' + data.w));
    });

var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port:8080});
var sf = new Array();
wss.on('connection',connection);
function connection(ws)
{
    //console.log(ws);
    sf.push(ws);
    ws.on('message',incoming);

}
function incoming(message)
{
    //console.log(message);
    for(var i=0;i<sf.length;i++)
    {
        sf[i].send(message);
    }
}
console.log("listen 8080");
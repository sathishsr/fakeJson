var express = require('express');
var app = express();
var fs = require("fs");
let server = require('http').Server(app);

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "db.json", 'utf8', function (err, data) {
      console.log( 'asassas' +data );
      res.end( data );
   });
})

const port = process.env.PORT || 8000;
server.listen(port, () => {
   console.log("App is running on port " + port);
});
// var server = app.listen(process.env.PORT || 3000, function(){
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })
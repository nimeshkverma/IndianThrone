var express = require('express');
var app = express();
var PORT = 9000;
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + '/client'));

// any API endpoints go here, declared before 'app.all'

// serve index.html for all remaining routes, in order to leave routing up to angular
app.all("/*", function(req, res, next) {
    res.sendfile("index.html", { root: __dirname + "/client" });
});

app.listen(process.env.PORT || PORT, function() {
	console.log("Listening on port" + PORT);
});

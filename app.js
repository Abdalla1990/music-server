const express = require('express');

var app = express();
app.use('/public', express.static(__dirname + '/public'));
var port = process.env.PORT || 3003;
app.get('/', (req, res) => {

    return res.redirect('/public/player/index.html');

});






app.listen(port, function() {
    console.log(`server is running on port number : ${port}`);
});
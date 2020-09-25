var express = require('express');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');
//增加靜態檔案的路徑
app.use(express.static('public'));

var admin = require("firebase-admin");

var serviceAccount = require("node-expressFirebase-init.json");

var fireData = admin.database();
console.log(fireData);


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://node-5b5b4.firebaseio.com"
});


// 增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//路由
app.get('/', function(req, res) {
    res.render('index');
})

// 監聽 port
var port = process.env.PORT || 3000;
app.listen(port);
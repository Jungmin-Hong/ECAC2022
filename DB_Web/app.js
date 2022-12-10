const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

const mysql = require('mysql');

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ecac2022',
    database : 'ecac'
});

/*con.connect(function(err){
    if (err) throw err;
    console.log('Connected');
});*/

app.get('/', (req, res) => {
    const sql = "select P.Name, M.ID, M.PhoneNum, M.PerHash, P.ActName, P.ActDate, P.HostOrg from memberlist M join participantslist P on M.PhoneNum = P.PhoneNum";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.render('joinres', {joinres : result});
    });
});

app.listen(port, () => console.log('Example app listening on port ${port}!'))

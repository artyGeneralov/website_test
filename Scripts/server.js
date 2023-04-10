const express = require('express');
const mongo = require('mongodb').MongoClient;
const path = require('path');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..'), {extensions: ['html']}));

const url = 'mongodb+srv://admo:b3ar@testcluster1.xlcewrk.mongodb.net/myFirstDatabase';
const dbName = 'myFirstDatabase'
let db;

mongo.connect(url, {useUnifiedTopology: true}, (err,client) => {
	if(err) return console.log(err);
	db = client.db(dbName);
});


app.post('/admin_page', (req, res) => {
	db.collection('products').insertOne(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved  to db');
		res.redirect('/');
	});
});

app.get('/products',(req,res)=>{
	db.collection('products').find().toArray((err,result)=>{
		if(err) return console.log(err);
		res.send(result);
	});
});

'use strict'

var express = require('express');
var studnetCtl = require('./students/');
var clientWeb = require('./API');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/API/includes'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var webController = new clientWeb();
var StudentsController = new studnetCtl();

//obtaining url
app.all('*', function(req,res,next){
    console.log("connection was successfull");
    req.next();
});

//show all students 
//config the url students
app.get('/api',function(req,res){
	//console log successfull connection
	console.log("connection request 'api' was successfull");
	//activiting query to search by all students
	res.send(webController.generateWeb());
});

//show all students 
//config the url students
app.get('/students',function(req,res){
	//console log successfull connection
	console.log("connection request 'show all students' was successfull");
	//activiting query to search by all students
	StudentsController.showAllStudents(function(data){
		res.json(data);
	})
});

//show students by id 
//config the url Id
app.get('/showId/:id', function(req, res){
	console.log("connection request 'show student by Id' was successfull");
	//getting from url the ID
	var id = req.params.id;
	//activiting query to search by ID
    StudentsController.showStudentsById(id,function(data){
        res.json(data);
    })
});

//show student by year
//config the url Year
app.get('/showYear/:year', function(req, res, value){
	console.log("connection request 'show student by Year' was successfull");
	//getting from url the year
	var year = req.params.year;
	//activiting query to search by year
    StudentsController.showStudentsByYear(year, function(data){
        res.json(data);
    })
});

app.listen(port);
console.log("listening on port: " + port);
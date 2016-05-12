"use strict";

var fileSystem = require('fs');
var mongoose = require('mongoose');

class clientWeb {



    generateWeb(){
    	return ('<!doctype html><html><head><link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"><script src="assets/bootstrap/js/bootstrap.min.js"></script><script src="assets/includes/jquery-2.1.4.min.js"></script><link href=assets/style.css rel=stylesheet><title>Yossi Azoulay Ex-1</title></head><body><div id="wrapper"><header><h1><a href="index.html" id="logo">API<span>-student</span></a></h1></header><div id=maint><h1>Web-Services-ex1</h1><br><h3>Getting Started</h3><br>instructions: In the URL insert the following to receive<br><h3>Show All students</h3><br>URL: /students (default one)<br><hr><br>https://infinite-refuge-73334.herokuapp.com/students<br>[<br>{<br>name: "yossi azoulay",<br>grade: "100",<br>id: "300",<br>year: "2016"<br>},<br>{<br>name: "noam roiz",<br>grade: "80",<br>id: "301",<br>year: "2000"<br>},<br>{<br>name: "sami boreks",<br>grade: "70",<br>id: "302",<br>year: "2005"<br>},<br>{<br>name: "orna daza",<br>grade: "60",<br>id: "303",<br>year: "1980"<br>},<br>{<br>name: "moshe yanai",<br>grade: "50",<br>id: "303",<br>year: "1950"<br>},<br>{<br>name: "foshiko azoulay",<br>grade: "100",<br>id: "304",<br>year: "2015"<br>}<br>]<br>```<br><h3>Show student by ID</h3><br>URL: /showId/XXX - numbers are from 300 - 304<br><hr><br>https://infinite-refuge-73334.herokuapp.com/showId/300<br>[<br>{<br>name: "yossi azoulay",<br>grade: "100",<br>id: "300",<br>year: "2016"<br>}<br>]<br>```<br><h3>Show student by Year</h3><br>URL: /showYear/XXXX - vaild numbers 1950,1980,2000,2005,2015,2016<br><hr><br>https://infinite-refuge-73334.herokuapp.com/showYear/2015<br>[<br>{<br>name: "foshiko azoulay",<br>grade: "100",<br>id: "304",<br>year: "2015"<br>}]<br><hr><br>## END<br>Author: Yossi Azoulay<hr><br></div></div></body></html>');
    }
}


module.exports = clientWeb;
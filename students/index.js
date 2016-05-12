"use strict";

var fileSystem = require('fs');
var mongoose = require('mongoose');
//requireing Schema 
var Student = require('./student');
//connection information to DB
var db = mongoose.connect('mongodb://yossi:Yossia89@ds023550.mlab.com:23550/gradea89');

var conn  = mongoose.connection;
conn.once('open', function(){
    console.log('~ connected To mongoose ~');
});

class studnetCtl{
    constructor(){

    }
    //Getting all students from DB
	//plus console log students 
    showAllStudents(callback){
        if(mongoose.connection.readyState){
            Student.find({},function(err,stud){
                if(err) throw err;
                console.log(stud);
                callback(stud);
            });
        }
    }

	//Getting all students from DB then searching for exact match with ID and returning the student
	//plus console log ID and student
    showStudentsById(studentID, callback){
        console.log("Show student by Id");
        if(mongoose.connection.readyState){
            Student.find({id: studentID} ,function(err,stud){
                if(err) throw err;
                console.log("Found id: " + studentID);
                console.log("Student details:")
                console.log(stud);
                callback(stud);
            });
        }
    }
    
    //Getting all students from DB then searching for exact match with Year and returning the student
	//plus console log students from that year
    showStudentsByYear(studentYear, callback){
        console.log("Show student by Year");
        if(mongoose.connection.readyState){
            Student.find({year: studentYear} ,function(err,stud){
                if(err) throw err;
                console.log("Found Year: " + studentYear);
                console.log("Student details:")
                console.log(stud);
                callback(stud);
            });
        }
    }
}

module.exports = studnetCtl;
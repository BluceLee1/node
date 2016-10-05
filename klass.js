var teacher = require('./teacher');
var student = require('./student');


function add(teacher, students){
	teacher.add(teacher);
	students.forEach(function(item, index){
		student.add(item);
	});
}

exports.add = add;
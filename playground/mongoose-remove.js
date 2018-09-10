const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '5b96a556b107a328bb0603fa'}).then((todo) => {

});

Todo.findByIdAndRemove('5b96a556b107a328bb0603fa').then((todo) => {
	console.log(todo);
});
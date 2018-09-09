//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5b94ddfdb107a328bb05eb66')
	// }, {
	// 	$set: {
	// 		completed:true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) =>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b93e34a1ca5042994180224')
	}, {
		$set: {
			name:'Sapir'
		}, 
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) =>{
		console.log(result);
	});
	//db.close();
});
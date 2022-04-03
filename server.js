const express = require(‘express’)
const app = express()
const port = 3000

app.get(‘/’, (req, res) => {
	res.send(‘Hello World!’)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/signup/', (req,res) => {

	var user = new User(req.header('name'), req.header('age'), req.header('sex'),
		req.header('sex'), req.header('city'), req.header('bench'), req.header('squat'),
		req.header('deadlift'));

	console.log(JSON.stringify(user))
})

app.get('/send/', (req,res) => {

	var message = new Msg(req.header('sender'),req.header('receiver'), req.header('content'))
	console.log(JSON.stringify(user))

})

class User{
	name;
	age;
	sex;
	city;
	email;
	pass;
	bench;
	squat;
	deadlift;
	messages;

	constructor(n,a,s,c,b,sq,d){
		this.name = n;
		this.age = a;
		this.sex = s;
		this.city = c;
		this.bench = b;
		this.squat = sq;
		this.deadlift = d;
		this.messgaes = [];

	}
}

class Msg{
	sender;
	receiver;
	content;

	constructor(s,r,c){
		this.sender = s;
		this.receiver = r;
		this.content = c;
	}
}

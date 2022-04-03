import React, { useState } from "react";
import MessageList from './MessageList';
import Button from 'react-native';
const ContactForm = ({navigation}) => {
	const [status, setStatus] = useState("Submit");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		let response = await fetch("http://localhost:5000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	};
	return (
		<form onSubmit={handleSubmit}>
		<div>
		<label htmlFor="name">Name:</label>
		<input type="text" id="name" required />
		</div>
		<div>
		<label htmlFor="age">Age:</label>
		<input type="text" id="age" required />
		</div>
		<div>
		<label htmlFor="sex">Sex:</label>
		<input type="text" id="sex" required />
		</div>
		<div>
		<label htmlFor="city">City:</label>
		<input type="text" id="city" required />
		</div>
		<div>
		<label htmlFor="email">Email:</label>
		<input type="text" id="email" required />
		</div>
		<div>
		<label htmlFor="password">Password:</label>
		<input type="text" id="password" required />
		</div>
		<div>
		<label htmlFor="city">City:</label>
		<input type="text" id="city" required />
		</div>
		<div>
		<label htmlFor="bench">Bench:</label>
		<input type="text" id="bench" required />
		</div>
		<div>
		<label htmlFor="deadlift">Deadlift:</label>
		<input type="text" id="deadlift" required />
		</div>
		<div>
		<label htmlFor="squat">Squat:</label>
		<input type="text" id="squat" required />
		</div>
		<button title="Signup">{status}</button>
		</form>
	);
};

export default ContactForm;

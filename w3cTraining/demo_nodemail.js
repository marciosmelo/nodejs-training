var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'yourname@gmail.com',
		pass: 'pass'
	}

});

var mailOptions = {
	from: 'yourname@gmail.com',
	to: 'friend@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was very easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if (error){
		console.log(error);
	}else{
		console.log('Email sent: ' + info.response);
	}
});
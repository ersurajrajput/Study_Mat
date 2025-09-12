// var fs = require('fs');

// // fs.appendFile('mynewfile1.txt', ' This is my text1.', function (err) {
// //   if (err) throw err;
// //   console.log('Updated!');
// // });

// fs.unlink('new.txt',function(err){
//     if(err) throw err
//     console.log('file deleted')
// })
// const math = require('./math.js')
// console.log(math.add(2,3));
 
// const fs = require('fs')

// let result = fs.readFileSync('contact.txt','utf-8');
// console.log(result)
// let fss = require('./math')


// const fs = require('fs');

// fs.writeFileSync("justfun.txt","this is test")
var nodemailer = require('nodemailer');
// Function to generate OTP 


	// Declare a digits variable 
	// which stores all digits 
	let digits = '0123456789'; 
	let OTP = ''; 
	let len = digits.length 
	for (let i = 0; i < 4; i++) { 
		OTP += digits[Math.floor(Math.random() * len)]; 
	} 
 


console.log("OTP of 4 digits: ") 
console.log(OTP);




var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'suraj.rajput2023@glbajajgroup.org',
    pass: '#GLAp9dhxr#'
  }
});

var mailOptions = {
  from: 'suraj.rajput2023@glbajajgroup.org',
  to: 'surajrajput7668@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `your OTP is ${OTP}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
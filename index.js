const nodemailer = require('nodemailer');
require('dotenv').config();
const PORT = 3002;



    // Setting up the transport with nodemailer
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: { 
            user: process.env.EMAIL,
            pass: process.env.PASS

        }

    })


    // setting up mail options with message

    let mailOptions = {
        from: process.env.USER,
        to: req.body.email,
        subject: `Message from malanstaton@gmail.com`,
        html:`
            <h3>Confirmation Email</h3>
            <h4>Yep... it worked.</h4>
            <p>Thank you for signing up using my sign up web app demo. Your information will not be stored.
            </p>
        `
    }

    
    // Sending email with transport using 'sendMail'

    smtpTransport.sendMail(mailOptions,(error, response)=>{
            if(error){
                return console.log(error);
            }
               return console.log("Email sent!");
            
    })


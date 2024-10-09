import nodemailer from 'nodemailer'
import { emailBody } from './emailbody';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
 async function sendEmail(link: string,email:string) {
 try{
  
     // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Secure Login" <abdullahaaa4474032@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Verify your code", // Subject line
    html:emailBody(link), // html body
  });

 }catch(err: any){
    throw new Error(err.message);

 }
}

export default sendEmail
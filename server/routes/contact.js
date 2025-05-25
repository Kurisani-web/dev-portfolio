const express = require("express");
const Contact = require("../models/Contact");
const contactSchema = require("../validators/auth-validators");
const validate = require("../middleware/validate-middleware");
const nodemailer = require('nodemailer');
const router = express.Router();
// create a user uaing : POST "/auth/"
router.post(
  "/contact",validate(contactSchema),
  async (req, res) => {
    const data = req.body;
    try {
      const contact = new Contact(data);
      await contact.save();
      res.status(200).json({errors:"Data saved Successfully"});
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "kurisanimaluleke77@gmail.com",
          pass: "rgwyjjwrllvtqwvn",
        },
      });
      const sendEmail = () => {
        const name = data.name;
        const email = data.email;
        console.log(name,email);
       
        let mailOptions = {
            from: "kurisanimaluleke77@gmail.com",
            to:email,
            subject:"Thanks For Reaching Out!",
            text:`Hi ${name},
    
Thanks so much for reaching out through my developer portfolio website! I'm excited to hear from you and learn more about what you have in mind.
            
I've received your message and will get back to you as soon as possible, typically within [your response timeframe]. In the meantime, feel free to check out my portfolio at [your website link] for more information about my skills and experience.
            
In the meantime, if you have any questions or need to clarify anything in your message, please don't hesitate to reply to this email.
            
Looking forward to connecting with you!
            
Best regards,
            
kurisanimaluleke77@gmail.com`
        };
        transporter.sendMail(mailOptions,(error,info) => {
            if(error){
                console.log(error);
            }else{
                console.log("Email sent Successfully");
            }
        });
      }
      sendEmail();
    } catch (error) {
      console.error(error);
      res.status(500).json({errors:"Error Occured while saving Data"});
    }

    // console.log(data.name)
  }
);

module.exports = router;

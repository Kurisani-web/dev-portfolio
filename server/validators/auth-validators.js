const {z} = require("zod");

// creating object schema
const contactSchema = z.object({
    name:z.string({required_error:"Name is required"}).trim().min(3,{message:"Name must be atleast 3 characters"}).max(255,{message:"Name must not be more than 255 characters"}),
    company:z.string({required_error:"Company is required"}),
    email:z.string({required_error:"Email is required"}).trim().email({message:"Please Enter Valid Email Address"}),
    mobile:z.string({required_error:"Mobile Number is required"}).trim().min(10,{message:"Mobile number must be of 10 digits"}).max(10,{message:"Mobile Number can only contain 10 digits"}),
    message:z.string({required_error:"Message is required"}),
});

module.exports = contactSchema;
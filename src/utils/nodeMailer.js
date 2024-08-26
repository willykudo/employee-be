import nodeMailer from 'nodemailer'
import env from 'dotenv'
env.config()

// NODE MAILER CONFIGURATION
export const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODE_USER,
        pass: process.env.NODE_PASS
    }
})

// console.log(`user : ${process.env.NODE_USER}`)
// console.log(`pass : ${process.env.NODE_PASS}`)
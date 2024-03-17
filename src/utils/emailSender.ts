import nodemailer from 'nodemailer';
import { emailConfig } from '../../config';

const transporter = nodemailer.createTransport({
    service: 'gmail.com',
    secure: true,
    port: 587,
    auth: {
        user: emailConfig.emailUser,
        pass: emailConfig.emailUser,
    },
});

const sendEmail = (email: string, subject: string, text: string) => {
    const mailOptions = {
        from: emailConfig.emailUser,
        to: email,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw new Error(error.message);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
};

export { sendEmail };

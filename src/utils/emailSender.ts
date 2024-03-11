import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail.com',
    secure: true,
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = (email: string, subject: string, text: string) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
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

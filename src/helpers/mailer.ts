import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { Html } from "next/document";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //create a hased token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "be10680c97f65b",
        pass: "77d1d3d16479ca",
      },
    });

    const mailOptions = {
        from: 'nextjsapp@gmail.com',
        to: email,
        subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyeamil?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
        or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail? token=${hashedToken}
        </p>`
    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailOptions;

  } catch (error: any) {
    throw new Error(error.message);
  }
};

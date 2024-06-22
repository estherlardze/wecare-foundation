import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      // Ensure formData includes email field
      if (!formData.email) {
        return res.status(400).json({ error: 'Email address is required' });
      }

      const mailOptions = {
        from: process.env.SMTP_USER, // Use your SMTP user as the from address
        to: process.env.TO_EMAIL, // Use the foundation's email address
        subject: 'New Volunteer Form Submission',
        html: `
          <h2>New Volunteer Form Submission</h2>
          <p><strong>First Name:</strong> ${formData.firstName}</p>
          <p><strong>Last Name:</strong> ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Address:</strong> ${formData.address}</p>
          <p><strong>Interests:</strong> ${formData.interests}</p>
          <p><strong>Message:</strong><br>${formData.message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ error: 'Failed to process form submission' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

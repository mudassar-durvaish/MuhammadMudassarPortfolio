const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit'); 
const cron = require('node-cron'); 
const geoip = require('geoip-lite'); 
const Contact = require('./models/Contact'); 
const Visit = require('./models/Visit'); 

dotenv.config();
const app = express();

// --- Security Configurations ---

// 1. Rate Limiter: Prevent spam (3 emails per 15 minutes per IP)
const emailLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 requests per windowMs
    message: { 
        success: false, 
        message: "Too many emails sent from this IP, please try again after 15 minutes." 
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// 2. CORS Options: Defining who is allowed to talk to this backend
const corsOptions = {
    origin: [
        'http://localhost:5173',                   // Local testing
        'https://mudassardurvaish.me',             // Your main domain
        'https://www.mudassardurvaish.me',
        'https://muhammad-mudassar-portfolio.vercel.app'       // Your www domain
    ],
    methods: ['GET', 'POST'],
    credentials: true
};

// Middleware
app.use(cors(corsOptions)); // Apply Custom CORS
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// --- Email API Route ---
// Added 'emailLimiter' as a middle argument here to protect this specific route
app.post('/api/contact/send', emailLimiter, async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // 1. Save to MongoDB
        const newContact = new Contact({
            name,
            email,
            message
        });
        await newContact.save();

        // 2. Send Email
        // Transporter Configuration
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,              // Secure Port for Gmail
            secure: true,           // Use SSL/TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address (must be your authenticated email)
            to: process.env.EMAIL_USER,   // Receiver address (you)
            replyTo: email,               // The user's email so you can hit "Reply"
            subject: `Portfolio Contact: Message from ${name}`,
            text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message saved and email sent successfully!' });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: 'Server Error: Could not process request.' });
    }
});

// --- Visit Tracking Route ---
app.post('/api/visit', async (req, res) => {
    try {
        // Lookup IP location
        const geo = geoip.lookup(req.ip);
        const country = geo ? geo.country : 'Unknown';

        const newVisit = new Visit({
            ip: req.ip,
            country: country,
            userAgent: req.headers['user-agent']
        });
        await newVisit.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Visit Tracking Error:", error);
        // Don't block the frontend if this fails
        res.status(200).json({ success: false }); 
    }
});

// --- Simple Ping Route for cron-job.org ---
app.get('/api/ping', (req, res) => {
    res.status(200).send('Server is awake');
});

// --- Weekly Email Report (Cron Job) ---
// Runs every Sunday at midnight (0 0 * * 0)
cron.schedule('0 0 * * 0', async () => {
    console.log('Running weekly visit report...');
    try {
        // Calculate date 7 days ago
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        // Fetch visits in the last 7 days
        const visits = await Visit.find({
            timestamp: { $gte: sevenDaysAgo }
        });

        const visitCount = visits.length;

        // Format visit details
        let visitDetails = visits.map((v, index) => {
            return `${index + 1}. Time: ${v.timestamp} | IP: ${v.ip} | Country: ${v.country} | Device: ${v.userAgent}`;
        }).join('\n');

        if (visitDetails.length === 0) {
            visitDetails = "No visits recorded this week.";
        }

        // Transporter (Reuse existing config or create new)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Weekly Portfolio Traffic Report`,
            text: `Hello Muhammad,\n\nHere is your weekly website traffic report:\n\nTotal Visits (Last 7 Days): ${visitCount}\n\n--- Visit Details ---\n${visitDetails}\n\nKeep up the good work!\n\n- Your Portfolio Bot`
        };

        await transporter.sendMail(mailOptions);
        console.log('Weekly report sent successfully.');

    } catch (error) {
        console.error('Error sending weekly report:', error);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


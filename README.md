# Muhammad Mudassar Portfolio

This is a MERN stack portfolio website.

## Project Structure

- `client/`: React Frontend (Vite)
- `server/`: Node/Express Backend

## Setup Instructions

### 1. Backend Setup

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following content (already created):

```env
PORT=5000
MONGO_URI=mongodb+srv://<your_user>:<your_password>@cluster0.mongodb.net/portfolio
EMAIL_USER=admin@website.com
EMAIL_PASS=your_google_app_password
```

**Important:** Replace `<your_user>`, `<your_password>`, and `your_google_app_password` with your actual MongoDB credentials and Google App Password.

Start the server:

```bash
npm start
# or for development
npm run dev
```

### 2. Frontend Setup

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## Features

- **Modern UI:** "Apple-like" design with dark mode and premium feel.
- **Tech Stack:** React, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB.
- **Contact Form:** Functional contact form that sends emails using Nodemailer.
- **Responsive:** Fully responsive design for all devices.
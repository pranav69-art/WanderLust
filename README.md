# WanderLust
🏝️ Resort Listing Web Application

A full-stack web application that allows users to explore, add, and manage resort listings from around the world. Users can view resort details such as description, images, price, location, and contact information.

The application includes secure user authentication using Clerk, allowing users to sign up, log in, and manage their own resort listings.

🚀 Features

🌍 Browse resorts from different locations worldwide

➕ Add new resort listings

✏️ Edit resort details

❌ Delete resort listings

🖼️ Display resort images

📍 Resort location and contact details

🔐 Secure authentication using Clerk

👤 User signup and login system

💾 Data storage using MongoDB

📱 Responsive UI design

🛠️ Tech Stack
Frontend

HTML5

CSS3

JavaScript

EJS Templates

Bootstrap

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

Authentication

Clerk

Tools

Git

Visual Studio Code

MongoDB Atlas

📂 Project Structure
Resort-Listing-App
│
├── models
│   └── listing.js
│
├── routes
│   └── listings.js
│
├── views
│   ├── layouts
│   ├── listings
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│
├── public
│   ├── css
│   └── js
│
├── init
│   └── data.js
│
├── middleware
│   └── auth.js
│
├── app.js
├── package.json
└── README.md
🔐 Authentication with Clerk

This project integrates Clerk for user authentication.

Features

User Sign Up

User Login

Secure Sessions

User Profile Management

Protected Routes

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/resort-listing-app.git
2️⃣ Go to project folder
cd resort-listing-app
3️⃣ Install dependencies
npm install
4️⃣ Create Environment Variables

Create a .env file in the root folder.

MONGO_URL=your_mongodb_connection_string

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

You can obtain these keys from the Clerk dashboard.

5️⃣ Start the server
node app.js

or

nodemon app.js
🌐 Run the Application

Open your browser:

http://localhost:5000

Website :
https://wanderlust-dtsk.onrender.com/

📊 Example Listing Data
{
  "title": "Soneva Fushi Resort",
  "description": "Luxury eco-resort offering overwater villas.",
  "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "price": 2500,
  "location": "Maldives",
  "contact": "+960 660 0304"
}
📸 Future Improvements

⭐ User ratings and reviews

☁️ Image uploads with Cloud storage

📍 Map integration using Google Maps

🔎 Search and filter resorts

❤️ Wishlist / favorite resorts

📅 Booking system

👨‍💻 Author

Pranav Pratap

Pre-Final Year Engineering Student
Interested in Full Stack Development and AI Technologies

GitHub:
https://github.com/pranav69-art
Website : 
https://wanderlust-dtsk.onrender.com/

📜 License


This project is open source and available under the MIT License.

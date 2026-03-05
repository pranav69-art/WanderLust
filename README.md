# WanderLust
🏝️ Resort Listing Web Application

A full-stack web application that allows users to explore, add, and manage resort listings from around the world. Users can view resort details such as description, images, price, location, and contact information. This project demonstrates CRUD operations, database integration, and responsive UI development.

🚀 Features

🌍 View resort listings from different locations around the world

➕ Add new resort listings

✏️ Edit resort details

❌ Delete resort listings

🖼️ Display resort images

📍 View resort location and contact information

💾 Store data using MongoDB database

📱 Responsive user interface

🛠️ Tech Stack
Frontend

HTML5

CSS3

JavaScript

EJS (Embedded JavaScript Templates)

Bootstrap

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

Tools

Git & GitHub

VS Code

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
├── app.js
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/resort-listing-app.git
2️⃣ Navigate to project folder
cd resort-listing-app
3️⃣ Install dependencies
npm install
4️⃣ Configure environment variables

Create a .env file and add your MongoDB connection string.

MONGO_URL=your_mongodb_atlas_connection_string
5️⃣ Start the server
node app.js

or (if using nodemon)

nodemon app.js
🌐 Run the Application

Open your browser and visit:

https://wanderlust-dtsk.onrender.com/

Each resort listing contains:

Title

Description

Image URL

Price

Location

Contact Information

Example:

{
  "title": "Soneva Fushi Resort",
  "description": "Luxury eco-resort offering overwater villas.",
  "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "price": 2500,
  "location": "Maldives",
  "contact": "+960 660 0304"
}
📸 Future Improvements

⭐ User reviews and ratings

🔐 User authentication and login system

☁️ Cloud image upload (Cloudinary)

📍 Map integration (Google Maps)

🔎 Search and filter resorts

👨‍💻 Author

Pranav Pratap

Pre-final year Engineering student interested in Full Stack Development and AI Technologies.

GitHub:
https://github.com/pranav69-art

Website :
https://wanderlust-dtsk.onrender.com/

📜 License

This project is open source and available under the MIT License.

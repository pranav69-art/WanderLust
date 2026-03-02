const sampleListings = [
  {
    title: "Luxury Beach Villa",
    description: "Beautiful sea-facing villa with private pool.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 450000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Cozy wooden cabin surrounded by mountains.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 120000,
    location: "Manali",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "2BHK apartment in the heart of the city.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    price: 85000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Desert Camp Stay",
    description: "Experience luxury camping in the desert.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: 30000,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Lake View Cottage",
    description: "Peaceful cottage with stunning lake view.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    price: 95000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Snow Resort Chalet",
    description: "Premium chalet near ski slopes.",
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    price: 250000,
    location: "Gulmarg",
    country: "India"
  },
  {
    title: "Heritage Haveli",
    description: "Traditional Rajasthani haveli with royal interior.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 175000,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Forest Treehouse",
    description: "Unique treehouse stay in dense forest.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 60000,
    location: "Wayanad",
    country: "India"
  },
  {
    title: "Luxury Penthouse",
    description: "Top-floor penthouse with skyline view.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    price: 500000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Island Beach Hut",
    description: "Simple beach hut perfect for weekend getaway.",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    price: 40000,
    location: "Andaman",
    country: "India"
  },
  {
    title: "Countryside Farmhouse",
    description: "Relaxing farmhouse surrounded by greenery.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    price: 110000,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Cliffside Villa",
    description: "Villa located on cliff with breathtaking view.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 375000,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Urban Studio Flat",
    description: "Affordable studio flat for solo travelers.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 45000,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Riverside Resort",
    description: "Luxury resort by the riverside.",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b5",
    price: 290000,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Hilltop Bungalow",
    description: "Spacious bungalow located on hilltop.",
    image: "https://images.unsplash.com/photo-1499696010181-0b7b1a5e1f66",
    price: 210000,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Beachfront Paradise Resort",
    description: "Luxury resort located directly on the beach with sunset views.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: 320000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Swiss Alps Chalet",
    description: "Wooden chalet surrounded by snowy mountains.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    price: 540000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Tokyo Modern Loft",
    description: "Minimalist loft apartment in central Tokyo.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 210000,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Santorini Cliff House",
    description: "White and blue house with stunning sea view.",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e",
    price: 460000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "New York Skyline Apartment",
    description: "High-rise apartment with amazing skyline view.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    price: 390000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Dubai Luxury Villa",
    description: "Modern villa with private pool in Dubai.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 750000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Paris Romantic Studio",
    description: "Cozy studio apartment near Eiffel Tower.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 180000,
    location: "Paris",
    country: "France"
  },
  {
    title: "Bali Jungle Retreat",
    description: "Private retreat surrounded by tropical forest.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 260000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "London Classic Townhouse",
    description: "Traditional townhouse in a prime London location.",
    image: "https://images.unsplash.com/photo-1486308510493-aa64833637b3",
    price: 410000,
    location: "London",
    country: "UK"
  },
  {
    title: "Sydney Harbour View Home",
    description: "Luxury home with panoramic harbour views.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    price: 520000,
    location: "Sydney",
    country: "Australia"
  }

];

module.exports = { data : sampleListings };
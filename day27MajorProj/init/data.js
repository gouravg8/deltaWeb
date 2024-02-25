let sampleData = [
  {
    title: "Luxurious Beachfront Villa",
    description:
      "Experience luxury living in this stunning beachfront villa with breathtaking ocean views.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 25000,
    location: "Beachfront Road",
    country: "India",
  },
  {
    title: "Cozy Mountain Cabin",
    description:
      "Escape to the mountains in this cozy cabin surrounded by nature's beauty.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/7902916/pexels-photo-7902916.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 15000,
    location: "Mountain View Drive",
    country: "India",
  },
  {
    title: "Modern City Apartment",
    description:
      "Enjoy city living in this modern apartment located in the heart of the bustling city.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/12996448/pexels-photo-12996448.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 20000,
    location: "Downtown Avenue",
    country: "India",
  },
  {
    title: "Rustic Countryside Farmhouse",
    description:
      "Experience the charm of rural life in this rustic farmhouse surrounded by picturesque countryside.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/9394297/pexels-photo-9394297.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 18000,
    location: "Countryside Lane",
    country: "India",
  },
  {
    title: "Secluded Forest Retreat",
    description:
      "Find serenity in nature's embrace at this secluded forest retreat tucked away from the hustle and bustle.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/6130052/pexels-photo-6130052.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 22000,
    location: "Forest Trail",
    country: "India",
  },
  {
    title: "Charming Lakeside Cottage",
    description:
      "Relax and unwind in this charming lakeside cottage with stunning views of the tranquil lake.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/3892273/pexels-photo-3892273.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 19000,
    location: "Lakeview Road",
    country: "India",
  },
  {
    title: "Spacious Family Home",
    description:
      "Make lasting memories in this spacious family home perfect for gatherings and quality time together.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/3625115/pexels-photo-3625115.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 28000,
    location: "Family Lane",
    country: "India",
  },
  {
    title: "Seaside Bungalow Retreat",
    description:
      "Escape to this serene seaside bungalow for a peaceful retreat by the sea.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 30000,
    location: "Seaside Avenue",
    country: "India",
  },
  {
    title: "Historic Heritage Mansion",
    description:
      "Step back in time and experience the grandeur of a historic heritage mansion.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/3625108/pexels-photo-3625108.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 35000,
    location: "Heritage Lane",
    country: "India",
  },
  {
    title: "Modern Lakeside Retreat",
    description:
      "Indulge in luxury at this modern lakeside retreat offering panoramic views of the serene lake.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/3195642/pexels-photo-3195642.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 26000,
    location: "Lakeview Drive",
    country: "India",
  },
  {
    title: "Tranquil Riverside Cabin",
    description:
      "Find peace and tranquility at this riverside cabin surrounded by the soothing sounds of nature.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 17000,
    location: "Riverside Lane",
    country: "India",
  },
  {
    title: "Urban Loft Living",
    description:
      "Experience urban loft living at its finest in this stylish and contemporary loft apartment.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/3653831/pexels-photo-3653831.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 23000,
    location: "Loft Avenue",
    country: "India",
  },
  {
    title: "Serenity Hillside Retreat",
    description:
      "Escape the city and find serenity at this hillside retreat overlooking breathtaking views.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/2479655/pexels-photo-2479655.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 21000,
    location: "Hillside Drive",
    country: "India",
  },
  {
    title: "Eco-Friendly Treehouse Haven",
    description:
      "Embrace nature in this eco-friendly treehouse haven nestled among the trees.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/1797170/pexels-photo-1797170.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 27000,
    location: "Treehouse Lane",
    country: "India",
  },
  {
    title: "Luxury Desert Oasis",
    description:
      "Experience luxury living in this desert oasis retreat with lavish amenities and stunning views.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/2962202/pexels-photo-2962202.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 32000,
    location: "Desert View Drive",
    country: "India",
  },
  {
    title: "Coastal Seaside Retreat",
    description:
      "Escape to the coast and unwind at this seaside retreat offering sweeping ocean views.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/8419389/pexels-photo-8419389.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 29000,
    location: "Coastal Lane",
    country: "India",
  },
  {
    title: "Quaint Village Cottage",
    description:
      "Experience the charm of village life in this quaint cottage nestled in a peaceful village.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/10264428/pexels-photo-10264428.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 20000,
    location: "Village Road",
    country: "India",
  },
  {
    title: "Secluded Mountain Chalet",
    description:
      "Escape to the mountains and cozy up in this secluded chalet surrounded by majestic peaks.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/6177922/pexels-photo-6177922.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 25000,
    location: "Mountain Lane",
    country: "India",
  },
  {
    title: "Luxe City Penthouse",
    description:
      "Indulge in luxury at this luxe city penthouse offering stunning city skyline views.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/8307449/pexels-photo-8307449.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 38000,
    location: "Penthouse Avenue",
    country: "India",
  },
  {
    title: "Tranquil Lakeside Cabin",
    description:
      "Find peace and tranquility at this lakeside cabin retreat with serene lake views.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    price: 21000,
    location: "Lakeview Lane",
    country: "India",
  },
];

export { sampleData };

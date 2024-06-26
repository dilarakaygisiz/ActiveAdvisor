// import house images
import House3Lg from './assets/img/houses/house3lg.png';
import Field6 from './assets/img/sportsFields/6.jpg'
import Community9 from './assets/img/communities/9.webp';
import Community16 from './assets/img/communities/16.jpg';
import Community17 from './assets/img/communities/17.jpg';
import Community18 from './assets/img/communities/18.jpg';

import Field1 from './assets/img/sportsFields/football1.jpg';
import Field2 from './assets/img/sportsFields/football2.jpg';
import Field3 from './assets/img/sportsFields/football3.jpg';
import House3Logo from './assets/img/sportsFields/house3logo.png'
import Volley1 from './assets/img/sportsFields/volleyball1.jpeg';
import Tennis1 from './assets/img/sportsFields/Tennis1.webp';
import Basketball1 from './assets/img/sportsFields/Basketball1.png'

import Field1Logo from './assets/img/SportsFieldLogo/Field1Logo.jpg';
import Field2Logo from './assets/img/SportsFieldLogo/Field2Logo.jpg';
import Field3Logo from './assets/img/SportsFieldLogo/Field3Logo.jpg';
import Field6Logo from './assets/img/SportsFieldLogo/Field6Logo.jpg';
import Basketball1Logo from './assets/img/SportsFieldLogo/Basketball1Logo.jpg';
import Community9Logo from './assets/img/SportsFieldLogo/Community9Logo.jpg';
import Community16Logo from './assets/img/SportsFieldLogo/Community16Logo.jpg';
import Community17Logo from './assets/img/SportsFieldLogo/Community17Logo.jpg';
import Community18Logo from './assets/img/SportsFieldLogo/Community18Logo.jpg';
import Tennis1Logo from './assets/img/SportsFieldLogo/Tennis1Logo.jpg';
import Volley1Logo from './assets/img/SportsFieldLogo/Volley1Logo.jpeg';


export const housesData = [
  {
    id: 6,
    type: 'Sports Area',
    typetip:'Football',
    name: 'Penalty Football Field',
    description:
      "Penalty Football Field is a compact, urban soccer field with synthetic turf, designed for year-round use in a city center. The field includes high surrounding nets, LED lighting for night games, and minimal standing area seating for spectators. A small clubhouse offers basic amenities like equipment storage and restrooms. Ideal for lunchtime leagues, youth clinics, and casual games, this field adds a vibrant sports element to the local community.",
    image: Field6,
    imageLg: Field6Logo,
    country: 'Burdur',
    address: ' Near Burdur Lake, Burdur',
    bedrooms: '28',
    bathrooms: 'outdoor',
    surface: '6200 sq ft',
    year: '2016',
    price: '60',
  },
  {
    id: 12,
    type: 'Sports Area',
    typetip:'Basketball',
    name: 'Sportive Basketball Club',
    description:
      "Sportive Basketball Club is a premium basketball facility featuring a full-size court with high-performance hardwood flooring and professional hoops. It includes retractable bleachers for adjustable seating, high-intensity LED lighting, and a dedicated training area with gym equipment. The club also offers spacious locker rooms and a concession stand. Designed for both competitive matches and community engagement, it hosts various training programs and clinics to foster local basketball talent.",
    image: Basketball1,
    imageLg: Basketball1Logo,
    country: 'Antalya',
    address: 'Muratpasa, Antalya',
    bedrooms: '15',
    bathrooms: `outdoor / indoor`,
    surface: '2200 sq ft',
    year: '2014',
    price: '125',
    
  },
  
  {
    id: 16,
    type: 'Community',
    typetip:'Hiking',
    name: 'Peak Pursuit Hikers',
    description:
    "Hello! Are you passionate about hiking? Join our community where we organize beautiful hikes for you to explore and connect with fellow hiking enthusiasts. Whether you're a seasoned hiker or just beginning your outdoor adventures, our community welcomes everyone who has a passion for hiking. Sign up today and help us build a tight-knit community of nature lovers. See you on the trails!",
    image: Community16,
    imageLg: Community16Logo,
    country: 'Antalya',
    address: '',
    bedrooms: '-',
    bathrooms: '-',
    year: '2015',
    price: '0',
    events: [
      { title: 'Mountain Hike', date: '2024-07-05', description: 'Explore the mountains with our guided hike.' },
      { title: 'Trail Clean-Up', date: '2024-07-20', description: 'Join us for a community trail clean-up event.' },
    ],
    
  },
  {
    id: 17 ,
    type: 'Community',
    typetip:'Tennis',
    name: 'Ace Community',
    description: "'Ace Community'is a vibrant tennis community designed for players of all skill levels to connect, improve, and enjoy the game. Whether you're a seasoned competitor or a casual enthusiast, our community offers a supportive environment where you can engage in friendly matches, participate in tournaments, and share your passion for tennis. Join Ace Community to meet fellow tennis lovers, enhance your skills, and celebrate every ace together!",
    image: Community17 ,
    imageLg: Community17Logo ,
    country: 'Antalya',
    address: '',
    bedrooms: '-',
    bathrooms: '-',
    year: '2011',
    price: '0',
    events: [
      { title: 'Tennis Tournament', date: '2024-07-10', description: 'Compete in our summer tennis tournament.' },
      { title: 'Coaching Clinic', date: '2024-07-25', description: 'Attend a coaching clinic with a pro.' },
    ],
    
  },
  {
    id: 18,
    type: 'Community',
    typetip:'Rugby',
    name: 'Field Goal Friends',
    description: "Join our 'Field Goal Friends' community, a vibrant group for American football fans and players alike! Whether you're a seasoned athlete or a passionate supporter, our community offers a space to share insights, strategies, and the sheer thrill of the game. We organize viewing parties, discuss plays and players, and even host friendly matches. If you're looking to deepen your knowledge of football or find fellow enthusiasts to celebrate each touchdown with, Field Goal Friends is the perfect community for you. Connect with us and be a part of a community that celebrates every pass, tackle, and goal!",
    image: Community18 ,
    imageLg: Community18Logo ,
    country: 'Antalya',
    address: '',
    bedrooms: '-',
    bathrooms: '-',
    year: '2018',
    price: '0',
    events: [
      { title: 'Football Match Viewing', date: '2024-07-03', description: 'Watch the big game with fellow fans.' },
      { title: 'Training Session', date: '2024-07-17', description: 'Join our training session to improve your game.' },
    ],
    
  },
  {
    id: 1,
    type: 'Sports Area',
    typetip:'Football',
    name: 'Kale Yolu Sahasi',
    description:
      'Kale Yolu Sahasi is a community-focused football field located in a bustling neighborhood. The standard-sized pitch features a natural grass surface, crisply marked lines, and metal goals, complemented by modern LED floodlights for night games. The field includes seating for spectators, basic amenities like changing rooms and restrooms, and a small parking area. This versatile facility hosts both competitive matches and local sports events, serving as a central hub for sports enthusiasts in the area.',
    image: Field1,
    imageLg: Field1Logo,
    country: 'Antalya',
    address: 'Konyaalti, Antalya',
    bedrooms: '25',
    bathrooms: 'outdoor',
    surface: '4200 sq ft',
    year: '2016',
    price: '90',
  },
  {
    id: 2,
    type: 'Sports Area',
    typetip:'Football',
    name: 'Ruzgarlik Stadium',
    description:
      'Ruzgarlik Stadium is a versatile sports stadium known for its synthetic turf and wind-shield design that offers protection and comfort for players and spectators alike. It features professional-standard dimensions, high-capacity floodlights for night events, and seating for thousands, including VIP areas. The stadium is equipped with modern amenities like advanced locker rooms and food concessions, making it ideal for both competitive matches and community sports activities.',
    image: House3Logo,
    imageLg: House3Lg,
    country: 'Antalya',
    address: 'Lara, Antalya',
    bedrooms: '22',
    bathrooms: 'outdoor',
    surface: '4200 sq ft',
    year: '2016',
    price: '150',
   
  },
  {
    id: 3,
    type: 'Sports Area',
    typetip:'Football',
    name: 'Maraton Football Arena',
    description:
      "Maraton Football Arena is a modern football stadium with a FIFA-standard hybrid grass pitch, designed for both local and international games. It features tiered seating for tens of thousands of spectators, state-of-the-art video screens, LED lighting, and a high-quality audio system. The arena includes VIP lounges, diverse food concessions, ample parking, and is accessible by public transport. Beyond sports, it hosts concerts and cultural events, making it a central hub for community activities.",
    image: Field2,
    imageLg: Field2Logo,
    country: 'Antalya',
    address: 'Dosemealti, Antalya',
    bedrooms: '25',
    bathrooms: 'outdoor',
    surface: '4200 sq ft',
    year: '2016',
    price: '95',
   
  },
  
  {
    id: 4,
    type: 'Sports Area',
    typetip:'Football',
    name: 'Kirmizi Kart Sport Field',
    description:
      "Kirmizi Kart Sport Field is a versatile sports complex featuring a standard-sized soccer field with artificial turf and an adjacent running track. Highlighted by its distinctive red and black colors, the facility includes bleachers for spectator seating, night lighting for evening events, and a clubhouse with locker rooms and a gym. Designed to host both competitive sports and community events, it serves as a key recreational hub for the area.",
    image: Field3,
    imageLg: Field3Logo,
    country: 'Burdur',
    address: 'Bucak, Burdur',
    bedrooms: '30',
    bathrooms: 'outdoor',
    surface: '4200 sq ft',
    year: '2016',
    price: '30',
  },
  
  {
    id: 10,
    type: 'Sports Area',
    typetip:'Tennis',
    name: 'Rocket League Tennis Club',
    description:
      "Rocket League Tennis Club is a dynamic outdoor tennis complex featuring courts with high-quality, weather-resistant surfaces and automated line-calling technology. The space-themed facility offers a vibrant atmosphere with shaded spectator seating, a well-equipped clubhouse, a pro shop, and a café. Catering to both competitive and recreational players, the club provides coaching, equipment, and leagues to engage and promote tennis within the community.",
    image: Tennis1,
    imageLg: Tennis1Logo,
    country: 'Antalya',
    address: 'Konyaalti, Antalya',
    bedrooms: '4',
    bathrooms: 'outdoor',
    surface: '3200 sq ft',
    year: '2018',
    price: '170',
    
  },
  {
    id: 11,
    type: 'Sports Area',
    typetip:'Volleyball',
    name: 'MegaSpor Volleyball Club',
    description:
      "MegaSpor Volleyball Club is a state-of-the-art both indoor and outdoor volleyball facility featuring multiple courts with shock-absorbent flooring and professional net systems. The venue is equipped with energy-efficient lighting, spectator bleachers, a fitness area, locker rooms, and a lounge. Designed for both professional training and community involvement, the club hosts regular clinics, workshops, and leagues, serving as a central hub for volleyball enthusiasts.",
    image: Volley1,
    imageLg: Volley1Logo,
    country: 'Antalya',
    address: 'Lara, Antalya',
    bedrooms: '22',
    bathrooms: `outdoor / indoor`,
    surface: '2200 sq ft',
    year: '2010',
    price: '130',
    
  },
  {
    id: 9,
    type: 'Community',
    typetip:'Football',
    name: 'The Football Hub',
    description:
    "Hi! Are you a passionate football lover? Join our community where we organize friendly tournaments for you to showcase your skills and connect with fellow enthusiasts. Whether you're an experienced player or just starting out, our community welcomes everyone who shares a love for the beautiful game. Join us today and be a part of fostering a sense of camaraderie among football lovers. See you there!"
      ,
    image: Community9 ,
    imageLg: Community9Logo,
    country: 'Isparta',
    address: '',
    bedrooms: '-',
    bathrooms: '-',
    year: '2012',
    price: '0',
    events: [
      { title: 'Football Tournament', date: '2024-07-01', description: 'Join us for a day-long football tournament.' },
      { title: 'Skills Workshop', date: '2024-07-15', description: 'Improve your skills with professional coaches.' },
    ],
    
  },
 
];

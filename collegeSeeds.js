const mongoose = require('mongoose');
const College = require('./models/colleges');

const uri = "mongodb+srv://chanakya:harrypottter159@collegedashboard.hxytu.mongodb.net/collegeDashboard?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true})
    .then(() => {
        console.log('Connection established');
    })
    .catch((error) => {
        console.log('Connection error', error)
    });

const college = new College({
    name: 'Canara Engineering College',
    yearFounded: 1970, 
    city: 'Mangalore', 
    state: 'Karnataka',
    country: 'India',   
    noOfStudents: 100, 
    courses: ['Compuuter Science', 'Electronics', 'Information Science']
});

// college.save()
// .then((collegeData) => console.log(collegeData))
// .catch((error) => console.log(error));

// Used https://www.mockaroo.com/ for mock data - Chanakya 

const seedColleges = [{
    "name": "Steuber-Franecki",
    "yearFounded": 2000,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 1,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Olson, Luettgen and Nolan",
    "yearFounded": 2001,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 2,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Hills-Yost",
    "yearFounded": 1998,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 3,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Green, Parker and Braun",
    "yearFounded": 2005,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 4,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Sipes LLC",
    "yearFounded": 2009,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 5,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Cummerata-Legros",
    "yearFounded": 1993,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 6,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Torphy Group",
    "yearFounded": 1985,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 7,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Lueilwitz, Anderson and Rosenbaum",
    "yearFounded": 1996,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 8,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Schaden LLC",
    "yearFounded": 2003,
    "city": "Jaen",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 9,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Kuhn and Sons",
    "yearFounded": 2003,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 10,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Abernathy, Beer and McCullough",
    "yearFounded": 1992,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 11,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Nienow, Kuhn and Ernser",
    "yearFounded": 2007,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 12,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Wehner Group",
    "yearFounded": 1969,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 13,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Lockman, Torp and Reilly",
    "yearFounded": 1986,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 14,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Wyman, Bernier and Donnelly",
    "yearFounded": 2005,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 15,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Hansen Inc",
    "yearFounded": 1997,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 16,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Kuhn-Greenfelder",
    "yearFounded": 1996,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 17,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Schamberger and Sons",
    "yearFounded": 2010,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 18,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Erdman Group",
    "yearFounded": 2006,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 19,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Mraz-Jerde",
    "yearFounded": 2005,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 20,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Okuneva Inc",
    "yearFounded": 2008,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 21,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Powlowski-Hyatt",
    "yearFounded": 1998,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 22,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Pollich LLC",
    "yearFounded": 2005,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 23,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Bergstrom and Sons",
    "yearFounded": 1990,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 24,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Towne-Maggio",
    "yearFounded": 2008,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 25,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Willms, Ruecker and Oberbrunner",
    "yearFounded": 2011,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 26,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Krajcik-Bauch",
    "yearFounded": 2003,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 27,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Jenkins-Doyle",
    "yearFounded": 1995,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 28,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Bartell Group",
    "yearFounded": 1999,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 29,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Bosco and Sons",
    "yearFounded": 1994,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 30,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Bradtke Group",
    "yearFounded": 2001,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 31,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Volkman, Muller and Schumm",
    "yearFounded": 1993,
    "city": "Jaen",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 32,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Wunsch Inc",
    "yearFounded": 1992,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 33,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Daugherty, McClure and Paucek",
    "yearFounded": 2005,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 34,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Jacobson LLC",
    "yearFounded": 1968,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 35,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Schowalter Inc",
    "yearFounded": 2013,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 36,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Zemlak, Fay and Shields",
    "yearFounded": 2002,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 37,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Greenfelder, Jast and Shanahan",
    "yearFounded": 2012,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 38,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "DuBuque, Batz and Lesch",
    "yearFounded": 1989,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 39,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Fahey and Sons",
    "yearFounded": 1995,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 40,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Grady-Wehner",
    "yearFounded": 1994,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 41,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Christiansen, Hansen and Nader",
    "yearFounded": 1986,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 42,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Klein Group",
    "yearFounded": 2002,
    "city": "Jaen",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 43,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Anderson Inc",
    "yearFounded": 1992,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 44,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Nitzsche Inc",
    "yearFounded": 1986,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 45,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Frami-Roberts",
    "yearFounded": 1991,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 46,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Mohr and Sons",
    "yearFounded": 2002,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 47,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Hackett Group",
    "yearFounded": 2009,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 48,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Weber-Rowe",
    "yearFounded": 2005,
    "city": "Dos Hermanas",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 49,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Towne and Sons",
    "yearFounded": 1996,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 50,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Little-Barrows",
    "yearFounded": 1993,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 51,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Deckow, Smitham and Langworth",
    "yearFounded": 1991,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 52,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Fahey, Kiehn and Kulas",
    "yearFounded": 2004,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 53,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Cormier, Kling and Beier",
    "yearFounded": 2003,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 54,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Casper, Price and Buckridge",
    "yearFounded": 1994,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 55,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Corkery, Mann and Bauch",
    "yearFounded": 2000,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 56,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Fay, Wehner and Keebler",
    "yearFounded": 2004,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 57,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Boyer and Sons",
    "yearFounded": 2002,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 58,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Schuppe, Crona and Rempel",
    "yearFounded": 1990,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 59,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Larson Group",
    "yearFounded": 1995,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 60,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Stark, Stokes and Zboncak",
    "yearFounded": 2001,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 61,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Crooks, Lind and Kunze",
    "yearFounded": 2008,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 62,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Bruen-Gislason",
    "yearFounded": 2003,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 63,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Mante-Trantow",
    "yearFounded": 2004,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 64,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Windler, Goyette and Fisher",
    "yearFounded": 2005,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 65,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Von-Bergstrom",
    "yearFounded": 1993,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 66,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Marvin-Smitham",
    "yearFounded": 2002,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 67,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Hermann-Howe",
    "yearFounded": 1999,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 68,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Daniel-Predovic",
    "yearFounded": 2006,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 69,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Murphy, Crist and Murray",
    "yearFounded": 2004,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 70,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "McGlynn-Fay",
    "yearFounded": 1998,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 71,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Jaskolski, Steuber and West",
    "yearFounded": 2006,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 72,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Bashirian and Sons",
    "yearFounded": 2012,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 73,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Mertz and Sons",
    "yearFounded": 1990,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 74,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Wiegand, Schimmel and Kiehn",
    "yearFounded": 1994,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 75,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Gleichner-Mante",
    "yearFounded": 2011,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 76,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Auer, Gutmann and Kuphal",
    "yearFounded": 2001,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 77,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Cruickshank-Hermann",
    "yearFounded": 2004,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 78,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Lemke, Bernhard and Anderson",
    "yearFounded": 1997,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 79,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Abshire-Hermann",
    "yearFounded": 1995,
    "city": "Dos Hermanas",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 80,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Reichel and Sons",
    "yearFounded": 2010,
    "city": "Dos Hermanas",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 81,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Dickinson Group",
    "yearFounded": 2008,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 82,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Skiles, Weissnat and Ullrich",
    "yearFounded": 1986,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 83,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Ondricka and Sons",
    "yearFounded": 2012,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 84,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Legros-Cronin",
    "yearFounded": 1993,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 85,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Kozey-Powlowski",
    "yearFounded": 1995,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 86,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Wintheiser, Carter and Rosenbaum",
    "yearFounded": 1993,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 87,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Braun-Hahn",
    "yearFounded": 1993,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 88,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Ruecker and Sons",
    "yearFounded": 1992,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 89,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Fisher and Sons",
    "yearFounded": 1989,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 90,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Johns and Sons",
    "yearFounded": 1995,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 91,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Moore and Sons",
    "yearFounded": 2000,
    "city": "Almeria",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 92,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Kihn-Mann",
    "yearFounded": 2010,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 93,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Murazik, Sawayn and Stoltenberg",
    "yearFounded": 2001,
    "city": "Cadiz",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 94,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Medhurst, Huel and Abshire",
    "yearFounded": 1995,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 95,
    "courses": [
      "Electronics and Engineering"
    ]
  }, {
    "name": "Bogisich-Friesen",
    "yearFounded": 2012,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 96,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Bogan, Schmidt and Trantow",
    "yearFounded": 1997,
    "city": "Malaga",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 97,
    "courses": [
      "Information Science"
    ]
  }, {
    "name": "Mosciski LLC",
    "yearFounded": 1988,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 98,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Mueller, Lindgren and Marks",
    "yearFounded": 2011,
    "city": "Sevilla",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 99,
    "courses": [
      "Computer Science"
    ]
  }, {
    "name": "Dooley, Pacocha and Reynolds",
    "yearFounded": 2001,
    "city": "Granada",
    "state": "Andalucia",
    "country": "Spain",
    "noOfStudents": 100,
    "courses": [
      "Information Science"
    ]
}];

College.insertMany(seedColleges)
    .then(colleges => {
        console.log(colleges)
    })
    .catch(error => console.log(error))

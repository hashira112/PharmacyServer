# Pharmacy Backend

Backend Code of [Pharmacy Store Dashboard](https://github.com/AnujSharma141/PharmacyDashboard)

 Created with [NODE](https://nodejs.org/), [EXPRESS](https://expressjs.com/), [FIREBASE](https://firebase.google.com/).


## Development
Run the following commands in terminal to setup the project on your local machine.

```bash 
git clone https://github.com/AnujSharma141/PharmacyBackend.git
cd PharmacyBackend
npm install
npm start
```

## Setup

### Database Integration

1. Login to [FIREBASE](https://firebase.google.com/)
2. Create New Project
3. Copy Firebase Config Keys
4. Insert your Keys to `routes/sales.js`

### User Admin
1. Edit `data/user.json` for required admin data.
2. Import `data/user.json` to `/user` route in your Firebase Realtime Database.

## Database

The project uses Firebase Realtime Database which is a document model NOSQL database.
 
### Model
```javascript 
{"sales":{"-MMnEMLYrvu2zzw9nLdB" : {
    "amount" : 100,
    "date" : "23/11/2020",
    "id" : 9,
    "name" : "Raj"
  },
  "-MN42T7QEMYt5dkZT8Kn" : {
    "amount" : 2760,
    "date" : "26/11/2020",
    "id" : 10,
    "name" : "Hetav Patel"
  },
  "-MNE4pHySnctA5c21qgr" : {
    "amount" : 80,
    "date" : "28/11/2020",
    "id" : 11,
    "name" : "Nikhil"
  },
"products":[
    {
      "name": "Vicodin",
      "price": 100,
      "id":0
    },{
        "name": "Amoxil",
        "price": 40,
        "id":1
    },{
        "name": "Lipitor",
        "price": 240,
        "id":2
    }
  ],
"user":{
    "name":"Mark Johnson",
    "address": "123 abc block",
    "phone":"0123456789",
    "id":"admin",
    "password": "pass123"
},
}
```


## Technologies Used

* NODE (Runtime)
* EXPRESS (API Framework)
* FIREBASE (Database)

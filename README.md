# Pharmacy Backend

 Server and Backend code of [Pharmacy Store Dashboard](https://github.com/AnujSharma141/PharmacyDashboard). REST API built with [NODE](https://nodejs.org/) over [EXPRESS](https://expressjs.com/) and [FIREBASE](https://firebase.google.com/).


## Development
Run the following commands in terminal to setup the project on your local machine.

```bash 
git clone https://github.com/AnujSharma141/PharmacyServer.git
cd PharmacyServer
npm install
npm start
```

## Setup

### Database Integration

1. Login to [FIREBASE](https://firebase.google.com/)
2. Create New Project
3. Copy Firebase Config Keys
4. Insert your Keys to `routes/sales.js`

### Admin Config
1. Configure `data/user.json`.
2. Import `data/user.json` to `/user` in the Database.

## Database

* Type : Document Model (NOSQL)
* Service : Firebase Realtime Database
 
### Model
<img src="https://i.ibb.co/BZ1GZB7/Screenshot-2020-12-22-024346.jpg" width="480">


## Technologies Used

* NODE (Runtime)
* EXPRESS (API Framework)
* FIREBASE (Database)

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
 
### Schema 


## Technologies Used

* NODE (Runtime)
* EXPRESS (API Framework)
* FIREBASE (Database)

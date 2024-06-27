# Booklüb — A Book Review App

## Overview
Welcome to Booklüb! A book review blog built with Express on NodeJS. 

- Full-stack project incorporating EJS templating, CSS styling, and jQuery.
- Integration with Google Books API to fetch book covers and data.
- Utilizes PostgreSQL for persistent data storage.

![Screenshots of Booklüb website](/public/assets/Booklüb.png)
> Capstone project for Angela Yu's [Complete Web Dev Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp) course on Udemy.

## Prerequisites
Versions of tools used for this project:
- **NodeJS** - v20.15.0
- **NPM (Node Package Manager)** - v10.8.1
- **PostgreSQL** - v16.3

## Setup Instructions

1. **Configure PostgreSQL:** Ensure Postgres database is installed and running on your local machine.

2. **Initialize Database:** Run the `setup.sql` script to create the necessary table and dummy data.
```powershell
psql -U your_username -d your_database -f setup.sql
```

3. **Configure Environment Variables:** Set up database connection parameters in a `.env` file (refer to `.env.sample`)
```powershell
DB_USER="pgUsername"
DB_HOST="localhost"
DB_NAME="bookDB"
DB_PW="strongPassword!"
DB_PORT=5432
```

4. **Install Dependencies:** Run `npm install` to setup the required Node.js dependencies for the application

5. **Run the Application:** Use the following command to run the application.
```powershell
node --env-file=.env app.js
```

6. **Access the Application:** Head to [http://localhost:3000/](http://localhost:3000/) to access the website. 


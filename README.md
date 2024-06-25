# Booklüb - A Book Review Blog App

## Overview
Welcome to Booklüb! A book review blog built with Express on NodeJS. Full-stack project incorporating vanilla EJS templating, CSS styling, and jQuery.

The website allows users to create, read, update, and delete book reviews. It integrates with the Google Books API to fetch book information and uses PostgreSQL for data storage.

Capstone project for Angela Yu's [Complete Web Dev Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp) course on Udemy.


## Features

| Feature                      | Description                                                |
|------------------------------|------------------------------------------------------------|
| Review CRUD Operations       | Create, read, update, and delete book reviews              |
| Google Books API Integration | Fetch book cover image and data from Google Books API      |
| Postgres DB Integration      | Store and manage book review data                          |

## Prerequisites
Versions for tools used in this project are as follows:
- **Node.js**: v20.15.0
- **NPM**: v10.8.1
- **PostgreSQL**: Ensure PostgreSQL is installed and running on your local device.

## Setup Instructions

### 1. Configure PostgreSQL
Ensure PostgreSQL is installed and running on your local machine. Create a database for the application if not already done.

### 2. Initialize Database
Run the `setup.sql` script in pgAdmin or CMD to create the necessary tables and insert dummy data into your PostgreSQL database:
```powershell
psql -U your_username -d your_database -f setup.sql
```

### 3. Configure Environment Variables
Set up your database configuration in a `.env` file at the root of the project directory. Use `.env.sample` as a reference:
```powershell
DB_USER="pgUsername"
DB_HOST="localhost"
DB_NAME="bookDB"
DB_PW="strongPassword!"
DB_PORT=5432
```

### 4. Install Dependencies
Install the necessary Node.js dependencies by running:
```powershell
npm install
```

### 5. Run the Application
Start the application with the following command:
```powershell
node --env-file=.env app.js
```

### 6. Access the Application
Open your web browser and navigate to [http://localhost:3000/](http://localhost:3000/) to access the book review blog app.

## Have Fun!
Enjoy exploring and managing book reviews with your new blog application. Happy reviewing!
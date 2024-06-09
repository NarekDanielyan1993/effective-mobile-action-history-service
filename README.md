## Prerequisites

-   Node.js installed
-   PostgreSql server installed locally
-   RABBITMQ installed

## Installation

1. Clone the repository:

    git clone NarekDanielyan1993/effective-mobile-action-history-service.git

2. install dependencies


    npm install

## Database Setup

1. Make sure your local PostgreSql server is running.

2. Copy the environment variables from the env.example file located in the root directory into the .env file.

3. Set your PostgreSql database credentials in the .env file:
   DATABASE_URL=postgresql://user:password@localhost:5432/database
   Replace user, password, and database with your PostgreSql credentials.

4. Run the following commands to initialize the database schema:

    npx prisma generate
    npx prisma db push

## Starting the Application

To start the application, run the following commands:

npm run build
npm run dev

If you set the PORT environment variable, the application will be served at http://localhost:PORT; otherwise, it will be served at http://localhost:6000.

## Endpoint Documentation

Get Histories
Endpoint: /histories

Method: GET

Parameters:

      - listSize (integer, optional): The number of history records to return.
      - page (integer, optional): The page number to return.
      - filters (array of objects, optional): The filters criteria. The filters value should be in the following format:

      [
         {
            "name": "userId",
            "value": []
         }
      ]

      Example Request:

         GET /histories?listSize=10&page=1&filters=JSON.stringify([{"name":"userId","value":[1,2]}])

Prerequisites

-   Node.js installed
-   PostgreSql server installed locally
-   RABBITMQ installed

Installation

1. Clone the repository:
   git clone NarekDanielyan1993/effective-mobile-action-history-service.git

2. Install dependencies:
   npm install

Database Setup

1. Make sure your local PostgreSql server is running.

2. copy env variables of env.example file located in the root directory into the .env file

3. Set your PostgreSql database credentials in the .env file:
   DATABASE_URL=postgresql://user:password@localhost:5432/database
   Replace user, password, and database with your PostgreSql credentials.

4. Run the following commands to initialize the database schema:
   npx prisma generate
   npx prisma db push

To start the application in run following commands

npm run build
npm run dev

If you set env PORT variable the application will be served at http://localhost:PORT host otherwise at http://localhost:6000.

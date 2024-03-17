Authentication App
This application is a full-stack authentication app built using MongoDB, Express, React, and Node.js. The frontend is developed with Vite React bundler, and the backend includes models, controllers, routes, helpers, and an environment file with dependencies. The app features three pages: home, login, and register, allowing users to register with name, email, and password, and login with email and password. Upon successful login, users are greeted with a personalized message on the dashboard.
-----------------------------------------------------------------------------------------------------------------------------------------------
Getting Started
To run the application, follow these steps:

1.Clone the repository:
    git clone https://github.com/your/repository.git
2.Install dependencies:
    cd your-project-folder
    npm install
3.Start the frontend (Vite React bundler):
    npm run dev
4.Start the backend (Node.js):
    npm start
5.Open your browser and navigate to http://localhost:8000 to view the application.
-----------------------------------------------------------------------------------------------------------------------------------------------
Folder Structure
The project's folder structure is as follows:

backend/
models/: Contains MongoDB models for user authentication.
controllers/: Includes controllers for handling user requests.
routes/: Defines routes for the backend API.
helpers/: Provides helper functions for authentication and other operations.
env/: Stores environment variables.
index.js: Entry point for the Node.js server.

frontend/
src/: Contains React components and other frontend files.
public/: Includes static assets for the frontend.
App.jsx: Main React application component.
-----------------------------------------------------------------------------------------------------------------------------------------------
Usage

Home Page: Displays general information about the application.
Register Page: Allows users to register with their name, email, and password.
Login Page: Enables users to log in using their registered email and password.
Dashboard: After successful login, users are greeted with a message like "Hi, user.name."
-----------------------------------------------------------------------------------------------------------------------------------------------
Dependencies

Frontend:
Vite: Fast frontend build tool for React.
React: JavaScript library for building user interfaces.
React Router: Declarative routing for React applications.

Backend:
Express: Web application framework for Node.js.
Mongoose: MongoDB object modeling tool.
dotenv: Loads environment variables from a .env file.
bcrypt: Library for hashing passwords.
jsonwebtoken: Library for creating and verifying JSON Web Tokens (JWT).
-----------------------------------------------------------------------------------------------------------------------------------------------
Environment Variables
Create a .env file in the backend/ directory with the following variables:
MONGO_URI=your_mongodb_connection_uri
SECRET_KEY=your_secret_key_for_jwt
-----------------------------------------------------------------------------------------------------------------------------------------------
Conclusion
This authentication app provides a basic yet functional implementation of user authentication using MongoDB, Express, React, and Node.js, with JWT for authentication and bcrypt for password hashing. It can serve as a starting point for more advanced authentication features and application development. Feel free to customize and expand upon it according to your needs.
_______________________________________________________________________________________________________________________________________________





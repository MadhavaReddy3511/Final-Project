To-Do List MERN Application

Project Description
This is a simple full-stack web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage tasks, including creating new tasks, viewing existing tasks, and deleting them. Tasks are stored in a MongoDB database, and the application uses a RESTful API to communicate between the front-end and back-end.

Technologies Used
MongoDB: NoSQL database for storing tasks.
Express.js: Web framework for handling API routes and server logic.
React.js: Front-end framework for building the user interface.
Node.js: Back-end environment to run JavaScript server-side.
Axios: For making HTTP requests from React to the back-end API.

Features
Add a task: Users can create a new task.
View tasks: All tasks are listed for easy viewing.
Delete a task: Users can remove tasks once completed.

Project Setup
1. Clone the Repository
2. Backend Setup
3. Frontend Setup

API Endpoints
GET /api/todos: Retrieves all tasks from the database.
POST /api/todos: Adds a new task.
DELETE /api/todos/:id: Deletes a specific task.

Testing with Postman
You can test the API with Postman by sending requests to http://localhost:4000

GET all tasks:
URL: http://localhost:4000/api/todos
Method: GET

POST a new task:
URL: http://localhost:4000/api/todos
Method: POST

DELETE a task:
URL: http://localhost:5000/api/todos/<task-id>
Method: DELETE

Common Issues
MongoDB connection errors: Ensure MongoDB is running and the connection string in .env is correct.
CORS issues: The app uses cors middleware to allow cross-origin requests. Ensure it's applied correctly.

Future Enhancements
Add user authentication to manage individual users' tasks.
Allow editing tasks.
Add task completion status.

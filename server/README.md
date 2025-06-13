# Portfolio Backend

This is the backend server for the personal portfolio website. It provides RESTful APIs for managing education, skills, projects, and work experiences.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Education
- GET /api/education - Get all education records
- GET /api/education/:id - Get a single education record
- POST /api/education - Create a new education record
- PUT /api/education/:id - Update an education record
- DELETE /api/education/:id - Delete an education record

### Skills
- GET /api/skills - Get all skills
- GET /api/skills/:id - Get a single skill
- POST /api/skills - Create a new skill
- PUT /api/skills/:id - Update a skill
- DELETE /api/skills/:id - Delete a skill

### Projects
- GET /api/projects - Get all projects
- GET /api/projects/:id - Get a single project
- POST /api/projects - Create a new project
- PUT /api/projects/:id - Update a project
- DELETE /api/projects/:id - Delete a project

### Experience
- GET /api/experience - Get all work experiences
- GET /api/experience/:id - Get a single work experience
- POST /api/experience - Create a new work experience
- PUT /api/experience/:id - Update a work experience
- DELETE /api/experience/:id - Delete a work experience

## Frontend Integration

The frontend React application should be configured to connect to this backend server. Add the following environment variable to your React application's `.env` file:

```
REACT_APP_API_URL=http://localhost:5000
```

## Testing

Use Postman or any API testing tool to test the endpoints. The server runs on port 5000 by default. 
Todo List App - Frontend Setup Guide (Next.js)
Overview
This is the Frontend for the Todo List App, built with Next.js. It allows users to:

Add, Edit, and Delete tasks.
Toggle tasks as Completed or Not Completed.
The frontend communicates with the Express.js API backend.

Prerequisites
Node.js (v14 or later) installed.
npm or yarn for package management.
Setup Instructions
1. Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/harrisMaqsood/Next.js-app
cd Next.js-app

2. Install Dependencies
Install the necessary dependencies using npm or yarn:

npm install

With yarn:
yarn install

3. Configure Environment Variables

Ensure the backend is running at http://localhost:5000.

4. Run the Development Server
Start the development server:
npm run dev
The app will be available at http://localhost:3000.

How the App Works
Home View: Displays a list of tasks, with options to toggle completion, delete, or create tasks.
Create/Edit Task Page: A form to add or edit tasks, including title and color options.
State Management: Uses React hooks (useState, useEffect) to manage task state.

Ensure the backend API is running (npm start in the backend directory).

# BookMinder - Inventory Management Application

**BookMinder** is a full-stack application for managing a book inventory, built with a **Node.js/Express** backend and a **React/Vite** frontend. The project leverages **PostgreSQL** for database management and **Railway** for deployment, showcasing various backend and frontend development skills, as well as additional work and research to connect the two systems and optimize the project.

## Skills and Technologies

- **Backend Development:**

  - **Node.js** with **Express** for API routing and server-side logic.
  - PostgreSQL database for storing book data, with connections managed through **PGAdmin 4**.
  - Knowledge of **CRUD** operations: Create, Read, Update, Delete.
  - Database relationships and constraints for managing books, categories, and other necessary entities.

- **Frontend Development:**

  - **React** with **Vite** for rapid frontend development and hot-reloading.
  - **Axios** for making HTTP requests from the frontend to the backend.
  - **React Router DOM** for routing and handling navigation within the app.
  - Styling with **CSS** and **React Hooks** for functional components.

- **DevOps and Deployment:**

  - Deployed on **Railway**, a platform for deploying full-stack applications with integrated PostgreSQL support.
  - Configured backend and frontend to run simultaneously using **concurrently** and **nodemon** for server-side live reloading.

- **Additional Work and Learning:**
  - Set up a dual-server environment (Node.js backend and React frontend) and configured them to run together efficiently.
  - Implemented admin password protection for destructive actions (delete, update), as an extra layer of security.
  - Learned how to connect React with a Node.js backend, building a complete full-stack solution.

## Features

- **Book Inventory Management**:
  - Users can add, edit, view, and delete books in their inventory.
  - Each book has attributes such as title, author, publisher, publication year, description, and cover image.
- **Categories and Relations**:
  - Books are organized by categories, and the app supports a many-to-many relationship between books and categories.
- **CRUD Functionality**:

  - Create: Add new books to the inventory.
  - Read: View the list of books and individual book details.
  - Update: Edit book details and update the inventory.
  - Delete: Remove books from the inventory with admin password protection for destructive actions.

- **Admin Features**:
  - Admin can perform sensitive actions like deleting and editing book records after entering a secret password to confirm actions.

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- PostgreSQL running locally or hosted on a service like Railway
- PGAdmin (optional, for managing the database)

### Steps to Set Up Locally

**Clone the repository:**

git clone https://github.com/joaocorreiaprof/Inventory-Application
cd Inventory-Aplication
npm install
cd server
npm install
cd ../client
npm install
npm start

## Deployment

The application is deployed on Railway, making it accessible from anywhere without the need for local setup.

## Live

https://inventory-application-production-3863.up.railway.app/

## Future Improvements

- Mobile and tablew view .
- Implementing user authentication with JWT (JSON Web Tokens) for secure login and access control.
- Adding pagination or infinite scroll for better handling of large book inventories.
- Integrating file upload functionality for book cover images to be dynamically added from the frontend.

## Conclusion

This project showcases the practical application of various web development skills, including full-stack development, database management, and deployment. The extra effort put into connecting React with Express, deploying on Railway, and implementing password protection for admin actions highlights my commitment to going above and beyond the project requirements.

# Backend Development with ExpressJS and TypeScript

This project is a backend server developed with ExpressJS and TypeScript, providing CRUD interfaces for managing resources.

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Install dependencies:

    ```bash
    yarn install
    ```

## Configuration

1.  Create a `.env` file in the root directory.
2.  Configure the following environment variables:

    *   `PORT`: The port the server will run on (default: 3000)
    *   `DATABASE_URL`: The URL for the database connection (default: mydb.sqlite)

## Running the Application

1.  Start the server:

    ```bash
    yarn run dev
    ```

    This will start the Express app on port 3000.

## API Endpoints

The following API endpoints are available:

*   `POST /items`: Create a new item
*   `GET /items`: List all items with filters and pagination
*   `GET /items/:id`: Get a specific item by ID
*   `PUT /items/:id`: Update an item by ID
*   `DELETE /items/:id`: Delete an item by ID
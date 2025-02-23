This project contains solutions to three different problems.
Go to each problem's folder for more details.

## Problem 4: Three Ways to Sum to n

This project provides three different JavaScript implementations to calculate the sum of numbers from 1 to `n`.

- `sum_to_n_a(n)`: Uses a loop to calculate the sum. Time complexity: O(n).
- `sum_to_n_b(n)`: Uses recursion to calculate the sum. Time complexity: O(n).
- `sum_to_n_c(n)`: Uses the arithmetic progression formula to calculate the sum. Time complexity: O(1).

## Problem 5: Backend Development with ExpressJS and TypeScript

This project is a backend server developed with ExpressJS and TypeScript, providing CRUD interfaces for managing resources.

The following API endpoints are available:

- `POST /items`: Create a new item
- `GET /items`: List all items with filters and pagination
- `GET /items/:id`: Get a specific item by ID
- `PUT /items/:id`: Update an item by ID
- `DELETE /items/:id`: Delete an item by ID

## Problem 6: Live Scoreboard API Module

This module handles real-time score updates for a live scoreboard, ensuring secure and efficient synchronization of top 10 user scores. It includes authentication, validation, and mechanisms to prevent unauthorized score manipulation.

The module includes:

- **Score Update Endpoint**: Accepts user actions, validates authorization, and increments scores.
- **Live Scoreboard**: Maintains and broadcasts the top 10 scores in real-time using WebSockets/SSE.
- **Security**: Authentication via JWT, Rate limiting, and Atomic database updates.
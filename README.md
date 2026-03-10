# StockTrack Frontend
Frontend interface for **StockTrack**, an inventroy management system designed to track products, stock levels, and basic inventory data.

This application provides a clean user interface for interacting with the **StockTrack Inventory API**, allowing users to add and view products in real time.

The frontend is built with **React and Tailwind CSS** and communicates with the backend through REST API requests.

---

## Overview
The StockTrack frontend allows users to interact with the inventory system through a simple web interface.

The application connects to the **StockTrack backend API** to retrieve and create product records. 

The system demonstrates full-stack integration by combining a React user interface with a Spring Booot REST API.

---

## Features
- View a list of products from the backend API
- Add new products to the inventory
- Display product details including:
    - name
    - description
    - quantity
    - price
- Real-time UI updates after creating products
- Clean responsive layout using Tailwind CSS
- Integration with a Spring Boot REST backend

---

## Technology Used

### Language
JavaScript

### Framework
React

### Styling
Tailwind CSS

### API Communication
Fetch API

### Build Tool
Node.js/npm

---

## Architecture Overview
The frontend follows a simple component-based React structure:

```
App
 ├── ProductForm
 └── ProductList
```

- **App** manages application state and API communication
- **ProductForm** handles product creation
- **ProductList** displays inventroy data returned from the API

The application communicates with the backend using HTTP requests to the StockTrack API.

---

## Backend API Connection
This frontend connects to the **[StockTrack Backend API](https://github.com/DannonGibby/StockTrack-backend)**.

Example API endpoint used:

```
GET /api/products
POST /api/products
```

The frontend retrieves existing products on load and sends new product data to the backend when a product is created. 

---

## Setup & Run Locally
Clone the repository:
```
git clone https://github.com/DannonGibby/StockTrack-frontend.git
cd stocktrack-frontend
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm start
```
The application will run on http://localhost:3000

## Related Projects
**[StockTrack Backend](https://github.com/DannonGibby/StockTrack-backend)**

## Author
### Dannon Gibby


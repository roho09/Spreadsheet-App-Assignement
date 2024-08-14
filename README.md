 
Spreadsheet App
Description

The Spreadsheet App is a modern web application designed to provide a user-friendly spreadsheet experience. Built with Next.js, Tailwind CSS, and Zustand, this app offers features such as dynamic grid rendering, cell editing, state persistence, and more. It's optimized for managing and interacting with tabular data in a responsive and visually appealing interface.
Key Features

    Dynamic Grid Rendering: Displays a grid of 1000 cells efficiently.
    Cell Editing: Supports editing of text and numeric data in cells.
    State Persistence: Manages cell data with Zustand for smooth state management.
    Custom Styling: Applies customizable styles to cells using Tailwind CSS.
    Undo/Redo Functionality: Includes undo and redo options for cell data changes.
    Search and Filter: Provides search functionality to locate specific data.
    Pagination Controls: Manages large datasets with pagination controls.

Technologies Used

    Next.js: For server-side rendering and building scalable React applications.
    Tailwind CSS: For responsive and customizable styling.
    Zustand: For efficient state management.

Setup and Installation
Prerequisites

    Node.js (v14.x or later)
    npm or Yarn

Installation

    Clone the repository:

    bash

git clone https://github.com/your-username/spreadsheet-app.git

Navigate to the project directory:

bash

cd spreadsheet-app

Install dependencies:

bash

    npm install
    # or
    yarn install

Running the Application

    Start the development server:

    bash

npm run dev
# or
yarn dev

Open your browser and navigate to:

arduino

    http://localhost:3000

Usage
Grid Rendering

The app will display a grid of 1000 cells on the homepage. You can interact with the cells by clicking on them.
Cell Editing

Click on a cell to edit its content. You can enter text or numeric data, and the changes will be updated dynamically.
Undo/Redo

Use the undo and redo buttons located in the interface to revert or reapply changes to cell data.
Search and Filter

Use the search bar to filter the cells based on their content and quickly find specific data.
Pagination

Navigate through the grid using pagination controls if the dataset exceeds the visible area.
Project Structure

The project structure is as follows:

lua

assignment
├── .next
├── node_modules
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── spreadsheet
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── store
│   │   │   └── useStore.ts
│   │   ├── styles
│   │   │   └── globals.css
│   │   └── utils
│   ├── components
│   │   ├── cell.tsx
│   │   ├── grid.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchBar.tsx
│   │   └── UndoRedo.tsx
│   ├── store
│   │   └── useStore.ts
│   ├── styles
│   │   └── globals.css
│   └── utils
├── .eslintc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
└── postcss.config.js

Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Contact

For any questions or issues, please contact rohitkulkarni979@gmail.com

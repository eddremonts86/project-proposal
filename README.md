# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Documentation](#documentation)
- [Useful Links](#useful-links)

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```sh###
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Build the project:**

   ```sh
   npm run build
   ```

5. **Run tests:**
   ```sh
   npm test
   ```

## Project Structure

Available Scripts
In the project directory, you can run:

- npm run dev: Starts the development server.
- npm run build: Builds the project for production.
- npm test: Runs the test suite.

Expanding the ESLint Configuration

You can expand the ESLint configuration by modifying the .eslintrc.cjs file.

### Documentation

Documentation for various components and features can be found in the docs directory. Some key documentation files include:

- CheckboxProps.html
- ComboBoxInputProps.html

### Useful Links

- Vite Documentation
- React Documentation
- TypeScript Documentation
- ESLint Documentation
- Tailwind CSS Documentation

### Routes

The project includes several routes defined in src/routeTree.gen.ts:

- /documentation/
- /documentation/forms/
- /documentation/tables/

Lazy-loaded routes include:

- DocumentationFormsIndexLazyImport
- DocumentationFormsIndexLazyRoute
- DocumentationIndexRoute
- DocumentationTablesIndexLazyImport
- DocumentationTablesIndexLazyRoute

### Navigation Links

Navigation links are defined in:

- documentationLinks
- topBarLinks

### Configuration Files

- playwright.config.ts: Playwright configuration
- postcss.config.mjs: PostCSS configuration
- prettier.config.js: Prettier configuration
- tailwind.config.ts: Tailwind CSS configuration
- tsconfig.app.json: TypeScript configuration for the app
- tsconfig.json: TypeScript configuration
- tsconfig.node.json: TypeScript configuration for Node.js
- vite.config.ts: Vite configuration

This README provides a comprehensive overview of your project, including setup instructions, project structure, available scripts, and key configuration files.

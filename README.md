# L2-B2 Assignment - 2

## Overview

This is a Node.js application built with TypeScript, Express, and MongoDB using Mongoose.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rabby-khan-04/L2-B2-assignment-2.git
   ```

2. **Navigate to the project directory:**

```bash
cd L2-B2-assignment-2
```

3. **Install dependencies:**

```bash
npm install
```

4. **Create a `.env` file in the root directory and add the following configuration (replace placeholders with your values):**

```bash
PORT=3000
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.<>.mongodb.net/<collection-name>?retryWrites=true&w=majority
BCRYPT_SALT_ROUNDS=<number>
```

## Usage

### Development:

1. Run the following command to start the application in development mode:

```bash
npm run start:dev
```

### Production:

1. For production, build the TypeScript code first:

```bash
npm run build
```

2. Then start the application:

```bash
npm start
```

## Linting and Formatting

1. Run ESLint to lint the code:

```bash
npm run lint
```

2. Run ESLint with automatic fixing:

```bash
npm run lint:fix
```

3. Format code with Prettier:

```bash
npm run prettier
```

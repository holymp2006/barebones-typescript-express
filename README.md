# (Almost) Barebones TypeScript nodejs express

A very basic boilerplate for a TypeScript nodejs express server. It includes:

- Express server
- TypeScript configuration
- Environment variable management with dotenv
- Basic project structure

## Getting Started
1. Clone the repository:
   ```bash
   git clone <repository_url>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Copy the `.env.example` file to `.env` and update the values as needed:
    ```bash
    cp .env.example .env
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Test
    ```bash
    npm test
    ```
## Project Structure
```
├── __tests__
├── src
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
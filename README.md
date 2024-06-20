# Project Title

Lucia Auth - NextJS - Prisma - Supabase

## Description

This project is a robust authentication solution built with Lucia-Auth, Next.js, Prisma, and Supabase. It provides a scalable and secure way to manage user authentication in your web applications.

Next.js is used for server-side rendering and generating static websites for JavaScript applications. Prisma is an open-source database toolkit that makes it easy to reason about your data and how you access it, by providing an auto-generated and type-safe query builder. Supabase adds real-time and RESTful APIs to your existing PostgreSQL database without a single line of code, providing instant backend capabilities.

With this project, you can quickly scaffold a new application with user authentication, or integrate it into an existing application to handle user management. It's designed to be flexible and easy to customize to fit your specific needs.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have read [Lucia Auth's documentation](https://lucia-auth-docs.com).
- You have a basic understanding of JavaScript and Node.js programming.

## Installation

Provide step by step series of examples and explanations about how to get a development environment running.

```bash
# Clone the repository
git clone https://github.com/K1chel/lucia-auth-nextjs-prisma.git

# Navigate to the directory
cd project

# Install dependencies
npm install or bun add
```

## Setup

After installing the project and its dependencies, you need to set up your environment variables and database. Here's how you can do it:

1. **Environment Variables**: Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

```bash
DATABASE_URL=postgres://postgres...:[YOUR_PASSWORD].supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
DIRECT_URL=postgres://postgres...:[YOUR_PASSWORD].supabase.com:5432/postgres
```

- [Supabase documentation](https://supabase.com/docs).

## Final Thoughts

Lucia Auth with NextJS, Prisma, and Supabase is a powerful combination for building secure, scalable, and efficient web applications. This project aims to provide a solid starting point for both beginners and experienced developers who want to create a full-stack application with these technologies.

Remember, this is just a starting point. Feel free to customize and expand upon this project to suit your specific needs. Always keep learning and happy coding!

For more information on each of these technologies, you can visit their official documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Supabase Documentation](https://supabase.io/docs)
- [Lucia Auth's documentation](https://lucia-auth-docs.com).

If you have any questions, issues, or just want to contribute to the project, feel free to open an issue or pull request.

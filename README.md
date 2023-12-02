# Storedocs

Storedocs is an open-source web application for cloud document storage. It provides a user-friendly interface for uploading, storing, and managing documents online. 

## About this project

Storedocs is designed with the aim of making document storage easy and accessible for everyone. It leverages modern web technologies to provide a secure and efficient platform for managing your documents. Whether you're looking to store your personal files or share documents within a team, Storedocs offers a simple and flexible solution. 

The project is open-source, inviting developers to contribute and help improve the platform. We believe in the power of community and look forward to seeing the project grow with your contributions.

## Tech Stack

- [Typescript](https://www.typescriptlang.org/) - Language
- [Next.js](https://nextjs.org/) - Framework
- [Prisma](https://www.prisma.io/) - ORM
- [Tailwind](https://tailwindcss.com/) - CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component Library
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Vercel](https://vercel.com) - Hosting

## Local Development

### Requirements

To run Storedocs locally, you will need

- Node.js
- Postgres SQL Database

## Developer Setup

### Manual Setup

Follow these steps to setup Storedocs on your local machine:

1. [Clone the repository](https://help.github.com/articles/cloning-a-repository/) it to your local device.

```sh
git clone https://github.com/johnnjuki/storedocs
```

2. Run `npm i` in the root directory

3. Create your `.env` from the `.env.example`. You can use `cp .env.example .env`.

4. Set the following environment variables:

   - NEXTAUTH_URL
   - NEXTAUTH_SECRET
   - NEXT_PRIVATE_DATABASE_URL
   - NEXT_PRIVATE_GOOGLE_CLIENT_ID
   - NEXT_PRIVATE_GOOGLE_CLIENT_SECRET

5. Create the database schema by running `npx prisma migrate dev`

6. Run `npm run dev` in the root directory to start

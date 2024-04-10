## Personal AI

```
# Install next.js, typescript, eslint and tailwind
npx create-next-app@latest ai-companion --typescript --eslint --tailwind

# install UI libraries: ShadCN
npx shadcn-ui@latest init

# Setup authentication with Clerk
# Copy the keys into .env

# Install clerk nextjs libraries
yarn add @clerk/nextjs

# add authMiddleware.ts into src/
# Create a middleware.ts file under src/

# Submit the code to github
git remote add origin <github_repo_url>

# install button from Shadcn ui
 npx shadcn-ui@latest add button 

 # install nextjs theme
 yarn add next-themes

 # add search query
 yarn add query-string

 # Install prisma
 yarn add -D prisma
 yarn prisma init

 # Every schema changes
 npx prisma generate
 npx prisma db push

 # Install prisma client
 yarn add @prisma/client

 # Run Prisma Studio
 npx prisma studio

 # Insert seed data into database
 node scripts/seed.ts
```

## Deploy on Vercel
 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
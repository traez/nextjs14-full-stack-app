# Next.js 14 Full Stack App Project

This is a solution to the [Next.js 14 Complete Course 2024 | Next.js 14 Full Stack App Tutorial for Beginners](https://www.youtube.com/watch?v=vCOSTG10Y4o). I'm practicing and developing my coding competency by building projects after projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Next.js 14 full tutorial 2024. Next.js 14 full-stack app project using app router, server actions, MongoDB, Auth.js. Learn Next.js in 2024.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/nextjs14-full-stack-app](https://github.com/traez/nextjs14-full-stack-app)
- Live Site URL: [https://nextjs14-full-stack-app.vercel.app/](https://nextjs14-full-stack-app.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Tailwind CSS
- Typescript
- Nodejs
- Expressjs
- MongoDB
- GraphQL

### What I learned

- Prisma, Supabase, and PostgreSQL: The analogy between Supabase to PostgreSQL and Mongoose to MongoDB is quite apt.
- `npx create-next-app@latest nextjs-graphql-mongodb-app`: This command specifies the use of the latest version of the create-next-app package, as against the default version of create-next-app available in the npm registry, which will likely be outdated.
- The existence of `@apollo/client` and `@apollo/server` for server and client-side rendering. Choose either.
- Add comments inside the return body of Components using curly braces.
- That the best way to structure a working app folder for continuous smooth building GitHub commits is to leave it independently standing alone. while related material necessary for building but not for Github are put in sibling folders. With both inside a parent folder.
- Route Groups: Route groups can be created by wrapping a folder in parenthesis, e.g., (folderName). This indicates the folder is for organizational purposes and should not be included in the route's URL path. So, `/app/(auth)/forgot` would be `http://localhost:3000/forgot` and not `http://localhost:3000/auth/forgot`.
- To adopt the Lama Dev convention: Use src folder for routes (all folder and file names lowercase), while create components in the main src (camelCase component names). Routes (pages) handle data fetching and logic, while components focus on presentation.
- In jsconfig.json: `"@/*": ["./src/*"]`, this should make importing easier. Take note.
- Using `Loading, not-found, and error` default components, fo ra better app user experience.
- Use of `module.css` for individual Vanilla CSS files.
- Specifying the list of domains from which images will be loaded in Next.js by setting the domains property in next.config.js is a security feature designed to prevent potential security vulnerabilities like Cross-Site Scripting (XSS) attacks.
- SSR means we can't interact with the user. Hydration when SSR and CSR differ. Solution: (1) Use effect hook, (2) Using Dynamic Imports with next/dynamic aka lazy loading. This ensures that components are only executed on the client. (3) suppressHydrationWarning element attribute.
- `<Link href="/" prefetch={false}>Click here</Link>`: The prefetch attribute in the Link component allows you to control whether Next.js should prefetch the linked page's resources in the background. "true" means it'll do, "false" means it won't.
- That Anywhere you use hooks in Next.js needs to be a client-side component.
- Refresher on the use of import { useRouter, usePathname, useSearchParams } from "next/navigation", as well as { params, searchParams }, which are automatically available as part of the params object passed to a page component.
- When you do a fetch request, Next.js caches data by default. But adding `{ cache: "no-store" }` property means it'll refresh data anytime you navigate away and return, or refresh the page. `{ next: { revalidate: 3600 } }` will, however, revalidate data every 1 hour.  
- React Suspense: In React applications, Suspense empowers you to handle data fetching and other asynchronous operations gracefully. You can pause rendering and provide fallback UI.  
- import { unstable_noStore as noStore } from "next/cache"; used to declaratively opt-out of static rendering and indicate a particular component should not be cached.  
- `Export const metadata` varying it dynamically in different pages, not just layout for better SEO. And also using the template hack and generateMetadata function with it.  
- Server actions in Next.js: An introduction.  
- NextAuth: A re-introduction.  

### Continued development

- Only completed tutorial about 70% due to time constraints and difficulty understanding as concepts got more unfamiliar. But will keep coding everyday and increasing competency knowing this I will conquer all eventually.

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs

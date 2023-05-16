# Disney-Plus

An open source application built using NextJS 12.3.

## About this project

This project is built so as to learn the concepts of NextJS ServerSideRendering(SSR), pages dir and more(and with features like authentication). 

## Features

- TMDB API
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js**
- Styled using **Tailwind CSS**
- Written in **TypeScript**

## Upcoming Features to add

- [x] ~Search functionality~
- [x] Let users add their favorite shows/movies to watchlist
- [x] Add a Continue Watching section 
- [x] Add 'auto-next' functionality on tv-shows
- [x] Add 'Recommended Movies/Shows' according to the content you're watching on /play page

## Known Issues

A list of things not working right now:

1. Anime shows not playing as expected (Ex: Demon Slayer, One Piece)
2. ~Route doesn't always change when hitting play~
3. Mobile Navigation

## Running Locally

1. Install dependencies using pnpm:

```sh
npm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
npm run dev
```
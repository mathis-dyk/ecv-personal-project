# ECV : Personnal project - Website Generator

## Introduction

This project is an educational project for my Master 1 at ECV Digital.  
The goal was to create a personal project, order free.  
Given that I'm doing freelance, I'd like to create a website generator for the small and medium project my clients give me.  
The concept is simple :

- The same client folder for every project, containings a list of components, assets, style etc.
- The same server base for everyone
- The content of the website depends of what you put on the backend. The front is generated automatically with SEO, thanks to SSR.

## Technical Description

The front is created with NextJS, wich allows me to create reusable components. React could do the same, but givent that it's for real clients who wants visibility, I wants to have the maximum of SEO on the websites I'm generating. NextJS got an SSR option, perfect to have the SEO that React doesn't have.

The backend is Strapi. Not a realchallenge, for an educational project, but I wanted to (really) test it for a while, and it was the perfect opportunity.

## Installation

### Server

```shell
cd server
npm i
npm run develop
```

### Client

Open another terminal

```shell
cd client
npm i
```

Create a file `.env.local` in the client folder. Add it `NEXT_PUBLIC_API_PATH='http://localhost:1337'`. If you use another back adress, put it here.

```
npm run dev
```

Then, go to [localhost](http://localhost:3000/).

// TODO : Give a public well-filled API to make test website generator.

The page will be empty. You must then register on the form at `http://localhost:1337` to be the admin.  
You'll be in a dashboard. Go to "Rôles and autorisations", check `find` and `findOne` in `Page` section, and check `find` in `Route` section.

Then, go to the `Page` page. For this, click in the `Page` word, under `Collection type`, at the left top corner of your screen.

You can now add your pages, with pre-done blocks.

If one of your page is the Homepage, let the slug empty. Your other slugs musn't have "/" before the name.

### Todo : 

- Set better themes
- Add blocks
- Add autogenerated header
- Fix required or not in the back UI
- Fix UI order in the back UI

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

```shell
cd client
npm i
npm run dev
```

Add this line in 

Then, go to [localhost](http://localhost:3000/).

The page will be empty

#  Next.js, Three.js, pin dropping app

Simple three.js app to drop a pin with your choice of svg or emoji. Login using your Github account and add your pin.

<img width="1280" alt="Screen Shot 2023-05-31 at 3 31 40 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/182333b2-702f-4ad2-9639-56e31445277a">

<img width="1280" alt="Screen Shot 2023-05-31 at 3 32 30 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/c105a094-d286-4a22-97cb-595b469df2af">

<img width="1280" alt="Screen Shot 2023-05-31 at 3 35 00 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/751030b2-c84a-44ea-a8ed-43e642c82730">

<img width="1280" alt="Screen Shot 2023-05-31 at 3 33 19 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/ebd705ea-7347-4ccf-a5e7-4dee6db0fd67">

<img width="1280" alt="Screen Shot 2023-05-31 at 3 34 02 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/f7f4f76c-4fb9-4437-8f91-cb2ace085867">

## How to run the app?

- run `npm install`
- Signup and create an account for PlanetScale, Clerk, and Upstash if you don't have.
- Create .env file and add "DATABASE_URL" for PlanetScale, "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" and "CLERK_SECRET_KEY" for Clerk, "UPSTASH_REDIS_REST_URL" and "UPSTASH_REDIS_REST_TOKEN" for Upstash.
- run `npx prisma studio` to connect to Prisma db.
- run `npm run dev` for the frontend.

https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/9305dec5-b065-4b02-89ee-fda8c91ff11c

https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/fb731160-954b-4768-85f8-9ee1dc590683

## Work in progress, scaffolding

- Adding api routes to fetch data for weather, wildfire, and much more.
- Zoom disable state for better scrolling experience.
- Search modal, data table.

<img width="1280" alt="Screen Shot 2023-05-31 at 3 38 55 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/fb87376a-7852-45cd-b276-22acc74040fb">

<img width="1280" alt="Screen Shot 2023-05-31 at 3 40 25 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/45c67275-b818-4523-9583-b6600d88a506">

<img width="1280" alt="Screen Shot 2023-05-31 at 3 41 32 PM" src="https://github.com/HutaJoullach/nextjs-threejs-pin-dropping-app/assets/60039508/f1997a28-9b21-4950-b883-9c08bacc24ef">

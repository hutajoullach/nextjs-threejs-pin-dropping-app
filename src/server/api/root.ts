import { createTRPCRouter } from "~/server/api/trpc";
import { geolocationPinsRouter } from "./routers/geolocation-pins";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  geolocationPins: geolocationPinsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

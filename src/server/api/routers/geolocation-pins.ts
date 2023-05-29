import type { User } from "@clerk/nextjs/dist/api";
import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
  privateProcedure,
} from "~/server/api/trpc";

import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};

// Create a new ratelimiter, that allows 3 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});

export const geolocationPinsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const geolocationPins = await ctx.prisma.geolocationPin.findMany({
      take: 100,
      orderBy: [{ createdAt: "desc" }],
    });
    const users = (
      await clerkClient.users.getUserList({
        userId: geolocationPins.map((geolocationPin) => geolocationPin.userId),
        limit: 100,
      })
    ).map(filterUserForClient);
    console.log(users);

    return geolocationPins.map((geolocationPin) => {
      console.log(users);
      const user = users.find((user) => user.id === geolocationPin.userId);

      if (!user || !user.username)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User for geolocationPin not found",
        });

      return {
        geolocationPin,
        user: {
          ...user,
          username: user.username,
        },
      };
    });
  }),

  create: privateProcedure
    .input(
      z.object({
        lat: z.string().min(1).max(90),
        lon: z.string().min(1).max(90),
        country: z.string().min(1).max(30),
        countrycode: z.string().min(1).max(10),
        city: z.string().min(1).max(30),
        timezone: z.string().min(1).max(30),
        emoji: z.string().min(0).max(30),
        svgicon: z.string().min(0).max(30),
        icontype: z.string().min(1).max(30),
        svgiconcolor: z.string().min(0).max(50),
        message: z.string().min(0).max(255),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      const { success } = await ratelimit.limit(userId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const geolocationPin = await ctx.prisma.geolocationPin.create({
        data: {
          userId,
          lat: input.lat,
          lon: input.lon,
          country: input.country,
          countrycode: input.countrycode,
          city: input.city,
          timezone: input.timezone,
          emoji: input.emoji,
          svgicon: input.svgicon,
          icontype: input.icontype,
          svgiconcolor: input.svgiconcolor,
          message: input.message,
        },
      });

      return geolocationPin;
    }),
});

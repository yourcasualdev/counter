import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const views = await redis.incr("pageviews");
    return Response.json(views);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch view count" },
      { status: 500 }
    );
  }
}

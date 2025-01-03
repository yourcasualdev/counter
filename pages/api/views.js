import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  try {
    const views = await redis.incr("pageviews");
    return res.status(200).json(views);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch view count" });
  }
}

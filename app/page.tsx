import { headers } from "next/headers";

async function getViewCount() {
  const headersList = headers();
  const domain = headersList.get("host");

  const res = await fetch(`http://${domain}/api/views`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch view count");
  }

  return res.json();
}

export default async function Home() {
  const viewCount = await getViewCount();

  return (
    <div>
      <h1 className="title">How many times visited?</h1>
      <div className="block glow">
        <p>{viewCount}</p>
      </div>
    </div>
  );
}

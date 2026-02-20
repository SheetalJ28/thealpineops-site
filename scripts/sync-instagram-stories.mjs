import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const IG_USER_ID = process.env.IG_USER_ID;
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;
const OUTPUT_PATH = resolve(process.cwd(), "public/ig-stories.json");

if (!IG_USER_ID || !IG_ACCESS_TOKEN) {
  console.error("Missing IG_USER_ID or IG_ACCESS_TOKEN.");
  process.exit(1);
}

const endpoint = new URL(`https://graph.facebook.com/v23.0/${IG_USER_ID}/stories`);
endpoint.searchParams.set(
  "fields",
  "id,media_type,media_url,thumbnail_url,timestamp,permalink",
);
endpoint.searchParams.set("access_token", IG_ACCESS_TOKEN);

const response = await fetch(endpoint);
if (!response.ok) {
  const errorText = await response.text();
  console.error(`Instagram API request failed: ${response.status} ${errorText}`);
  process.exit(1);
}

const payload = await response.json();
const stories = Array.isArray(payload.data) ? payload.data : [];

const normalized = stories
  .filter((item) => item?.id && item?.media_type && item?.media_url && item?.timestamp)
  .map((item) => ({
    id: String(item.id),
    mediaType: item.media_type === "VIDEO" ? "VIDEO" : "IMAGE",
    mediaUrl: String(item.media_url),
    thumbnailUrl: item.thumbnail_url ? String(item.thumbnail_url) : null,
    timestamp: String(item.timestamp),
    permalink: item.permalink ? String(item.permalink) : null,
  }))
  .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

const output = {
  updatedAt: new Date().toISOString(),
  items: normalized,
};

await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Wrote ${normalized.length} stories to public/ig-stories.json`);

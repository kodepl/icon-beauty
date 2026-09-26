import { getCollection } from "astro:content";
export async function GET() {
  const posts = await getCollection("ikony");
  const origin = "https://www.iconbeauty.pl";
  const urls = ["/", "/ikony/", "/o-nas/", "/kontakt/", "/polityka-prywatnosci/", ...posts.map((p) => `/ikony/${p.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${origin}${u}</loc></url>`)
    .join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}

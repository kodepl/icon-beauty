import { getCollection } from "astro:content";

function slugify(value: string) {
  return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function GET() {
  const posts = await getCollection("ikony");
  const origin = "https://www.iconbeauty.pl";
  const categories = [...new Set(posts.map((p) => p.data.category).filter(Boolean))] as string[];
  const urls = [
    "/",
    "/ikony/",
    "/tematy/",
    "/lista-lazienki/",
    "/w-lazience/",
    "/o-nas/",
    "/kontakt/",
    "/polityka-prywatnosci/",
    ...categories.map((name) => `/tematy/${slugify(name)}/`),
    ...posts.map((p) => `/ikony/${p.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${origin}${u}</loc></url>`)
    .join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}

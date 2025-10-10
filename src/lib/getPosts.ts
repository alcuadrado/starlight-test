interface GhostPost {
  feature_image: string;
  title: string;
  excerpt: string;
  url: string;
}

export async function getPosts(): Promise<GhostPost[]> {
  const API_KEY = import.meta.env.GHOST_CMS_API_KEY;
  const CONTENT_URL = import.meta.env.GHOST_CMS_CONTENT_URL;

  if (!API_KEY || !CONTENT_URL) {
    console.warn("Ghost CMS API keys not configured, returning empty posts");
    return [];
  }

  try {
    // Ensure URL has the correct API path
    const baseUrl = CONTENT_URL.endsWith("/")
      ? CONTENT_URL.slice(0, -1)
      : CONTENT_URL;
    const endpoint = `${baseUrl}/ghost/api/content/posts?key=${API_KEY}&filter=tag:[hardhat,hardhat-ignition]`;
    console.log(
      "Fetching from Ghost CMS endpoint:",
      endpoint.replace(API_KEY, "***"),
    );

    const response = await fetch(endpoint);

    if (!response.ok) {
      console.error(
        `Ghost CMS API error: ${response.status} ${response.statusText}`,
      );
      const text = await response.text();
      console.error("Response body:", text);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Fetched ${data.posts?.length || 0} posts from Ghost CMS`);
    return data.posts?.slice(0, 3) || [];
  } catch (error) {
    console.error("Failed to fetch posts from Ghost CMS:", error);
    return [];
  }
}

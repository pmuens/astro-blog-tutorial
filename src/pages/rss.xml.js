import rss from "@astrojs/rss";

import { formatBlogPosts } from "../js/utils";

async function getPosts() {
  const postImportResult = import.meta.glob("./blog/*.{md,mdx}", {
    eager: true,
  });
  return formatBlogPosts(Object.values(postImportResult));
}

export async function GET(context) {
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "My Astro Blog",
    description: "A humble Astronaut's guide to the stars",
    site: context.site,
    items: (await getPosts()).map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      customData: `
        <author>${post.frontmatter.author}</author>
      `,
    })),
  });
}

import { join } from "path";
import { readFileSync, readdirSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

export async function getFiles(type: string) {
  return readdirSync(join(process.cwd(), "data", type));
}

export async function getFileBySlug(type: string, slug?: string) {
  const source = slug
    ? readFileSync(join(process.cwd(), "data", type, `${slug}.mdx`), "utf8")
    : readFileSync(join(process.cwd(), "data", `${type}.mdx`), "utf8");
  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ] as any;
      return options;
    },
  });

  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      slug: slug || null,
      ...frontmatter,
    },
  };
}

export async function getAllFilesFrontMatter(
  type: string
): Promise<GreyMatter> {
  const files = readdirSync(join(process.cwd(), "data", type));

  return files.reduce((allPosts: any, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}

export async function getAllPortfolioFilesData(): Promise<Portfolio> {
  const files = readdirSync(join(process.cwd(), "data", "portfolio"));
  return files.reduce((allProjects: any, projectSlug) => {
    const source = readFileSync(
      join(process.cwd(), "data", "portfolio", projectSlug),
      "utf8"
    );
    const data = JSON.parse(source);
    let slug = projectSlug.replace(".json", "");

    return [
      {
        ...data,
        slug,
        hero: `/assets/images/portfolio/${slug}/hero.png`,
      },
      ...allProjects,
    ];
  }, []);
}
export type GreyMatter =
  | {
      title: string;
      publishDate: string;
      category: string;
      summary: string;
      slug: string;
      allCategories: String[];
    }
  | {
      slug: string;
      summary: string;
      allCategories: string[];
      title: never;
      publishDate: never;
      category: never;
    };
export type Portfolio = {
  slug: string;
  featured: boolean;
  name: string;
  allCategories: string[];
  category: string;
  summary: string;
  githubUrl: string;
  previewUrl: string;
  hero: string;
};

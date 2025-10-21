import matter from 'gray-matter';

export interface MDXFrontmatter {
  title: string;
  description?: string;
  icon?: string;
}

export interface MDXContent {
  frontmatter: MDXFrontmatter;
  content: string;
}

export const parseMDX = (source: string): MDXContent => {
  const { data, content } = matter(source);
  return {
    frontmatter: data as MDXFrontmatter,
    content,
  };
};

export const extractHeadings = (content: string) => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    
    headings.push({ level, text, id });
  }

  return headings;
};

import { NextResponse } from 'next/server';
import { blogPosts } from '../../data';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return new NextResponse('Blog post not found', { status: 404 });
  }
  
  // Construct the raw Markdown for AI crawlers
  let md = `# ${post.title}\n\n`;
  md += `**Author:** ${post.author} | **Date:** ${post.date} | **Category:** ${post.category}\n\n`;
  md += `> ${post.excerpt}\n\n`;
  
  post.content.forEach(block => {
    if (block.type === 'heading' && block.text) {
      const hashes = '#'.repeat(block.level || 2);
      md += `${hashes} ${block.text}\n\n`;
    } else if (block.type === 'paragraph' && block.text) {
      md += `${block.text}\n\n`;
    } else if (block.type === 'list' && block.items) {
      block.items.forEach(item => {
        md += `- ${item}\n`;
      });
      md += '\n';
    } else if (block.type === 'quote' && block.text) {
      md += `> ${block.text}\n\n`;
    } else if (block.type === 'callout' && block.text) {
      md += `**Note:** ${block.text}\n\n`;
    }
  });

  md += `\n---\n*Original Canonical Source: [https://onlinereputationbuilders.in/blog/${post.slug}](https://onlinereputationbuilders.in/blog/${post.slug})*\n`;

  return new NextResponse(md, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Link': `<https://onlinereputationbuilders.in/blog/${post.slug}>; rel="canonical"`
    }
  });
}

import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Bytespider',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://monportfolio-dgruber.web.app/sitemap.xml',
  };
}

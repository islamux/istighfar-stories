#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

interface StoryData {
  id: string;
  category: string;
  source: string;
  date: string;
  readTime: number;
  translations: {
    ar: {
      title: string;
      content: string;
      excerpt: string;
    }
  };
}

function extractSection(body: string, sectionName: string): string {
  const patterns = [
    new RegExp(`##\\s*${sectionName}([\\s\\S]*?)(?=\\n##|\\n----|$)`, 'i'),
    new RegExp(`###\\s*${sectionName}([\\s\\S]*?)(?=\\n###|\\n----|$)`, 'i')
  ];
  
  for (const pattern of patterns) {
    const match = body.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }
  
  return '';
}

function buildContent(body: string): string {
  const mansha = extractSection(body, 'المحنة');
  const tahawol = extractSection(body, 'نقطة التحول');
  const natiga = extractSection(body, 'النتيجة');
  const ibra = extractSection(body, 'العبرة من القصة');
  
  const ibraSectionMatch = body.match(/----([\s\S]*)/);
  const remainingContent = ibraSectionMatch ? ibraSectionMatch[1] : '';
  const naseehaMatch = remainingContent.match(/\*\*نصيحة:\*\*([\s\S]*?)(?=\*\*أستغفر|$)/i) || 
                       remainingContent.match(/\*\*نصيحة:\*\*([\s\S]*)/i);
  const naseeha = naseehaMatch && naseehaMatch[1] ? naseehaMatch[1].trim() : '';
  
  const endingMatch = remainingContent.match(/\*\*أستغفر[\s\S]*$/i);
  const ending = endingMatch ? endingMatch[0].trim() : '';
  
  const parts: string[] = [];
  
  if (mansha) {
    parts.push(`## المحنة\n\n${mansha}`);
  }
  
  if (tahawol) {
    parts.push(`## نقطة التحول\n\n${tahawol}`);
  }
  
  if (natiga) {
    parts.push(`## النتيجة\n\n${natiga}`);
  }
  
  if (ibra || naseeha || ending) {
    parts.push('---');
    
    if (ibra) {
      parts.push(`## العبرة من القصة\n\n${ibra}`);
    }
    
    if (naseeha) {
      parts.push(`**نصيحة:**\n\n${naseeha}`);
    }
    
    if (ending) {
      parts.push(`${ending}`);
    }
  }
  
  return parts.join('\n\n');
}

function inferCategory(filename: string, title: string): string {
  const keywords: Record<string, string[]> = {
    repentance: ['توب', 'تائب', 'ذنب', 'خطيئة', 'استغفار', 'غفار'],
    gratitude: ['شكر', 'نعمة', 'حمد'],
    patience: ['صبر', 'محنة', 'بلاء', 'اختبار', 'ابتلاء'],
    forgiveness: ['غفران', 'عفو', 'غفور'],
    mercy: ['رحمة', 'رحمن']
  };
  
  const text = (title + ' ' + filename).toLowerCase();
  
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => text.includes(word))) {
      return category;
    }
  }
  
  return 'repentance';
}

function cleanContentForExcerpt(content: string): string {
  return content
    .replace(/---[\s\S]*?---/g, '')
    .replace(/#/g, '')
    .replace(/\*\*/g, ' ')
    .replace(/\>\s*/g, '')
    .replace(/\n\n+/g, ' ')
    .trim();
}

function extractExcerpt(content: string): string {
  const cleaned = cleanContentForExcerpt(content);
  const words = cleaned.split(/\s+/).slice(0, 50);
  let excerpt = words.join(' ');
  
  if (words.length < cleaned.split(/\s+/).length) {
    excerpt += '...';
  }
  
  return excerpt;
}

function processStoryFile(filename: string, index: number): StoryData | null {
  try {
    const filePath = join('./stories-md', filename);
    const fileContent = readFileSync(filePath, 'utf8');
    
    const parsed = matter(fileContent);
    const frontmatter = parsed.data as { title?: string };
    const body = parsed.content;
    
    if (!frontmatter.title) {
      console.log(`  ❌ No title in frontmatter: ${filename}`);
      return null;
    }
    
    const mainTitleMatch = body.match(/^#\s+(.+)$/m);
    const mainTitle = mainTitleMatch ? mainTitleMatch[1].trim() : '';
    
    const content = buildContent(body);
    const category = inferCategory(filename, frontmatter.title);
    const excerpt = extractExcerpt(content);
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    
    console.log(`  ✅ Processing: ${filename}`);
    console.log(`     Title: ${frontmatter.title}`);
    console.log(`     Main Title: ${mainTitle || '(none)'}`);
    console.log(`     Category: ${category}`);
    console.log(`     Word count: ${wordCount}`);
    console.log(`     Read time: ${readTime} min`);
    
    return {
      id: String(index + 1),
      category: category,
      source: 'التراث الإسلامي',
      date: new Date().toISOString().split('T')[0],
      readTime: readTime,
      translations: {
        ar: {
          title: frontmatter.title,
          content: content,
          excerpt: excerpt
        }
      }
    };
  } catch (error) {
    console.log(`  ❌ Error parsing ${filename}:`, (error as Error).message);
    return null;
  }
}

function processAllStories() {
  const files = readdirSync('./stories-md').filter(f => f.endsWith('.md') && f !== 'migration-plan.md');
  console.log(`Found ${files.length} markdown files...`);
  
  const stories: StoryData[] = [];
  let index = 0;
  
  for (const filename of files) {
    const story = processStoryFile(filename, index);
    
    if (story) {
      stories.push(story);
      index++;
    }
  }
  
  console.log(`\n✅ Successfully processed ${stories.length} stories`);
  
  const output = `/* Auto-generated from markdown files - ${new Date().toISOString()} */\n\nimport type { Story } from '@/types/story';\n\nexport const STORIES_AR: Story[] = ${JSON.stringify(stories, null, 2)};\n`;
  
  writeFileSync('./src/data/stories-generated.ts', output);
  console.log('✅ Output written to: src/data/stories-generated.ts');
}

processAllStories();
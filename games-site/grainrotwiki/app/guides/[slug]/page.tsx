import { notFound } from 'next/navigation';
import { getGuideBySlug, extractHeadings, getAllGuides } from '@/lib/guides';
import { generateGuideMetadata } from '@/lib/metadata';
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import GuideLayout from '@/components/GuideLayout';
import TableOfContents from '@/components/TableOfContents';
import RelatedGuides from '@/components/RelatedGuides';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';
import ReactMarkdown from '@/components/ReactMarkdown';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return generateGuideMetadata({
    ...guide.frontmatter,
    slug,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) notFound();

  const headings = extractHeadings(guide.content);
  const url = `/guides/${slug}`;

  // Build related guides from frontmatter
  const allGuides = getAllGuides();
  const relatedRaw = guide.frontmatter.related;
  const relatedSlugs: string[] = Array.isArray(relatedRaw) ? relatedRaw : [];
  const relatedGuides = relatedSlugs
    .map((rs: string) => {
      const g = allGuides.find((ag) => ag.slug === rs);
      return g ? { title: g.frontmatter.title, slug: g.slug } : null;
    })
    .filter(Boolean) as { title: string; slug: string }[];

  return (
    <>
      <JsonLd
        data={articleSchema(
          guide.frontmatter.title,
          guide.frontmatter.description,
          `https://grainrotwiki.vercel.app${url}`,
          guide.frontmatter.updated,
          guide.frontmatter.updated
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
          { name: guide.frontmatter.title, url },
        ])}
      />

      <div className="flex gap-8 max-w-6xl mx-auto">
        <GuideLayout frontmatter={guide.frontmatter}>
          <ReactMarkdown content={guide.content} />
          <RelatedGuides guides={relatedGuides} />
        </GuideLayout>
        <TableOfContents headings={headings} />
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

const badge: Record<string, string> = {
  Nutrition: "bg-[#e8f5ee] text-[#2f855a]",
  Dental: "bg-[#e6f0fe] text-[#2563eb]",
  Preventive: "bg-[#e0f7fa] text-[#0891b2]",
  Emergency: "bg-[#fde9ee] text-[#e11d6b]",
  Grooming: "bg-[#f1ecfe] text-[#7c3aed]",
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="flex-1 overflow-hidden">
      {/* Header */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f3f0ff] via-[#fef6f1] to-[#eafaf2]" />
        <div className="absolute -top-20 right-0 -z-10 h-64 w-64 rounded-full bg-[#a7f3d0]/40 blur-3xl" />
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <Link
            href="/pet-care-tips"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2f855a] hover:opacity-80"
          >
            ← Back to all tips
          </Link>
          <span
            className={`mt-6 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
              badge[post.category] ?? "bg-[#e8f5ee] text-[#2f855a]"
            }`}
          >
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
            <span>By {post.author}</span>
            <span className="text-slate-300">•</span>
            <span>{post.date}</span>
            <span className="text-slate-300">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-lg font-medium leading-relaxed text-slate-700">
          {post.intro}
        </p>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              {section.heading}
            </h2>
            {section.body.map((para, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-600">
                {para}
              </p>
            ))}
          </section>
        ))}

        {/* Vet tip callout */}
        <div className="mt-10 rounded-2xl border border-[#2f855a]/15 bg-[#f0f7f2] p-6">
          <div className="font-display font-bold text-[#276749]">
            🐾 Vet&apos;s tip
          </div>
          <p className="mt-2 leading-relaxed text-slate-700">{post.tip}</p>
        </div>

        {/* Author note */}
        <div className="mt-10 flex items-center gap-3 border-t border-slate-100 pt-6">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f0f7f2] text-lg font-bold text-[#2f855a]">
            {post.author.split(" ").slice(-1)[0].charAt(0)}
          </span>
          <div>
            <div className="font-semibold text-slate-800">{post.author}</div>
            <div className="text-sm text-slate-500">Happy Paws Veterinary Clinic</div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2f855a] to-[#276749]">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center text-white">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Questions about your pet?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-white/85">
            Book a visit with our caring team for advice tailored to your
            companion.
          </p>
          <Link
            href="/appointment"
            className="mt-5 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#276749] transition-transform hover:scale-105"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Keep reading */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-8 text-center font-display text-2xl font-bold text-slate-900">
          Keep reading
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/pet-care-tips/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    badge[p.category] ?? "bg-[#e8f5ee] text-[#2f855a]"
                  }`}
                >
                  {p.category}
                </span>
                <h3 className="mt-2 font-display font-bold leading-snug text-slate-900">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2f855a]">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import Tag from "@/components/Tag";
import HeroStreams from "@/components/HeroStreams";
import siteMetadata from "@/data/siteMetadata";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import formatDate from "@/lib/utils/formatDate";
import Newsletter from "@/components/Newsletter";
import YouTube from "@/components/YouTube";
import SocialMedia from "@/components/socialMedia";

const MAX_DISPLAY = 12;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        ogImage="https://arepa.s3.amazonaws.com/og-gndx-dev-avatar.png"
      />
      <div>
        <div className="flex flex-col items-center xl:flex-row gap-x-12">
          <div className="pt-6">
            <h1 className="flex pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Oscar Barajas Tavares
            </h1>
            <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
              Foundation Layer at @platzi - Microsoft MVP - Lead at Developer
              Circles from Facebook, I teach React & Svelte - #Twitch Partner
              #EStreamerCoders - 🇲🇽 🇨🇴
            </h2>
          </div>
          <div className="flex items-center justify-center mx-2 w-48">
            <img
              src="https://arepa.s3.amazonaws.com/oscar-barajas-tavares.png"
              alt="Oscar Barajas Tavares"
              className="w-42 rounded-full hidden md:block"
            />
            {/* <BlogNewsletterForm title="Stay updated, receive the latest post straight to your mailbox" /> */}
          </div>
        </div>
        <HeroStreams />
        <h2 className="pt-8 flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          ¿Hoy que aprenderás?
        </h2>
        <span className="flex pb-6">📰 Artículos más recientes</span>
        <hr className="border-gray-200 dark:border-gray-700" />
        <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
            <ul>
              {!posts.length && "No posts found."}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter;
                return (
                  <li key={slug} className="py-4">
                    <article className="space-y-2 xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pt-6 pb-10 xl:pt-4 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
            <Newsletter />
            <YouTube />
            <SocialMedia />
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}

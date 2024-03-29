import Link from "@components/Link";
import { PageSEO } from "@components/SEO";
import Tag from "@components/Tag";
import HeroStreams from "@components/HeroStreams";
import siteMetadata from "@data/siteMetadata";
import { getAllFilesFrontMatter } from "@lib/mdx";
import formatDate from "@lib/utils/formatDate";
import Newsletter from "@components/Newsletter";
import YouTube from "@components/YouTube";
import SocialMedia from "@components/socialMedia";
import Course from "@components/Course";

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
            <h1 className="flex pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Oscar Barajas Tavares
            </h1>
            <h2 className="text-lg prose text-gray-600 ">
              Learning Engineer at Platzi - Microsoft MVP - Lead at Developer Circles from Meta, I teach React & Svelte - #Web3 #BTC #ETH - #Twitch Partner - 🇲🇽 🇨🇴
            </h2>
          </div>
          <div className="flex items-center justify-center mx-2 w-48">
            <img
              src="https://arepa.s3.amazonaws.com/oscar-barajas-gndx.png"
              alt="Oscar Barajas Tavares"
              className="w-42 rounded-full hidden xl:block"
            />
            {/* <BlogNewsletterForm title="Stay updated, receive the latest post straight to your mailbox" /> */}
          </div>
        </div>
        <HeroStreams />
        <h2 className="pt-8 flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900  sm:text-3xl md:text-5xl">
          ¿Hoy que aprenderás?
        </h2>
        <span className="flex pb-6">📰  Artículos más recientes</span>
        <hr className="border-gray-200 " />
        <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0  xl:grid xl:grid-cols-4 xl:gap-x-6">
          <div className="divide-y divide-gray-200  xl:pb-0 xl:col-span-3 xl:row-span-2">
            <ul>
              {!posts.length && "No posts found."}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter;
                return (
                  <li key={slug} className="py-4">
                    <article className="space-y-2 xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 ">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 "
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
                        <div className="prose text-gray-500 max-w-none ">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pt-6 pb-10 xl:pt-4 xl:border-b xl:border-gray-200 ">
            <Newsletter />
            <YouTube />
            <Course />
            <SocialMedia />
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 "
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}

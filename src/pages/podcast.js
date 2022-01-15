import projectsData from '@data/projectsData'
import Card from 'src/components/Card'
import { PageSEO } from 'src/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Podcast Error 418 - Oscar Barajas Tavares`}
        description="🎙️ Hablemos de todo y también de nada, ciencia, tecnología y desarrollo web. Bienvenido a Error 418 con Oscar Barajas @gndx."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Podcast: Error 418
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            🎙️ Hablemos de todo y también de nada, ciencia, tecnología y desarrollo web. Bienvenido
            a Error 418 con Oscar Barajas Tavares @gndx.
          </p>

          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4 items-center">
            <a href="https://open.spotify.com/show/0FmtewBzfG64SOilzlnDuK" target="_blank">
              <img src="https://arepa.s3.amazonaws.com/spotify-podcast-badge-blk-grn-330x80.png" width="160" alt="Spotify" />
            </a>
            <a href="https://podcasts.apple.com/us/podcast/error-418/id1559436207?itsct=podcast_box&amp;itscg=30200"
              target="_blank">
              <img
                src="https://arepa.s3.amazonaws.com/US_UK_Apple_Podcasts_Listen_Badge_RGB.png"
                width="160" alt="Apple Podcasts" />
            </a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81MmRlMGI1MC9wb2RjYXN0L3Jzcw"
              target="_blank">
              <img
                src="https://arepa.s3.amazonaws.com/ES-419_Google_Podcasts_Badge_2x.png"
                width="160" alt="Google Podcasts" />
            </a>
            <a href="https://www.ivoox.com/podcast-error-418_sq_f11214369_1.html" target="_blank">
              <img src="https://arepa.s3.amazonaws.com/badge_white_165.png" width="160" alt="ivoox" />
            </a>
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

import { PageSEO } from 'src/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`¿Quién es Oscar Barajas Tavares?`} description={`¿Quién es Oscar Barajas Tavares? @gndx`} />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            ¿Quién es Oscar Barajas Tavares?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">@gndx</h3>
            <div className="text-gray-500 ">{occupation}</div>
            <div className="text-gray-500 ">{company}</div>
            <div className="flex pt-6 space-x-3"></div>
          </div>
          <div className="pt-8 pb-8 prose max-w-none xl:col-span-2">
            <div className="post-image">
              <video autoPlay muted loop>
                <source
                  src="https://res.cloudinary.com/gndxdev/video/upload/v1622955538/gndx-video_ytpnow.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            {children}
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/0Yozfl4RVHK9wIssP2vc2c"
              width="100%"
              height="232"
              frameBorder="0"
              title="Humans of Platzi - Oscar Barajas"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </div>
        </div>
      </div>
    </>
  )
}

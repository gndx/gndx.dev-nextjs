import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4"></div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author} @gndx</div>
          <div>{` • `}</div>
          <div> Todos los izquierdos reservados</div>
          <div>{`© ${new Date().getFullYear()}.`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">Non Terrae Plus Ultra</div>
      </div>
    </footer>
  )
}
